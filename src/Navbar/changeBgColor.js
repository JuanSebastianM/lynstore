export const changeBgColor = (navbar) => {
  if (window.scrollY < 30) {
    navbar.current.classList.remove('navbar-office')
  }
  if (window.scrollY >= 30) {
    navbar.current.classList.add('navbar-office')
  }
}
