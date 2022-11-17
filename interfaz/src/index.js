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

document.getElementById("Id-Guardar").addEventListener("click",() => document.getElementById("Id-MenuContainer").style.display='none')


//FUNCION OCULTAR TODO
  function ocultarTodo(letra){
  document.getElementById("Id-Grupos").style.display= 'none';
  changeAppTitle(letra);
  desplegarPartidos(letra); 
}
//FUNCION OCULTAR BOTONES
function ocultar(){
  document.getElementById('Id-Notificaciones').style.display = 'none';
}

//FUNCION VOLVER AL MENU
function volverMenu(){
   document.getElementById("Id-Grupos").style.display= 'block';
   document.getElementById("Id-BanderaA").style.display = 'none';
}

//FUNCION DESPLEGAR PARTIDOS DEL GRUPO
function desplegarPartidos(letra){
  var char = letra.charAt(6); //Me encuentra la letra del grupo --A
  document.getElementById("Id-Bandera" + char).style.display = 'block';//Genero la id mediante char de la card a mostrar
  
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

//FUNCION GUARDADO
document.getElementById("Id-BotonGuardar").addEventListener("click",prueba);

function prueba(){
if(document.getElementById("input").values() == ""){
  alert("vacio");
}
 


//FUNCION CONSEGUIR VALORES DE LOS RESULTADOS DEL PARTIDO
    
// function getPrediccion(letra) {
//   const x = letra;
// return this.prediccionesEquipoX;
// }


function valoresCampos(letra) {
  
  let valores = [];
  for(let i=0; i<13;i++){
      
      valores[i]= document.getElementById("input"+i).value;
      
  }

}




}








