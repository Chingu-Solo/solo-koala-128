// search fonts
const names = document.querySelectorAll('article')

const searchBar = document.forms['search-fonts'].querySelector('input');
searchBar.addEventListener('keyup', function(e) {
    const term = e.target.value.toLowerCase()    
    Array.from(names).forEach(function(name) {
        const fontName = name.querySelector('h2').textContent;
        
        if (fontName.toLowerCase().indexOf(term) != -1) {
            name.style.display = 'block';
        } else {
            name.style.display = 'none';
        }
    })
})

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

