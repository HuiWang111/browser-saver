import { UNKNOWN_FILE } from './constants';

export interface ParsedResult {
    fileName: string;
    ext: string;
}

export class File {
    public url: string;
    public name: string;
    public ext: string;

    constructor(url: string) {
        this.url = url;

        const { fileName, ext } = this.parseUrl();
        this.name = fileName || UNKNOWN_FILE;
        this.ext = ext;
    }

    parseUrl(): ParsedResult {
        const fileName: string = this.url.match(/\/([^/]+)\/?$/)?.[1] || '';
        const ext: string = fileName.match(/\.([^.]+)$/)?.[1] || '';

        return {
            fileName: decodeURIComponent
                ? decodeURIComponent(fileName)
                : fileName,
            ext
        };
    }
}