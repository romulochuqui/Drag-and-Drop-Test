function log(message) {
    console.log('>' + message)
}

/*.........................*/

const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')

cards.forEach(card => {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)
})


function dragstart() {
    //log('DRAG start')
    dropzones.forEach( dropzone => dropzone.classList.add('highlight'))

    this.classList.add('is-dragging')
}

function drag() {
    //log('DRAG')
}

function dragend() {
    //log('DRAG end')
    dropzones.forEach( dropzone => dropzone.classList.remove('highlight'))

    this.classList.remove('is-dragging')
}


/* lugar onde solto os cartões: DROPZONE */ 

dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', drageover)
    dropzone.addEventListener('dragleave', drageleave)
    dropzone.addEventListener('drop', drop)
})

function dragenter() {
    //log('DROPZONE: Enter in zone')
}

function drageover() {

    this.classList.add('over')

    //aqui ele pega o cartão que está sendo arrastado
    const cardBeingDragged = document.querySelector('.is-dragging')

    this.appendChild(cardBeingDragged)
}

function drageleave() {
    //log('DROPZONE: Leave')
    this.classList.remove('over')
}

function drop() {
    //log('DROPZONE: Lropped')
}