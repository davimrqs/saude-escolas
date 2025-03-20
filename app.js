const resultDiv = document.getElementById('result');
//document.getElementById('ganhadorImagem').classList.remove('hidden');
//document.getElementById('ganhadorImagem').classList.add('hidden');

let points = 0;
function resetarJogo() {

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
            console.log(points);
            // Fazer com que suma o quiz-container
            if (points == 2){
                document.getElementById('result').innerHTML = "Você acertou!";
                document.getElementById('result').style.color = "red";
            }else{
                document.getElementById('result').innerHTML = "Você acertou com " + points + "tentativas.";
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

openMenu.addEventListener('click', () => {
    menu.classList.add("open");
});

closeMenu.addEventListener('click', () => {
    menu.classList.remove("open");
});