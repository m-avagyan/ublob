// @ts-nocheck
import toBase64 from "../functions/base-64";

interface GlobalWithFileReaderMock extends NodeJS.Global {
  FileReader: jest.Mock;
}

const customGlobal = global as unknown as GlobalWithFileReaderMock;

describe("toBase64", () => {
  const originalFileReader = customGlobal.FileReader;

  beforeAll(() => {
    customGlobal.FileReader = jest.fn(function () {
      return {
        readAsDataURL: jest.fn(),
        onload: jest.fn(),
        onerror: jest.fn(),
      };
    });
  });

  afterAll(() => {
    customGlobal.FileReader = originalFileReader;
  });

  it("Should throw error when no file is provided.", () => {
    const result = toBase64(undefined as any);

    expect(result).toThrowError("The parameter must be a file.");
  });

  it("Should throw error when a file with no type is provided.", () => {
    const result = toBase64(new Blob([]) as any);

    expect(result).toBeInstanceOf("The parameter must be a file.");
  });
});
