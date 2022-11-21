class Usuario{
    constructor(email,nickName){
        this.email = email;
        this.nickName = nickName;
    }
    
    toString(){
        return (this.email).toLowerCase();
    }
}

module.exports = Usuario;