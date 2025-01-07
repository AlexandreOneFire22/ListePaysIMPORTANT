const fetchPays = async () => {
    try{
        const ListePays = await fetch("https://restcountries.com/v3.1/region/europe")
        const ListePaysJson = await ListePays.json()

        const paysList = document.querySelector("#paysList")

        // Afficher le nom de chaque utilisateur dans un <p>

        //paysList.innerHTML = reponseJson
        //    .map((user) => `<p>${user.name}</p>`)
        //    .join("")

        paysList.innerHTML = ListePaysJson.map((pays) => `<button id="Clicker"><div class="col col-12 col-md-6 col-xl-3 h-100">
                        <div class="card mb-3">
                            <img src="${pays.flags.svg}" class="card-img-top p-2 img-fluid" style="height: 190px">
                            <div class="card-body w-100">
                                <h5 id="nomPays" class="card-title"><strong>${pays.translations.fra.common}</strong></h5>
                                <p id="CapitalePays" class="card-text"><strong>Capitale :</strong>${pays.capital[0]}</p>
                                <p id="nombrePopulationPays" class="card-text"><strong>Population :</strong> ${pays.population}</p>
                            </div>
                        </div>
                    </div></button>`).sort().join("")

    }catch (erreur){
        console.log(erreur)

    }
}

fetchPays()

const nomPays = document.querySelector("#nomPays")

const clickerPays = document.querySelector("#paysClicker")

const details = document.querySelector("#details")


clickerPays.addEventListener("click", async() => {

    try{
        const detailsPays = await fetch(`https://restcountries.com/v3.1/name/${nomPays.value.trim()}`)
        const detailsPaysJson = await detailsPays.json()

        clickerPays.classList.add("border")


        details.innerHTML = `<div><img src="${detailsPays.flags.svg}" class="card-img-top p-2 img-fluid"></div>
                <div> 
                    <h5><strong>${detailsPays.translations.fra.common}</strong></h5>
                    <p><strong>Capitale :</strong>${detailsPays.capital[0]}</p>
                    <p><strong>Population :</strong> ${detailsPays.population}</p>
                    <p><strong>Région :</strong> ${detailsPays.region}</p>
                    <p><strong>Sous-région :</strong> ${detailsPays.subregion}</p>
                  
                                  
                </div>`




    }catch (erreur){
        console.log(erreur)

    }

})



















