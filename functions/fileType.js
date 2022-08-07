/**
 *
 * @param { String } blob
 * @returns
 */

const getFileType = (blob) => {
  if (typeof blob !== 'string') {
    throw new Error('The parameter must be a blob string.');
  }

  return blob.split('/')[1].split(';')[0];
};

module.exports = getFileType;
