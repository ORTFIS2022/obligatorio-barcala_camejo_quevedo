/* eslint-disable */

const Usuario = require("./usuario");

class Sistema{

    constructor(){
        this.listaUsuarios = []; // lista de emails registrados
        this.listaPredicciones = {}; // lista con nombre y predicciones
        this.ranking = []; // lista con resultados en base a predicciones y nombre
    }

    //Métodos
    agregarUsuario(emailUsuario){
        this.listaUsuarios.push(emailUsuario);
        this.listaPredicciones[emailUsuario] = ["xxxxxxxxxxxx", "xxxxxxxxxxxx", "xxxxxxxxxxxx", "xxxxxxxxxxxx", "xxxxxxxxxxxx", "xxxxxxxxxxxx", "xxxxxxxxxxxx", "xxxxxxxxxxxx"];
        console.log(this.listaPredicciones[emailUsuario]);
        //this.listaPredicciones.push(unUsuario);
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