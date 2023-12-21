let isNight = false
const switcherListener = () => {
  isNight = !isNight
  document.body.style.setProperty('--background-color', isNight ? '#202020' : '#eeeeee')
}

document.querySelector('.garland-switcher').addEventListener('click', switcherListener)
