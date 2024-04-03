// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const [data, setData] = useState([])
//   const [videoLink, setVideoLink] = useState("")

//   useEffect(() => {
//     fetch("/video").then( response => {
//       if(response.ok){
//         return response.json()
//       }
//     }).then(
//       data => {
//         setData(data)
//         console.log(data)
//       }
//     )
//   }, [])

//   const handleSearch = (e) => {
//     // e.preventDefault()
//     fetch(
//       "/video/getVideo", {
//         method: "POST",
//         body: JSON.stringify({
//           videoLink: "Hi From Nour"
//         }),
//         headers: {
//           "Content-type": "application/json; charset=UTF-8"
//         }
//       })
//   }
//   return (
//     <div>
//       {(typeof data.name === 'undefined') ? (<h1>Loading...</h1>) : (
//         <h1>{data.name}</h1>)
//       }
//       <button onClick={handleSearch}>Search</button>
//     </div>

//   )
// }

// export default App

import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [videoLink, setVideoLink] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await axios.post('/vos', { text: videoLink });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={videoLink}
        onChange={(event) => setVideoLink(event.target.value)}
        style={{color:"black"}}
      />
      <button type="submit">Send Text</button>
    </form>
  );
};

export default App;