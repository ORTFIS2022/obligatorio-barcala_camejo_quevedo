class Sistema{

    constructor(){
        this.listaPredicciones = []; // lista con nombre y predicciones
        this.ranking = []; // lista con resultados en base a predicciones y nombre
    }

    //Métodos   [Gonzalo,A123B1332C2312]
    
    agregarUsuario(unUsuario){
        if(this.buscarUsuario(unUsuario) == false){
            this.listaPredicciones.push(unUsuario);
        }
    }

    agregarPrediccion(unaPrediccion){

        this.listaPredicciones.push(unaPrediccion);
    }

    
    //SE FIJA SI EL USUARIO NO SE ENCUENTRA EN LA LISTA DE PREDICCIONES
    buscarUsuario(unUsuario){
        for(let i = 0; i<this.listaPredicciones.length() ;i++){
            if(this.listaPredicciones[i].equals(unUsuario)){
                return true;
            }
        }
        return false;
    }

    sobreEscribir()


 

    // esvalido(unUsuario){
    //     const esta = false;
    //     for(let i=0; i<this.listaPredicciones.length(); i=i+2){
    //         if(unUsuario === this.listaPredicciones[i]){
    //             esta = true;
    //         }
    //     }
    //     return esta;
    // }


}

module.exports = Sistema;