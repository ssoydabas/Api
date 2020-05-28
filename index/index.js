document.querySelector(".randomFact").addEventListener("click", bussinessNewsNewsApis);

function bussinessNewsNewsApis(){
    var call = new XMLHttpRequest();
    call.open("GET", "https://cat-fact.herokuapp.com/facts", true);
    
    random = Math.floor(Math.random()*97);
    
    call.onload = function(){
        if(this.status == 200){
            var results = JSON.parse(this.responseText);
            
            allFactsArray = []

            for(var i=0; i<98; i++){
                allFactsArray.push(results.all[i].text)
            }

            var allFactsObject = {}
            for(var i=0; i<98; i++){
                allFactsObject[i] = allFactsArray[i]
            }
            //console.log(allFactsObject)

            document.querySelector(".aFact").innerHTML = allFactsObject[random];
        }
    }
    call.send();
};