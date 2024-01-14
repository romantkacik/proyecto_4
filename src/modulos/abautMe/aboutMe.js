import './aboutMe.css'

export const createAboutMeContent = () => {
  // Crea la sección
  const aboutMeSection = document.createElement('section')
  aboutMeSection.classList.add('aboutMeSection')

  // Crea la imagen
  const userImage = document.createElement('img')
  userImage.src = './about/roman.jpeg'
  userImage.classList.add('userImg')

  // Crea la descripción
  const description = document.createElement('p')
  description.textContent =
    'Mi nombre es Roman Luciano Tkacik, soy argentino nacido en la ciudad de Buenos Aires. A lo largo de mi vida me dedique a muchas cosas, pero una nunca una de esas cosas se iba a mantener a lo largo del paso del tiempo como una necesidad. Esa fue la fotografía; que al igual que una persona, muta y se transforma. Aquí quiero plasmar parte de ese recorrido, en el cual mi ojo registro parte de mi curiosidad en el mundo.'
  description.classList.add('description')

  // Agrega la imagen y la descripción a la sección
  // Agrega la imagen y la descripción a la sección
  aboutMeSection.appendChild(userImage)
  aboutMeSection.appendChild(description)

  return aboutMeSection
}
