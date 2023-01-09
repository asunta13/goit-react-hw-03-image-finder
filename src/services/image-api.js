import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const params = {
  key: '30733025-62942a0e02283ae2db659ca4c',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
  per_page: 12,
  isImageModalOpen: false,
};

export const fetchImages = async (query, page) => {
  const response = await axios.get(`/?q=${query}&page=${page}`, { params });
  return response.data;
};
