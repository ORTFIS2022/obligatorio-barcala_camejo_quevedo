const { TestWatcher } = require('@jest/core');
const Sistema = require('../sistema');
const Usuario = require('../usuario');

let emailUsuario = 'gon@gmail.com'
let nickname = 'p';

let user = new Usuario(emailUsuario,nickname);
let system = new Sistema();

//chequeamos que sistema agregue a lista de usuarios
test('Añadir usuario a lista',() => {
    system.agregarUsuario(user.email, user.nickName);
    console.log(user.email);
    console.log(system.listaUsuarios[0]);
    expect(system.listaUsuarios.length).toBe(2);
});