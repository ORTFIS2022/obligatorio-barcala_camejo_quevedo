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

    agregarPrediccion(resultados, grupo, email) {
        console.log("resultados " + resultados);
        console.log("grupo " + grupo);
        console.log("email " + email);
        
        let indice;
        switch (grupo) {
            case "A":
                indice = 0;
            case "B":
                indice = 1;
            case "C":
                indice = 0;
            case "D":
                indice = 1;
            case "E":
                indice = 0;
            case "F":
                indice = 1;
            case "G":
                indice = 0;
            case "H":
                indice = 1;



        }

        this.listaPredicciones.push(unaPrediccion);
    }

    esvalido(unUsuario){
        const esta = false;
        for(let i=0; i<this.listaUsuarios.length; i++){
            if(unUsuario === this.listaPredicciones[i]){
                esta = true;
            }
        }
        return esta;
    }
}

module.exports = Sistema;