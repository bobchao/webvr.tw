import React from 'react'
import Paper from 'react-md/lib/Papers'
import FontIcon from 'react-md/lib/FontIcons'
import Card from 'react-md/lib/Cards/Card'
import CardTitle from 'react-md/lib/Cards/CardTitle'
import CardText from 'react-md/lib/Cards/CardText'
import Media, { MediaOverlay } from 'react-md/lib/Media'
import Avatar from 'react-md/lib/Avatars'
import Button from 'react-md/lib/Buttons'

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
      <Media><img src={cover || img}/></Media>
    </a>
    <div className="card-text">
      <h2><b>{ title || "title" }</b></h2>
      <h3>{ subtitle }</h3>
    </div>
  </Paper>
)
