let movieNameRef = document.getElementById("nome-filme")
let searchBtn = document.getElementById("procurar-btn")
let result = document.getElementById("result")



let getMovie = () =>{
    let movieName = movieNameRef.value
    let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`


    if(movieName.length <=0){
        result.innerHTML= '<h3 class="msg"> por favor digite o nome do filme </h3>'
    }else{
        fetch(url).then((resp)=> resp.json()).then((data)=>{
            if(data.Response=="True"){
                result.innerHTML = `
                <div class="sobre">
                <img src=${data.Poster} class="poster">
                <div>
                    <h2>${data.Title}</h2>
                    <img src="Microsoft-Fluentui-Emoji-Flat-Glowing-Star-Flat.svg" alt="bebe">
                    <div class="rating">
                        <h4>${data.imdbRating}</h4>
                    </div>
                    <div class="details">
                        <span>${data.Rated}</span>
                        <span>${data.Year}</span>
                        <span>${data.Runtime}</span>
                    </div>
                    <div class="genero">
                        <div>${data.Genre.split(",").join
                        ("</div><div>")}</div>
                    </div>
                </div>
            </div>
            <h3>Sinopse:</h3>
            <p>${data.Plot}</p>
            <h3>Elenco:</h3>
            <p>${data.Actors}</p>   
                `
            }
            else{
                result.innerHTML = `<h3 class ="msg">${data.Error}</h3>`
            }
        })
        .catch(() =>{
            result.innerHTML =`<h3 class="msg">Error Occured</h3>`
        })
    }
}

searchBtn.addEventListener("click", getMovie)
window.addEventListener("load", getMovie)