const { TestWatcher } = require('@jest/core');
const Usuario = require('../usuario');

let emailUsuario = 'gon@gmail.com'
let nickname = 'p';
let nroEst = 256665;

let user = new Usuario(emailUsuario,nickname, nroEst);

//check user creation
test('user creation check',() => {
    expect(user.email).toBe('gon@gmail.com');
    expect(user.nickName).toBe('p');
    expect(user.nroEst).toBe(256665);
})
