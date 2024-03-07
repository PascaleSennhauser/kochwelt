let salad = [0.25, 0.5, 0.25, 0.25, 50, 1, 1, 1, 0.25];
let gratin = [80, 0.25, 0.5, 1, 0.5, 0.5, 0.5, 1, 100];
let spaghetti = [100, 1, 0.5, 0.5];
let friedRice = [60, 0.25, 1, 0.5, 1, 1, 0.5, 1, 1];
let zutat = [];
let portion;
let result = [];

/**
 * This function gets loaded when you chose a recipe.
 */
function button() {
    includeHTML();
    calculatePortion();
}


/** This function includes the HTML, it's a function from w3schools */
function includeHTML() {
    var z, i, elmnt, file, xhttp;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        return;
      }
    }
    underlineCurrentPage();
}


/**
 * This function underlines the current page in the header.
 */
function underlineCurrentPage() {
    var currentPage = window.location.href;
    if (currentPage.includes("index.html")) {
        document.getElementById('tab1').classList.add('underline-green');
    }
    else if (currentPage.includes('kontakt.html')) {
        document.getElementById('tab3').classList.add('underline-green');
    }
    else if (currentPage.includes('impressum.html')) {
        document.getElementById('tab4').classList.add('underline-green');
    } 
    else if (currentPage.includes('datenschutz.html')){
        return;
    } else {
        document.getElementById('tab2').classList.add('underline-green');
    }
}


/**
 * This function calculates the portion according to the value in the input field
 */    
function calculatePortion() {
    getPortion();
    if (portion <= 0 ) {
        alert('Bitte Portionanzahl eingeben.');
    } else if (portion > 15) {
        alert('Maximal 15 Portionen möglich. Bitte gebe eine andere Zahl ein.');
    } else {
        let recipe = selectRecipe();
        calculate(recipe);
    }
}


/**
 * This function gets the value of the input field for the portion size.
 */
function getPortion() {
    portion = +document.getElementById('eingabe').value;
}


/**
 * This function returns the correct array.
 * @returns - The specific-array gets returned.
 */
function selectRecipe() {
    if (document.getElementById('recipe').innerHTML == "Gemischter Salat") {
        return salad;
    }
    if (document.getElementById('recipe').innerHTML == "Hirse-Gemüse Gratin") {
        return gratin;
    }
    if (document.getElementById('recipe').innerHTML == "Spaghetti mit Tomatensauce") {
        return spaghetti;
    }
    if (document.getElementById('recipe').innerHTML == "Gebratener Reis mit Ei") {
        return friedRice;
    }
}


/**
 * This function calculates with the data of the array the different portions.
 * @param {Array} recipe - This is the array for a specific recipe.
 */
function calculate(recipe) {
    for (let i = 0; i < recipe.length; i++) {
        result[i] = recipe[i] * portion;
        document.getElementById(`zutat${i+1}`).innerHTML = result[i];
    }
}