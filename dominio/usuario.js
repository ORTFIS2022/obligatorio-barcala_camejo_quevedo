class Usuario{

    constructor(unEmail){
        this.email = unEmail;
    }
    
    toString(){
        return (this.email).toLowerCase();
    }

}

module.exports = Usuario;