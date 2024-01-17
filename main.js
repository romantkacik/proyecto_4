//main.js

import './style.css'
import { headerCreate } from './src/modulos/header/header'
import { showHome } from './src/modulos/home/home'
import { showAboutMe } from './src/modulos/abautMe/aboutMe'
import { showWork } from './src/modulos/work/work'

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

document.addEventListener('DOMContentLoaded', () => {
  // Tu código actual
  const homeLink = document.querySelector('.homeLink')
  homeLink.addEventListener('click', () => {
    const homeContent = showHome()
    bodyContainer.innerHTML = ''
    bodyContainer.appendChild(homeContent)
  })
  const aboutMeLink = document.querySelector('.aboutMeLink')
  aboutMeLink.addEventListener('click', () => {
    const homeContent = showAboutMe()
    bodyContainer.innerHTML = ''
    bodyContainer.appendChild(homeContent)
  })
  const workLink = document.querySelector('.workLink')
  workLink.addEventListener('click', () => {
    const workContent = showWork()
    bodyContainer.innerHTML = ''
    bodyContainer.appendChild(workContent)
  })
})

const footertext = document.createElement('p')
footertext.className = 'footerText'
footertext.textContent = '©️ Created by Román Tkacik'
footerContainer.appendChild(footertext)

// Llama a showHome al cargar la página
showHome()
