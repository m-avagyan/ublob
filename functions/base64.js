/**
 *
 * @param { File } file
 * @returns
 */

const toBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.onload = () => resolve(fileReader.result);
    fileReader.onerror = (error) => reject(error);
  });
};

module.exports = toBase64;
