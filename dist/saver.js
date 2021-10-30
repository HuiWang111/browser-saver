var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { download, downloadBlob, downloadImage } from './download';
import { UNKNOWN_FILE } from './constants';
import { File } from './file';
import { isImage, isCors } from './utils';
export class Saver {
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
