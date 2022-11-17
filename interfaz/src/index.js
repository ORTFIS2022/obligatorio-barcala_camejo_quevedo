let miPrediccion = new Predicciones();
let miSistema = new Sistema();
import Predicciones from "../../dominio/predicciones"
import Sistema from "../../dominio/Sistema"
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
 
//FUNCION CONSEGUIR VALORES DE LOS RESULTADOS DEL PARTIDO
document.getElementById("Id-BotonGuardar"+letra).addEventListener("click", ()=> asignarArrayPorGrupo(letra));

function asignarArrayPorGrupo(letra){
  let arrayConResultadosA = [];
  if(letra === "A"){
    arrayConResultadosA = valoresCampos(letra, arrayConResultados);
  }
  else if(letra === "B"){
    arrayConResultadosB = valoresCampos(letra, arrayConResultados);
  }
}

//Retorna array con valores de los inputs de un grupo
function valoresCampos(letra, arrayConResultados) {
  for(let i=0; i<12;i++){   
    arrayConResultados[i]= document.getElementById("input"+i).value;
  }
  return arrayConResultados;
}










