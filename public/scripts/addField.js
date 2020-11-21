// Procurar o botao
document.querySelector("#add-element")
// Quando clicar no botao
.addEventListener('click', cloneField)

// Executar uma acao
function cloneField() {
    // Duplicar os campos. Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) // boolean: true ou false 

    // pegar os campos. que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    // para cada campo, limpar
    fields.forEach(function(field) {
        // pega o field do momento e limpa ele
        field.value = ""
    })

    // Colocar na página: onde??
    //document.querySelector('#schedule-items').appendChild(newFieldContainer) //Add os campos no final
    document.querySelector('#schedule-items').insertAdjacentElement('afterbegin', newFieldContainer) //Add os campos no início 
}