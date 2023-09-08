import axios from "axios";

// To handle this request correctly, we need to add the async funtion and the await
// keyword before request.
// Then we store the request in a variable
// Use term to link what is typed on searchBar
const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID <Access_Key>",
      // I uploaded this file withour the access key needed to run the HttResponse
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;

// To make sure this is working go to index.js file,
// import and call the function
