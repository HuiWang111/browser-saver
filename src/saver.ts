import { download, downloadBlob, downloadImage } from './download';
import { UNKNOWN_FILE } from './constants';
import { File } from './file';
import { isImage, isCors } from './utils';

export class Saver {
    private _file: string | Blob;
    private _downloadName?: string;

    constructor(
        file: string | Blob,
        downloadName?: string
    ) {
        if (!window) {
            throw new Error('[browser-saver] not browser environment !');
        }

        this._file = file;
        this._downloadName = downloadName;

        this.download = this.download.bind(this);
    }

    public async download(): Promise<void> {
        if (this._file instanceof Blob) {
            return downloadBlob(this._file, this._downloadName || UNKNOWN_FILE);
        }

        const file = new File(this._file);
        const fileName = this._downloadName || file.name;

        if (isImage(file.ext) && isCors(this._file)) {
            return downloadImage(this._file, fileName);
        }
        return download(this._file, fileName);
    }
}