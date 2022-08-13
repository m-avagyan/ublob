const getFileType = (blob: string): string | Error => {
  if (typeof blob !== 'string') {
    throw new Error('The parameter must be a blob string.');
  }

  return blob.split(':')[1].split(';')[0];
};

export default getFileType;
