import { UNKNOWN_FILE } from './constants';
export class File {
    constructor(url) {
        this.url = url;
        const { fileName, ext } = this.parseUrl();
        this.name = fileName || UNKNOWN_FILE;
        this.ext = ext;
    }
    parseUrl() {
        var _a, _b;
        const fileName = ((_a = this.url.match(/\/([^/]+)\/?$/)) === null || _a === void 0 ? void 0 : _a[1]) || '';
        const ext = ((_b = fileName.match(/\.([^.]+)$/)) === null || _b === void 0 ? void 0 : _b[1]) || '';
        return {
            fileName: decodeURIComponent
                ? decodeURIComponent(fileName)
                : fileName,
            ext
        };
    }
}
