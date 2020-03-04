import React, { Component } from "react";
import axios from "axios";
import PostHeader from "./../containers/Posts/PostHeader";
import PostFooter from "./../containers/Posts/PostFooter";
import PostBody from "./../containers/Posts/PostBody";
import "./PostPage.css";

async function generateInstagramPhotosPromise() {
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

export default class PostPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: []
    };
  }

  async componentDidMount() {
    try {
      const response = await generateInstagramPhotosPromise();
      console.log(response)
      const photoUrls = response.map(({ config }) => config.url);

      this.setState({ photos: photoUrls });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div style={{ marginTop: "12%" }}>
        {this.state.photos.map(photo => (
          <article key={photo} className="Post">
            <PostHeader />
            <PostBody imageUrl={photo} />
            <PostFooter />
          </article>
        ))}
      </div>
    );
  }
}
