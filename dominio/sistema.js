/* eslint-disable */

const Usuario = require("./usuario");

class Sistema{

    constructor(){
        this.listaUsuarios = {}; // lista de nicknames registrados
        this.listaPredicciones = {}; // lista con nombre y predicciones
        this.rankingUsuarios = []; // USUARIO CON SU RESPECTIVO PUNTAJE
        this.resultadosRanking = ["123456789123","123456789","123456789","123456789","123456789","123456789","123456789","123456789"]; //RESULTADO DE LOS PARTIDOS
    }

    //Métodos
    agregarUsuario(emailUsuario, nickName){
        this.listaUsuarios[emailUsuario] = [];
        this.listaUsuarios[emailUsuario].push(nickName);
        this.listaPredicciones[emailUsuario] = ["xxxxxxxxxxxx", "xxxxxxxxxxxx", "xxxxxxxxxxxx", "xxxxxxxxxxxx", "xxxxxxxxxxxx", "xxxxxxxxxxxx", "xxxxxxxxxxxx", "xxxxxxxxxxxx"];
        console.log(this.listaPredicciones[emailUsuario]);
    }

    darRanking(emailUsuario){
        var puntaje = 0;
        this.rankingUsuarios[emailUsuario] = [];
        let prediccionActual = this.listaPredicciones[emailUsuario];
        for(var indice = 0; indice <8; indice++){
            let aComparar = prediccionActual[indice]; 
            let rankingSeccion = this.resultadosRanking[indice];
            for(var i = 0; i< rankingSeccion.length; i++){
                if(aComparar.charAt(i) == rankingSeccion.charAt(i)){
                    puntaje = puntaje + 10;
                }
                else{
                    puntaje = puntaje
                }
                
            }
        }
        this.rankingUsuarios[emailUsuario].push(puntaje);
        return puntaje;
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

    procesarPronostico(grupo, email) {
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

        let prediccionActual = this.listaPredicciones[email];
        let prediccionDelGrupo = prediccionActual[indice];
        console.log("largo " + prediccionDelGrupo.length);
        let pronosticos = []
        for(let i = 0; i < prediccionDelGrupo.length; i++) {   
            console.log("i = " + i);
            console.log("caracter = " + prediccionDelGrupo[i]);
            pronosticos.push(prediccionDelGrupo[i]);
          }

        console.log("resultados " + pronosticos);
        return pronosticos;


    }

}

module.exports = Sistema;