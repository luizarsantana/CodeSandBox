console.log("banana não é verdura");

conta = 1+1;
console.log(conta);

let n = 7; // pode ser var 
for(var i=0; i<n; i++) // "i++" pega o i anterior e soma +1 até chegar o limite determinado
{
    console.log("contando: "+i); // "+i" para aparecer os valores
}

$(document).ready(function()
{
    $("#macarrão").html("Porções:"+conta);
    $.get("http://127.0.0.1:3000/tudo", function(resultado)
    {
        console.log(resultado);
        $("canja").html(resultado);
    })
});


console.log("Mandioquinha");