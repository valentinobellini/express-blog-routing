// importiamo express e utlizziamo la parte di routing
const express = require('express')
const router = express.Router();


// rotte di CRUD dei posts
// index
router.get('/', function (req, res) {

    const posts = [
        {
            title: "BIT ROT PROJECT 1",
            content: "Old Seelampur, New Delhi, India.\nOld Seelampur is one of the poorest suburb areas but the biggest e-waste market in Delhi.\nThere are dozens of retail and wholesale stores. Most of them buy materials from abroad (USA, Europe, Dubai).\nThey buy it for about $10 cents to $15 cents per kilo and they sell it for double the price to other stores.\nThere, they separate the components of the electric and electronic devices in order to sell them again.",
            image: "/img/img01.jpg",
            tags: ["photography", "e-waste", "documentary", "environment", "pollution"]
        },
        {
            title: "BIT ROT PROJECT 2",
            content: "One of the young boys working in Agbobloshie made the landfill his home; he has built a shelter made of different types of scraps and wastes. Most part of the people who work in Agbobloshie are from rural Northern Ghana. To work in Agbobloshie they have to leave their families and their homes.",
            image: "/img/img02.jpg",
            tags: ["photography", "e-waste", "documentary", "environment", "pollution"]

        },
        {
            title: "BIT ROT PROJECT 3",
            content: "Agbobloshie, Accra, Ghana.\nA young man is transporting electric materials ready to be burnt. \nThe materials treated in the Agbobloshie landfill contain substances that are highly toxic for the environment and for human health. \nCadmium, lead, phthalates, antimony, PCBs (polychlorinated biphenyls), chlorobenzenes, Polybrominated diphenyl ethers (PBDEs), triphenyl phosphate (TPP), Brominated Flame Retardants (BFRs).",
            image: "/img/img03.jpg",
            tags: ["photography", "e-waste", "documentary", "environment", "pollution"]

        },
        {
            title: "BIT ROT PROJECT 4",
            content: "Old Seelampur, New Delhi, India.\nOld transformers and inductors are boiling in a metal pot.\nWhat is emblematic is that this particular type of pieces is essentially used, in life, in the so-called \"energy saving\" applications.\n\"In life,\" then these components are used to increase energy efficiency while also reducing CO2 pollution; when they \"die\" instead cause serious problems to people's health.\nMost of the time, this technique is carried out in a yard or in private houses, just like in this case.",
            image: "/img/img04.jpg",
            tags: ["photography", "e-waste", "documentary", "environment", "pollution"]

        },
        {
            title: "BIT ROT PROJECT 5",
            content: "Agbobloshie, Accra, Ghana.\nA guy is standing in the midst of smoke, fire and residual parts of electronic equipment as he burns it to extract some copper contained inside he will resell later to gain his daily food.",
            image: "/img/img05.jpg",
            tags: ["photography", "e-waste", "documentary", "environment", "pollution"]

        }
    ];

    res.json(posts);


    res.send('Lista dei posts');
});
// show
router.get('/:id', function (req, res) {
    res.send('Dettagli del post ' + req.params.id);
});
// store
router.post('/', function (req, res) {
    res.send('Creazione nuovo post');
});

// update
router.put('/:id', function (req, res) {
    res.send('Modifica integrale del post ' + req.params.id);
});

// modify
router.patch('/:id', function (req, res) {
    res.send('Modifica parziale del post ' + req.params.id);
});

// destroy
router.delete('/:id', function (req, res) {
    res.send('Eliminazione del post ' + req.params.id);
});

// esportiamo il modulo del router
module.exports = router;