import React from 'react'
import Paper from 'react-md/lib/Papers'

import './index.css'

import logo from '../../logo.svg'

export default () => (
  <header id="header" className="block">
    <Paper className="center md-grid md-grid--no-spacing">
      <div className="md-cell md-cell--3 md-cell--middle">
        <img src={logo} alt="" />
      </div>
      <div className="md-cell md-cell--9">
        <h1 className="second-color">WebVR.tw</h1>
        <h2>WebVR中文社群</h2>
      </div>
    </Paper>
  </header>
)
