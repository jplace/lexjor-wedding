const fs = require('fs');
const sharp = require('sharp');

let counter = 1;
Promise.all(fs.readdirSync("./us-original").map(file => {
  if (file === ".DS_Store") return Promise.resolve();
  const index = counter++;
  return sharp(`./us-original/${file}`)
    .rotate()
    .resize({ width: 1024 })
    .webp({quality: 90})
    .toFile(`./src/site/images/us/${index}.webp`)
    .then(() => console.log('Converted', file))
    .catch(e => console.log('Failed converting', file, e, 'skipping...'))
}))
  .then(() => console.log('Done'))
  .catch(e => console.error(e));

