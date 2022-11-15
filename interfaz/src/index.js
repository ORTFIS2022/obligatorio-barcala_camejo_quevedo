import "./styles/index.scss";
import { changeVisibleSection, openFabSpeedDial, changeMenuIcon, addEventBalanceButtons,
  updateHistory, changeAppTitle, cleanInput, getExpenseData, getIncomeData, displayBalance, updateTotalExpenses, setTestData,
getSavingData, updateTotalSavings} from './utils';
import {MDCTopAppBar} from '@material/top-app-bar';
import {MDCDrawer} from "@material/drawer";
import {MDCList} from "@material/list";

const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);
const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
const list = MDCList.attachTo(document.querySelector('.mdc-deprecated-list'));
list.wrapFocus = true;
topAppBar.setScrollTarget(document.getElementById('main-content'));
topAppBar.listen('MDCTopAppBar:nav', () => {
  changeMenuIcon(topAppBarElement,drawer);
});



document.getElementById("botonB").addEventListener("click",test);


function test(){
  document.getElementById('botonB').style.visibility = 'hidden';
}







