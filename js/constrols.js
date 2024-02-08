import * as el from './elements.js'
export function sumMinutes() {
let newMinutes = Number(el.minutesDisplay.textContent) + 5

return newMinutes
}

export function subtractMinutes(){
let newMinutes = Number(el.minutesDisplay.textContent) - 5

if (newMinutes < 0) {
newMinutes = 0
}

return newMinutes
}

export function removeColors(){
  el.buttonTree.classList.remove("hideColor")
  el.buttonCloud.classList.remove("hideColor")
  el.buttonFlame.classList.remove("hideColor")
  el.buttonStore.classList.remove("hideColor")
}