
//função para botao
function clicou(){
    document.getElementById("Obrigado por clicar").innerHTML = "Obrigado por clicar";
    //console.log(document.getElementById("Obrigado por clicar"))
}

//função para redirecionar o click do botão para uma página
function redirecionar(){
    window.open("https://www.lojanba.com/");
   //usando esse comando, abre a pagina dentro da mesma janela e não leva para outra aba
    // window.location.href ="https://www.lojanba.com/"
}
//função para direcionar o cursor pela página, como manipulalo
function trocar(eLemento){
   // document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
  // alert("trocar texto");
  eLemento.innerHTML = " Obrigado por passar o mouse";
}

function voltar(eLemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    eLemento.innerHTML = " Passe o mouse aqui";
}

//função para dar mais estrutura para o <body></body>
function load(){
    alert("Pagina carregada")
}
//função de valores, cria um botao lista de valor
function funcaoChange(elemento){
    console.log(elemento.value)
}







/* funções e variaveis
function validaridade(idade){
    var validar;
    if (idade >=18){
        validar = true

    }else {
        validar = false
    }
    return validar;
}
var idade = prompt("Qual a sua idade ?");
console.log(validaridade(idade));

*/



//function soma(n1, n2){
    //return n1 + n2;
//}


//alert(soma(6,8));




/* data do dia
var d = new Date();
alert(d);
alert(d.getDay());
alert(d.getHours());
alert(d.getMninutes());
*/


/* outro laço de repetição
var count;
for(count=1; count <=6;count++ );
alert(count);
*/




/* laços de repetição
var count = 0;
while (counte <=5){
    console.log(count);
    alert(count);
    counte++;
};

*/


/* estrutura condicional
var idade = prompt("Qual a sua idade?");

if (idade >= 18){
alert("Maior de idade");
}else{
    alert("Menor de idade");
};
*/




//var nba = [{teams: "Lakers", region: "Oeste"}, {teams: "Clippers", region: "Oeste"}]
//console.log(nba)
//alert(nba[1].teams)



/*
var nba = {team : "Lakers", region:"Oeste"}
console.log(nba);
alert(nba.team);
*/

//var times =["bulls", "bucks", "nets", "wizards"];
//times.push("suns");
//times.pop("nets");
//console.log(times.reverse());
//console.log(times.toString())
//console.log(times.join(" - "))
//var name = " Matheus Lopes ";
//var idade =  20 ;
//alert( name + " tem " + idade + " anos" );
//var frase = " Lakers, o melhor time de basquete"
//console.log (frase.replace("Lakers","Celtics"));
//alert (frase.replace("Lakers","Celtics"));

