        // Mudar o imput senha para um input de texto
const ocultar_senha = document.querySelector('span#senha_oculta')
const input_senha = document.querySelector('input#senha')

function mudar_type() {
    if (input_senha.type == "password") {
        input_senha.type = "text"
        ocultar_senha.innerHTML = "Visibility"
    }
    else if (input_senha.type == 'text') {
        input_senha.type = "password"
        ocultar_senha.innerHTML = "Visibility_off"
    }
}

ocultar_senha.addEventListener( 'click', mudar_type )



        // Aviso que não contem Back-end
const esqueceu = document.querySelector('a#esqueceu')

function avisar() {
    alert('Este site ainda não contem Back-end')
}

esqueceu.addEventListener('click', avisar)