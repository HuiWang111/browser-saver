import { IMAGE_EXTS } from './constants';

export function isImage(ext: string): boolean {
    return IMAGE_EXTS.includes(ext.toLowerCase());
}

/**
 * 判断是否跨域
 */
export function isCors(url: string): boolean {
    const current = new URL(window.location.origin);
    const target = new URL(url);

    return current.host !== target.host || current.protocol !== target.protocol;
}