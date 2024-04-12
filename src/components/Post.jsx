import React from 'react'
import classes from './Post.module.css'

const Post = (props) => {

  return (
    <li className={classes.post}>
        <p className={classes.name}>{props.name}</p>
        <p className={classes.data}>{props.data}</p>
    </li>

  )
}

export default Post