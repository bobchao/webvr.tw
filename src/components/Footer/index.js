import React from 'react'
import FontIcon from 'react-md/lib/FontIcons'

import './index.css'

export default () => (
  <footer className="third-color-bg md-grid">
    <div className="md-cell md-cell--6">
      <h1 className="title"><a className="second-color" href="//github.com/bobchao/webvr.tw/">
        <FontIcon className="second-color" iconClassName="fa fa-github" />
        &nbsp;
        貢獻
      </a></h1>
      <p>想幫修改網站，請來 GitHub 發 PR 或開 issue。</p>
    </div>
    <div className="md-cell md-cell--6">
      <h1 className="title second-color">
        <FontIcon className="second-color" iconClassName="fa fa-shield" />
        &nbsp;
        資源
      </h1>
      <p>有 WebVR 資源，值得新開一個 subdomain 導過去？請發 issue，最好跟 .tw 有關聯（中文、在台灣、台灣人做的、內容是台灣相關... etc.）。</p>
    </div>
  </footer>
)
