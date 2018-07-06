import React from 'react'
import { Route } from 'react-router-dom'
import PostPage from '../components/PostPage'
import ProfilePage from '../components/ProfilePage'

const Main = () => {

  return (
    <div>
      <Route exact path='/' render={props => <PostPage {...props} />} />
      <Route exact path='/profile' render={props => <ProfilePage {...props} />} />
    </div>
  )
}

export default Main
