import PropTypes from "prop-types";

export default function getImages(queryApi, requestPage){
  const baseURL = "https://pixabay.com/api/";
  const API_KEY = "24451449-e9ba9ef03736e50737df0cc12";
  const URL = `${baseURL}?q=${queryApi}&page=${requestPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  return fetch(URL).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw Promise.reject(new Error(`Nothing found for ${queryApi}`));
  });
};

getImages.propTypes = {
  queryApi: PropTypes.string,
  requestPage: PropTypes.number,
};


 