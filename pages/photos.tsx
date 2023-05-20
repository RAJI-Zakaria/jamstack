import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from '../styles/Home.module.css'

//import config file
const { PHOTOS_API } = require('../config/default.json')

const Photos: React.FC = () => {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    const fetchPhotos = async () => {
      console.warn('PHOTOS_API:', PHOTOS_API)
      try {
        //photos?query=batman
        const response = await axios.get(PHOTOS_API.URL, {
          params: {
            client_id: PHOTOS_API.ACCESS_KEY,
            query: 'batman',
          },
        })

        setPhotos(response.data.results)
      } catch (error) {
        console.error('Error fetching photos:', error)
      }
    }

    fetchPhotos()
  }, [])

  useEffect(() => {
    console.log('photos:', photos)
  }, [photos])

  return (
    <div className={styles.main}>
      <h1>Unsplash and Axios are amazing!</h1>
      <ul>
        {photos.map((photo) => (
          <li key={photo.id}>
            {/* add style 100% width  to img */}

            <img
              className={styles.cll}
              src={photo.urls.full}
              alt={photo.alt_description}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Photos
