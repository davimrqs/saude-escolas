const resultDiv = document.getElementById('result');
//document.getElementById('ganhadorImagem').classList.remove('hidden');
//document.getElementById('ganhadorImagem').classList.add('hidden');
//teste

let points = 0;
const questions = document.querySelectorAll('.question');

function resetarJogo() {
    const menu = document.querySelector(".quiz-container");
    const img = document.getElementById("imagemGanhador");
    const img2 = document.getElementById("imagemPerdedor");
    const buttons = document.querySelector(".quiz-container__buttons"); 
    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(function(radio) {
        radio.checked = false;
    });
    points = 0;
    buttons.style.display = "none";
    img.style.display = "none";
    img2.style.display = "none";
    menu.classList.remove("hidden");
    document.getElementById("result").style.display = "none";
}

// Trocar de código para pegar o ID do quiz e adicionar um listener event para submit
function showResult() {
    let teste = 0;
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');
    const q4 = document.querySelector('input[name="q4"]:checked');
    const questions = document.querySelectorAll('.question');
    let formIsValid = true;
    const respostasCorretas = {
        "q1": "b",
        "q2": "a",
        "q3": "c",
        "q4": "b"
    };
    questions.forEach(function(question) {
        const selected = question.querySelector('input[type="radio"]:checked')
        if (selected) {
            teste++;
        }
        if (teste < questions.length) {
            formIsValid = false;
        if (!formIsValid){
            document.getElementById('result').innerHTML = "Selecione todas as opções antes de enviar o texto.";
            document.getElementById('result').style.color = "red";
            return;
        }
        }else{
            questions.forEach(function(question) {
                let teste = question.querySelector('input[type="radio"]:checked');
                if (teste.value == respostasCorretas[teste.name]){
                    points++;
                }
                console.log(question.querySelector('input[type="radio"]:checked'));
            })
            
            // Fazer com que suma o quiz-container
            const menu = document.querySelector(".quiz-container");
            const img = document.getElementById("imagemGanhador");
            const img2 = document.getElementById("imagemPerdedor");
            const buttons = document.querySelector(".quiz-container__buttons");
            buttons.style.display = "flex";
            menu.classList.add("hidden");
            document.getElementById("result").style.display = "flex";
            if (points == 4){
                document.getElementById('result').innerHTML = "Você acertou todas as questões. Parabéns!";
                document.getElementById('result').style.color = "green";
                img.style.display = "flex";
                img2.style.display = "none";
            }else if (points > 0 ){
                document.getElementById('result').innerHTML = "Você acertou  " + points + " questões de 4. Parabéns!";
                document.getElementById('result').style.color = "orange";
                img.style.display = "flex";
                img2.style.display = "none";
            }else{
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

// Feedback
var allStars = document.querySelectorAll('.star');
function enviarFeedback() {
    alert("Função ainda não atribuída.");
}
function limparFeedback(event) {
    event.preventDefault();
    document.querySelector('textarea[name="resenha"]').value = "";

    allStars.forEach(function(s, i){
        if (s.classList.contains('ativo')) {
            s.classList.remove('ativo');
        }
        if (i == 0) {
            s.classList.add('ativo');
        }
    });

};

document.addEventListener('click', function(e) {
    var clickedStar = e.target.classList;
    if (clickedStar.contains('star')) {
        if (!clickedStar.contains('ativo')) {
            allStars.forEach(function(star){
                star.classList.remove('ativo');
            });
            clickedStar.add('ativo');
        }
    }
});
