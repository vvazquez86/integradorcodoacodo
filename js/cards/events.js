//EVENTS

const cardEnter = (e) => {
    const { index } = e.target.dataset
    changeColor(e.target, index, false)
}

const cardLeave = (e) => {
    const { index } = e.target.dataset
    changeColor(e.target, index, true)
}

const clickCard = (e) => {
    selected = e.currentTarget.dataset.index    
    eventsAssignmentAll()
}

const alerta = ()=>{
    Swal.fire(
        'Alerta',
        'Recuerde que debe seleccionar su descuento en el formulario',
        'question'
      )
}

const eventAssignment = (container) => {
    container.addEventListener('mouseenter', cardEnter);
    container.addEventListener('mouseleave', cardLeave);
    container.addEventListener('click', alerta)

}

const eventsCleaner = (container) => {
    container.removeEventListener('mouseenter', cardEnter);
    container.removeEventListener('mouseleave', cardLeave);
    container.removeEventListener('click', clickCard)
}

const eventsAssignmentAll = () => {

    for (let container of cardsContainer) {

        eventsCleaner(container)

        const { index } = container.dataset

        if (index !== selected) {
            eventAssignment(container)
            changeColor(container, index, true)            
        }

    }
}

//EVENTOS ASIGNADOS

eventsAssignmentAll()
