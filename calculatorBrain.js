// Variaveis globais
var result = document.getElementById("result");
var n1=0, n2=0, operacao=""


function onNumberClicked(numberButton){
    
    if(result.innerHTML == "0"){
        result.innerHTML = numberButton.innerHTML;
    }
    else{
        result.innerHTML += numberButton.innerHTML;
    }
}

function onClearClicked(){
    // Limpar variaveis de memoria
    result.innerHTML = "0";    
    n1=0;
    n2=0;
}

function onEqualsClicked(){
    // Igual
   
    n2 = parseInt(result.innerHTML); // atribuição e conversão para numero 
    if (operacao == "+")
    {
     result.innerHTML = n1+n2;
    }
    if (operacao == "-")
    {
        result.innerHTML = n1-n2;
    }
    if (operacao == "*")
    {
        result.innerHTML = n1*n2;
    }
    if (operacao == "/" )
    {
        if (n2>0)
        {
            result.innerHTML = n1/n2;
        }
        else
        {
            result.innerHTML = "Não pode dividir por zero";
        }
        
    }
   
    



}

function onDivideClicked(){
    // Dividir
    n1 =  result.innerHTML   
    n1 = parseInt (n1) ; // retirar as aspas do n1 
    operacao = "/";
    result.innerHTML="0";

    
}



function onAddClicked(){
    //TODO Adição
    n1 =  result.innerHTML   
    n1 = parseInt (n1) ; // retirar as aspas do n1 
    operacao = "+";
    result.innerHTML="0";


}

function onSubtractClicked(){
    //TODO Subtração
    n1 =  result.innerHTML   
    n1 = parseInt (n1) ; // retirar as aspas do n1 
    operacao = "-";
    result.innerHTML="0";

}

function onMultiplyCliked(){
    //TODO Multiplicação
    
    n1 =  result.innerHTML   
    n1 = parseInt (n1) ; // retirar as aspas do n1 
    operacao = "*";
    result.innerHTML="0";

}

