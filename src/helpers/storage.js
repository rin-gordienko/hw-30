export const loadState = () => {
  try {
    const dataFromStorage = localStorage.getItem("state");
    console.log("dataFromStorage", dataFromStorage);

    if (dataFromStorage === null) {
      return undefined;
    }

    return JSON.parse(dataFromStorage);
  } catch {
    return undefined;
  }
};

export const saveState = (state) => {
  const json = JSON.stringify(state);
  localStorage.setItem("state", json);
};
