
const menuButton = document.getElementById('button');
const navMenu = document.getElementById('navlinks');

menuButton.addEventListener('click', () => {
    console.log("Button");
  navMenu.classList.toggle('show');
});


function handleResize() {
  const menu = document.querySelector(".Menu");
  if (window.innerWidth > 1000) {
    menu.classList.add("show");
  } else {
    menu.classList.remove("show");
  }
}

handleResize();
window.addEventListener("resize", handleResize);


document.addEventListener("DOMContentLoaded", () => {
  const norrisImage = document.querySelector('img[src="images/norris-sm.jpeg"]');

  if (norrisImage) {
    norrisImage.addEventListener("click", () => {
      const viewer = document.createElement("dialog");
      viewer.innerHTML = `
        <img src="images/norris-full.jpeg" alt="steaming water">
        <button class="close-viewer">X</button>
      `;
      document.body.appendChild(viewer);
      viewer.showModal();

      const closeButton = viewer.querySelector(".close-viewer");
      closeButton.addEventListener("click", () => {
        viewer.close();
        viewer.remove();
      });
    });
  }
});

