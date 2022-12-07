# Workshop Expo + Typescript

## Setup

### Create Expo Application Services (EAS) account

Create an account here: https://expo.dev/signup

### Install the Expo Go app on your phone

Install here: https://expo.dev/client

## Assets

### Figma Designs

These are the designs you will be following for the workshop.

Link: https://www.figma.com/file/8CbI3l0aQ4kqYeLkyArPqH/Odisee-Full-Stack

## Local setup 

Before you can start coding make sure all your dependencies are installed with `yarn install`

Start your development server with `yarn start`

On your device with Expo GO, use the camera app to scan the QR-code generated in the console.

The build will hot-reload when you make changes. To force a reload, you can press `R` in the console.

## Work do be done

A lot of the app has been setup already, it's up to you to complete the whole flow by adding some finishing touches.

Each task has some explanation, and the code also has comments in them to make it clear where to make changes.

Any react experience can be translated over to React Native.

### Home screen

- [ ] Style the title to match the designs (`Title.styled.tsx`)
- [ ] Style the button to match the designs (`CameraButton.styled.tsx`)

### Upload picture screen

The screen component: `UploadPhotoScreen.tsx`

- [ ] Create state to handle input field value

Implement the return values `usePhotoUpload` where needed. (Use the defined types to figure out what to pass where)

- [ ] Use the `uploadPhoto` functions to upload the image and message 
- [ ] use the `uploadProgress` value and pass it to the button, to properly display the progress