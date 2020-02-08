// scroll top button 
const mybutton = document.getElementById("my-btn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topButton() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// search fonts && type something
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

const typeBar = document.forms['type-sth'].querySelector('input');
typeBar.addEventListener('keyup', function(e) {
    const word = e.target.value;
    Array.from(names).forEach(function(name){
        if (word === ""){
            window.location.reload(false);
        } else {
            let paragraph = name.querySelector('p')    
            paragraph.textContent = word;
        } 
    })
})

// select font button functionality 

const select = document.getElementById('font_size');
console.log(select)
select.addEventListener('click', function() {
    const fontSize = select.options[select.selectedIndex].value;
    console.log(fontSize)
    Array.from(names).forEach(function(name) {
        let paragraph = name.querySelector('p');        
        paragraph.style.fontSize = fontSize;
        
    })
})

// refresh button 

const refreshButton = document.getElementById("refresh");

refreshButton.addEventListener('click', function() {
    document.getElementById("type-sth").reset();
    document.getElementById("search-fonts").reset(); 
    select.options[3].selected="true";        
    location.reload();    
    
    
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

