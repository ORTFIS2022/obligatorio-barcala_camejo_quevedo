/* eslint-disable */

const Usuario = require("./usuario");

class Sistema{

    constructor(){
        this.listaUsuarios = {}; // lista de nicknames registrados
        this.listaPredicciones = {}; // lista con nombre y predicciones
        this.ranking = []; // lista con resultados en base a predicciones y nombre
    }

    //Métodos
    agregarUsuario(emailUsuario, nickName){
        this.listaUsuarios[emailUsuario] = [];
        this.listaUsuarios[emailUsuario].push(nickName);
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
                break;
            case "B":
                indice = 1;
                break;
            case "C":
                indice = 2;
                break;
            case "D":
                indice = 3;
                break;
            case "E":
                indice = 4;
                break;
            case "F":
                indice = 5;
                break;
            case "G":
                indice = 6;
                break;
            case "H":
                indice = 7;
                break;
        }

        console.log(indice)
        let prediccionActual = this.listaPredicciones[email];
        console.log("prediccionActual " + prediccionActual);
        prediccionActual[indice] = resultados;
        console.log("nueva prediccion: " + prediccionActual);
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