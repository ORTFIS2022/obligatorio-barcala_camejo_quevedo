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
document.getElementById("botonB").addEventListener("click",ocultarTodo);


//FUNCION OCULTAR BOTONES
function ocultar(){
  document.getElementById('Notificaciones').style.visibility = 'hidden';
}
//FUNCION OCULTAR TODO
function ocultarTodo(){
  document.getElementById('botonA').style.visibility = 'hidden';
  document.getElementById('botonB').style.visibility = 'hidden';
  document.getElementById('botonC').style.visibility = 'hidden';
  document.getElementById('botonD').style.visibility = 'hidden';

}

//BOTONES NOTIFICACIONES
document.getElementById("botonNotifi").addEventListener("click",ocultar);
document.getElementById("botonNotifi2").addEventListener("click",ocultar);






