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
    Swal.fire(
        'Reset completo',
        'Formulario limpio',
        'warning'
    )
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

    submitAccepted 
    
    ? alertSuccess()
    : Swal.fire(
        'Error',
        'Debe completar todos los campos',
        'error'
    )

    const alertSuccess = ()=>{
        reset()
        Swal.fire(
            'Exito',
            'La compra se realizo correctamente!',
            'success'
        )
    }
}