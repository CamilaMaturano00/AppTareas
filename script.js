const btnAgregar = document.querySelector("[data-form-btn]");
const createTask = (evento) =>{
    evento.preventDefault()
    const input = document.querySelector("[data-form-input]")
    console.log(input.value);

}
//Arrow functions
btnAgregar.addEventListener("click", createTask);

