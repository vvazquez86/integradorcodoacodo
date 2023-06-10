//Variables

const price = 200
const categories = {
    e: { percent: 80, value: 'e'},
    j: { percent: 50, value: 'j'},
    t: { percent: 15, value: 't'},
}
let quantity = null
let category = null
let total = null


//Camputaras del DOM

const form = document.forms.formulario
const inputs = form.getElementsByTagName('input')
const select = form.getElementsByTagName('select')[0]
const totalTag = document.getElementById('total')
const btnClear = document.getElementById('clear')
const btnSubmit = document.getElementById('submit')
const span = document.getElementById('spanPrice')

//Funciones

//Funcio para calcular el precio y mostrarlo en el span

const totalPrice = () =>{
    
    if(!quantity || !category) return;

    const totalValue = price * quantity
    const discount = (totalValue/100) * categories[category].percent      
    total = totalValue - discount
    span.innerText = total

}

//Funcion del boton borrar

const reset = (e) =>{
    e.preventDefault()
    for (let i of inputs)
        i.value=''
    select.value = 'none'
    resetCategories()
}

btnClear.addEventListener('click', reset)

//Funcion del boton resumen

const submit = (e) =>{
    e.preventDefault()
    
    const { firstname, lastname, email, quantity, category } = form
    const verified = {
        firstname: firstname.value !== '', 
        lastname: lastname.value !== '', 
        email: email.value.includes('@'), 
        quantity: quantity.value > 0, 
        category: category.value !== 'none'
    }

    const values = Object.values(verified)
    const submitAccepted = values.every(value => value)

    submitAccepted ? alert ('Compra Exitosa') : alert('Debe completar todos los campos del formularios')
}

const resetCategories = () =>{
    total = null
    selectd = null
    eventsAssignmentAll()
    span.innerText = ''
}

const setCategory = (e)=>{
    const option = e.target.value
    
    if(option === 'none'){
        resetCategories()
        return
    }

    category = option

    //condigo a implementar
    // const index = categories[category].value
    // const container = cardsContainer[index]

    // selected = index
    // changeColor(container, index)
    // eventsAssignmentAll()
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
