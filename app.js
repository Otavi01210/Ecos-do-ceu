<p>Mensagem Inicial</p>

//cria array   0      1     2
let frases = ["F1", "F2", "F3"];

//gera as frases 
function geradorMensagem(){
let indiceGerado = Math.floor(Math.random()*(frases.length));
let fraseGerada = frases [indiceGerado];
console.log(fraseGerada);






}

geradorMensagem();