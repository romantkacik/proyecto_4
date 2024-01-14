// header.js
import './header.css'
import { AboutMeClick } from '../abautMeContent/about'
const contentAbout = AboutMeClick()

export const headerCreate = () => {
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
  index1.textContent = 'About Me' // Ajustado para que coincida con la función AboutMeClick
  const index2 = document.createElement('li')
  index2.textContent = 'Experience'
  const index3 = document.createElement('li')
  index3.textContent = 'Info'

  indexDiv.appendChild(index1)
  indexDiv.appendChild(index2)
  indexDiv.appendChild(index3)
  headerContent.appendChild(indexDiv)

  // Evento click en "About Me"
  index1.addEventListener('click', () => {
    contentAbout()
  })

  return headerContent
}
