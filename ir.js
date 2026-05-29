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
/* RESULTADOS */
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
/* TROCAR TELAS */
function abrirHome(){
    document.getElementById("home")
    .style.display = "flex"
    document.getElementById("calculadora")
    .style.display = "none"
}
function abrirCalculadora(){
    document.getElementById("home").style.display = "none"
    document.getElementById("calculadora").style.display = "flex"
}
/* PENSÃO */
pensao.addEventListener("change", () => {
    if(pensao.value == "sim"){
        campoPensao.style.display = "block"
    }else{
        campoPensao.style.display = "none"
    }
})
/* CALCULAR INSS */
function calcularINSS(){
    let inss = 0
    const salarioBruto =
    Number(salario.value)
    if(salarioBruto <= 1621){
        inss =
        salarioBruto * 0.075
    }else if(
        salarioBruto > 1621
        && salarioBruto <= 2902.84
    ){
        inss =
        (salarioBruto - 1621)
        * 0.09 + 121.58
    }else if(
        salarioBruto > 2902.84
        && salarioBruto <= 4354.27
    ){
        inss =
        (salarioBruto - 2902.84)
        * 0.12 + 115.37 + 121.58
    }else if(
        salarioBruto > 4354.27
        && salarioBruto <= 8475.55
    ){
        inss =
        (salarioBruto - 4354.27)
        * 0.14 + 115.37
        + 121.58 + 174.17
    }else{
        inss = 988.10
    }
  return inss
} 
/* CALCULAR IR */
function calcularIr(base){
    let ir = 0
    if(base < 5000){
        ir = 0
    }else if(
        base >= 5000
        && base <= 7350
    ){
        let reducao =
        978.62 - (0.13314 * base)
        ir =
        base * 0.275
        - 908.73
        - reducao
    }else{
        ir =
        base * 0.275
        - 908.73
    }
    return ir
}
/* CALCULAR */
document.getElementById("button")
.addEventListener("click", calcular)

    function calcular(){

    let bruto =
    Number(salario.value)
    let inss =
    calcularINSS()
    let dep =
    Number(dependentes.value)
    * 189.90
    let pensaoValor = 0
    if(pensao.value == "sim"){
        pensaoValor =
        Number(valorPensao.value)
    }
    let base =
    bruto
    - inss
    - dep
    - pensaoValor
    let ir =
    calcularIr(base)
    let liquido =
    bruto
    - inss
    - ir
    - pensaoValor
    salarioBrutoResultado.innerHTML =
    `R$ ${bruto.toFixed(2)}`
    valorInss.innerHTML =
    `R$ ${inss.toFixed(2)}`
    valorDependentes.innerHTML =
    `R$ ${dep.toFixed(2)}`
    valorPensaoResultado.innerHTML =
    `R$ ${pensaoValor.toFixed(2)}`
    baseIr.innerHTML =
    `R$ ${base.toFixed(2)}`
    valorIr.innerHTML =
    `R$ ${ir.toFixed(2)}`
    salarioLiquido.innerHTML =
    `R$ ${liquido.toFixed(2)}`
    }
document.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        calcular()
    }
    })
const campos = document.querySelectorAll(
"input, select"
)
campos.forEach((campo, index) => {
    campo.addEventListener("keydown", (e) => {
        if(e.key === "Enter"){
            e.preventDefault()
            let proximo =
            campos[index + 1]
            if(proximo){
                proximo.focus()
            }else{
                calcular()
            }
        }
    })
})