import React from 'react'
import Post from './Post'
import classes from './PostList.module.css'

const PostList = () => {
  return (
    <ul className={classes.posts}>
        <Post name="Listing" data="Self made list"/>
        <Post name="second" data="Self made second list"/>
    </ul>
  )
}

export default PostList