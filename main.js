import './style.css'
import { headerCreate } from './src/modulos/header/header'
import { createAboutMeContent } from './src/modulos/abautMe/aboutMe'

const appHtml = document.querySelector('#app')

// Crear contenedores
export const headerContainer = document.createElement('header')
headerContainer.classList.add('header')

export const bodyContainer = document.createElement('section')
bodyContainer.classList.add('body')

export const footerContainer = document.createElement('footer')
footerContainer.classList.add('footer')

// Añadir contenedores al DOM en el orden deseado
appHtml.appendChild(headerContainer)
appHtml.appendChild(bodyContainer)
appHtml.appendChild(footerContainer)

const headerContent = headerCreate()
headerContainer.appendChild(headerContent)

const footertext = document.createElement('p')
footertext.className = 'footerText'
footertext.textContent = '©️ Created by Román Tkacik'
footerContainer.appendChild(footertext)
