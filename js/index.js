document.addEventListener("partialsLoaded", async () => {
    await import("./burger-menu.js");
    await import('./articles.js');
  });