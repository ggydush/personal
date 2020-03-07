const videoBtn = document.querySelector('#videoBtn')
const overlay = document.querySelector('.overlay')
const video = document.querySelector('#video')

videoBtn.addEventListener('click', (e) => {
    e.preventDefault()
    overlay.classList.toggle('show')
    video.classList.toggle('show')
})

overlay.addEventListener('click', () => {
    overlay.classList.remove('show')
    video.classList.remove('show')
})
