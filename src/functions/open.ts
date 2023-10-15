import getFileType from "./file-type";

type TConfigs = {
  title?: string;
  width?: string;
  height?: string;
};

const defaultConfigs: TConfigs = {
  title: "",
  width: "100%",
  height: "auto",
};

const open = (blob: string, configs = defaultConfigs): void | Error => {
  const tab = window.open("about:blank");

  if (!tab) {
    throw new Error("The tab is not opened.");
  }

  const body = tab.document.body;
  const fileType = getFileType(blob);

  const { title, width, height } = configs;

  if (title) {
    tab.document.title = title;
  }

  setTimeout(() => {
    if (fileType === "application/pdf") {
      const iframe = document.createElement("iframe");

      body.appendChild(iframe);

      iframe.src = blob;

      iframe.style.width = width || "100%";
      iframe.style.height = height || "100%";
    } else {
      const image = tab.document.createElement("img");

      body.appendChild(image);
      image.src = blob;

      image.style.width = width || "100%";
      image.style.height = height || "auto";
      image.style.display = "block";
      image.style.margin = "0 auto";
    }
  }, 0);
};

export default open;
