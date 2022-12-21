function checkYear(from, to) {
  if (from || to) {
    return `${from} - ${to}`;
  }
}

function checkLocation(location) {
  if (location) {
    return <span className="location"> - {location}</span>;
  }
}

export { checkYear, checkLocation };
