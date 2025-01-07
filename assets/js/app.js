const fetchPays = async () => {
    try{
        const ListePays = await fetch("https://restcountries.com/v3.1/region/europe")
        const ListePaysJson = await ListePays.json()

        const paysList = document.querySelector("#paysList")

        // Afficher le nom de chaque utilisateur dans un <p>

        //paysList.innerHTML = reponseJson
        //    .map((user) => `<p>${user.name}</p>`)
        //    .join("")

        paysList.innerHTML = ListePaysJson.map((pays) => `<div class="col col-12 col-md-6 col-xl-3 h-100">
                        <div class="card mb-3">
                        <button id="paysClicker">
                            <img src="${pays.flags.svg}" class="card-img-top p-2 img-fluid" style="height: 190px">
                            <div class="card-body w-100">
                                <h5class="card-title"><strong>${pays.translations.fra.common}</strong></h5>
                                <p class="card-text"><strong>Capitale :</strong>${pays.capital[0]}</p>
                                <p class="card-text"><strong>Population :</strong> ${pays.population}</p>
                            </div>
                            </button>
                        </div>
                    </div>`).sort().join("")


    const paysClicker = document.querySelector("#paysClicker")

    const details = document.querySelector("#details")

    const detailsPays = await fetch(`https://restcountries.com/v3.1/name/${paysClicker.value}`)

    const detailsPaysJson = await detailsPays.json()


    paysClicker.addEventListener("click", () => {

       /* paysClicker.classList.add("border")

        details.innerHTML = detailsPaysJson.map((pays) => `<div><img src="${pays.flags.svg}" class="card-img-top p-2 img-fluid"></div>
                <div>
                    <h5><strong>${pays.translations.fra.common}</strong></h5>
                    <p><strong>Capitale :</strong>${pays.capital[0]}</p>
                    <p><strong>Population :</strong> ${pays.population}</p>
                    <p><strong>Région :</strong> ${pays.region}</p>
                    <p><strong>Sous-région :</strong> ${pays.subregion}</p>
                </div>
                `).join("")*/

        console.log(paysClicker.value)

    })

    }catch (erreur){
        console.log(erreur)

    }

}

fetchPays()





//<div>
//<p><strong>Langue :</strong> ${pays.language.fra}</p>
//<p><strong>Monnaie :</strong> ${pays.currencies.EUR.name}</p>
//<p><strong>Superficie :</strong> ${pays.area}</p>
//<p><strong>Code Pays :</strong> ${pays.cca2}</p>
//</div>














