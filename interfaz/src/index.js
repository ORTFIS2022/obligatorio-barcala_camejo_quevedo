
let miPrediccion = new Predicciones();
let miSistema = new Sistema();
let miUsuario = new Usuario("");

import Predicciones from "../../dominio/predicciones"
import Sistema from "../../dominio/Sistema"
import Usuario from "../../dominio/usuario"
import "./styles/index.scss";
import { changeVisibleSection, openFabSpeedDial, changeMenuIcon, addEventBalanceButtons,
  updateHistory, changeAppTitle, cleanInput, getExpenseData, getIncomeData, displayBalance, updateTotalExpenses, setTestData,
getSavingData, updateTotalSavings} from './utils';
import {MDCTopAppBar} from '@material/top-app-bar';
import {MDCDrawer} from "@material/drawer";
import {MDCList} from "@material/list";

//LA LISTA DESPLEGABLE
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);
const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
const list = MDCList.attachTo(document.querySelector('.mdc-deprecated-list'));
list.wrapFocus = true;
topAppBar.setScrollTarget(document.getElementById('main-content'));
topAppBar.listen('MDCTopAppBar:nav', () => {
  changeMenuIcon(topAppBarElement,drawer);
});

//ASIGNAR TODAS LAS FUNCIONES A INICIO
//BOTON/OCULTAR
document.getElementById("botonA").addEventListener("click",()=> ocultarTodo("Grupo A"));
document.getElementById("botonB").addEventListener("click",()=> ocultarTodo("Grupo B"));
document.getElementById("botonC").addEventListener("click",()=> ocultarTodo("Grupo C"));
document.getElementById("botonD").addEventListener("click",()=> ocultarTodo("Grupo D"));
document.getElementById("botonE").addEventListener("click",()=> ocultarTodo("Grupo E"));
document.getElementById("botonF").addEventListener("click",()=> ocultarTodo("Grupo F"));
document.getElementById("botonG").addEventListener("click",()=> ocultarTodo("Grupo G"));
document.getElementById("botonH").addEventListener("click",()=> ocultarTodo("Grupo H"));

//BOTONES NOTIFICACIONES
document.getElementById("botonNotifi").addEventListener("click",ocultar);
document.getElementById("botonNotifi").addEventListener("click",MensajeNotifi);
document.getElementById("botonNotifi2").addEventListener("click",ocultar);
document.getElementById("botonNotifi2").addEventListener("click",NoMensajeNotifi);

//BOTON MENU
document.getElementById("RetornoMenu").addEventListener("click",volverMenu);

//BOTON CORREO

document.getElementById("Id-Guardar").addEventListener("click",() => validarCorreo());
//FUNCION CONSEGUIR LETRA DEL GRUPO

function guardarLetraEquipo(grupo){
  let letra = grupo.charAt(6); //Me encuentra la letra del grupo --A
  return letra;
}

//FUNCION VALIDAR CORREO

function validarCorreo(){
  const email = document.getElementById("Id-MailCorreo").value;
  const nickName = document.getElementById("Id-MailCorreo2").value;
  var arroba = false;
  for(var i = 0; i< email.length && !arroba;i++){
      if(email.charAt(i) == "@" && email.charAt(i+1) != ""){
        arroba = true;
      }
  }

  if(arroba){
    if(nickName == ""){
      return alert("Seleccione un NickName válido!");
    }
    else{
      agregarUsuario(email,nickName);
    }
  }
  else{
    document.getElementById("Id-MailCorreo").value = '';
    alert("Selecione un email valido!");
  }

}

//FUNCION AGREGAR USUARIO

  function agregarUsuario(email,nickName){
  console.log(email);
  miUsuario.email = email;
  if(!miSistema.esvalido(miUsuario)){
    miSistema.agregarUsuario(miUsuario.email,nickName);
  }
  document.getElementById("Id-MenuContainer").style.display='none';
 }

//FUNCION OCULTAR TODO
  function ocultarTodo(grupo){
  document.getElementById("Id-Grupos").style.display= 'none';
  changeAppTitle(grupo);
  guardarLetraEquipo(grupo);
  desplegarPartidos(guardarLetraEquipo(grupo)); 
  llamado();

  
}
//FUNCION OCULTAR BOTONES
function ocultar(){
  document.getElementById('Id-Notificaciones').style.display = 'none';
}

//FUNCION VOLVER AL MENU
function volverMenu(){
   const seccionOcultar = guardarLetraEquipo(document.getElementById("nombrePagina").textContent);
   document.getElementById("Id-Grupos").style.display= 'block';
   if(seccionOcultar != "M"){
      document.getElementById("Id-Bandera" + seccionOcultar).style.display = 'none';
   }
   changeAppTitle("Penca Mundial Qatar 2022");
}

//FUNCION DESPLEGAR PARTIDOS DEL GRUPO
function desplegarPartidos(letra){
  document.getElementById("Id-Bandera" + letra).style.display = 'block';//Genero la id mediante char de la card a mostrar
}

//SECCION SNACKBAR
function MensajeNotifi() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
function NoMensajeNotifi() {
  var xs = document.getElementById("snackbar2");
  xs.className = "show";
  setTimeout(function(){ xs.className = xs.className.replace("show", ""); }, 3000);
}
//FIN DE SECCION
 
function llamado(){
  alert(guardarLetraEquipo(document.getElementById("nombrePagina").textContent));
  let letraGrupo = guardarLetraEquipo(document.getElementById("nombrePagina").textContent);
  document.getElementById("Id-BotonGuardar" + letraGrupo).addEventListener("click", ()=> guardarPronosticos(letraGrupo));
}

//Retorna string con valores de los inputs de un grupo + letra
function guardarPronosticos(letraGrupo) {
  let resultados = "";
  for(let i=2; i<14;i++){   
    console.log(document.getElementById(("input"+(i-1))).value);
    if (document.getElementById(("input"+(i-1))).value == "") {
      resultados = resultados + "x";
    } else {
      resultados = resultados + (document.getElementById(("input"+(i-1))).value);
    }
    console.log(resultados);
  }
  alert(resultados);
  console.log(miUsuario.email)
  miSistema.agregarPrediccion(resultados, letraGrupo, miUsuario.email); //12123132121
}


//FUNCION PARA ACOTAR EL LARGO DE LOS VALORES A PREDECIR DE LOS PARTIDOS.
document.querySelectorAll('input[type="number"]').forEach(input =>{
  input.oninput = () =>{
    if(input.value.length > input.maxLength) input.value = input.value.slice(0, input.maxLength);
  }
});

//FUNCION PARA ELIMINAR EL "e,+,-" EN LOS INPUTS A COLOCAR EN LOS PARTIDOS.
document.querySelector('input[type="number"]').addEventListener("keypress", function (evt) {
  if (evt.which != 8 && evt.which != 0 && evt.which < 48 || evt.which > 57)
  {
      evt.preventDefault();
  }
});





//[A12123123B189823782]
//a2384762834673'029'0
//[B123671231672A782783462773C2898192738]









