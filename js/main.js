const robotron = document.querySelector("#robotron")

// robotron.addEventListener("click",dizOi)
// robotron.addEventListener("click", function(){
//     console.log('cliquei no robo');
// })

robotron.addEventListener("click", (evento) => {
    console.log(evento);
})

function dizOi(nome){
    console.log("Oi "+ nome)
    console.log('Bem-vindo ao Robotron 2000')
}

dizOi('Carmo')