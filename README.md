# browser-saver

## Install
```bash
npm i browser-saver
```

## Run Example
```bash
git clone git@github.com:HuiWang111/browser-saver.git
cd browser-saver
yarn
npm start
```

## Usage
- download by url
```js
import FileSaver from 'browser-saver';

const fileSaver = new FileSaver('http://192.168.146.1:3004/test.jpg');
await fileSaver.download();
```
**if fileName is not provided, Saver will get fileName by parse url**

- download Blob
```js
import FileSaver from 'browser-saver';

const blob = new Blob(['这是一个blob文件']);
const fileSaver = new FileSaver(blob, 'blob.txt');
await fileSaver.download();
```