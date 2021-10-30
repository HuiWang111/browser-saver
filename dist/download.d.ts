export interface DownloadOptions {
    fileName?: string;
}
export declare function download(url: string, fileName: string): Promise<void>;
export declare function downloadBlob(file: Blob, fileName: string): Promise<void>;
export declare function downloadImage(url: string, fileName: string): Promise<void>;
