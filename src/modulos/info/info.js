// info.js

import './info.css'

export const showInfo = () => {
  const socialLinksContainer = document.createElement('div')
  socialLinksContainer.classList.add('social-links')

  const socialMediaData = [
    { name: 'Instagram', url: 'https://www.instagram.com/', src: './info/instagram.png' },
    { name: 'Facebook', url: 'https://www.facebook.com/', src: './info/facebook.png' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/', src: './info/linkedin.png' },
    { name: 'GitHub', url: 'https://github.com/', src: './info/github.png' },
  ]

  socialMediaData.forEach((socialMedia) => {
    const socialLink = document.createElement('a')
    socialLink.href = socialMedia.url
    socialLink.target = '_blank'

    const socialIcon = document.createElement('img')
    socialIcon.src = socialMedia.src // Corrige el nombre de la propiedad 'icon' a 'src'
    socialIcon.alt = `${socialMedia.name} Icon`

    socialLink.appendChild(socialIcon)
    socialLinksContainer.appendChild(socialLink)
  })

  return socialLinksContainer
}
