import { minutesDisplay, secondsDisplay } from "./elements.js";

let timerTimeout
let minutes = Number(minutesDisplay.textContent)
  
export function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
    return
}
export function reset() {
    updateDisplay(minutes, 0)
    hold()
    return
  }
export function countdown() {
  
    timerTimeout = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      let isFinished = minutes <= 0 && seconds <= 0
  
      updateDisplay(minutes, 0)
  
      if (isFinished) {
        resetControls()  
        updateDisplay()
        return
      }
  
      if (seconds <= 0) {
        seconds = 60
        --minutes
      }
      updateDisplay(minutes, String(seconds -1))    
      countdown()
    }, 1000)
    return
}

export function updateMinutes(newMinutes) {
  minutes = newMinutes
  return
}

export function hold() {
  clearTimeout(timerTimeout)
    
  return
}