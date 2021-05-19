# Procesverslag

## Over
* **Naam:** `Mike Hovenier`
* **Klas:** `vid-1a`
* **Minor:** `Visual Interface Design`
* **Favoriete dier:** `Geitjes en schaapjes zijn wel mijn ding.`
* **Startniveau:** `Rood (iets verder dan beginner)`

## Concept

Mijn nieuwe hobby in de covid-19 is online en fysiek schaken, klinkt heel suf, maar schaken is zo veel interessanter dan gedacht. Het is een tactisch oud bordspel waarbij je op creatieve manieren je tegenstander kunt schaakmat zetten. Ik wil daarom een generative-art schaakbord maken, hierbij kun je willekeurige setten zetten tegen het bord zelf. Door te klikken op bepaalde knoppen op het toetsenbord kun je interacteren met het bord. Na een bepaald aantal setten lijken dit mischien op krassen door een schaakbord, maar is eigenlijk heel interessant hoe een beëindigd spel er uit eindelijk uit kan zien. Elk potje schaken is natuurlijk anders, dus zo zal het patroon ook elke keer anders zijn. *"De kunst van schaken"*.

Om realistisch te blijven, is schaken natuurlijk wel erg complex en zijn er best veel regels. Om dit allemaal volgens de regels te maken zal heel lastig zijn en heel veel tijd kosten. Met die reden zal ik daarom niet het hele schaaksysteem na kunnen maken, maar wel zo ver mogelijk binnen de regels proberen te vallen. Schaaksetten zullen soms dus helemaal niet kunnen of helemaal niet goed zijn, maar het gaat om het idee dat de kunst van schaken er zo uit kan zien.

![Concept afbeelding](../images/schaakbord.png)


_Link to project: https://editor.p5js.org/mikehov/sketches/4Rv33lRH51_

*Link to project: https://mikehov.github.io/Generative-art/basic_website*

## Features
In het schaakbord zitten er verschillende soorten features, met deze feature kun je interacteren met het schaakbord.
* **Lijnen maken:** Om een willekeurige lijn neer te zetten, kun je op de _SPATIEBALK_ kliken, het schaakbord speelt vervolgens na een halve seconde tegen jou een zet. Om alle willekeurige lijnen weer weg te halen kun je op de _BACKSPACE_ knop klikken. Alle gezetten lijnen worden vervolgens van het bord verwijderd.
* **Bord kleuren veranderen:** Als je je schaakbord kleuren wilt aanpassen kun je hiervoor de _LINKER PIJL_ en _RECHTER PIJL_ gebruiken. Hierdoor veranderen de twee kleuren van het bord. Om dit weer terug te zetten naar de originele rode en blauwe kleur, klik dan op het _PIJL NAAR ONDER_.
* **Checkmate:** Bij een checkmate is het spel beëindigd en kun je niet meer verder spelen, door weer op _BACKSPACE_ te klikken kun je weer een nieuw spel starten.


## Onderzoek & inspiratie
Door de COVID-19 heb ik een aantal nieuwe hobby's ontdekt waaronder schaken. Hierdoor ben ik een beetje geinspireerd geraakt en weet ik nog dat ik ooit een foto heb gezien van lijnen na de schaakmatch. Kan alleen deze foto jammer genoeg niet meer vinden. Daar komt het concept vandaan, voor de rest zijn de andere toegevoegde features, features die ik ben tegen gekomen op het internet of op eens mij te binnen zijn geschoten.

## Voortang

Het proces van het concept is bijgehouden week tot week. Elke week zijn er veranderingen gemaakt in het project om tot het eindresultaat te komen. 

### Week-1
**_12 april 2021 / 18 april 2021_**

In de eerste week ben ik vooral bezig geweest met mijn concept, wat lijkt mij tof om te maken en wat zou ik graag willen maken? Heb wat research gedaan naar generatieve kunst kijken wat er eventueel mogelijk is en wat misschien leuk is om te maken. Na een paar voorbeelden bedacht ik mijn eerste concept. In het eerste instantie bedacht ik een concept over een omtrek van een brein die willekeurige lijnen tekent en vervolgens met andere lijnen zich vast maakt aan de canvas. Met als idee dat ik snel dingen over denk en dat ik mezelf vast zet aan mijn normen en waardes. Na het voorlichten van mijn concept, was dit achteraf een beetje een apart idee dat moeilijk tot mezelf betrekken was.

![Tekening oude concept](../images/concept.png)
![Tekening oude concept](../images/conceptt.png)

### Week-2
**_19 april 2021 / 25 april 2021_**

Een kleine week later, schoot mij opeens een ander concept te binnen, namelijk schaakbord die de lijnen van de schaak setten laat staan. Na een spel van 40 setten lijken dit misschien op willekeurige lijnen, maar de eerste paar lijnen kunnen erg interessant zijn vanwege de verschillende tactiek openingen van het schaakspel. Zelf ben ik gaan leren schaken door COVID-19 en vond ik het concept een leuk creatief idee waarbij ik veel verschillende kanten op kan gaan. Ik heb dit idee vervolgens voorgelegd, het is erg lastig om een schaakspel na te maken op deze manier maar het is wel een leuk creatief idee waarbij je veel leuke kanten op kan gaan.

Nadat het concept was goed gekeurd, ben ik verder video's gaan kijken over p5.js van The Coding Train om zo wat inspiratie en mogelijkheden van p5.js te kunnen bekijken. Omdat ik een schaakbord wilde maken, wist ik van mijn JavaScript kennis dat ik een for loop moest maken om zo een 8 x 8 schaakbord te kunnen maken. In eerste instantie probeerde ik dit vanuit mijzelf met behulp codeAcdemy en andere bronnen, maar het wilde niet lukken om een volledig schaakbord te maken zonder daadwerkelijk 64 blokjes handmatig bij elkaar te zetten. Na mij over te moeten geven aan een Youtube filmpje heb ik het vervolgens op weten te lossen.

Vervolgens leek het mij tof om de kleuren van het schaakbord met Keycodes aan te kunnen passen. Na lang proberen en opzoeken, heb ik het voor elkaar gekregen om met de twee Keycodes: _LINKER ARROW_ en _RECHTER ARROW_ beide kleuren aan te kunnen passen. Als je op een van de toetsen klikt zal deze een willekeurige kleur toepassen voor de vlakken van het schaakbord. Even later heb ik ook toegevoegd dat je deze weer kan terugzetten naar de standaard kleur met de _SPACEBAR_ knop. Ook heb ik als final touch nog een gradient achtergrond toegevoegd om het allemaal er iets verfijnder uit te laten zien.


### Week-3 + vakantie
**_26 april / 9 mei 2021_**

In derde week heb ik feedback gekregen op de huidige staat van het generatieve schaakbord. De feedback was over het algemeen erg positief, er zitten al kleine dingetjes in, het schaakbord staat. Nu is de volgende stap om de lijnen van de schaakzetten neer te gaan zetten.

Na het feedback gesprek heb ik geprobeerd om de lijnen van de schaakzetten toe te voegen. Omdat dit gewoon niet wilde lukken, liet ik de automatische lijnen even links liggen en ben ik alle schaakstukken erin gaan zetten. Het positioneren van deze schaakstukken ging redelijk soepel, alleen het vinden van een schaakstukken set was wat lastiger, iets wat je kunt gebruiken zonder problemen blijft altijd een dingetje. Nadat de schaakset was geimplementeerd, bleek deze toch niet juist te zijn en heb ik een andere weten te vinden die ik eerst weer SVG vriendelijk moest maken voordat deze werkte voor p5.js.

Eenmaal weer terug aangekomen bij de automatische lijnen, heb ik het met een voorbeeld op internet met de functie FrameCount het weten op te lossen. Deze functie zorgt ervoor dat je elementen die je wilt tekenen kunt delayen waardoor je bijvoorbeeld timers kunt maken. Er worden nu dus steeds lijnen neergezet, alleen nog niet op de goede plek.


### Week-4
**_10 mei 2021 / 16 mei 2021_**

In deze week kreeg ik voor de eerste keer fysieke feedback van meerdere studenten, door het openzetten van mijn laptop met daarbij een kleine notitie met de keyEvents kon het anoniem getest worden. Heb veel dezelfde feedback ontvangen namelijk dat niemand echt begreep wat deze lijnen nou inhielden, dit had ik er achteraf even mij moeten vermelden en was misschien niet zo handdig. Toch heb ik gelukkig nog wel andere feedback weten te ontvangen met daarop ideeën. Het is namelijk misschien handig om bijvoorbeeld speler "A" met witte lijnen te laten spelen en speler "B" met bijvoorbeeld zwarte lijnen. Omdat je met schaken namelijk ook om de beurt speelt. Ook was er nog een idee om eventueel de schaakstukken echt te laten bewegen. Dit is opzich een leuk idee alleen haalt dit het idee van het concept weg.

**Ontvangen Feedback - 11 mei 2021:** 

* Mooi gemaakt! Duidelijker aangegeven wat je concept is, misschien?
* Vet gemaakt met het schaakbord, alleen is het concept mij niet gelijk duidelijk, wat doen de lijnen.
* Top, nice. Tip wat stellen de lijnen voor?
* Wat stellen de lijnen voor? Moeten ze voor verwarring zorgen?
* Super nice dat het bord veranderd van kleur, snap de lijnen alleen niet.
* Ik zie meerdere dingen gebeuren, ik begrijp alleen het lijnen idee nog niet helemaal.
* Leuk dat het al generatieve is! Misschien dat je de schaakstukken ook generatief kunt maken.
* Heel tof! Echt mooi gemaakt, je bent ook al super ver.
* Wat top geworden! Wat gebeurt er nu met de lijntjes?
* Leuk idee, misschien kunnen de lijnen, 2 verschillende kleuren. Zodat je kan zien wie speler A en wie speler B is.

Na de feedback ben ik later verder gegaan met de automatische lijnen, het zijn namelijk nu willekeurige lijnen op je scherm die overal geplaats kunnen worden inplaats van op het bord. Dit probleem heb ik weten te lossen door een bepaalde berekening, deze zorgt ervoor dat de lijnen alleen neergezet kunnen worden in de 64 vakjes en nergens anders, met andere woorden: dus alleen binnen het schaakbord.

De lijnen komen nu wel allemaal op het schaakbord terecht, maar heel logisch zijn ze nog niet. Het is schaken namelijk alleen mogelijk om horizontaal, verticaal en diagonaal te bewegen met een hoek van 45 graden. Een lijn heeft twee punten en doordat de tweede lijn volledige willekeurig word geplaatst was het mogelijk dat de lijn geen geldig zet zou zijn voor het schaken, sterker nog er was een 1 op 64 kans dat de er alleen een stipje werd neergezet doordat punt A en punt B heel toevallig op dezelfde plek werden neergezet, dit moest worden opgelost.

Ook heb ik toegevoegd dat de achtergrond steeds van achtergrond kleur veranderd, alleen omdat het mij niet was gelukt om een transitie toe te voegen, heb ik dit maar geschrapt om zo beschadigingen van het oog te voorkomen, een pretje om naar te kijken was het namelijk niet. Daarna heb ik ook een stuiterend pionnetje toegevoegd op de achtergrond, dit puur omdat ik dit wel leuk en grappig vond om toe te voegen en te proberen, heel relevant was het alleen niet voor het project.

### Week-5
**_17 mei 2021 / 19 mei 2021_**

In de laatste week heb ik zoveel mogelijk de puntjes op de "i" proberen te zetten. In principe was ik al aardig ver wat betreft het schaakbord allemaal al kan. De week draaide dus om het toevoegen van de ontbrekende dingen en het weghalen van de elementen die niet relevant zijn. Maar voordat ik deze veranderingen wilde gaan uitvoeren, heb ik eerst feedback gekregen.

**Ontvangen Feedback - 18 mei 2021:** 

Mijn hoofdvraag voor dit gesprek was vooral, hoe kan ik de lijnen alleen horizontaal, verticaal en 45 graden diagonaal krijgen. Alleen bleek deze vraag net even te hoog begrepen te zijn en kon niemand een manier bedenken om dit eventueel te kunnen oplossen mits heel veel hand matig werk. Daarom heb ik dit idee meteen geschrapt om het niet relevant genoeg was ondanks het wel erg jammer was. 

Maar wat zou dan nog leuk zijn om toe te voegen? Het schaakbord is nu vooral erg automatisch, je kunt wel het bord aanpassen wat betreft de kleur en je kunt de lijnen resetten, maar daar houd het ook wel bij op. Daarom kreeg ik als feedback om misschien de lijnen van de computer niet automatisch te maken wat betreft om de seconde, maar de gebruiker zelf kan kiezen wanneer hij/zij een move wilt spelen (een lijn neer wilt zetten), de positie van deze lijn is wel compleet random. Zo krijgt de gebruiker meer interactie met het schaakbord. Ook was al eerder gezegd dat het een leuke toevoeging zou zijn om de lijnen twee kleuren te geven, één voor wit en één voor zwart. Verder waren er ook nog een aantal andere cool features om eventueel toe te voegen maar in verband met de tijd was dit niet erg realitisch.

Na het feedback gesprek heb ik de laatste aanpassingen door gevoerd. Ik heb de stuiterende pion weg gehaald, leuk idee, maar niet relevant dus weg ermee. De achtergrond heb ik een gradient gegeven, ik heb deze ooit wegehaald omdat deze niet goed met het bord werkte, maar bij het opnieuw proberen lukte het eindelijk. 

Ook heb ik gefixt dat de cordinaat niet twee keer op de zelfde plek kan voorkomen, om zo stippen en dus een niet legale move te voorkomen. De lijnen zijn nu ook wit en zwart in plaats van de test kleur groen. Als belangrijkste aanpassing heb ik ervoor gezorgd dat je nu tegen de computer soort van kan spelen, zodra je een set maakt, maakt de tegenstander na een halve seconde ook een set. Achteraf heb ik ook nog toegevoegd dat elk potje een bepaald aantal setten bevat, als je bij het maximale zetten uit komt voor die game, dan zal er **"CHECKMATE!"** in je beeld verschijnen waardoor je geen lijnen meer kunt neerzetten. Door op _BACKSPACE_ te klikken reset je niet alleen het spel maar je zorgt ook voor een nieuw maximum aantal setten. 

Achteraf heb ik ook nog wat controls veranderd, controls die iets logischer leken, zo zijn de kleur resetten van het bord nu _PIJLTJE NAAR ONDER_ in plaats _SPATIEBALK_ en is het maken van een zet nu _SPATIEBALK_ geworden. Als allerlaatste heb ik ook nog de controls toegevoegd, zo weet je welke toetsen je kunt gebruiken op het schaakbord.


## Reflectie

Ondanks het een aardig lastig vak is met veel dingen ontdekken en proberen, is het mij het project aardig goed af gegaan. Door veel video's te bekijken, documentatie van de p5.js website te lezen en af toe even rond te vragen vind ik dat ik prima heb gedaan. Ik ben blij met wat ik heb neergezet en had met meer tijd het schaakbord nog verder kunnen verfijnen. Vond het een erg leuk project en zie het leren van p5.js ergens ooit wel weer van pas zien komen. Buiten het feit om dat ik p5.js een beetje begrijp, zijn mijn Javascript code vaardigheden ook een klein beetje omhoog gegaan. Ben tevreden met mijn concept, tevreden met mijn design, tevreden met hoe ver ik ben gekomen en zeker tevreden met het resultaat.

## Bronnenlijst

**`**General sources:**`**

* `FreeCodeCamp: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/`

* `Mr. Jeff Astor. (2018, 27 november). Make a Checkerboard in P5 js [Video]. YouTube. https://www.youtube.com/watch?v=W9yxcH-jbao&t=448s`

* `p5.js. (z.d.). p5.js Web Editor. P5.Js Web Editor. Geraadpleegd op 13 mei 2021, van https://editor.p5js.org/REAS/sketches/S1TNUPzim`

* `The Coding Train. (2019, 12 april). Code! Programming with p5.js for Beginners Trailer [Video]. YouTube. https://www.youtube.com/watch?v=HerCR8bw_GE&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=1`


**`**p5.js code sources:**`**

* `Background color changes by mouse: https://editor.p5js.org/sjnha/sketches/BJuTw4BHW`

* `FrameCount: https://editor.p5js.org/denaplesk2/sketches/S1OAhXA-M`

* `Gradient: https://editor.p5js.org/REAS/sketches/S1TNUPzim`

* `Gradient: https://editor.p5js.org/Jaemi13/sketches/gAS-FB5Sx`