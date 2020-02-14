const texts = [
    'All their equipment and instruments are alive.',
    'My two natures had memory in common.',
    'All their equipment and instruments are alive.',
    'The recorded voice scratched in the speaker.',
    'I watched the storm, so beautiful yet terrific.',
    'Almost before we knew it, we had left the ground.',
    'It was going to be a lonely trip back.',
    'My two natures had memory in common.',
    'Silver mist suffused the deck of the ship.',
    'The face of the moon was in shadow.',
    'She stared through the window at the stars.'
]
const mybutton = document.getElementById("my-btn");
const names = document.querySelectorAll('article');
const searchBar = document.forms['search-fonts'].querySelector('input');
const typeBar = document.forms['type-sth'].querySelector('input');
const select = document.getElementById('font_size');
const btnList = document.getElementById('list-view');
const btnChart = document.getElementById('chart-view');
const radioWhite = document.getElementById('radio-white');
const radioBlack = document.getElementById('radio-black');
const refreshButton = document.getElementById("refresh");
const fontSize = select.options[select.selectedIndex].value;



// scroll top button 

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topButton() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// search fonts 

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

//  type something
function restartText () {
            for (let i = 0; i < names.length; i++){
            let paragraph = names[i].querySelector('p');
            paragraph.textContent = texts[i]
        }
    }        

typeBar.addEventListener('keyup', function(e) {
    const word = e.target.value;
    Array.from(names).forEach(function(name){
        if (word === ""){
            restartText();
        } else {
            let paragraph = name.querySelector('p')    
            paragraph.textContent = word;
        } 
    })
})

// select font button functionality 

select.addEventListener('click', function() {
    const fontSize = select.options[select.selectedIndex].value;
    Array.from(names).forEach(function(name) {
        let paragraph = name.querySelector('p');        
        paragraph.style.fontSize = fontSize;
    })
})

function restartFonts () {
    Array.from(names).forEach(function(name) {
        let paragraph = name.querySelector('p');     
        paragraph.style.fontSize = '24px';
        name.style.display = 'block';
        select.options[3].selected ="true"; 
        })
}

// list / chart view button functionality 

btnList.addEventListener('click', function () {
    btnList.style.display = 'none';
    btnChart.style.display = 'block';
    document.getElementById('main-content').style.gridTemplateColumns = '1fr';
})

function chartView () {
    btnList.style.display = 'block';
    btnChart.style.display = 'none';
    document.getElementById('main-content').style.gridTemplateColumns = 'repeat(auto-fill, minmax(300px, auto))';
}
btnChart.addEventListener('click', chartView)


// the light/dark mode toggle buttons

radioWhite.addEventListener('change', function() {
    document.documentElement.setAttribute('data-theme', 'white') 
})

radioBlack.addEventListener('change', function () {
    document.documentElement.setAttribute('data-theme', 'dark');
})

// refresh button 

refreshButton.addEventListener('click', function() {
    chartView();
    document.getElementById("type-sth").reset();
    document.getElementById("search-fonts").reset(); 
    btnList.style.display = 'block';
    btnChart.style.display = 'none';       
    document.documentElement.setAttribute('data-theme', 'white');
    document.getElementById("radio-white").checked = true;
    restartFonts()
    restartText()
})
    

