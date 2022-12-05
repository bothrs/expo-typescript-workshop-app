import axios from 'axios'
import { Buffer } from 'buffer'
import * as FileSystem from 'expo-file-system'
import { useState } from 'react'

export const usePhotoUpload = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)

  const uploadPhoto = async (imageUri: string, message: string) => {
    setIsLoading(true)

    const imageBase64 = await FileSystem.readAsStringAsync(imageUri, {
      encoding: FileSystem.EncodingType.Base64,
    })

    const imageBuffer = Buffer.from(imageBase64, 'base64')

    try {
      await axios.post(
        'url',
        { image: imageBuffer, message },
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          onUploadProgress: (progressEvent) => {
            const progress =
              (progressEvent.loaded / (progressEvent.total || 0.01)) * 100
            setUploadProgress(progress <= 100 && progress >= 0 ? progress : 0)
          },
        }
      )
    } catch {
      console.log('Upload failed')
    }

    setIsLoading(false)
  }

  return { uploadPhoto, isLoading, uploadProgress }
}
