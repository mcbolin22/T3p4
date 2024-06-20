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
}

changeTheme("dark");