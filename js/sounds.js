export const cafeteriaAudio = new Audio('./assets/Cafeteria.wav')
export const chuvaAudio = new Audio('./assets/Chuva.wav')
export const florestaAudio = new Audio('./assets/Floresta.wav')
export const LareiraAudio = new Audio('./assets/Lareira.wav')
export const mute = false
cafeteriaAudio.loop = true
chuvaAudio.loop = true
florestaAudio.loop = true
LareiraAudio.loop = true

export function resetSounds() {
    cafeteriaAudio.pause()
    chuvaAudio.pause()
    florestaAudio.pause()
    LareiraAudio.pause()
  }
