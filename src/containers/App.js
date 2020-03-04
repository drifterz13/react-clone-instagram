import React, { useState, useEffect } from "react";
import Main from "./Main";
import Nav from "./Nav/Nav";
import { generateInstagramPhotosPromise } from "./utils";

export const AppContext = React.createContext({ photos: [] });

function App() {
  const [photos, setPhoto] = useState([]);

  useEffect(() => {
    generateInstagramPhotosPromise()
      .then(response => {
        const photos = response.map(({ config }) => config.url);

        setPhoto(photos);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <AppContext.Provider value={{ photos }}>
      <Nav />
      <Main />
    </AppContext.Provider>
  );
}

export default App;
