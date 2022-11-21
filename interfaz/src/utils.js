export const changeMenuIcon = (topAppBarElement,drawer) => {
    let iconContainer = topAppBarElement.getElementsByClassName('mdc-top-app-bar__navigation-icon')[0];
    let icon = iconContainer.innerHTML;
    iconContainer.innerHTML = (icon == 'menu') ? 'arrow_back' : 'menu';
    drawer.open = !drawer.open;
};

export const changeAppTitle = (newTitle) => {
    let appTitle = document.getElementsByClassName('mdc-top-app-bar__title')[0];
    appTitle.innerHTML = newTitle;

};

