class MensagemView extends View{

    constructor(){
        super(elemento);
    }

    template(model){
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>';    }

}