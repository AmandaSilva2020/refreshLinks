function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Get the tag img
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    // if on light mode, add image light
    img.setAttribute("src", "./assets/avatar-light.png");
    img.setAttribute(
      "alt",
      "logomarca do refresh design studio em preto com fundo branco"
    )
  } else {
    // if on dark mode, keep img default
    img.setAttribute("src", "./assets/avatar.png");
    img.setAttribute(
      "alt",
      "logomarca do refresh design studio em branco com fundo preto"
    )
  }
}
