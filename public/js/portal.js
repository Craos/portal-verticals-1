
Portal = function () {

    this.Postagens = new Postagens();

    this.Iniciar = function () {

        this.vlbar = new vbar();
        this.vlbar.Construir(document.getElementById('container_vbar')).then(() => {

        }).catch(function (response) {
            console.error(response);
        });
        this.Postagens.Listar();
    }

};