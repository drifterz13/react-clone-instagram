import { FETCH_POSTS } from '../../actionType'
import axios from 'axios'

export const fetchPost = (posts) => {
  return {
    type: FETCH_POSTS,
    posts
  }
}

export const generatePost = () => dispatch => {
  const posts = [];
  const promises = [];
  const rand = Math.floor(Math.random() * 10) + 5
  for (let i = 0; i < rand; i++) {
    let width = Math.floor(Math.random() * 581) + 480
    let height = Math.floor(Math.random() * 581) + 480
    let randomNumber = Math.floor(Math.random() * 806)
    let url = `https://source.unsplash.com/collection/482366/${width}x${height}/?sig=${randomNumber}`
    promises.push(axios.get(url))
  }

  axios.all(promises).then(res => {
    res.forEach(({config}) => {
      posts.push(config.url)
    })

    dispatch(fetchPost(posts))
  })
}  

