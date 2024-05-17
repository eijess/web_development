let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#subject')
let mensagem = document.querySelector('#message')

function validaNome() {
    let txtNome = document.querySelector('#txtNome')

    if (nome.value.length <= 1){
        txtNome.innerHTML = 'Nome inválido!'
        txtNome.style.color = 'red'
        txtNome.style.top = '-10px'
        txtNome.style.position = 'relative'
    } else {
        txtNome.innerHTML = ''
    }

}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') !== -1 && email.value.indexOf('.com') !== -1 && email.value.indexOf('@') < email.value.indexOf('.com')) { /*confirma se o e-mail tem @ e .com e se o @ antecede o .com*/ 
        txtEmail.innerHTML = 'E-mail Válido'
        txtEmail.style.color = 'green'
        txtEmail.style.position = 'relative'
        txtEmail.style.top = '-10px'
    }else {
        txtEmail.innerHTML = 'E-mail inválido!'
        txtEmail.style.color = 'red'
        txtEmail.style.position = 'relative'
        txtEmail.style.top = '-10px'
    }
}

function validaAssunto() {
    let txtSubject = document.querySelector('#txtSubject')

    if (assunto.value.length > 40){
        txtSubject.innerHTML = 'Máximo de caracteres atingido!'
        txtSubject.style.color = 'red'
        txtSubject.style.position = 'relative'
        txtSubject.style.top = '-10px'
        

    }else{
        txtSubject.innerHTML = ''
    }
}

function validaMensagem() {
    let txtMessage = document.querySelector('#txtMessage')

    if (mensagem.value.length >= 40){
        txtMessage.innerHTML = 'Máximo de caracteres atingido!'
        txtMessage.style.color = 'red'
        txtMessage.style.position = 'relative'
        txtMessage.style.top = '-10px'
        

    }else{
        txtMessage.innerHTML = ''
    }
}