const { TestWatcher } = require('@jest/core');
const Sistema = require('../sistema');
const Usuario = require('../usuario');

let emailUsuario = 'juan@gmail.com'
let nickname = 'player';

let user = new Usuario(emailUsuario,nickname);
let system = new Sistema();

//chequeamos que sistema agregue a diccionario nickname de usuario

test('Añadir nickname a diccionario',() => {
    system.agregarUsuario(user.email, user.nickName);
    expect(system.listaUsuarios[emailUsuario]).toBe('player');
});

let resultado = '213211004211';
let grupo = 'A';

//chequeamos que sistema agregue a diccionario las predicciones del usuario

test('Añadir prediccion a diccionario',() => {
    system.agregarPrediccion(resultado, grupo, emailUsuario);
    expect(system.listaPredicciones[emailUsuario][0]).toBe('213211004211'); 
});

//chequeamos que sistema agregue correctamente al ranking el puntaje del usuario

test('Añadir puntaje de usuario',() => {
    system.darRanking(emailUsuario);
    expect(system.rankingUsuarios[emailUsuario][0]).toBe(10);
});

//Resultados ranking son ingresados directamente y no debemos validarlos