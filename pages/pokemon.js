document.querySelector(".firstButton").addEventListener("click", callPokemons);

function callPokemons(){
    var call = new XMLHttpRequest();

    call.open("GET", "https://pokeapi.co/api/v2/pokemon/", true);
    call.onload = function(){
        if(this.status == 200){
            var pokemons = JSON.parse(this.responseText);
            
            var pokeList = "";

            for(var i in pokemons.results){
                pokeList += `<div class="pokemons"><ul><li class="singlePokemon">${pokemons.results[i].name}</li></ul></div>`
            }
            document.querySelector(".allPokemons").innerHTML = pokeList;
        }
    }
    call.send()
}