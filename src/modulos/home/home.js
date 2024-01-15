// home.js
import './home.css'
import { bodyContainer } from '../../../main'

export const showHome = () => {
  const photos = [
    './homeGallery/home-1.jpg',
    './homeGallery/home-2.jpg',
    './homeGallery/home-3.jpg',
    './homeGallery/home-4.jpg',
    './homeGallery/home-5.jpg',
    './homeGallery/home-6.jpg',
    './homeGallery/home-7.jpg',
    './homeGallery/home-8.jpg',
  ]

  let currentPhotoIndex = 0

  const photoContainer = document.createElement('div')
  photoContainer.classList.add('photo-container')
  bodyContainer.appendChild(photoContainer)

  const imgElement = document.createElement('img')
  photoContainer.appendChild(imgElement)

  const showNextPhoto = () => {
    const currentPhoto = photos[currentPhotoIndex]
    imgElement.src = currentPhoto
    imgElement.classList.add('fade-in')

    // Incrementa el índice de la foto actual
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length

    // Establece un temporizador para mostrar la siguiente foto después de 3 segundos
    setTimeout(() => {
      imgElement.classList.remove('fade-in')
      showNextPhoto()
    }, 5000)
  }

  // Inicia la transición de fotos
  showNextPhoto()
}
