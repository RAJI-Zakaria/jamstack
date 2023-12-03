import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Radio, Image } from '@nextui-org/react';
import ENV from '../config/default.json';
import LoadingScreen from '../components/loading/LoadingScreen';

const { PHOTOS_API } = ENV;

const Photos: React.FC = () => {
  const [photos, setPhotos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('batman');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [q, setQ] = useState('thumb');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    fetchPhotos();
  }, [page, searchQuery, q]);

  const fetchPhotos = async () => {
    try {
      setLoading(true);
      const response = await axios.get(PHOTOS_API.URL, {
        params: {
          client_id: PHOTOS_API.ACCESS_KEY,
          query: searchQuery,
          page,
        },
      });

      if (page === 1) {
        setPhotos(response.data.results);
      } else {
        setPhotos((prevPhotos) => [...prevPhotos, ...response.data.results]);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching photos:', error);
      setLoading(false);
    }
  };

  const handleSearch = () => {
    setPage(1);
    fetchPhotos();
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleImageClick = (photo: any) => {
    window.open(photo.urls[q], '_blank');
    setSelectedPhoto(photo);
  };

  const options = [
    { id: '1', title: 'raw' },
    { id: '2', title: 'full' },
    { id: '3', title: 'regular' },
    { id: '4', title: 'small' },
    { id: '5', title: 'thumb' },
  ];

  const renderOption = () => {
    return (
      <Radio.Group value={q} onChange={setQ} aria-label="Options">
        <div className="flex justify-center">
          {options.map((option, index) => (
            <Radio className='m-5' key={index} labelColor="success" value={option.title}>
              {option.title}
            </Radio>
          ))}
        </div>
      </Radio.Group>
    );
  };

  return (
    <div className="flex justify-center items-center">
      <div className="p-4 w-100 flex flex-col justify-center items-center">
        <h1 className="text-4xl mb-4 text-center">Unsplash and Axios are amazing!</h1>
        <div className="max-w-xl w-full m-auto justify-center  mb-4">
          <input
            className="p-2 mb-2 border border-gray-300 rounded w-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
            onClick={handleSearch}
          >
            Search
          </button>
          {renderOption()}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {photos &&
            photos.map((photo: any) => (
              <div key={photo.id} className="w-1/6">
                <Image
                  width={300}
                  height={200}
                  className="w-full h-auto rounded"
                  src={photo.urls[q]}
                  alt={photo.alt_description}
                  onClick={() => handleImageClick(photo)}
                  objectFit="cover"
                />
              </div>
            ))}
        </div>

        {selectedPhoto && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-10">
            <div className="max-w-2xl max-h-2xl overflow-auto" onClick={() => setSelectedPhoto(null)}>
              <Image
                className="w-full h-auto"
                src={selectedPhoto.urls.full}
                alt={selectedPhoto.alt_description}
              />
            </div>
          </div>
        )}

        {photos && photos.length > 0 && !loading && (
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600 w-80 mx-auto"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        )}

        {loading && <LoadingScreen />}
      </div>
    </div>
  );
};

export default Photos;
