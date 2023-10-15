import { AVAILABLE_FILE_TYPES } from "../constants/file-types";
import getAvailableFileTypes from "../functions/available-file-types";

describe("Get available file types tests.", () => {
  it("Should return list of available file types.", () => {
    const result = getAvailableFileTypes();

    expect(result).toStrictEqual(AVAILABLE_FILE_TYPES);
  });
});
