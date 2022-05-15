let input = document.getElementById('textInput')
console.log(input.innerHTML)

let counter = 0;
let getData = () => {
   
}
let id;
function debouncer(fn, delay) {
   
    return () => {
        if(id) clearTimeout(id)
        id = setTimeout(() => {
            fn()
        },delay)
    }
}
let betterFunction = debouncer(getData, 2000);