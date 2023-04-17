export const createElement = (tag, classes) => {
  const element = document.createElement(tag);

  classes.forEach((item) => {
    element.classList.add(item);
  });

  return element;
};
