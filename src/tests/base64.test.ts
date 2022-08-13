import { equal, throws } from 'assert';

import toBase64 from '../functions/base64';

// const MOCKED_FILE = new File(['test'], 'test.png', { type: 'image/png' });

describe('converting a file to base64', () => {
  it('should throw an error if the parameter is not a file', () => {
    const error = new Error('The parameter must be a file.');

    // @ts-ignore
    throws(() => toBase64(1), error);
  });

  //   it('should return the base64 string', () => {
  //     const result =
  //       'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';

  //     equal(toBase64(MOCKED_FILE), result);
  //   });
});
