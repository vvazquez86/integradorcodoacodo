//UTILS
const colors = ['bg-primary', 'bg-warning', 'bg-success']
const transparent = 'bg-transparent'

const changeColor = (container, index, revert) => {
    const i = Number(index)
    revert
        ? container.classList.replace(colors[i], transparent)
        : container.classList.replace(transparent, colors[i])
}