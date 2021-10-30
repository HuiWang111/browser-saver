(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Saver = factory());
})(this, (function () { 'use strict';

    var __awaiter$1 = (window && window.__awaiter) || function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    function download(url, fileName) {
        return new Promise((resolve) => {
            const link = document.createElement('a');
            link.style.display = 'none';
            link.target = '_blank';
            link.href = url;
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            resolve();
        });
    }
    function downloadBlob(file, fileName) {
        return __awaiter$1(this, void 0, void 0, function* () {
            const url = window.URL.createObjectURL(file);
            yield download(url, fileName);
            window.URL.revokeObjectURL(url);
        });
    }
    function downloadImage(url, fileName) {
        return __awaiter$1(this, void 0, void 0, function* () {
            const image = yield fetch(url, {
                mode: 'cors',
                credentials: 'include'
            });
            const imageBlog = yield image.blob();
            yield downloadBlob(imageBlog, fileName);
        });
    }

    const UNKNOWN_FILE = '未知文件';
    const IMAGE_EXTS = ['jpg', 'jpeg', 'png', 'tiff', 'webp', 'bmp', 'svg'];

    class File {
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

    function isImage(ext) {
        return IMAGE_EXTS.includes(ext.toLowerCase());
    }
    function isCors(url) {
        const current = new URL(window.location.origin);
        const target = new URL(url);
        return current.host !== target.host || current.protocol !== target.protocol;
    }

    var __awaiter = (window && window.__awaiter) || function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    class Saver {
        constructor(file, downloadName) {
            if (!window) {
                throw new Error('[browser-saver] not browser environment !');
            }
            this._file = file;
            this._downloadName = downloadName;
            this.download = this.download.bind(this);
        }
        download() {
            return __awaiter(this, void 0, void 0, function* () {
                if (this._file instanceof Blob) {
                    return downloadBlob(this._file, this._downloadName || UNKNOWN_FILE);
                }
                const file = new File(this._file);
                const fileName = this._downloadName || file.name;
                if (isImage(file.ext) && isCors(this._file)) {
                    return downloadImage(this._file, fileName);
                }
                return download(this._file, fileName);
            });
        }
    }

    return Saver;

}));
