window.addEventListener("load", () => {
    document.querySelector(".reiniciarJogo").addEventListener("click", () => {
        window.location.assign("http://localhost/novoJogoForca/index.html");
    })
    let forca = [];
    const numeroVidaCoracao = 6;
    fetch("http://localhost/novoJogoForca/Model/buscandoPalavras.php").then((response) => {
        return response.json();
    }).then((dados) => {
        forca = [...dados];

    }).catch((erro) => {
        console.log("erro: " + erro);
    })
    let intervalo = setInterval(() => {
        let dicaForca = document.querySelector("span");
        let selecaoPalavra = Math.floor((Math.random() * (forca.length)));
        if (forca[selecaoPalavra]) {
            let palavraForca = forca[selecaoPalavra].palavra.replace(/\s+/, "");
            dicaForca.innerHTML = forca[selecaoPalavra].dica;
            for (let letras of palavraForca) {
                if (letras !== " ") {
                    let input = document.createElement("input");
                    input.setAttribute("maxlength", "1");
                    input.setAttribute("type", "text");
                    input.style.maxHeight = "40vh";
                    input.setAttribute("id", `${letras}`);
                    input.style.maxWidth = "5vw";
                    input.style.marginRight = "18px";
                    input.style.textAlign = "CENTER";
                    input.style.fontSize = "22px";
                    input.textContent;
                    document.querySelector("#lista").appendChild(input);

                }

            }
            for (let x = 0; x < palavraForca.length; x++) {
                document.querySelectorAll("input")[x].addEventListener("blur", (e) => {
                    if (e.target.id.toUpperCase() === e.target.value.toUpperCase()) {
                        document.querySelectorAll("input")[x].setAttribute("disabled", "disabled");
                        document.querySelectorAll("input")[x].style.backgroundColor = "white";
                    } else {
                        if (e.target.value !== "") {

                            if ((document.getElementById("letras").innerHTML.indexOf(e.target.value.toUpperCase())) === -1) {

                                if ((palavraForca.toUpperCase().indexOf(e.target.value.toUpperCase()) === -1)) {

                                    document.getElementById("letras").innerHTML += e.target.value.toUpperCase() + " - ";
                                }

                            }
                            for (let vd = 0; vd <= numeroVidaCoracao; vd++) {
                                if (vd < 5) {
                                    if (document.querySelectorAll("img")[vd].getAttribute("src") === './imagens/coracao_cheio.png') {
                                        document.querySelectorAll("img")[vd].setAttribute("src", './imagens/coracao_vazio.png');
                                        break;
                                    }

                                } else {
                                    document.querySelectorAll("img")[5].setAttribute("src", './imagens/coracao_vazio.png');

                                    alert("voce perdeu");
                                    window.location.assign("index.html");
                                }
                            }

                            e.target.value = "";
                        }
                    }
                })
            }
        }
        if (forca.length > 0) {
            clearInterval(intervalo);
        }

    }, 2000);

})
