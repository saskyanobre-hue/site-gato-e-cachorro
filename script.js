alert("Olá, mundo");
let nome = prompt("Qual é o seu nome?");
console.log("Olá mundo!");
let idade = 17;

if(idade >=18){

    alert("Maior de idade");
}else{
    alert("Menor de idade");
}
switch(opcao){
    case 1:
        alert("Cadastrar");

        break;
        case 2:
            alert("Editar");

            break;

            default:
                alert("Opção inválida");
}

function saudacao(nome){

    alert("Olá " + nome);

}

saudacao("Maria");

let contador = 1;

while(contador <=5){

    alert(contador);

    contador++;
}

for(let i=1; i<=10; i++){

    alert(i);
}

let titulo =
document.getElementById("titulo");

titulo.style.color = "blue";

titulo.innerHTML = "Olá, turma!";



function mensagem(){
    document.getElementById("foto").src =
"https://dobermann.com/wp-content/uploads/2024/02/puppy-doberman-pinscher-in-studio-2023-11-27-05-02-19-utc.jpg";
    alert("você clicou!")
}

