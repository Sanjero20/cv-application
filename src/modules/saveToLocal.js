function clearStorage() {
  window.localStorage.clear();
}

function saveToLocalStorage(key, item) {
  const converted = JSON.stringify(item);
  window.localStorage.setItem(key, converted);
}

function retrieveFromLocal(key) {
  const object = window.localStorage.getItem(key);
  return object ? JSON.parse(object) : [];
}

function saveAll(datas) {
  const { personalData, educationData, workExpData } = datas;

  saveToLocalStorage('personalData', personalData);
  saveToLocalStorage('educationData', educationData);
  saveToLocalStorage('workData', workExpData);
}

export { saveAll, retrieveFromLocal, clearStorage };
