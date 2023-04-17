export const initContextMenu = () => {
  const menuModal = document.getElementById("menuModal");
  const close = document.getElementById("close");

  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      if (menuModal.style.display !== "block") {
        menuModal.style.display = "block";
      } else {
        menuModal.style.display = "none";
      }
    }
  });

  close.addEventListener("click", () => {
    menuModal.style.display = "none";
  });

  document.addEventListener("click", (event) => {
    if (event.target === menuModal) {
      menuModal.style.display = "none";
    }
  });
};