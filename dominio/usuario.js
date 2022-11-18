/* eslint-disable */


class Usuario{
    constructor(email){
        this.email = email;
    }
    
    toString(){
        return (this.email).toLowerCase();
    }
}

module.exports = Usuario;