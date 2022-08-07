const getFileType = require('./fileType');

const defaultConfigs = {
  newTab: true,
  width: '100%',
  height: '100%',
};

/**
 *
 * @param { Boolean } newTab
 * @returns
 */

const createTab = (newTab) => {
  if (newTab) {
    return window.open('about:blank');
  } else {
    return window.location.replace('about:blank');
  }
};

/**
 *
 * @param { String } blob
 * @param { { newTab: Boolean, width: String, height: String } } configs
 */

const open = (blob, configs = defaultConfigs) => {
  const fileType = getFileType(blob);

  const { newTab, width, height } = configs;

  if (fileType === 'pdf') {
    const tab = createTab(newTab);

    setTimeout(() => {
      const body = tab.document.body;
      const iframe = document.createElement('iframe');

      body.appendChild(iframe);

      iframe.src = blob;

      iframe.style.width = width;
      iframe.style.height = height;
    }, 0);
  } else {
    const tab = createTab(newTab);

    setTimeout(() => {
      const body = tab.document.body;
      const image = tab.document.createElement('img');

      body.appendChild(image);
      image.src = blob;

      image.style.width = width;
      image.style.display = 'block';
      image.style.margin = '0 auto';
    }, 0);
  }
};

module.exports = open;
