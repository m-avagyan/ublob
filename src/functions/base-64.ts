const toBase64 = (file: File): Promise<string | ArrayBuffer | null> | Error => {
  if (!file || !file?.type) {
    return new Error("The parameter must be a file.");
  }

  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.onload = () => resolve(fileReader.result);
    fileReader.onerror = (error) => reject(error);
  });
};

export default toBase64;
