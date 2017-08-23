import React from 'react'
import Paper from 'react-md/lib/Papers'
import Media from 'react-md/lib/Media'

import './index.css'
import img from './img.gif'

export default ({
  className,
  cover,
  title,
  subtitle,
  link
}) => (
  <Paper className={` ${className}`}>
    <a href={link}>
      <Media><img src={cover || img} alt="" /></Media>
    </a>
    <div className="card-text">
      <h2><b>{ title || "title" }</b></h2>
      <h3>{ subtitle }</h3>
    </div>
  </Paper>
)
