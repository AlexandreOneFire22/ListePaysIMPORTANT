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
                        <button id="paysClicker" data-pays="${pays.name.common}">
                            <img src="${pays.flags.svg}" class="card-img-top p-2 img-fluid" style="height: 190px">
                            <div class="card-body w-100">
                                <h5 class="card-title"><strong>${pays.translations.fra.common}</strong></h5>
                                <p class="card-text"><strong>Capitale : </strong>${pays.capital[0]}</p>
                                <p class="card-text"><strong>Population :</strong> ${pays.population}</p>
                            </div>
                            </button>
                        </div>
                    </div>`).sort().join("")


    const paysClicker = document.querySelector("#paysClicker")

    const details = document.querySelector("#details")

    //const detailsPays = await fetch(`https://restcountries.com/v3.1/name/${paysClicker.value}`)

    //const detailsPaysJson = await detailsPays.json()


    /*paysClicker.addEventListener("click", () => {

        paysClicker.classList.add("border")

        details.innerHTML = detailsPaysJson.map((pays) => `<div><img src="${pays.flags.svg}" class="card-img-top p-2 img-fluid"></div>
                <div>
                    <h5><strong>${pays.translations.fra.common}</strong></h5>
                    <p><strong>Capitale :</strong>${pays.capital[0]}</p>
                    <p><strong>Population :</strong> ${pays.population}</p>
                    <p><strong>Région :</strong> ${pays.region}</p>
                    <p><strong>Sous-région :</strong> ${pays.subregion}</p>
                </div>
                `).join("")

        console.log(paysClicker)

        console.log(paysClicker.value)


    })*/

        const tabPays = document.querySelectorAll(".card")

        //tabPays.forEach(pays)

        paysClicker.addEventListener("click",(evt)=>{

            //Récupérer l'élément sur lequel on a cliqué
            const target = evt.target.closest("#paysClicker")

            if (target === null) return;

            // Récupérer l'id du livre à partir du data-id (Dataset)

            const pays = target.dataset.pays

            console.log(pays)

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



//Pour la météo = Site : Openweather > Créer un compte > my API key










