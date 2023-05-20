import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from '../styles/Home.module.css'

// Import config file
import { PHOTOS_API } from '../config/default.json'

const Photos: React.FC = () => {
  const [photos, setPhotos] = useState([])
  const [searchQuery, setSearchQuery] = useState('batman')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchPhotos()
  }, [])

  const fetchPhotos = async () => {
    try {
      setLoading(true)

      const response = await axios.get(PHOTOS_API.URL, {
        params: {
          client_id: PHOTOS_API.ACCESS_KEY,
          query: searchQuery,
        },
      })

      setPhotos(response.data.results)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching photos:', error)
      setLoading(false)
    }
  }

  const handleSearch = () => {
    fetchPhotos()
  }

  return (
    <div className={styles.main}>
      <h1>Unsplash and Axios are amazing!</h1>
      <div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {photos.length > 0 &&
            photos.map((photo) => (
              <li key={photo.id}>
                <img
                  className={styles.cll}
                  src={photo.urls.full}
                  alt={photo.alt_description}
                />
              </li>
            ))}
        </ul>
      )}
    </div>
  )
}

export default Photos
