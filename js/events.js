import * as timer from './timer.js'
import * as controls from './constrols.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'
import state from "./state.js";
//events timer
//button play
el.buttonPlay.addEventListener('click', () => {
state.idRunning = document.documentElement.classList.toggle('running')
if(state.idRunning){
timer.countdown()
}else{
timer.hold()
}
})

//button stop
el.buttonPause.addEventListener('click', () => {
timer.reset()
})

el.buttonPlus.addEventListener('click', () => {
let newMinutes = controls.sumMinutes()

timer.updateDisplay(newMinutes, 0)
timer.updateMinutes(newMinutes)
})

el.buttonMinus.addEventListener('click', () => {
let newMinutes = controls.subtractMinutes()

timer.updateDisplay(newMinutes, 0)
timer.updateMinutes(newMinutes)
})

//Events sounds
//florest
el.buttonTree.addEventListener('click', () => {
sounds.resetSounds()
controls.removeColors()
state.isMute = document.documentElement.classList.toggle('music-on')
if(state.isMute && (!el.buttonTree.classList.contains("hideColor"))){
sounds.florestaAudio.play()
el.buttonTree.classList.add("hideColor")
}else{
sounds.florestaAudio.pause()
el.buttonTree.classList.remove("hideColor")
}})

//cloud
el.buttonCloud.addEventListener('click', () => {
sounds.resetSounds()
controls.removeColors()
state.isMute = document.documentElement.classList.toggle('music-on') 
if(state.isMute && (!el.buttonCloud.classList.contains("hideColor"))){
sounds.chuvaAudio.play()
el.buttonCloud.classList.add("hideColor")
}else{
sounds.chuvaAudio.pause()  
el.buttonCloud.classList.remove("hideColor")  
}})

//flame
el.buttonFlame.addEventListener('click', () => {
controls.removeColors()
sounds.resetSounds()
state.isMute = document.documentElement.classList.toggle('music-on') 
if(state.isMute && (!el.buttonFlame.classList.contains("hideColor"))){
sounds.LareiraAudio.play()
el.buttonFlame.classList.add("hideColor")
}else{
sounds.LareiraAudio.pause()   
el.buttonFlame.classList.remove("hideColor") 
}})

//store
el.buttonStore.addEventListener('click', () => {
sounds.resetSounds()
controls.removeColors()
state.isMute = document.documentElement.classList.toggle('music-on')
if(state.isMute && (!el.buttonStore.classList.contains("hideColor"))){
sounds.cafeteriaAudio.play()
el.buttonStore.classList.add("hideColor")
}else{
sounds.cafeteriaAudio.pause()
el.buttonStore.classList.remove("hideColor")    
}})

