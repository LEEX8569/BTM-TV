document.addEventListener('DOMContentLoaded', function() {
    var tab = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tab.length; i++) {
        tab[i].addEventListener("click", function(evt) {
            var tabName = this.getAttribute("data-tab");
            openTab(evt, tabName);
        });
    }

    document.getElementById("generateButton").addEventListener("click", function() {
        const copypastas = [
        "Mais vous savez moi je ne crois pas qu’il y ait de bon ou mauvais patch. Moi si je devais résumer Valorant aujourd’hui avec vous, je dirais que c’est d’abord des rencontres. Des gens qui m’ont tendu la main peut être à un moment où je n’étais pas bien et où j’étais seul chez moi. C’est assez curieux de se dire que le hasard des rencontres forgent une destinée, comme quoi même un petit geste banal peut trouver son interlocuteur..",
        "pk les équipes aux champions sous-estiment ce que peut apporter une Reyna dans ce genre de game... moi en ranked (peak diam) je le vois tout le temps tu mets ton oeil tu décal ça fait toute la diff les ennemis en face il sont aveugler c broken mdr après c'est ptet par souci de fairplay, riot interdit ptet reyna en compet parce que c trop fort ??",
        "BTM TV PREMIÈRE CHAÎNE D'INFOS CHEZ VOS DARONNES VOUS INFORME QUE LA KC CESSE SES ACTIVITÉS ESPORT POUR SE CONSACRER AU PRÊT-À-PORTER. LES ANCIENS JOUEURS DÉFILERONT LORS DE LA FASHION GAMES WEEK DEVANT UN MURET BLEU CONFECTIONNÉ PAR DES ÉTUDIANTS EN CAP MAÇONNERIE",
        "Euh, les gars? Puis-je trancher des pommes de terre ? d'accord! merci! yQKRTCHTrQKRTCHTrQKRTCHTrQKRTCHTrQKRTCHTrQKRTCHTrQKRTCHTrQKRTCHTrQKRTCHTrQKRTCHTrQKRTCHTrQKRTCHTrQKRTCHTrQKRTCHTrQKRTCHTrQKRTCHTrv",
        "TOI AUSSI TU VEUX GAGNER 10 000€/ MOIS EN SEULEMENT 1 H/ JOUR SANS CONNAISSANCE, SANS DIPLÔME, SANS ARGENT ET TOUT ÇA EN RESTANT TRANQUILLEMENT CHEZ TOI EN CALEBAR SUR LE CANAP' EN TE PALPANT ALLÈGREMENT LES BOULICHES? RÉPONDS 'BOULICHE' ET PROFITE DE MA FORMATION À 10 000€",
        "Vas y dosez, tout n'est pas copy pasta. Sachez apprécier les bons des mauvais copy pâtes. C'est comme si vous vouliez manger un bon plat de spaghetti bolo, et que vous mangez des nouilles instantanées avec de la sauce tomate. Ça n'a pas la même saveur, on est d'accord ? Bah c'est pareil pour les copy pâtes.",
        "Tu oublies la Team Liquide championne olympique 2024 à Paris 🏅. Enzo remporte à domicile le 1er tournoi olympique de l'Histoire du jeu (parce que oui Valorant va devenir un sport aux Jeux Olympiques grâce à Annie Dingo) et est nommé MVP du tournoi en ayant joué Gekko main sur scène sur toute la compèt. Il reprendra le signature moove d'un certain WiPR en criant à chaque round sur scène 'OYEZ BTM TV EN LIBERTE' pour déstabiliser les adversaires",
        "Salut les wipstigobeurs, je voulais savoir... J'ai un magasin de prêt à porter rue de Rome à Marseille. Ça suffit pour avoir une structure esport? J'ai vu que KC était sur quelques jeux, je me dis que ça doit être possible.",
        "Bonsoire WIPR je trouve que tu en fait un peu trop avec nAts, j'aime bcp ton contenu mais voir nAts une video sur 5 c'est lassant, surtout quand tu sais qu'il y a des monstres de skill comme Scream même s'ils ont pas perf l'an dernier",
        "Au cours de tes parties de Valorant, as-tu déjà expérimenté ce moment où, en évaluant tes compétences, tu as ressenti une certaine frustration, voire même une autodépréciation, pensant que tu pourrais ne pas être aussi compétent que tu le souhaiterais dans ce jeu ?",
        "Pour la même raison je préfère un petit autographe de fanboy plutôt qu'une photo car a chaque fois que je regarde ma vuvuzela par exemple beh je me rappelle des émotions et comme elle est dans mon salon bah je garde ça dans un p'tit coin de ma tête en mode good vibes tandis que si c'est une photo elle est dans le trou du fiak de ton tel et tu n'y penses jamais",
        "Radiant 100% plus dur que de devenir medecin.  parce que Medecin faut juste apprendre des trucs par coeur pendant 8 ou 9 ans alors que radiant faut avoir du game sense, et savoir viser, et avoir un bon aim. medecin c'est a la portee de n'importe quel etre humain qui n'a pas de deficit de l'attention alors que radiant faut avoir un vrai skill pour l'etre.",
        "Hello 👋😊 je regarde 👀le stream depuis 1 h⏱️je me posais juste une question🤔❓, tu as l’air d’être majeur🔞🫢. Tes comportements et tes manières d’enfant👶 sont faits exprès 😡ou pas car je trouve ça parfois un peu malsain🤨 comme si tu voulais attirer un public bizarre 😵‍💫🤐a faire un comportement enfantin👶 , tu es comme ça au quotidien ? 🤔😨En espérant ne pas t’offenser🤭💖",
        "acheter un skin sur valorant c'est vraiment comme  se masturber juste pour se vider, tu te degoutes apres l'avoir fait et tu regrettes... vous etes d'accord la team?",
        "j'ai fait un Blablacar Paris-Dortmund la semaine dernière avec un daron de 40 ans en télétravail qui avait ramené son pc avec lui. Il a passé les 3/4 du trajet en réu au téléphone avec Philippe son collègue qu'il qualifiait d'incompétent",
        "Wipr n'est pas simplement un streamer de Valorant, il incarne l'essence même de la passion pour les jeux compétitifs. Son engagement envers la scène de Valorant transparaît à travers chacun de ses commentaires, faisant de lui bien plus qu'un simple observateur. En réalité, il est un conteur, un maestro de la narration vidéoludique.",
        "j'ai une question, je suis iron mais je merite plus, je ne sais pas jusqu'ou mais quand je vois toute les analyse de sanjay ou wipr sur bronze ou iron je sais que je suis meilleur. Malheureusement j'ai l'impression que riot ne m'aime cas car je suis toujours top leaderboard mais je gagne jamais. Je souhaite donc envoyer ma vidéo a wipr. Comment je fais?",
        "Ces gens qui se revendiquent pseudo rose ca me termine. Juste parce que vous avez changer la couleur de votre pseudo vous pensez avoir embrasse la philosophie des pseudos rose. Vous voulez croire que la couleur de votre pseudo fait de vous un des meilleurs pecheur, un createur de copy pate, une figure du chat. Vous voulez juste faire partie du groupe des 'cool kids' et pour ca vous pensez qu'il suffit de s'habiller comme eux. N'est pas pseudo rose qui veut.",
        "La légende dit que FUT esport joue sur tous les jeux avec les pieds. Riot aurait accepter la présence de ces derniers en League professionnel sous condition ' vous devez mettre des chaussettes pour ne pas salir le clavier' . Une véritable expression de l'esport dans le monde moderne.",
        "Venez on joue a deviner des imitations. Je commence: 'Heuu bizarrement la Reyna en face est francaise et sait ou je vais a chaque round et m'attend. En plus mon chat est rempli de debiles mais j'adore l'argent alors je dois supporter cette commu. Je vais TO quelqu'un au hasard tiens.. GROSKILLED !'",
        "je pense que ce n'est pas réellement vitality car comme vous pouvez le remarquer il y a l'absence de leurs plus gros joueurs star Zywo et Apex",
        "On avait offert une grosse beuteu rose qui jette de l'eau à notre mate en LAN mais elle assumait pas de rentrer avec du coup je suis rentré chez moi avec ( c'était en Angleterre la LAN) ... J'imagine pas la tête du mec aux rayons X à l'aéroport quand il a vu la grosse beuteu dans ma valise",
        "Un peu ???? Tu rigoles j'èspèrre ?! Moi la derniere fois j'étais en ranked et on a mis 12-0 en défense on était trop content mais vla ty pas qu'on se prends 12-0 après et ensuite OT et alors là je te dis pas tout le monde gagnait la défense et perdait l'attaque et comme ça jusqu'en 34-34 et là les ennemis ont gagné un round en attaque et on a perdu encore trop triste",
        "Bonjour WiPR, je t'ai découvert il y a 6 ans grâce à tes vidéos sur CS. On t'a peut-être déjà posé 400 fois la question mais CS c'est fini fini, le 2 ne te donne pas envie de t'y remettre ? Qu'est-ce que tu préfères sur Valo par rapport à CS ? Merci pour les réponses et merci pour les casts ! ",
        "Quand on se met dans notre lit pour dormir, surtout en cette saison, on s'endort tout en étant maintenus au chaud par notre couette. Notre cerveau peut donc assez facilement associer la sensation de chaleur avec l'action de dormir. Ainsi, il fait parfaitement sens que ressentir l'air chaud de ton chauffage déclenche une réaction physiologique dans ton corps qui te donne envie de dormir.",
        "Manger avec des baguettes c'est stylé mais parfois manger avec des vrais couverts c'est plus simples et ça permet de se concentrer sur le goût de ce qu'on mange (ma prise de baguette est détestable, c'est comme ma prise de stylo elle me force à beaucoup trop appuyer et du coup ça me fait mal)",
        "WiPR lit tout nofake une fois j'étais bourrax j'ai écrit mon numéro de compte bancaire sur discord au lieu de le mettre sur l'automate. À la Lyon esports je voulais prendre une binouze avec ma carte bleu, il passe derrière moi et me susurre 'c'est 1369'",
        "Expert du headshot. Je suis un pseudo rose. À cause de l'arthrose, je fais des frags en overdose. Je suis un pseudo rose. Tous unis sous la couleur de la bombe qui explose. Je suis un pseudo rose. Pas de peur, juste des plays grandioses. Je suis un pseudo rose. Avec nous, le tchat devient une map virtuelle, une osmose. Je suis un pseudo rose.",
        "Le mauvais pêcheur, c'est le gars qui a un avis , y voit un chat actif et passionné, ben y pêche. Le bon pêcheur, c'est le gars qui a un avis, y voit un chat actif et passionné, ben y pêche… mais c'est pas la même chose quoi, c'est un bon pêcheur",
        "Pour clore le déat et encore une fois sans aucune agréssivité: 'la plupart des fps n'offre pas la possibilité de chosisir le positionnement de l'arme pour le jouer. L'arme est généralement positionné sur le côté droit ce qui offre donc un angle de vision optimisé et un meilleur alignement du canon lorsque le joueur pre-peak (décalage précoce) depuis un couvert de la gauche vers la droite'. Bre fpeut etre que valo est différent mais definition vrai pour la majorité des fps. Bonne soirée",
        "Difficile à croire, le radiant et le face it 10 sont par nature pas vraiment comparables, étant donné que le radiant est le top 500 d'une saison d'environ 1 mois et demi, alors que le face it 10 n'a pas de limite de slot, ni de reset de rank via un système de saison, on se retrouve donc à comparer un gars top 100 000 europe à un gars top 500 dans tous les cas",
        "alors excuse moi WiPR mais personnellement j'utilise le deathmatch pour train une défense de position, donc rester immobile est kill les gens c'est une stratégie d'entrainement",
        "WiPR je suis Social Lead Expert dans la Communication de l’Audiovisuel et du divertissement dans le domaine du jeux vidéo et jpeux pas t’aider débrouille toi",
        "Je trouve que WiPR a une certaine aisance devant la caméra et une présence inégalable. Il devrait se lancer dans le streaming",
        "Quand j'ai lu Reyna j'ai arrêter de lire c'est pas original de faire un copy pates sur reyna ce qui serait original c'est de faire un copy pates qui serait original tout en parlant de reyna ça c'est du jamais vu",
        "Oui vas-y Oui-Oui (Oui-Oui) Avec ton beau taxi En avant Oui-Oui (Oui-Oui) C'est toi qui conduit Oui vas-y Oui-Oui (Oui-Oui) Tu as mille amis Une merveilleuse journée oui Commence aujourd'hui Oui vas-y Oui-Oui",
        "Dokai il a deux Spielberg et Cameron dans chaque oeil Des mains aux doigts de fées même Clochette en est jalouse Il voit le futur et le présent en même temps,je sais pas ce qu'il fait sur Valo alors qu'il pourrait diriger le monde",
        "Ok Ero, Binet, Emmash, Hysto et touuuuuuuuut les casteurs qui enterrent une game a 5 Rounds alors qu'il y a que 1 round d'écart Ca me les brise de les entendre dire ca, aucune game n'est plus fini dès qu'une équipe a un avantage minime zzzzz",
        "Sérieusement je comprend pas les gens qui draw on perd je sais pas combien de temps pour rien gagner je préfère encore perdre faut vraiment etre une petite sasa qui se fait dessus",


        
   
    ];

    const randomIndex = Math.floor(Math.random() * copypastas.length);
        document.getElementById("copypastaText").textContent = copypastas[randomIndex];
    });
});

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.addEventListener('DOMContentLoaded', function() {
   

    
    const jokes = [
        "BLAGUE DU JOUR : POURQUOI PERSONNE NE JOUE CYPHER ?? PARCE QU'IL VIT POUR LES CAMERA !!! AYAAAAAAAAAAAAAAAAAA",
        "BLAGUE DU JOUR : Qu'est ce qui est jaune et qui attend ? Darkanard qui veut ban les pseudos roses ! AYAAAAAAAAA",
        "SUGGÉREZ VOS BLAGUES A LEEX !"
        
    ];

    
    const today = new Date();
    const jokeOfTheDay = jokes[today.getDate() % jokes.length];

    
    document.getElementById("btmTvContent").textContent = jokeOfTheDay;
});

document.addEventListener('DOMContentLoaded', function() {
    

    fetch('https://raw.githubusercontent.com/LEEX8569/BTM-TV/main/actualites.json')
        .then(response => response.json())
        .then(data => {

            document.getElementById('btmTvNews').textContent = data.actualiteDuJour;
        })
        .catch(error => console.error('Erreur lors de la récupération des données:', error));
    
});
