# webvr.tw
WebVR.tw website (a simple index page.)

* 歡迎幫忙改內容跟樣式
* 有需要新開 subdomain 請提 issue 建議（需要跟 webvr.tw 這樣的網域有關）

## Develop

```bash
$ yarn install
$ yarn start
```

## Deploy

```bash
$ npm build
```

Edit `package.json`'s `homepage` field:

```json
"home": "https://your.domain/and/url/"
```

Or on gh-pages:

```json
"homepage": "https://qas612820704.github.io/webvr.tw/"
```

### To gh-pages

```bash
$ npm deploy
```

> If you need more information, see [create-react-app](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#github-pages)

### Somewhere

Just copy `build/` dir to the place you want.

Or someone can **add a deploy script** ;D!
