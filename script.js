const block = document.querySelector('.block')
const inputX = document.querySelector('#x')
const inputY = document.querySelector('#y')
const inputV = document.querySelector('#v')
const inputR = document.querySelector('#r')
const color = document.querySelector('#color')
const css = document.querySelector('.css')
const b = document.querySelector('#b')

block.style.boxShadow = `${inputX.value}px ${inputY.value}px ${inputV.value}px ${inputR.value}px ${color.value}`

inputX.addEventListener('input', () => {
    block.style.boxShadow = `${inputX.value}px ${inputY.value}px ${inputV.value}px ${inputR.value}px ${color.value}`
    css.innerHTML = `box-shadow: ${inputX.value}px ${inputY.value}px ${inputV.value}px ${inputR.value}px ${color.value}<br>`
    css.innerHTML += `webkit-box-shadow: ${inputX.value}px ${inputY.value}px ${inputV.value}px ${inputR.value}px ${color.value}<br>`
    css.innerHTML += `moz-box-shadow: ${inputX.value}px ${inputY.value}px ${inputV.value}px ${inputR.value}px ${color.value}`
})

inputY.addEventListener('input', () => {
    block.style.boxShadow = `${inputX.value}px ${inputY.value}px ${inputV.value}px ${inputR.value}px ${color.value}`
    css.innerHTML = `box-shadow: ${inputX.value}px ${inputY.value}px ${inputV.value}px ${inputR.value}px ${color.value}<br>`
    css.innerHTML += `webkit-box-shadow: ${inputX.value}px ${inputY.value}px ${inputV.value}px ${inputR.value}px ${color.value}<br>`
    css.innerHTML += `moz-box-shadow: ${inputX.value}px ${inputY.value}px ${inputV.value}px ${inputR.value}px ${color.value}`
})

inputV.addEventListener('input', () => {
    block.style.boxShadow = `${inputX.value}px ${inputY.value}px ${inputV.value}px ${inputR.value}px ${color.value}`
    css.innerHTML = `box-shadow: ${inputX.value}px ${inputY.value}px ${inputV.value}px ${inputR.value}px ${color.value}<br>`
    css.innerHTML += `webkit-box-shadow: ${inputX.value}px ${inputY.value}px ${inputV.value}px ${inputR.value}px ${color.value}<br>`
    css.innerHTML += `moz-box-shadow: ${inputX.value}px ${inputY.value}px ${inputV.value}px ${inputR.value}px ${color.value}`
})

inputR.addEventListener('input', () => {
    block.style.boxShadow = `${inputX.value}px ${inputY.value}px ${inputV.value}px ${inputR.value}px ${color.value}`
    css.innerHTML = `box-shadow: ${inputX.value}px ${inputY.value}px ${inputV.value}px ${inputR.value}px ${color.value}<br>`
    css.innerHTML += `webkit-box-shadow: ${inputX.value}px ${inputY.value}px ${inputV.value}px ${inputR.value}px ${color.value}<br>`
    css.innerHTML += `moz-box-shadow: ${inputX.value}px ${inputY.value}px ${inputV.value}px ${inputR.value}px ${color.value}`
})
