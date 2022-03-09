/* Viene fornito un array di oggetti in allegato in cui è definito un array di oggetti che rappresentano i membri del team.
Ogni membro ha le informazioni necessarie per stampare le relative informazioni: Nome, Ruolo e Foto.

    MILESTONE 1:
    stampare su console le informazioni di nome, ruolo e la stringa della foto //!check

    MILESTONE 2:
    stampare le stesse informazioni su DOM sottoforma di stringhe //!check

    BONUS 1:
    trasformare la stringa foto in una immagine effettiva //!check

    BONUS 2:
    organizzare i singoli membri in card/schede //!check
 */

    const team = [
        {
            name: 'Wayne Barnett',
            role: 'Founder & CEO',
            image: 'wayne-barnett-founder-ceo.jpg',
        },
        {
            name: 'Angela Caroll',
            role: 'Chief Editor',
            image: 'angela-caroll-chief-editor.jpg',
        },
        {
            name: 'Walter Gordon',
            role: 'Office Manager',
            image: 'walter-gordon-office-manager.jpg',
        },
        {
            name: 'Angela Lopez',
            role: 'Social Media Manager',
            image: 'angela-lopez-social-media-manager.jpg',
        },
        {
            name: 'Scott Estrada',
            role: 'Developer',
            image: 'scott-estrada-developer.jpg',
        },
        {
            name: 'Barbara Ramos',
            role: 'Graphic Designer',
            image: 'barbara-ramos-graphic-designer.jpg',
        },
    ];


    //? METODO APPENDCHILD
/*     for(let i = 0; i < team.length; i++){
        console.warn(`     nome ,          ruolo,           link immagine`)
        console.log(`${team[i].name} , ${team[i].role} , ${team[i].image}`);

        
        const card = document.createElement("div");
        card.classList.add("card" , "p-1", "m-3");

        const imgCard = document.createElement("img");
        imgCard.classList.add("card-img-top");
        imgCard.src = `img/${team[i].image}`

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.innerHTML = `${team[i].name}`

        const cardText = document.createElement("p");
        cardText.classList.add("card-text")
        cardText.innerHTML = `${team[i].role}`

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText)
        card.appendChild(imgCard);
        card.appendChild(cardBody);
        

        document.getElementById("card-container").appendChild(card , cardBody);


    } */

    //? METODO TEMPLATE LITERAL
    for(let i = 0; i < team.length; i++){
        document.getElementById("card-container").innerHTML += `
        <div class="card p-1 m-3">
            <img src="img/${team[i].image}" class="card-img-top" alt="someone randome image">
            <div class="card-body">
                <h5 class="card-title">${team[i].name}</h5>
                <p class="card-text">${team[i].role}</p>

            </div>
        </div>`
    }




