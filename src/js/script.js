document.addEventListener("DOMContentLoaded", function(event) {

    //Un commentaire
    console.log("Ça fonctionne!!!");
    var informations = [
        {
            id: "pizza",
            title: "Nos Pizza",
            slogan: "Eat. Pizza. Repeat.",
            type: ["pepperoni", "All Dress", "Baaaaaacon"],
            image: "images/pizza/main.jpg",
            description: "NY style pesto ricotta onions chicken and bacon chicken wing peppers pie lasagna steak. Parmesan hawaiian extra sauce, onions pizza roll meatball stuffed burnt mouth black olives meatball thin crust bbq rib. Chicken and bacon pizza roll ham thin crust",    
            gallery: ["images/pizza/1.jpg", "images/pizza/2.jpg", "images/pizza/3.jpg"]

        }, {
            id: "bacon",
            title: "Baaaaacoonnn",
            slogan: "Bacon c'est comme un High-five pour ta bouche",
            type: ["À l'érable", "Bacon de sanglier", "avec du bacon", "au bacon", "avec du bacon"],
            image: "images/bacon/main.jpg",
            description: "Leberkas hamburger ribeye, jerky frankfurter prosciutto tail fatback. Ham hock venison andouille ham turducken porchetta tenderloin t-bone flank beef ribs salami ribeye pork belly short ribs shankle. Cow capicola ground round, pancetta flank spare ribs swine pork chop chuck rump brisket sirloin",    
            gallery: ["images/bacon/1.jpg", "images/bacon/2.jpg", "images/bacon/3.jpg"]
        }, {
            id: "beigne",
            title: "Beigne",
            slogan: "Donut worry be happy",
            type: ["Glacé au chocolat", "Crème Boston", "Fraises", "Rousettes au miel", "À 'ancienne"],
            image: "images/donuts/main.jpg",
            description: "Cake sweet tiramisu lollipop donut sprinkles dolor tiramisu marzipan jelly. Tiramisu muffin cookie orange dolor marzipan croissant sweet ipsum muffin. Tiramisu donut marzipan croissant lollipop orange cookie sugar vanilla cake. Sugar orange muffin sweet cake croissant sprinkles dolor jelly cake",    
            gallery: ["images/donuts/1.jpg", "images/donuts/2.jpg", "images/donuts/3.jpg"]
        }
    ]

    //Cette ligne sert a trouver le parametre dans le lien dans Item.html. Grave au console log on comprend mieux :)
    var type = new URLSearchParams(window.location.search).get("type");

    console.log(type);

    //La premiere ligne permet de trouver le premier objet qui contient l'id qui correspond au type que l'on a choisi! (Pas trop dur a comprendre) -- La partie avec le || serta mettre pizza si le type est indéfini
    var infoPage = informations.find(x => x.id === type) ||  "pizza";
    console.log(infoPage);

    // Permet de selectionner le titre dans la page et de le changer
    var title = document.querySelector('.main-title');
    title.innerHTML = infoPage.title;

    // Permet de selectionner le slogan dans la page et de le changer
    var slogan = document.querySelector('.sub-title');
    slogan.innerHTML = infoPage.slogan;

    // Permet de selectionner le slogan dans la page et de le changer
    var description = document.querySelector(".sub-description p ");
    description.innerHTML = infoPage.description;

    // Permet de selectionner le slogan dans la page et de le changer
    var image = document.querySelector(".sub-image img");
    image.src = infoPage.image;

    // Permet de selectionner le slogan dans la page et de le changer
    var list = document.querySelector(".type-list");
    list.innerHTML = "";

    for(var i = 0; i< infoPage.type.length; i++){   // Permet de cree un li en boucle pour rentrer les informations petit-apetit
        var li = document.createElement("li");
        li.innerHTML = infoPage.type[i];

        list.appendChild(li);                           // Permet d'ajouter le li dans le javascript.

    }
});