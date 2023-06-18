//Variables

const price = 200
const categories = {
    e: { percent: 80, value: '0'},
    j: { percent: 50, value: '1'},
    t: { percent: 15, value: '2'},
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

