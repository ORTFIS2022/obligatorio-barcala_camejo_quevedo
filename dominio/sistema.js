class Sistema{

    constructor(){
        this.listaPredicciones = []; // lista con nombre y predicciones
        this.ranking = []; // lista con resultados en base a predicciones y nombre
    }

    //Métodos
    agregarUsuario(unUsuario){
        this.listaPredicciones.push(unUsuario);
    }

    agregarPrediccion(unaPrediccion){
        this.listaPredicciones.push(unaPrediccion);
    }

    esvalido(unUsuario){
        const esta = false;
        for(let i=0; i<this.listaPredicciones.length(); i=i+2){
            if(unUsuario === this.listaPredicciones[i]){
                esta = true;
            }
        }
        return esta;
    }

    //["gonzalocamejo859@gmail.com", A + "1212-124-1321" B + "232344", IGNACIO@GMAIL.COM] llamar ambos metodos en el index.js


}

module.exports = Sistema;