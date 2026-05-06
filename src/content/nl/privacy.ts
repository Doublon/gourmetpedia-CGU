import type { PageContent } from '../types'

const privacy: PageContent = {
  title: 'Privacybeleid',
  lastUpdatedISO: '2026-05-06',
  intro: [
    {
      kind: 'p',
      html: 'Dit Privacybeleid legt uit hoe Quentin Tusset, gevestigd in Luik, België ("wij", "ons" of "onze"), informatie verzamelt, gebruikt, opslaat en beschermt wanneer u Gourmetpedia (de "App") gebruikt.',
    },
    {
      kind: 'p',
      html: 'Gourmetpedia is een applicatie waarmee gebruikers recepten die online zijn gevonden kunnen opslaan, organiseren, synchroniseren en raadplegen, waaronder recepten van Instagram, TikTok en andere socialemediaplatforms.',
    },
    {
      kind: 'p',
      html: 'Door de App te gebruiken erkent u dat u dit Privacybeleid heeft gelezen en begrepen.',
    },
  ],
  sections: [
    {
      id: 'data-controller',
      title: '1. Verwerkingsverantwoordelijke',
      blocks: [
        { kind: 'p', html: 'De App wordt geëxploiteerd door:' },
        {
          kind: 'p',
          html: '<strong>Quentin Tusset</strong><br>Luik, België<br>E-mail: <a href="mailto:support@getgourmetpedia.com">support@getgourmetpedia.com</a>',
        },
      ],
    },
    {
      id: 'information-we-collect',
      title: '2. Informatie die wij verzamelen',
      blocks: [
        {
          kind: 'p',
          html: 'Wij streven ernaar alleen de informatie te verzamelen die nodig is om de App te exploiteren, accounts te verstrekken, synchronisatie mogelijk te maken en abonnementen te beheren.',
        },
        {
          kind: 'p',
          html: 'Afhankelijk van hoe u de App gebruikt, kunnen wij de volgende categorieën informatie verzamelen:',
        },
        { kind: 'h3', text: 'Accountgegevens' },
        {
          kind: 'ul',
          items: [
            'e-mailadres;',
            'voornaam en achternaam;',
            'accountidentificatie;',
            'datum van aanmaak van het account en accountinstellingen.',
          ],
        },
        { kind: 'h3', text: 'Recepten en gebruikersinhoud' },
        {
          kind: 'ul',
          items: [
            'recepten die u opslaat, aanmaakt, organiseert of bewerkt in de App;',
            'receptlinks of bron-URL\'s die u aan de App toevoegt;',
            'receptnotities, titels, ingrediënten, instructies, categorieën of andere informatie die u kiest in te voeren;',
            'inhoud die u kiest te delen met andere gebruikers of via deelfuncties.',
          ],
        },
        {
          kind: 'p',
          html: 'U bent verantwoordelijk voor de inhoud die u aan uw recepten toevoegt. U dient te vermijden persoonlijke, gevoelige, vertrouwelijke informatie of informatie van derden in uw recepten op te nemen, tenzij u daartoe gerechtigd bent.',
        },
        { kind: 'h3', text: 'Abonnement- en aankoopgegevens' },
        {
          kind: 'ul',
          items: [
            'abonnementsstatus, zoals of uw abonnement actief, verlopen, geannuleerd of in een proefperiode is;',
            'aankoopgeschiedenis en rechtgegevens die nodig zijn om premiumtoegang te bieden;',
            'winkelgerelateerde transactie-identificaties of bonnen verwerkt via de Apple App Store of Google Play;',
            'informatie ontvangen via RevenueCat om abonnementen te beheren en aankopen te herstellen.',
          ],
        },
        {
          kind: 'p',
          html: 'Wij verzamelen of bewaren uw volledige betaalkaartgegevens niet rechtstreeks. Betalingen en facturatie worden afgehandeld door de Apple App Store of Google Play, afhankelijk van het gebruikte platform. Hun eigen voorwaarden en privacybeleid zijn van toepassing op de betalingsverwerking.',
        },
        { kind: 'h3', text: 'Technische informatie' },
        {
          kind: 'ul',
          items: [
            'apparaattype, besturingssysteem en app-versie;',
            'IP-adres of bij benadering netwerkinformatie;',
            'Firebase-identificaties en authenticatiegerelateerde gegevens;',
            'logs, crashinformatie en diagnostische gegevens die nodig zijn om de beveiliging, betrouwbaarheid en prestaties te handhaven.',
          ],
        },
        { kind: 'h3', text: 'Communicatie met klantenservice' },
        {
          kind: 'ul',
          items: [
            'uw e-mailadres;',
            'de inhoud van uw supportverzoek;',
            'informatie die nodig is om uw verzoek te onderzoeken en te beantwoorden.',
          ],
        },
      ],
    },
    {
      id: 'information-not-collected',
      title: '3. Informatie die wij niet bewust verzamelen',
      blocks: [
        {
          kind: 'p',
          html: 'Tenzij duidelijk anders vermeld, verzamelen wij niet bewust:',
        },
        {
          kind: 'ul',
          items: [
            'nauwkeurige GPS-locatie;',
            'gezondheidsgegevens;',
            'biometrische gegevens;',
            'contacten van uw apparaat;',
            'foto\'s, video\'s of bestanden van uw apparaat, tenzij u ervoor kiest deze via de App te verstrekken;',
            'betaalkaartnummers;',
            'reclame-identificaties voor gerichte reclame.',
          ],
        },
      ],
    },
    {
      id: 'how-we-use-information',
      title: '4. Hoe wij uw informatie gebruiken',
      blocks: [
        { kind: 'p', html: 'Wij gebruiken uw informatie voor de volgende doeleinden:' },
        {
          kind: 'ul',
          items: [
            'om uw account aan te maken, te authenticeren en te beheren;',
            'om u in staat te stellen recepten op te slaan, te organiseren, te synchroniseren en op verschillende apparaten te raadplegen;',
            'om de gratis versie van de App te leveren, inclusief de limiet van 10 recepten;',
            'om betaalde abonnementen en premiumtoegang te beheren;',
            'om aankopen te herstellen waar dit wordt ondersteund door Apple, Google en RevenueCat;',
            'om klantenservice te bieden;',
            'om de beveiliging, betrouwbaarheid en prestaties van de App te handhaven;',
            'om fraude, misbruik, ongeoorloofde toegang of technisch misbruik op te sporen en te voorkomen;',
            'om te voldoen aan toepasselijke wettelijke, fiscale, boekhoudkundige, consumentenbeschermings- en regelgevende verplichtingen.',
          ],
        },
      ],
    },
    {
      id: 'legal-basis',
      title: '5. Rechtsgrondslag voor verwerking',
      blocks: [
        {
          kind: 'p',
          html: 'Indien u zich in de Europese Economische Ruimte bevindt, verwerken wij persoonsgegevens op basis van een of meer van de volgende rechtsgrondslagen:',
        },
        {
          kind: 'ul',
          items: [
            '<strong>Uitvoering van een overeenkomst:</strong> om de App te leveren, uw account te beheren, recepten te synchroniseren en abonnementsfuncties te bieden;',
            '<strong>Wettelijke verplichting:</strong> om te voldoen aan toepasselijke wettelijke, fiscale, boekhoudkundige, consumentenbeschermings- of regelgevende vereisten;',
            '<strong>Gerechtvaardigde belangen:</strong> om de App te beveiligen, fraude te voorkomen, de betrouwbaarheid van de dienst te handhaven en op supportverzoeken te reageren;',
            '<strong>Toestemming:</strong> wanneer wij om uw toestemming vragen voor een specifieke verwerkingsactiviteit.',
          ],
        },
      ],
    },
    {
      id: 'third-party-services',
      title: '6. Diensten van derden',
      blocks: [
        {
          kind: 'p',
          html: 'Wij kunnen vertrouwde dienstverleners van derden gebruiken om de App te exploiteren. Deze dienstverleners kunnen beperkte informatie verwerken namens ons of als onafhankelijke verwerkers, afhankelijk van de dienst.',
        },
        {
          kind: 'ul',
          items: [
            '<strong>Firebase:</strong> gebruikt voor authenticatie, database, opslag, synchronisatie, infrastructuur, diagnostiek of gerelateerde backend-diensten;',
            '<strong>RevenueCat:</strong> gebruikt om abonnementen, rechten, aankoopstatus en aankoopherstel te beheren;',
            '<strong>Apple App Store en Google Play:</strong> gebruikt om in-app aankopen en abonnementen te verwerken.',
          ],
        },
        {
          kind: 'p',
          html: 'Deze diensten kunnen informatie verwerken in overeenstemming met hun eigen privacybeleid en toepasselijke wetgeving. Wij verkopen uw persoonsgegevens niet.',
        },
      ],
    },
    {
      id: 'sharing-recipes',
      title: '7. Delen en zichtbaarheid van recepten',
      blocks: [
        {
          kind: 'p',
          html: 'Recepten die in uw account zijn opgeslagen zijn gekoppeld aan uw Gourmetpedia-account en kunnen tussen uw apparaten worden gesynchroniseerd.',
        },
        {
          kind: 'p',
          html: 'Indien u een deelfunctie gebruikt, kan de receptinhoud die u kiest te delen toegankelijk worden voor de personen of het publiek dat via die functie is geselecteerd. U bent verantwoordelijk voor het waarborgen dat alle inhoud die u deelt rechtmatig en juist is en geen rechten van derden schendt.',
        },
      ],
    },
    {
      id: 'international-transfers',
      title: '8. Internationale doorgiften',
      blocks: [
        {
          kind: 'p',
          html: 'Sommige dienstverleners, waaronder Firebase, RevenueCat, Apple of Google, kunnen informatie verwerken buiten België, de Europese Economische Ruimte of uw land van verblijf. Waar vereist worden passende waarborgen toegepast onder de toepasselijke wetgeving inzake gegevensbescherming.',
        },
      ],
    },
    {
      id: 'data-retention',
      title: '9. Bewaring van gegevens',
      blocks: [
        {
          kind: 'p',
          html: 'Wij bewaren persoonsgegevens slechts zolang als nodig is voor de in dit Privacybeleid beschreven doeleinden.',
        },
        {
          kind: 'ul',
          items: [
            'Accountgegevens worden bewaard zolang uw account actief blijft.',
            'Recepten en gerelateerde gebruikersinhoud worden bewaard zolang ze in uw account opgeslagen blijven.',
            'Abonnementsstatus en rechtgegevens worden bewaard zolang nodig is om premiumtoegang te bieden en aankoopherstel te ondersteunen.',
            'Communicatie met klantenservice kan worden bewaard zolang nodig is om uw verzoek te beantwoorden en een register van onze communicatie bij te houden.',
          ],
        },
        {
          kind: 'p',
          html: 'Wanneer uw gegevens niet langer nodig zijn, of wanneer uw account wordt verwijderd, verwijderen of anonimiseren wij deze waar mogelijk, behalve waar bewaring wettelijk vereist is of door het beleid van externe dienstverleners zoals Apple, Google, Firebase of RevenueCat.',
        },
      ],
    },
    {
      id: 'account-deletion',
      title: '10. Accountverwijdering en gevolgen voor aankopen',
      blocks: [
        {
          kind: 'p',
          html: 'U kunt uw account rechtstreeks in de App verwijderen via: <strong>Profiel &gt; Account verwijderen</strong>.',
        },
        {
          kind: 'p',
          html: 'Wanneer u de accountverwijdering bevestigt, is het de bedoeling dat de verwijdering onmiddellijk van kracht wordt op Gourmetpedia. Uw Gourmetpedia-accountgegevens, opgeslagen recepten en gegevens die aan uw account zijn gekoppeld, worden uit onze actieve systemen verwijderd. Deze actie is onomkeerbaar. Zodra uw account en recepten zijn verwijderd, kunnen wij ze niet herstellen.',
        },
        {
          kind: 'p',
          html: 'Het verwijderen van uw Gourmetpedia-account kan ertoe leiden dat u de toegang verliest tot premiumfuncties, opgeslagen recepten, gesynchroniseerde gegevens en alle App-toegang of inhoud die aan dat Gourmetpedia-account is gekoppeld.',
        },
        {
          kind: 'note',
          html: '<strong>Belangrijk:</strong> het verwijderen van uw Gourmetpedia-account zegt uw Apple App Store- of Google Play-abonnement niet automatisch op. Indien u een actief abonnement heeft, dient u dit afzonderlijk op te zeggen via uw Apple ID-abonnementsinstellingen of uw Google Play-abonnementsinstellingen om toekomstige verlengingen te voorkomen.',
        },
        {
          kind: 'p',
          html: 'Apple, Google en RevenueCat kunnen aankoopregistraties, abonnementsbonnen en gerelateerde transactiegegevens bewaren in overeenstemming met hun eigen wettelijke verplichtingen en beleid. Indien u na verwijdering een nieuw Gourmetpedia-account aanmaakt, kunnen verwijderde recepten en verwijderde accountgegevens niet worden hersteld. Indien uw Apple- of Google-abonnement nog actief is, kunt u, waar beschikbaar, de optie voor het herstellen van aankopen in de App gebruiken, maar dit zal verwijderde recepten of verwijderde accountgegevens niet herstellen.',
        },
      ],
    },
    {
      id: 'your-rights',
      title: '11. Uw rechten',
      blocks: [
        { kind: 'p', html: 'Afhankelijk van uw locatie kunt u het recht hebben om:' },
        {
          kind: 'ul',
          items: [
            'toegang te krijgen tot de persoonsgegevens die wij over u bewaren;',
            'correctie van onjuiste persoonsgegevens te verzoeken;',
            'verwijdering van uw persoonsgegevens te verzoeken;',
            'bezwaar te maken tegen bepaalde verwerkingsactiviteiten;',
            'beperking van de verwerking te verzoeken;',
            'een kopie van uw persoonsgegevens te verzoeken;',
            'uw toestemming in te trekken wanneer de verwerking op toestemming is gebaseerd;',
            'een klacht in te dienen bij een bevoegde gegevensbeschermingsautoriteit.',
          ],
        },
        {
          kind: 'p',
          html: 'Om uw rechten uit te oefenen, kunt u contact met ons opnemen via: <a href="mailto:support@getgourmetpedia.com">support@getgourmetpedia.com</a>. Wij dienen mogelijk uw identiteit te verifiëren voordat wij op uw verzoek reageren.',
        },
      ],
    },
    {
      id: 'security',
      title: '12. Beveiliging',
      blocks: [
        {
          kind: 'p',
          html: 'Wij gebruiken redelijke technische en organisatorische maatregelen om uw informatie te beschermen tegen ongeoorloofde toegang, verlies, misbruik, wijziging of openbaarmaking. Geen enkel systeem is echter volledig veilig, en wij kunnen geen absolute beveiliging garanderen.',
        },
      ],
    },
    {
      id: 'childrens-privacy',
      title: '13. Privacy van kinderen',
      blocks: [
        {
          kind: 'p',
          html: 'Gourmetpedia is bestemd voor een algemeen publiek. Indien u jonger bent dan de leeftijd die volgens de wet van uw land vereist is om in te stemmen met het gebruik van onlinediensten, mag u de App alleen gebruiken met de toestemming en het toezicht van een ouder of wettelijke voogd.',
        },
        {
          kind: 'p',
          html: 'Wij verzamelen niet bewust persoonsgegevens van kinderen zonder passende toestemming wanneer dat wettelijk vereist is. Indien u van mening bent dat een kind persoonsgegevens heeft verstrekt zonder passende toestemming, neem dan contact met ons op via <a href="mailto:support@getgourmetpedia.com">support@getgourmetpedia.com</a>.',
        },
      ],
    },
    {
      id: 'changes',
      title: '14. Wijzigingen in dit Privacybeleid',
      blocks: [
        {
          kind: 'p',
          html: 'Wij kunnen dit Privacybeleid van tijd tot tijd bijwerken. Wanneer wij wijzigingen aanbrengen, werken wij de datum "Laatst bijgewerkt" boven aan dit document bij. Indien de wijzigingen significant zijn, kunnen wij u via de App of op een andere passende manier op de hoogte stellen.',
        },
      ],
    },
    {
      id: 'contact',
      title: '15. Contact',
      blocks: [
        {
          kind: 'p',
          html: 'Voor vragen over dit Privacybeleid of over hoe wij persoonsgegevens behandelen, kunt u contact met ons opnemen via:',
        },
        {
          kind: 'p',
          html: '<strong>Quentin Tusset</strong><br>Gourmetpedia<br>Luik, België<br>E-mail: <a href="mailto:support@getgourmetpedia.com">support@getgourmetpedia.com</a>',
        },
      ],
    },
  ],
}

export default privacy
