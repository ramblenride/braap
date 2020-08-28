export function download(filename, text) {
  let element = document.createElement("a");
  element.setAttribute("href", "data:application/json;charset=utf-8," + encodeURIComponent(text));
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

export function motorcycleToJson(moto) {
  const template = {
    motorcycles: [moto],
  };

  return JSON.stringify(
    template,
    (key, value) => {
      if (value !== null && String(value).length != 0 && String(value) !== "NaN") return value;
    },
    2
  );
}

export function getFilename(moto) {
  // Strip the first word and replace spaces
  return `${moto.name}`.replace(/\w+ /, "").trim().replace(/ /g, "_").toLowerCase() + ".json";
}
