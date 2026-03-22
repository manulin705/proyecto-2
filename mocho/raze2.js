const boton = document.querySelector('#modo-btn')

boton.addEventListener('click', () => {
    document.body.classList.toggle('modo-claro')
})

let visitas = Number(localStorage.getItem('visitas_raze') || 0)
visitas++
localStorage.setItem('visitas_raze', visitas)