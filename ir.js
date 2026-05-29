const salario =
document.getElementById("salario")
const dependentes =
document.getElementById("dependentes")
const pensao =
document.getElementById("pensao")
const valorPensao =
document.getElementById("valorPensao")
const campoPensao =
document.getElementById("campo-pensao")
const button =
document.getElementById("button")
const salarioBrutoResultado =
document.getElementById("salarioBrutoResultado")
const valorInss =
document.getElementById("valorInss")
const valorDependentes =
document.getElementById("valorDependentes")
const valorPensaoResultado =
document.getElementById("valorPensaoResultado")
const baseIr =
document.getElementById("baseIr")
const valorIr =
document.getElementById("valorIr")
const salarioLiquido =
document.getElementById("salarioLiquido")


pensao.addEventListener("change", () => {

    if(pensao.value === "sim"){
campoPensao.style.display = "block"
    }else{
campoPensao.style.display = "none"
    }
})

function abrirCalculadora(){

    document.getElementById("calculadora").style.display = "block"
    document.getElementById("home").style.display = "none"
}

function abrirHome(){

    document.getElementById("calculadora").style.display = "none"
    document.getElementById("home").style.display = "block"
}

button.addEventListener("click", calcular)

function calcularINSS(salarioBruto){

    let inss = 0

    if(salarioBruto <= 1621){
inss =salarioBruto * 0.075
    }else if(salarioBruto <= 2902.84){
inss =((salarioBruto - 1621) * 0.09)+ 121.58
     }else if(salarioBruto <= 4354.27){
        inss =((salarioBruto - 2902.84) * 0.12) + 115.37 + 121.58
    }else if(salarioBruto <= 8475.55){
        inss =((salarioBruto - 4354.27) * 0.14) + 174.17 + 115.37 + 121.58
    }else{
inss = 988.10
    }return inss
}
function calcular(){
    let salarioBruto =
    Number(salario.value)
    let inss =
    calcularINSS(salarioBruto)
    let descontoDependentes =
    Number(dependentes.value) * 189.90
    let valorPensaoFinal = 0
    if(pensao.value === "sim"){
        valorPensaoFinal = Number(valorPensao.value)}
    let baseCalculo =
    salarioBruto
    - inss
    - descontoDependentes
    - valorPensaoFinal
    let ir = 0
    if(baseCalculo <= 2259.20){
     ir = 0
    }else if(baseCalculo <= 2826.65){
        ir = (aseCalculo * 0.075)- 169.44
    }else if(baseCalculo <= 3751.05){
         ir= 
        (baseCalculo * 0.15)
        - 381.44
    }else if(baseCalculo <= 4664.68){
        ir =(baseCalculo * 0.225)- 662.77
    }else{
        ir = (baseCalculo * 0.275)- 896
    }
    let liquido =
    salarioBruto
    - inss
    - ir
    - valorPensaoFinal
    salarioBrutoResultado.innerHTML =
    `R$ ${salarioBruto.toFixed(2)}`
    valorInss.innerHTML =
    `R$ ${inss.toFixed(2)}`
    valorDependentes.innerHTML =
    `R$ ${descontoDependentes.toFixed(2)}`
    valorPensaoResultado.innerHTML =
    `R$ ${valorPensaoFinal.toFixed(2)}`
    baseIr.innerHTML =
    `R$ ${baseCalculo.toFixed(2)}`
    valorIr.innerHTML =
    `R$ ${ir.toFixed(2)}`
    salarioLiquido.innerHTML =
    `R$ ${liquido.toFixed(2)}`
}