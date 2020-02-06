// the light/dark mode toggle buttons

const toggleSwitch = document.querySelector('.toolbar-switch input[type="checkbox"]')

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'white');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);

