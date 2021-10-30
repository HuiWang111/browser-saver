/**
 * @jest-environment jsdom
 */
import { File } from '../src/file';

describe('test File', () => {
    it('File should incorrect get name and ext', () => {
        const file = new File('https://c-ssl.duitang.com/uploads/item/201410/17/20141017085556_LEQ83.thumb.1000_0.jpeg');

        expect(file.name).toBe('20141017085556_LEQ83.thumb.1000_0.jpeg');
        expect(file.ext).toBe('jpeg');
    });

    it('File should get empty ext', () => {
        const file = new File('https://c-ssl.duitang.com/uploads/item/201410/17/');

        expect(file.name).toBe('17');
        expect(file.ext).toBe('');
    });

    it('File should get decoded name', () => {
        const file = new File('https://c-ssl.duitang.com/uploads/%E4%B8%AD%E6%96%87%E6%96%87%E4%BB%B6%E5%90%8D.jpg');

        expect(file.name).toBe('中文文件名.jpg');
        expect(file.ext).toBe('jpg');
    });
});
