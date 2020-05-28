document.querySelector(".firstButton").addEventListener("click", bussinessNewsNewsApis);

function bussinessNewsNewsApis(){
    var call = new XMLHttpRequest();
    
    call.open("GET", "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fa82815e31664ec082ce7f529dc1c12f", true);

    call.onload = function(){
        if(this.status == 200) {
            var news = JSON.parse(this.responseText)
            
            var result = "";
            for(var i in news.articles){
                result += `<a href="${news.articles[i].url}" target="_blank"><button class="button">${news.articles[i].title}</button></a>`
                
            }
            document.querySelector(".allNews").innerHTML = result;
        }
    };
    call.send();
};
