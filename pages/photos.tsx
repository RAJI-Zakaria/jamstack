import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from '../styles/Home.module.css'
import { Radio } from '@nextui-org/react'

// Import config file
import { PHOTOS_API } from '../config/default.json'

//importing loading screen

import LoadingScreen from '../components/loading/LoadingScreen'

const Photos: React.FC = () => {
  const [photos, setPhotos] = useState([])
  const [searchQuery, setSearchQuery] = useState('batman')
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [q, setQ] = useState('thumb')

  useEffect(() => {
    fetchPhotos()
  }, [])
  useEffect(() => {
    fetchPhotos()
  }, [page])

  const fetchPhotos = async () => {
    try {
      setLoading(true)

      const response = await axios.get(PHOTOS_API.URL, {
        params: {
          client_id: PHOTOS_API.ACCESS_KEY,
          query: searchQuery,
          page: page,
        },
      })

      if (page === 1) {
        setPhotos(response.data.results)
      } else {
        setPhotos((prevPhotos) => [...prevPhotos, ...response.data.results])
      }
      setLoading(false)
    } catch (error) {
      console.error('Error fetching photos:', error)
      setLoading(false)
    }
  }

  const handleSearch = () => {
    setPage(1)
    fetchPhotos()
  }

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  const options = [
    { id: '1', title: 'raw' },
    { id: '2', title: 'full' },
    { id: '3', title: 'regular' },
    { id: '4', title: 'small' },
    { id: '5', title: 'thumb' },
  ]
  const renderOption = () => {
    return (
      <Radio.Group value={q} onChange={setQ} aria-label="Options">
        {options.map((option, index) => (
          <Radio labelColor="success" key={index} value={option.title}>
            {option.title}
          </Radio>
        ))}
      </Radio.Group>
    )
  }

  return (
    <div className={styles.main}>
      <h1>Unsplash and Axios are amazing!</h1>
      <div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
        />

        <Radio.Group label="Options" defaultValue="A">
          {renderOption()}
        </Radio.Group>

        <button onClick={handleSearch}>Search</button>
      </div>

      <ul>
        {photos.map((photo, index) => (
          <li key={photo.id}>
            <img
              className={styles.cll}
              src={photo.urls[q]}
              alt={photo.alt_description}
            />
          </li>
        ))}
      </ul>

      {photos.length > 0 && !loading && (
        <button onClick={handleLoadMore}>Load More</button>
      )}

      {loading && <LoadingScreen />}
    </div>
  )
}

export default Photos
