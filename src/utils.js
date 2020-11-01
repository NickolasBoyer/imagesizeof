export function renderImgToCanvas(canvas) {
  
  return function (url, aspectRatio, { x: offsetX = 0, y: offsetY = 0 }) {
    
    // we return a Promise that gets resolved with our canvas element
    return new Promise(resolve => {

        // this image will hold our source image data
        const inputImage = new Image();

        // we want to wait for our image to load
        inputImage.onload = () => {

            // let's store the width and height of our image
            const inputWidth = inputImage.naturalWidth;
            const inputHeight = inputImage.naturalHeight;

            // get the aspect ratio of the input image
            const inputImageAspectRatio = inputWidth / inputHeight;

            // if it's bigger than our target aspect ratio
            let outputWidth = inputWidth;
            let outputHeight = inputHeight;
            if (inputImageAspectRatio > aspectRatio) {
                outputWidth = inputHeight * aspectRatio;
            } else if (inputImageAspectRatio < aspectRatio) {
                outputHeight = inputWidth / aspectRatio;
            }

            // calculate the position to draw the image at
            const outputX = ((outputWidth - inputWidth) * .5) + offsetX;
            const outputY = ((outputHeight - inputHeight) * .5) + offsetY;

            const boundWidth = outputWidth - inputWidth;
            const boundHeight = outputHeight - inputHeight;


            const outputXBound = Math.min(Math.max(outputX, boundWidth), -1 * boundWidth);
            const outputYBound = Math.min(Math.max(outputY, boundHeight), -1 * boundHeight);

            console.log({outputX, outputY, boundWidth, boundHeight, outputXBound, outputYBound})

            // set it to the same size as the image
            canvas.width = outputWidth;
            canvas.height = outputHeight;

            // draw our image at position 0, 0 on the canvas
            const ctx = canvas.getContext('2d');
            ctx.drawImage(inputImage, outputXBound, outputYBound);
            resolve(canvas);
        };

        // start loading our image
        inputImage.src = url;
    })
    
  }
}