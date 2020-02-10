// scroll top button 
const mybutton = document.getElementById("my-btn");

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

select.addEventListener('click', function() {
    const fontSize = select.options[select.selectedIndex].value;
    Array.from(names).forEach(function(name) {
        let paragraph = name.querySelector('p');        
        paragraph.style.fontSize = fontSize;
    })
})

// list / chart button functionality 


const btnList = document.getElementById('list-view');
const btnChart = document.getElementById('chart-view');

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

 
const radioWhite = document.getElementById('radio-white');
const radioBlack = document.getElementById('radio-black');

radioWhite.addEventListener('change', function() {
    document.documentElement.setAttribute('data-theme', 'white') 
})

radioBlack.addEventListener('change', function () {
    document.documentElement.setAttribute('data-theme', 'dark');
})

// refresh button 

const refreshButton = document.getElementById("refresh");
const fontSize = select.options[select.selectedIndex].value;


refreshButton.addEventListener('click', function() {
    chartView();
    document.getElementById("type-sth").reset();
    document.getElementById("search-fonts").reset(); 
    select.options[3].selected="true";   
    btnList.style.display = 'block';
    btnChart.style.display = 'none';       
    document.documentElement.setAttribute('data-theme', 'white');
    document.getElementById("radio-white").checked = true;
      
    Array.from(names).forEach(function(name) {
        let paragraph = name.querySelector('p');        
        paragraph.style.fontSize = '24px';
    })
})
    

