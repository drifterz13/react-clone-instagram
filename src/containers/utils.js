import axios from 'axios'

export async function generateInstagramPhotosPromise() {
  const promises = [];
  const rand = Math.floor(Math.random() * 10) + 5;
  for (let i = 0; i < rand; i++) {
    const width = Math.floor(Math.random() * 581) + 480;
    const height = Math.floor(Math.random() * 581) + 480;
    const randomNumber = Math.floor(Math.random() * 806);
    const url = `https://source.unsplash.com/collection/482366/${width}x${height}/?sig=${randomNumber}`;

    promises.push(axios.get(url));
  }

  return axios.all(promises);
}