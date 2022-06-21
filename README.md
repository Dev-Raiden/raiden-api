<h1 align='center'>
Dev Raiden Multipurpose API
</h1>

<p align='center'>
<img width='512' height='512' src='https://cdn.discordapp.com/attachments/977131142262169600/982094496332382218/MeeS-Logo.jpg' />
</p>
<p align='center'> 
A Free API build in TypeScript and have many API endpoint.
</p>

## Installation

```bash
npm install @raiden/api
```

## Example Usage

```js
// ESM
import Raiden from '@raiden/api';

// CJS
const Raiden = require('@raiden/api');
```

## TikTok Downloader

```js
import { TikTokDownloader } from '@raiden/api';

const url = 'https://vt.tiktok.com/ZSdcMAn1n/?k=1';
const res = await TikTokDownloadt(url)
consolse.log(res);
```

## Instagram Downloader
```js
import { InstagramDownloader } from '@raiden/api';

const url = 'https://www.instagram.com/p/CcgDk-AFZKN/';
const res = await InstagramDownloader(url);
console.log(res);
```

## YouTube Downloader & YouTube Searching

```js
import { YouTubeDownloaders, YouTubeSearchings } from '@raiden/api';

const url = 'https://www.youtube.com/watch?v=g-nG6n7yx3Q';
const res = await YouTubeDownloaders(url);
console.log(res);

const title = 'Dev Raiden';
const res = await YouTubeSearchings(title);
console.log(res);
```

## Support
Do you want to keep our API alive? You can support us by donating to our [Ko-Fi](https://ko-fi.com/devraiden) or [Trakteer](https://trakteer.id/devraiden)

## Authors

- [Dev Raiden](https://www.github.com/Dev-Raiden)
- [@ameliakiara](https://www.github.com/ameliakiara)