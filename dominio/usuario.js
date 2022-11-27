class Usuario{
    constructor(email,nickName, nroEst){
        this.email = email;
        this.nickName = nickName;
        this.nroEst = nroEst;
    }
    
    toString(){
        return (this.email).toLowerCase();
    }
}

module.exports = Usuario;