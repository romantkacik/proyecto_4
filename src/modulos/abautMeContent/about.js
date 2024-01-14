// about.js

import { bodyContainer } from '../../../main'

export const AboutMeClick = () => {
  // Elimina cualquier contenido existente en el bodyContainer
  bodyContainer.innerHTML = ''

  // Crea la sección
  const aboutMeSection = document.createElement('section')
  aboutMeSection.classList.add('aboutMeSection')

  // Crea la imagen
  const userImage = document.createElement('img')
  userImage.src = 'ruta_de_tu_imagen.jpg' // Reemplaza con la ruta de tu imagen
  userImage.classList.add('userImg')

  // Crea la descripción
  const description = document.createElement('p')
  description.textContent = 'Tu texto descriptivo aquí'
  description.classList.add('description')

  // Agrega la imagen y la descripción a la sección
  aboutMeSection.appendChild(userImage)
  aboutMeSection.appendChild(description)

  // Agrega la sección al bodyContainer
  bodyContainer.appendChild(aboutMeSection)
  return bodyContainer
}
