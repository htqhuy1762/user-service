const uploadSingleFile = async (fileObject) => {
    let uploadPath = __dirname + '/abc/' + fileObject.name;

    // Van de 1: Luu file vao public/images/upload
    // Van de 2: abc.jpg -> abc-timestamp.jpg
    // Van de 3: upload multiple files

    try {
        await fileObject.mv(uploadPath);
        return {
            status: 'success',
            path: 'link-image',
            error: null,
        };
    } catch (error) {
        return {
            status: 'failed',
            path: null,
            error: JSON.stringify(error),
        };
    }
};

const uploadMultipleFiles = async (files) => {};

module.exports = {
    uploadSingleFile,
    uploadMultipleFiles,
};
