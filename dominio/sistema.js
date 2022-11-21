/**
 *
 */
class Sistema {
  /**
     *
     */
  constructor() {
    this.listaUsuarios = {}; // lista de nicknames registrados
    this.listaPredicciones = {}; // lista con nombre y predicciones
    this.rankingUsuarios = []; // USUARIO CON SU RESPECTIVO PUNTAJE
    this.resultadosRanking = ['123456789111',
      '123456789111',
      '123456789111',
      '123456789111',
      '123456789111',
      '123456789111',
      '123456789111',
      '123456789111']; // RESULTADO DE LOS PARTIDOS
  }

  // Métodos
  /**
   *
   * @param {string} emailUsuario
   * @param {string} nickName
   */
  agregarUsuario(emailUsuario, nickName) {
    this.listaUsuarios[emailUsuario] = nickName;
    this.listaPredicciones[emailUsuario] = ['xxxxxxxxxxxx',
      'xxxxxxxxxxxx',
      'xxxxxxxxxxxx',
      'xxxxxxxxxxxx',
      'xxxxxxxxxxxx',
      'xxxxxxxxxxxx',
      'xxxxxxxxxxxx',
      'xxxxxxxxxxxx'];
    console.log(this.listaPredicciones[emailUsuario]);
  }

  /**
   *
   * @param {string} emailUsuario
   * @return {int}
   */
  darRanking(emailUsuario) {
    let puntaje = 0;
    this.rankingUsuarios[emailUsuario] = [];
    const prediccionActual = this.listaPredicciones[emailUsuario];
    for (let indice = 0; indice <8; indice++) {
      const aComparar = prediccionActual[indice];
      const rankingSeccion = this.resultadosRanking[indice];
      for (let i = 0; i< rankingSeccion.length; i=i+2) {
        if (aComparar.charAt(i) == rankingSeccion.charAt(i) &&
            aComparar.charAt(i+1) == rankingSeccion.charAt(i+1)) {
          puntaje = puntaje + 10; // Por acertar resultado exacto
        }
      }
    }
    this.rankingUsuarios[emailUsuario].push(puntaje);
    return puntaje;
  }

  /**
   *
   * @param {[string]} resultados
   * @param {string} grupo
   * @param {string} email
   */
  agregarPrediccion(resultados, grupo, email) {
    console.log('resultados ' + resultados);
    console.log('grupo ' + grupo);
    console.log('email ' + email);

    let indice;
    switch (grupo) {
      case 'A':
        indice = 0;
        break;
      case 'B':
        indice = 1;
        break;
      case 'C':
        indice = 2;
        break;
      case 'D':
        indice = 3;
        break;
      case 'E':
        indice = 4;
        break;
      case 'F':
        indice = 5;
        break;
      case 'G':
        indice = 6;
        break;
      case 'H':
        indice = 7;
        break;
    }

    console.log(indice);
    const prediccionActual = this.listaPredicciones[email];
    console.log('prediccionActual ' + prediccionActual);
    prediccionActual[indice] = resultados;
    console.log('nueva prediccion: ' + prediccionActual);
  }

  /**
   *
   * @param {String} unUsuario
   * @return {Bool}
   */
  esvalido(unUsuario) {
    const esta = false;
    for (let i=0; i<this.listaUsuarios.length; i++) {
      if (unUsuario === this.listaPredicciones[i]) {
        esta = true;
      }
    }
    return esta;
  }

  /**
   *
   * @param {string} grupo
   * @param {string} email
   * @return {[string]}
   */
  procesarPronostico(grupo, email) {
    let indice;
    switch (grupo) {
      case 'A':
        indice = 0;
        break;
      case 'B':
        indice = 1;
        break;
      case 'C':
        indice = 2;
        break;
      case 'D':
        indice = 3;
        break;
      case 'E':
        indice = 4;
        break;
      case 'F':
        indice = 5;
        break;
      case 'G':
        indice = 6;
        break;
      case 'H':
        indice = 7;
        break;
    }

    const prediccionActual = this.listaPredicciones[email];
    const prediccionDelGrupo = prediccionActual[indice];
    console.log('largo ' + prediccionDelGrupo.length);
    const pronosticos = [];
    for (let i = 0; i < prediccionDelGrupo.length; i++) {
      console.log('i = ' + i);
      console.log('caracter = ' + prediccionDelGrupo[i]);
      pronosticos.push(prediccionDelGrupo[i]);
    }

    console.log('resultados ' + pronosticos);
    return pronosticos;
  }
}

module.exports = Sistema;
