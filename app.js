const resultDiv = document.getElementById('result');
//document.getElementById('ganhadorImagem').classList.remove('hidden');
//document.getElementById('ganhadorImagem').classList.add('hidden');

let points = 0;

function resetarJogo() {
    points = 0;
}

function showResult() {
    event.preventDefault();
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const questions = document.querySelectorAll('.question');
    const respostasCorretas = {
        "q1": "b",
        "q2": "a"
    };
    console.log(q1);
    console.log(q2);
    questions.forEach(function(question) {
        const selected = question.querySelector('input[type="radio"]:checked')
        if (!selected) {
            document.getElementById('result').innerHTML = "Selecione todas as opções antes de enviar o texto.";
            document.getElementById('result').style.color = "red";
        }else{
            const name = selected.name;
            if (selected.value == respostasCorretas[name]){
                points++;
            }
            // Fazer com que suma o quiz-container
            const menu = document.querySelector(".quiz-container");
            const img = document.getElementById("imagemGanhador");
            const img2 = document.getElementById("imagemPerdedor");
            const buttons = document.querySelector(".quiz-container__buttons");
            buttons.style.display = "flex";
            menu.classList.add("hidden");
            if (points == 2){
                document.getElementById('result').innerHTML = "Você acertou!";
                document.getElementById('result').style.color = "red";
                img.style.display = "flex";
                img2.style.display = "none";
            }else if (points > 0 ){
                document.getElementById('result').innerHTML = "Você acertou com " + points + "tentativas.";
                document.getElementById('result').style.color = "red";
                img.style.display = "flex";
                img2.style.display = "none";
            }else{
                console.log(points);
                img.style.display = "none";
                img2.style.display = "flex";
                document.getElementById('result').innerHTML = "<strong>Paciência</strong>... tente novamente!";
                document.getElementById('result').style.color = "red";
            }
        }
    })
}

// Menu responsivo
// document.getElementById("open-menu").onclick = function() {openMenu()};

// Arrow function "() =>" é uma abreviação para "function()"

const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const menu = document.querySelector(".menu__nav");
const menuLinks = document.querySelectorAll(".menu__nav a");

openMenu.addEventListener('click', () => {
    menu.classList.add("open");
});

menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        menu.classList.remove("open");
    })
});

closeMenu.addEventListener('click', () => {
    menu.classList.remove("open");
});