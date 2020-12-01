function openModal() {
    var openLogin = document.getElementById('loginGames');
    openLogin.style.height = '75vh';
    openLogin.style.background = 'rgb(40,120,189)';
    openLogin.style.background = 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(54,70,70,0.9051217899269083) 43%, rgba(56,56,56,0.9443374762014181) 59%, rgba(55,55,54,1) 100%)';
    openLogin.style.width = '30%';
    openLogin.style.zIndex = '2';
    openLogin.style.position = 'fixed';
    openLogin.style.transform = 'translate(-50%, -50%)';
    openLogin.style.top = '50%';
    openLogin.style.left = '50%';
    openLogin.style.borderRadius = '15px';
    openLogin.style.display = 'block';
    document.getElementById('btn_entrar').style.display = 'block';
}

function closeModal() {
    var closeLogin = document.getElementById('loginGames');
    closeLogin.style.display = 'none';
    closeLogin.style.height = '0';
}

function openModalCad() {
    var openCadastro = document.getElementById('cadastroGames');
    openCadastro.style.height = '75vh';
    openCadastro.style.background = 'rgb(40,120,189)';
    openCadastro.style.background = 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(54,70,70,0.9051217899269083) 43%, rgba(56,56,56,0.9443374762014181) 59%, rgba(55,55,54,1) 100%)';
    openCadastro.style.width = '30%';
    openCadastro.style.zIndex = '2';
    openCadastro.style.position = 'fixed';
    openCadastro.style.transform = 'translate(-50%, -50%)';
    openCadastro.style.top = '50%';
    openCadastro.style.left = '50%';
    openCadastro.style.borderRadius = '15px';
    openCadastro.style.display = 'block';
    document.getElementById('btn_cadastrar').style.display = 'block';
}

function closeModalCad() {
    var closecadastro = document.getElementById('cadastroGames');
    closecadastro.style.display = 'none';
    closecadastro.style.height = '0';
}


/* funcões login */

function entrar() {
    // aguardar();
    var formulario = new URLSearchParams(new FormData(form_login));
    fetch("/usuarios/autenticar", {
        method: "POST",
        body: formulario
    }).then(resposta => {

        if (resposta.ok) {

            resposta.json().then(json => {

                sessionStorage.login_usuario_meuapp = json.loginUser;
                sessionStorage.nome_usuario_meuapp = json.nomeUser;
                window.location.href = "games.html";
            });

        } else {

            console.log('Erro de login!');

            resposta.text().then(texto => {
                console.error(texto);
                // finalizar_aguardar(texto);
            });
        }
    });

    return false;
}

let login_usuario;
let nome_usuario;

function redirecionar_login() {
    window.location.href = 'index.html';
}

function verificar_autenticacao() {
    login_usuario = sessionStorage.login_usuario_meuapp;
    nome_usuario = sessionStorage.nome_usuario_meuapp;

    if (login_usuario == undefined) {
        redirecionar_login();
    } else {
        user.innerHTML = nome_usuario;
        validar_sessao();
    }

}

function logoff() {
    finalizar_sessao();
    sessionStorage.clear();
    redirecionar_login();
}

function validar_sessao() {
    fetch(`/usuarios/sessao/${login_usuario}`, { cache: 'no-store' })
        .then(resposta => {
            if (resposta.ok) {
                resposta.text().then(texto => {
                    console.log('Sessão :) ', texto);
                });
            } else {
                console.error('Sessão :.( ');
                logoff();
            }
        });
}

function finalizar_sessao() {
    fetch(`/usuarios/sair/${login_usuario}`, { cache: 'no-store' });
}

/* FUNÇÃO DE CADASTRAR */

function cadastrar() {
    // aguardar();
    var formulario = new URLSearchParams(new FormData(form_cadastro));
    fetch("/usuarios/cadastrar", {
        method: "POST",
        body: formulario
    }).then(function (response) {
        
        if (response.ok) {

            // window.location.href='login.html';
            alert('Cadastro efetuado!')

        } else {

            console.log('Erro de cadastro!');
            response.text().then(function (resposta) {
                div_erro.innerHTML = resposta;
            });
            // finalizar_aguardar();
        }
    });

    return false;
}

// function aguardar() {
//     btn_entrar.disabled = true;
//     img_aguarde.style.display='block';
//     div_erro.style.display='none';
// }

// function finalizar_aguardar() {
//     btn_entrar.disabled = false;
//     img_aguarde.style.display='none';
//     div_erro.style.display='block';
// }