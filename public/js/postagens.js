let Postagens = function () {

    this.Listar = function () {

        $.ajax({
            type: "GET",
            url:  window.portal.interact.endpoint +  "/home_page_postagens",
            dataType: "json",
            success: function (response) {

                response.filter(function (item) {

                    let tpl = document.getElementById('postagens');

                    let artigo = tpl.content.cloneNode(true);

                    //let imagem = artigo.getElementById('imagem');
                    //imagem.src = 'https://api.craos.net/liteapi/' + item.imagem;

                    let titulo = artigo.getElementById('titulo');
                    titulo.innerText = item.assunto;

                    let resumo = artigo.getElementById('resumo');
                    resumo.innerText = item.resumo;

                    let autor = artigo.getElementById('autor');
                    autor.innerText = item.firstuser;

                    let corpo = document.getElementById('artigoscentral');
                    corpo.appendChild(artigo);

                });
            }
        });

    }

};