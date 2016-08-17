import fs from 'fs';
import colors from 'colors';
import cheerio from 'cheerio';

/* eslint no-console: 0 */

fs.readFile('src/index.html', 'utf8', (err, markup) => {
  if (err) {
    return console.log(err);
  }

  const $ = cheerio.load(markup);
  console.log(markup);
  $('head').prepend('<link rel="stylesheet" type="text/css" href="style.css">');

  fs.writeFile('dist/index.html', $.html(), 'utf8', function (err) {
    if (err) {
      return console.log(err);
    }
    console.log('index.html written to /dist'.green);
  });
});
