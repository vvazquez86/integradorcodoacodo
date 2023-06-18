//UTILS

const resetCategories = () =>{
    total = null
    selected = null
    eventsAssignmentAll()
    span.innerText = ''
}

const setCategory = (e)=>{
    const option = e.target.value
    
    if (option === 'none'){        
        resetCategories()               
        return
    }

    category = option
    const index = categories[category].value
    
    container = cardsContainer[index]
    selected = index
    totalPrice()     
    changeColor(container, index)
    eventsAssignmentAll()
}

const setQuantity = (e)=>{
    const { value } = e.target

    if (value < 0 || isNaN(value)){
        e.target.value = 0
        total = null
        return
    }

    quantity = value
    totalPrice()
}

form.category.addEventListener('change', setCategory)
form.quantity.addEventListener('change', setQuantity)
form.quantity.addEventListener('keyup', setQuantity)
form.addEventListener('submit', submit)
