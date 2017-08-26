import React from 'react'
import Card from '../Card/'
import './index.css'

const cardsData = [{
  title: '初學教材',
  link: '//learn.webvr.tw',
  cover: `${process.env.PUBLIC_URL}/img/learn.png`
}, {
  title: '台北社群聚會',
  link: '//events.webvr.tw',
  cover: `${process.env.PUBLIC_URL}/img/event.png`
}, {
  title: '中文新鮮報',
  link: '//news.webvr.tw',
  cover: `${process.env.PUBLIC_URL}/img/news.png`
}, {
  title: '中文討論區',
  link: '//forum.webvr.tw',
  cover: `${process.env.PUBLIC_URL}/img/forum.png`
}]

export default () => (
  <section className="block text-container">
    <div className="md-grid">
      <div className="md-cell md-cell--12">
        <p>大家好! 歡迎光臨<del>漢堡王</del><sapn className="second-color">WebVR.tw</sapn>, 這裡有一些有用的連結給大家參考</p>
      </div>
      { cardsData.map((data) => (
        <Card key={data.title} className="md-cell md-cell--6" {...data} />
      ))}
    </div>
  </section>
)
