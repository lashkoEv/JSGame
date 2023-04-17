export const clearWindow = () => {
  const app = document.getElementById("app");

  while (app.firstChild) {
    app.removeChild(app.firstChild);
  }
};
