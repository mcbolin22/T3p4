const themes = {
    light: {
        background: 'white',
        color: 'black'
    },
    dark: {
        background: 'black',
        color: 'white'
    }
};

function changeTheme(themeName) {
    // themes[themeName].variable
    for (const theme in themes[themeName]){
        document.documentElement.style.setProperty(`--${theme}`, themes[themeName][theme]);
        console.log("Updated CSS variable --" + theme)
    }
};
function setThemeToDark(){
    changeTheme("dark");
};

function setThemeToLight(){
    changeTheme("light");
};

function toggleTheme(){
    let currentBackground = getComputedStyle(document.documentElement).getPropertyValue('--background');

    console.log("Current Background: " + currentBackground);

    if (currentBackground == "white"){
        changeTheme("dark");
    } else {
        changeTheme("light");
    };

};    


changeTheme("dark");

