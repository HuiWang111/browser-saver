export interface ParsedResult {
    fileName: string;
    ext: string;
}
export declare class File {
    url: string;
    name: string;
    ext: string;
    constructor(url: string);
    parseUrl(): ParsedResult;
}
