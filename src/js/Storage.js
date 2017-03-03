export default {
  fetch() {
    return JSON.parse(localStorage.getItem('sheet-axe') || '[]');
  },
  store(sheet) {
    localStorage.setItem('sheet-axe', JSON.stringify(sheet));
  }
}
