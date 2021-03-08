export const getCroppedImg = (pixelCrop, imgRef, asynchronousCrop, fileName) => {
    const img = imgRef.current;
    const scaleX = img.naturalWidth / img.width;
    const scaleY = img.naturalHeight / img.height;
    const canvas = document.createElement('canvas');
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    console.log('cropped')
    ctx.drawImage(
        img,
        pixelCrop.x * scaleX,
        pixelCrop.y * scaleY,
        pixelCrop.width * scaleX,
        pixelCrop.height * scaleY,
        0,
        0,
        pixelCrop.width,
        pixelCrop.height,
    );
    if (asynchronousCrop) {

        /**
         * toBlob is both faster and asynchronous, but not supported on old browsers.
         * image/png has been used to preserve transparent background of the image, if needed image/jepg can be used.
         */
        const image = new Promise((resolve, reject) => {
            canvas.toBlob(blob => {
                blob.name = fileName;
                resolve(blob);
            }, 'image/png', 1);
        });
        return image
    }
    /**
     * toDataURL is synchronous and will block the main thread, 
     * for large images this could be for as long as a couple of seconds. 
     * We can use toDataURL('image/jpeg') otherwise it will default to image/png and the conversion will be significantly slower.
     */
    return canvas.toDataURL('image/png');

};

export const cropDimensions = img => {
    return {
        unit: 'px',
        width: img.width / 2,
        height: img.height / 2,
        x: img.width / 4,
        y: img.height / 4,
    };
}
export const initialCropDimension = {
    unit: '%',
    width: 50,
    height: 50,
    x: 25,
    y: 25,
}