import { IMAGE_EXTS } from './constants';
export function isImage(ext) {
    return IMAGE_EXTS.includes(ext.toLowerCase());
}
export function isCors(url) {
    const current = new URL(window.location.origin);
    const target = new URL(url);
    return current.host !== target.host || current.protocol !== target.protocol;
}
