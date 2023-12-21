let isNight = false
const switcherListener = () => {
  isNight = !isNight
  document.body.style.setProperty('--background-color', isNight ? '#202020' : '#eeeeee')
}

const appendGarland = () => {
  const garlandSwitcherContent = `
    <svg
      class="garland-switcher"
      width="11"
      height="100"
      viewBox="0 0 11 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.5 93.12C0.437765 89.9587 5.49972 88.7258 5.49972 88.7258C5.49972 88.7258 10.5619 89.9587 9.50003 93.12C8.43817 96.2813 6.56198 99 5.49972 99C4.43745 99 2.56223 96.2813 1.5 93.12Z"
        fill="#656565" />
      <path
        d="M5.49972 1V88.7258M5.49972 88.7258C5.49972 88.7258 0.437765 89.9587 1.5 93.12C2.56223 96.2813 4.43745 99 5.49972 99C6.56198 99 8.43817 96.2813 9.50003 93.12C10.5619 89.9587 5.49972 88.7258 5.49972 88.7258Z"
        stroke="#656565"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round" />
    </svg>
  `
  const mainGarlandContainer = document.createElement('div')
  mainGarlandContainer.className = 'main-garland-container'

  const garlandSwitcher = document.createElement('svg')
  garlandSwitcher.innerHTML = garlandSwitcherContent
  mainGarlandContainer.appendChild(garlandSwitcher)
  document.body.appendChild(mainGarlandContainer)
}

appendGarland()
document.querySelector('.garland-switcher').addEventListener('click', switcherListener)
