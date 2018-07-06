import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProfileHeader from '../containers/Profile/ProfileHeader'
import ProfileTab from '../containers/Profile/ProfileTab'
import ProfilePosts from '../containers/Profile/ProfilePosts'
import ProfilePost from '../containers/Profile/ProfilePost'
import './ProfilePage.css'

class ProfilePage extends Component {
  state = {
    posts: this.props.posts
  }

  render() {
    const allPosts = this.state.posts.map((post, i) => (
      <ProfilePost key={i} post={post} index={i} />
    ))

    return (
      <main className='Profile-main'>
        <div className='container'>
          <ProfileHeader />
          <ProfileTab />
          <ProfilePosts>
            {allPosts}
          </ProfilePosts>
        </div>
      </main>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, null)(ProfilePage)