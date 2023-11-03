let form = document.querySelector("form")
let input = document.querySelector("#input")
let btn = document.querySelector(".btn")
let result = document.querySelector(".result")
let enter = document.querySelector(".enter")

enter.style.color = "red"


btn.addEventListener("click", changeB)

function changeB(){
    event.preventDefault();
    let value = input.value

    if(value){
        result.innerHTML = value
    }else{
        result.innerHTML = ""
        enter.innerHTML = "Please enter a value to pass"
        setTimeout(() => {
            enter.innerHTML = ""
        },2000)
        
    }
    

    input.value = ""
}
