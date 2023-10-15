import { AVAILABLE_FILE_TYPES } from "../constants/file-types";

const getFileType = (blob: string): string | Error => {
  if (typeof blob !== "string") {
    throw new Error("The parameter must be a blob string.");
  } else {
    const fileType = blob.split(":")[1].split(";")[0];

    if (!AVAILABLE_FILE_TYPES.includes(fileType)) {
      throw new Error("The file type is not supported.");
    }

    return fileType;
  }
};

export default getFileType;
