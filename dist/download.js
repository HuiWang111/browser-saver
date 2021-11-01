var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function download(url, fileName) {
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
export function downloadBlob(file, fileName) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = window.URL.createObjectURL(file);
        yield download(url, fileName);
        window.URL.revokeObjectURL(url);
    });
}
export function downloadImage(url, fileName) {
    return __awaiter(this, void 0, void 0, function* () {
        const image = yield fetch(url, {
            mode: 'cors'
        });
        const imageBlog = yield image.blob();
        yield downloadBlob(imageBlog, fileName);
    });
}
