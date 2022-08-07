const getFileType = require('./fileType');

const defaultConfigs = {
  title: '',
  width: '100%',
  height: 'auto',
};

/**
 *
 * @param { String } blob
 * @param { { title: String, width: String, height: String } } configs
 */

const open = (blob, configs = defaultConfigs) => {
  const tab = window.open('about:blank');
  const body = tab.document.body;
  const fileType = getFileType(blob);

  const { title, width, height } = configs;

  if (title) {
    tab.document.title = title;
  }

  setTimeout(() => {
    if (fileType === 'pdf') {
      const iframe = document.createElement('iframe');

      body.appendChild(iframe);

      iframe.src = blob;

      iframe.style.width = width || '100%';
      iframe.style.height = height || '100%';
    } else {
      const image = tab.document.createElement('img');

      body.appendChild(image);
      image.src = blob;

      image.style.width = width || '100%';
      image.style.height = height || 'auto';
      image.style.display = 'block';
      image.style.margin = '0 auto';
    }
  }, 0);
};

module.exports = open;
