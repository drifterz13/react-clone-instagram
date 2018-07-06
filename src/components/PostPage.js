import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostHeader from './../containers/Posts/PostHeader'
import PostFooter from './../containers/Posts/PostFooter'
import PostBody from './../containers/Posts/PostBody'
import { generatePost } from '../store/actions/posts'
import './PostPage.css'

class PostPage extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    this.props.generatePost()
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.posts.length > 0) {
      return { posts: [...nextProps.posts] }
    } else {
      return null;
    }
  }

  render() {
    const allPosts = this.state.posts.map((post, i) => (
      <article key={i} className='Post' ref='Post'>
        <PostHeader />
        <PostBody post={post} i={i} />
        <PostFooter />
      </article>
    ))
    return (
      <div style={{ marginTop: '12%' }}>
        {allPosts}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, { generatePost })(PostPage)