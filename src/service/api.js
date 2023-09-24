import axios from 'axios';

export const getMainList = async id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=f47740ae2875f781102cfee99d21c1c4`
  );
  return data;
};

export const getByQuary = async quary => {
  if (!quary) return;
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${quary}&api_key=f47740ae2875f781102cfee99d21c1c4`
  );
  return data.results;
};

export const getCast = async id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=f47740ae2875f781102cfee99d21c1c4`
  );

  return data.cast;
};

export const getReviews = async id => {
  const {
    data: { results },
  } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=f47740ae2875f781102cfee99d21c1c4`
  );
  return results;
};
