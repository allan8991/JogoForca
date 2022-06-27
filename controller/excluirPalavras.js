window.addEventListener("load", () => {
    document.getElementById("formulario").addEventListener("submit", (e) => {
        e.preventDefault();
        document.getElementById("voltar").addEventListener("click", (e) => {
            window.location.assign("index.html");
        })
        document.getElementById("deletar").addEventListener("click", (e) => {
            let formulario = document.getElementById("formulario");
            let dados = new FormData(formulario);
            if (!(dados.get("dica") === "") && !(dados.get("palavra") === "")) {
                fetch("http://localhost/novoJogoForca/Model/deletandoPalavras.php", {
                    method: 'POST',
                    body: dados
                }).then((response) => {
                    return response.json();
                }).then((valores) => {
                    document.getElementById("messagemErro").style.display = "flex";
                    document.getElementById("messagemErro").innerHTML = valores;
                    setTimeout(() => {
                        document.getElementById("messagemErro").style.display = "none";
                        document.getElementById("palavra").value = "";
                        document.getElementById("dica").value = "";

                    }, 2000)
                }).catch((err) => {
                    console.log(err);
                })

            }

        })

    })

});