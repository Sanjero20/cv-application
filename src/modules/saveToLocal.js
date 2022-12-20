function saveToLocalStorage(key, item) {
  const converted = JSON.stringify(item);
  window.localStorage.setItem(key, converted);
}

function retrieveFromLocal(key) {
  const object = window.localStorage.getItem(key);
  return JSON.parse(object);
}

function clearStorage() {
  window.localStorage.clear();
}

export { saveToLocalStorage, retrieveFromLocal, clearStorage };
