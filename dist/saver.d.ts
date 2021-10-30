export declare class Saver {
    private _file;
    private _downloadName?;
    constructor(file: string | Blob, downloadName?: string);
    download(): Promise<void>;
}
