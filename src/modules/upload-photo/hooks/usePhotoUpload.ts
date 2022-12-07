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

    const firsCharacterOfBase64 = imageBase64.charAt(0)

    const fileType = firsCharacterOfBase64 === 'i' ? 'image/png' : 'image/jpg'

    const compressedImage = await manipulateAsync(imageUri, [], {
      compress: 0.8,
      format: SaveFormat.JPEG,
    })

    const formData = new FormData()
    formData.append('message', message)
    formData.append('image', {
      name: 'image.jpg',
      type: fileType,
      uri: compressedImage.uri,
    } as unknown as Blob)

    try {
      await axios({
        method: 'post',
        url: 'https://odisee-workshop-server.vercel.app/api/upload',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          const progress =
            (progressEvent.loaded / (progressEvent.total || 0.01)) * 100
          setUploadProgress(progress <= 100 && progress >= 0 ? progress : 0)
        },
      })
    } catch (error) {
      console.log((error as AxiosError).message)
      console.log('Upload failed')
    }

    setIsLoading(false)
  }

  return { uploadPhoto, isLoading, uploadProgress }
}
