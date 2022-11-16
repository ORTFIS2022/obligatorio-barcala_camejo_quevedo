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

//mdc-touch-target-wrapper
//changeVisibleSection(mdc-touch-target-wrapper);

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
document.getElementById("botonNotifi2").addEventListener("click",ocultar);

//BOTON MENU
document.getElementById("RetornoMenu").addEventListener("click",volverMenu);

//FUNCION OCULTAR TODO
  function ocultarTodo(letra){
  document.getElementById("Id-Grupos").style.display= 'none';
  changeAppTitle(letra);
}
//FUNCION OCULTAR BOTONES
function ocultar(){
  document.getElementById('Id-Notificaciones').style.display = 'none';
}

//FUNCION VOLVER AL MENU

function volverMenu(){
   document.getElementById("Id-Grupos").style.display= 'block';
}









