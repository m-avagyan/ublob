import { equal } from 'assert';

import { AVAILABLE_FILE_TYPES } from '../constants/fileTypes';

import getAvailableFileTypes from '../functions/availableFileTypes';

describe('getting the available file types', () => {
  it('should return the available file types', () => {
    const result = AVAILABLE_FILE_TYPES;

    equal(getAvailableFileTypes(), result);
  });
});
