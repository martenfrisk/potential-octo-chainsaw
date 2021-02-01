const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');

(async() => {
  const files = await imagemin(
      ['static/images/*.jpg'],
      {
        destination: 'static/images',
        plugins: [imageminMozjpeg({quality: 75})]
      }
  );
  console.log(files);
})();