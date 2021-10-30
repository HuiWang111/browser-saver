export interface DownloadOptions {
    fileName?: string;
}

export function download(url: string, fileName: string): Promise<void> {
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

export async function downloadBlob(file: Blob, fileName: string): Promise<void> {
    const url = window.URL.createObjectURL(file);
    await download(url, fileName);
    window.URL.revokeObjectURL(url);
}

export async function downloadImage(url: string, fileName: string): Promise<void> {
    const image = await fetch(url, {
        mode: 'cors',
        credentials: 'include'
    });
    const imageBlog = await image.blob();
    await downloadBlob(imageBlog, fileName);
}