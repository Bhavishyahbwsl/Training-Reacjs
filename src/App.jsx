import React from 'react'
import Post from './components/Post'
import PostList from './components/PostList'

const App = () => {
  return (
    <div>
      {/* <Post name="Bhavishya" data="A Software Developer"/>
      <Post name="Maximillian" data="Nextjs and Reactjs Tutor/mentor"/> */}
      <PostList />
    </div>
  )
}

export default App