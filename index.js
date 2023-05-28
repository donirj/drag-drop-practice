
console.log('hola amigo')

const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll('.seccion')
const basuras = document.querySelectorAll('.basura')

parrafos.forEach(parrafo => {
    parrafo.addEventListener('dragstart', event =>{
        console.log('estoy arrastrando el parrafo: ' + parrafo.innerText)
        parrafo.classList.add('dragging')
        event.dataTransfer.setData('id', parrafo.id)
    })

    parrafo.addEventListener('dragend', () => {
        // console.log('He terminado de arrastrar')
        parrafo.classList.remove('dragging')
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener('dragover', event => {
        event.preventDefault()
        console.log('drag over')
    })

    seccion.addEventListener('drop', event => {
        console.log('drop')
        const id_parrafo = event.dataTransfer.getData("id")
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
        
    })

})

basuras.forEach(basura => {
    basura.addEventListener('dragover', event => {
        event.preventDefault()
        console.log('drag over basura')
    })

    basura.addEventListener('drop', event => {
        console.log('drop')
        const id_parrafo2 = event.dataTransfer.getData('id')
        const parrafo2 = document.getElementById(id_parrafo2)
        basura.appendChild(parrafo2).remove()
    })
})