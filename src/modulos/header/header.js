//! header.js
import './header.css'
import { bodyContainer } from '../../../main'
import { showHome } from '../home/home'
import { showAboutMe } from '../aboutMe/aboutMe'

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
  const homeLink = document.createElement('a')
  homeLink.textContent = 'Home'
  homeLink.href = '#'
  index1.appendChild(homeLink)

  const index2 = document.createElement('li')
  index2.className = 'aboutMe'
  const aboutMeLink = document.createElement('a')
  aboutMeLink.textContent = 'About me'
  aboutMeLink.href = '#'
  index2.appendChild(aboutMeLink)

  const index3 = document.createElement('li')
  index3.className = 'experience'
  const experienceLink = document.createElement('a')
  experienceLink.textContent = 'Experience'
  experienceLink.href = '#'
  index3.appendChild(experienceLink)

  const index4 = document.createElement('li')
  index4.className = 'info'
  const infoLink = document.createElement('a')
  infoLink.textContent = 'Info'
  infoLink.href = '#'
  index4.appendChild(infoLink)

  indexDiv.appendChild(index1)
  indexDiv.appendChild(index2)
  indexDiv.appendChild(index3)
  indexDiv.appendChild(index4)
  headerContent.appendChild(indexDiv)

  headerContent.appendChild(indexDiv)

  aboutMeLink.addEventListener('click', () => {
    const aboutMeContent = showAboutMe()
    bodyContainer.innerHTML = ''
    bodyContainer.appendChild(aboutMeContent)
  })
  homeLink.addEventListener('click', () => {
    const homeContent = showHome()
    bodyContainer.innerHTML = ''
    bodyContainer.appendChild(homeContent)
  })
  return headerContent
}
