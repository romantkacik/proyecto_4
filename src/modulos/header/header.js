//! header.js
import './header.css'
import { bodyContainer } from '../../../main'

export const headerCreate = () => {
  bodyContainer.innerHTML = ''
  const headerContent = document.createElement('nav')
  headerContent.className = 'headerContent'
  const userDiv = document.createElement('div')
  userDiv.className = 'userDiv'
  const userName = document.createElement('p')
  userName.textContent = 'Román Tkacik'
  const userPhotography = document.createElement('p')
  userPhotography.textContent = 'Photography'

  userDiv.appendChild(userName)
  userDiv.appendChild(userPhotography)
  headerContent.appendChild(userDiv)

  const indexDiv = document.createElement('ul')

  indexDiv.className = 'indexDiv'

  const index1 = document.createElement('li')
  index1.className = 'home'
  index1.textContent = 'Home'
  const homelink = document.createElement('a')

  const index2 = document.createElement('li')
  index2.className = 'aboutMe'
  index2.textContent = 'About me'
  const aboutMeLink = document.createElement('a')
  aboutMeLink.href = 'link.url'

  const index3 = document.createElement('li')
  index3.className = 'experience'
  index3.textContent = 'Experience'
  const experienceLink = document.createElement('a')
  experienceLink.href = 'link.url'

  const index4 = document.createElement('li')
  index4.className = 'info'
  index4.textContent = 'Info'
  const infoLink = document.createElement('a')
  infoLink.href = 'link.url'

  indexDiv.appendChild(index1)
  indexDiv.appendChild(index2)
  indexDiv.appendChild(index3)
  indexDiv.appendChild(index4)
  headerContent.appendChild(indexDiv)

  index1.addEventListener('click', () => showContent('home'))
  index2.addEventListener('click', () => showContent('aboutMe'))
  index3.addEventListener('click', () => showContent('experience'))
  index4.addEventListener('click', () => showContent('info'))

  headerContent.appendChild(indexDiv)

  return headerContent
}
// Función para mostrar el contenido correspondiente a cada pestaña con transición
const showContent = (tab) => {
  const currentContent = bodyContainer.firstChild // Elemento actual en el cuerpo
  const nextContent = getContentForTab(tab) // Obtener el contenido para la nueva pestaña

  // Aplicar transición de desvanecimiento
  fadeTransition(currentContent, () => {
    // Luego de la transición, cambiar el contenido y quitar la clase de desvanecimiento
    bodyContainer.innerHTML = '' // Vaciar el contenido actual
    bodyContainer.appendChild(nextContent) // Agregar nuevo contenido
    nextContent.classList.remove('fade-out')
  })
}

// Función para obtener el contenido correspondiente a cada pestaña
const getContentForTab = (tab) => {
  // Lógica para obtener el contenido según la pestaña seleccionada
  switch (tab) {
    case 'home':
      return document.createElement('p') // Contenido de ejemplo para la pestaña Home
    case 'aboutMe':
      return createAboutMeContent()
    case 'experience':
      return document.createElement('p') // Contenido de ejemplo para la pestaña Experience
    case 'info':
      return document.createElement('p') // Contenido de ejemplo para la pestaña Info
    default:
      return document.createElement('p') // Contenido de ejemplo por defecto
  }
}
