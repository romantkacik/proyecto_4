// works.js
import './work.css'

// Definir los arrays fuera de la función
const arrayTrip = [
  './trip/trip-1.jpg',
  './trip/trip-2.jpg',
  './trip/trip-3.jpg',
  './trip/trip-4.jpg',
  './trip/trip-5.jpg',
  './trip/trip-6.jpg',
  './trip/trip-7.jpg',
  './trip/trip-8.jpg',
  './trip/trip-9.jpg',
  './trip/trip-10.jpg',
  './trip/trip-11.jpg',
  './trip/trip-12.jpg',
  './trip/trip-13.jpg',
  './trip/trip-14.jpg',
  './trip/trip-15.jpg',
  './trip/trip-16.jpg',
  './trip/trip-17.jpg',
  './trip/trip-18.jpg',
]
const arrayPola = [
  './pola/pola-1.jpg',
  './pola/pola-2.jpg',
  './pola/pola-3.jpg',
  './pola/pola-4.jpg',
  './pola/pola-5.jpg',
  './pola/pola-6.jpg',
  './pola/pola-7.jpg',
]
const arrayShoot = [
  './shoot/shoot-1.jpg',
  './shoot/shoot-2.jpg',
  './shoot/shoot-3.jpg',
  './shoot/shoot-4.jpg',
  './shoot/shoot-5.jpg',
  './shoot/shoot-6.jpg',
  './shoot/shoot-7.jpg',
  './shoot/shoot-8.jpg',
  './shoot/shoot-9.jpg',
  './shoot/shoot-10.jpg',
  './shoot/shoot-11.jpg',
  './shoot/shoot-12.jpg',
]

export const showWork = () => {
  const worksSection = document.createElement('section')
  worksSection.classList.add('works-section')

  const galleryFolders = [
    { name: 'Work', images: arrayTrip },
    { name: 'Shootings', images: arrayPola },
    { name: 'Trips', images: arrayShoot },
  ]

  for (const folder of galleryFolders) {
    const galleryContainer = document.createElement('div')
    galleryContainer.classList.add('gallery-container')

    const galleryDiv = document.createElement('div')
    galleryDiv.classList.add('gallery')

    for (let i = 0; i < folder.images.length; i++) {
      const imgElement = document.createElement('img')
      imgElement.src = folder.images[i]
      imgElement.alt = `${folder.images[i]} Image ${i + 1}`
      galleryDiv.appendChild(imgElement)
    }
    // Agregar el nombre del folder como un encabezado h1
    const folderName = document.createElement('h1')
    folderName.textContent = folder.name
    galleryContainer.appendChild(folderName)

    galleryContainer.appendChild(galleryDiv)
    worksSection.appendChild(galleryContainer)
  }

  return worksSection
}
