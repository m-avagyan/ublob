const getFileType = require('./fileType');

const defaultConfigs = {
  width: '100%',
  height: '100%',
};

/**
 *
 * @param { String } blob
 * @param { { newTab: Boolean, width: String, height: String } } configs
 */

const open = (blob, configs = defaultConfigs) => {
  const tab = window.open('about:blank');
  const body = tab.document.body;
  const fileType = getFileType(blob);

  const { width, height } = configs;

  setTimeout(() => {
    if (fileType === 'pdf') {
      const iframe = document.createElement('iframe');

      body.appendChild(iframe);

      iframe.src = blob;

      iframe.style.width = width;
      iframe.style.height = height;
    } else {
      const image = tab.document.createElement('img');

      body.appendChild(image);
      image.src = blob;

      image.style.width = width;
      image.style.display = 'block';
      image.style.margin = '0 auto';
    }
  }, 0);
};

module.exports = open;
