const Jimp = require('jimp');

async function processImage() {
  try {
    const image = await Jimp.read('public/images/logo.jpeg');
    
    // Autocrop will remove surrounding pixels of the same color as the top-left pixel
    image.autocrop();
    
    // Make white transparent with a tolerance
    const targetColor = { r: 255, g: 255, b: 255 }; // White
    
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const r = this.bitmap.data[idx + 0];
      const g = this.bitmap.data[idx + 1];
      const b = this.bitmap.data[idx + 2];
      
      // Calculate distance to white
      if (r > 240 && g > 240 && b > 240) {
        this.bitmap.data[idx + 3] = 0; // set alpha to 0 (transparent)
      }
    });

    await image.writeAsync('public/images/logo_cropped.png');
    console.log('Image successfully cropped and made transparent.');
  } catch (err) {
    console.error(err);
  }
}

processImage();
