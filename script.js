let input = document.getElementById("inputt")
let button = document.getElementById("pri-botao")
let paragra = document.getElementById("paragra-tarefa")
let tarefas = document.getElementById("tarefas")

let arraydetarfes = []
recarrega()

function mostratarefa() {



    let novali = " "
    arraydetarfes.forEach((tarefa, index) => {


        novali += `<li class="tare ${tarefa.fgt === true ? "fgt" : ""}">
        <button class="foguete" onclick="concretizatarefa(${index})">
        <i class='bx bxs-rocket'></i>
        </button>

        <p class="paragrafo ${tarefa.fgt === true ? "fgt" : ""}" id="paragra-tarefa">${tarefa.tarefa}</p>

        <button class="delete" onclick="deletetarefas(${index})">
        <i class='bx bxs-trash' ></i>
        </button>

         </li>`


    })

    tarefas.innerHTML = novali
    localStorage.setItem("lista", JSON.stringify(arraydetarfes))


}



function deletetarefas(index) {

    arraydetarfes.splice(index, 1)


    mostratarefa()
}

function adcntarefas() {

    if (input.value) {

        arraydetarfes.push({
            tarefa: input.value,
            status: false
        })
    } else {

        alert("É obrigatório adicionar uma tarefa.")
    }

    localStorage.setItem("lista", JSON.stringify(arraydetarfes))

    input.value = ""
    mostratarefa()
}


function concretizatarefa(index) {
    arraydetarfes[index].fgt = !arraydetarfes[index].fgt

    mostratarefa()

}

function recarrega() {
    let minhastarefas = localStorage.getItem("lista")

    if (minhastarefas) {
        arraydetarfes = JSON.parse(minhastarefas)
        mostratarefa()
    }




}

function pressionar(teclas) {
    if (teclas.key === "Enter") {
        adcntarefas()
    }
}

button.addEventListener("click", adcntarefas)

document.addEventListener("keypress", pressionar)