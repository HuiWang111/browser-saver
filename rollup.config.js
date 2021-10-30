export default {
    input: 'dist/index.js',
    output: {
        file: 'dist/saver.umd.js',
        format: 'umd',
        name: 'Saver'
    },
    context: 'window'
};