import type { PageContent } from '../types'

const privacy: PageContent = {
  title: 'Informativa sulla Privacy',
  lastUpdatedISO: '2026-05-06',
  intro: [
    {
      kind: 'p',
      html: 'La presente Informativa sulla Privacy descrive in che modo Quentin Tusset, con sede a Liegi, Belgio ("noi", "ci" o "nostro"), raccoglie, utilizza, conserva e protegge le informazioni quando Lei utilizza Gourmetpedia (la "App").',
    },
    {
      kind: 'p',
      html: 'Gourmetpedia è un\'applicazione che consente agli utenti di salvare, organizzare, sincronizzare e consultare ricette trovate online, incluse quelle provenienti da Instagram, TikTok e altre piattaforme di social media.',
    },
    {
      kind: 'p',
      html: 'Utilizzando l\'App, Lei dichiara di aver letto e compreso la presente Informativa sulla Privacy.',
    },
  ],
  sections: [
    {
      id: 'data-controller',
      title: '1. Titolare del trattamento',
      blocks: [
        { kind: 'p', html: 'L\'App è gestita da:' },
        {
          kind: 'p',
          html: '<strong>Quentin Tusset</strong><br>Liegi, Belgio<br>Email: <a href="mailto:support@getgourmetpedia.com">support@getgourmetpedia.com</a>',
        },
      ],
    },
    {
      id: 'information-we-collect',
      title: '2. Informazioni che raccogliamo',
      blocks: [
        {
          kind: 'p',
          html: 'Cerchiamo di raccogliere solo le informazioni necessarie per gestire l\'App, fornire account, abilitare la sincronizzazione e gestire gli abbonamenti.',
        },
        {
          kind: 'p',
          html: 'A seconda di come utilizza l\'App, potremmo raccogliere le seguenti categorie di informazioni:',
        },
        { kind: 'h3', text: 'Informazioni dell\'account' },
        {
          kind: 'ul',
          items: [
            'indirizzo email;',
            'nome e cognome;',
            'identificativo dell\'account;',
            'data di creazione dell\'account e impostazioni dell\'account.',
          ],
        },
        { kind: 'h3', text: 'Ricette e contenuti dell\'utente' },
        {
          kind: 'ul',
          items: [
            'ricette che Lei salva, crea, organizza o modifica nell\'App;',
            'collegamenti a ricette o URL di origine che Lei aggiunge all\'App;',
            'note, titoli, ingredienti, istruzioni, categorie o altre informazioni delle ricette che Lei sceglie di inserire;',
            'contenuti che Lei sceglie di condividere con altri utenti o tramite le funzionalità di condivisione.',
          ],
        },
        {
          kind: 'p',
          html: 'Lei è responsabile dei contenuti che aggiunge alle Sue ricette. Dovrebbe evitare di includere informazioni personali, sensibili, riservate o di terzi nelle Sue ricette, salvo che ne abbia il diritto.',
        },
        { kind: 'h3', text: 'Informazioni sull\'abbonamento e sull\'acquisto' },
        {
          kind: 'ul',
          items: [
            'stato dell\'abbonamento, ad esempio se l\'abbonamento è attivo, scaduto, annullato o in periodo di prova;',
            'cronologia degli acquisti e informazioni sui diritti necessarie per fornire l\'accesso premium;',
            'identificativi di transazione o ricevute relative al negozio elaborate tramite Apple App Store o Google Play;',
            'informazioni ricevute tramite RevenueCat per gestire gli abbonamenti e ripristinare gli acquisti.',
          ],
        },
        {
          kind: 'p',
          html: 'Non raccogliamo né conserviamo direttamente i dati completi della Sua carta di pagamento. I pagamenti e la fatturazione sono gestiti da Apple App Store o Google Play, a seconda della piattaforma utilizzata. Al trattamento dei pagamenti si applicano i loro termini e le loro informative sulla privacy.',
        },
        { kind: 'h3', text: 'Informazioni tecniche' },
        {
          kind: 'ul',
          items: [
            'tipo di dispositivo, sistema operativo e versione dell\'app;',
            'indirizzo IP o informazioni approssimative sulla rete;',
            'identificativi Firebase e dati relativi all\'autenticazione;',
            'log, informazioni sui crash e dati diagnostici necessari per mantenere sicurezza, affidabilità e prestazioni.',
          ],
        },
        { kind: 'h3', text: 'Comunicazioni di assistenza' },
        {
          kind: 'ul',
          items: [
            'il Suo indirizzo email;',
            'il contenuto della Sua richiesta di assistenza;',
            'le informazioni necessarie per esaminare e rispondere alla Sua richiesta.',
          ],
        },
      ],
    },
    {
      id: 'information-not-collected',
      title: '3. Informazioni che non raccogliamo intenzionalmente',
      blocks: [
        {
          kind: 'p',
          html: 'Salvo che sia chiaramente indicato diversamente, non raccogliamo intenzionalmente:',
        },
        {
          kind: 'ul',
          items: [
            'posizione GPS precisa;',
            'dati sanitari;',
            'dati biometrici;',
            'contatti del Suo dispositivo;',
            'foto, video o file del Suo dispositivo, salvo che Lei scelga di fornirli tramite l\'App;',
            'numeri di carte di pagamento;',
            'identificativi pubblicitari per pubblicità mirata.',
          ],
        },
      ],
    },
    {
      id: 'how-we-use-information',
      title: '4. Come utilizziamo le Sue informazioni',
      blocks: [
        { kind: 'p', html: 'Utilizziamo le Sue informazioni per le seguenti finalità:' },
        {
          kind: 'ul',
          items: [
            'creare, autenticare e gestire il Suo account;',
            'consentirLe di salvare, organizzare, sincronizzare e consultare ricette su più dispositivi;',
            'fornire la versione gratuita dell\'App, compreso il limite di 10 ricette;',
            'gestire gli abbonamenti a pagamento e l\'accesso premium;',
            'ripristinare gli acquisti, ove supportato da Apple, Google e RevenueCat;',
            'fornire assistenza ai clienti;',
            'mantenere la sicurezza, l\'affidabilità e le prestazioni dell\'App;',
            'rilevare e prevenire frodi, abusi, accessi non autorizzati o abusi tecnici;',
            'adempiere agli obblighi legali, fiscali, contabili, di tutela dei consumatori e regolamentari, ove applicabili.',
          ],
        },
      ],
    },
    {
      id: 'legal-basis',
      title: '5. Base giuridica del trattamento',
      blocks: [
        {
          kind: 'p',
          html: 'Se Lei si trova nello Spazio Economico Europeo, trattiamo i dati personali sulla base di una o più delle seguenti basi giuridiche:',
        },
        {
          kind: 'ul',
          items: [
            '<strong>Esecuzione di un contratto:</strong> per fornire l\'App, gestire il Suo account, sincronizzare le ricette e fornire le funzionalità di abbonamento;',
            '<strong>Obbligo legale:</strong> per adempiere ai requisiti legali, fiscali, contabili, di tutela dei consumatori o regolamentari applicabili;',
            '<strong>Legittimi interessi:</strong> per garantire la sicurezza dell\'App, prevenire le frodi, mantenere l\'affidabilità del servizio e rispondere alle richieste di assistenza;',
            '<strong>Consenso:</strong> qualora richiediamo il Suo consenso per una specifica attività di trattamento.',
          ],
        },
      ],
    },
    {
      id: 'third-party-services',
      title: '6. Servizi di terze parti',
      blocks: [
        {
          kind: 'p',
          html: 'Possiamo utilizzare fornitori di servizi terzi affidabili per gestire l\'App. Questi fornitori possono trattare informazioni limitate per nostro conto o come fornitori autonomi, a seconda del servizio.',
        },
        {
          kind: 'ul',
          items: [
            '<strong>Firebase:</strong> utilizzato per autenticazione, database, archiviazione, sincronizzazione, infrastruttura, diagnostica o servizi backend correlati;',
            '<strong>RevenueCat:</strong> utilizzato per gestire abbonamenti, diritti, stato degli acquisti e ripristino degli acquisti;',
            '<strong>Apple App Store e Google Play:</strong> utilizzati per elaborare acquisti in-app e abbonamenti.',
          ],
        },
        {
          kind: 'p',
          html: 'Questi servizi possono trattare le informazioni in conformità alle proprie informative sulla privacy e alle leggi applicabili. Non vendiamo i Suoi dati personali.',
        },
      ],
    },
    {
      id: 'sharing-recipes',
      title: '7. Condivisione e visibilità delle ricette',
      blocks: [
        {
          kind: 'p',
          html: 'Le ricette salvate nel Suo account sono associate al Suo account Gourmetpedia e possono essere sincronizzate sui Suoi dispositivi.',
        },
        {
          kind: 'p',
          html: 'Se utilizza una funzionalità di condivisione, il contenuto della ricetta che Lei sceglie di condividere potrà diventare accessibile alle persone o al pubblico selezionati tramite tale funzionalità. Lei è responsabile di garantire che qualsiasi contenuto condiviso sia lecito, accurato e non violi i diritti di terzi.',
        },
      ],
    },
    {
      id: 'international-transfers',
      title: '8. Trasferimenti internazionali',
      blocks: [
        {
          kind: 'p',
          html: 'Alcuni fornitori di servizi, inclusi Firebase, RevenueCat, Apple o Google, possono trattare informazioni al di fuori del Belgio, dello Spazio Economico Europeo o del Suo Paese di residenza. Ove richiesto, vengono adottate adeguate garanzie ai sensi delle leggi applicabili in materia di protezione dei dati.',
        },
      ],
    },
    {
      id: 'data-retention',
      title: '9. Conservazione dei dati',
      blocks: [
        {
          kind: 'p',
          html: 'Conserviamo i dati personali solo per il tempo necessario alle finalità descritte nella presente Informativa sulla Privacy.',
        },
        {
          kind: 'ul',
          items: [
            'I dati dell\'account sono conservati fintanto che il Suo account rimane attivo.',
            'Le ricette e i relativi contenuti dell\'utente sono conservati fintanto che restano salvati nel Suo account.',
            'Lo stato dell\'abbonamento e le informazioni sui diritti sono conservati per il tempo necessario a fornire l\'accesso premium e supportare il ripristino degli acquisti.',
            'Le comunicazioni di assistenza possono essere conservate per il tempo necessario a rispondere alla Sua richiesta e a mantenere un registro delle nostre comunicazioni.',
          ],
        },
        {
          kind: 'p',
          html: 'Quando i Suoi dati non sono più necessari, o quando il Suo account viene eliminato, li cancelliamo o li rendiamo anonimi ove possibile, salvo nei casi in cui la conservazione sia richiesta dalla legge o dalle policy di fornitori terzi quali Apple, Google, Firebase o RevenueCat.',
        },
      ],
    },
    {
      id: 'account-deletion',
      title: '10. Eliminazione dell\'account e conseguenze sugli acquisti',
      blocks: [
        {
          kind: 'p',
          html: 'Lei può eliminare il Suo account direttamente nell\'App accedendo a: <strong>Profilo &gt; Elimina Account</strong>.',
        },
        {
          kind: 'p',
          html: 'Quando conferma l\'eliminazione dell\'account, l\'eliminazione è destinata ad avere effetto immediato su Gourmetpedia. Le informazioni del Suo account Gourmetpedia, le ricette salvate e i dati associati al Suo account vengono eliminati dai nostri sistemi attivi. Questa azione è irreversibile. Una volta eliminati l\'account e le ricette, non possiamo ripristinarli.',
        },
        {
          kind: 'p',
          html: 'L\'eliminazione del Suo account Gourmetpedia può comportare la perdita dell\'accesso alle funzionalità premium, alle ricette salvate, ai dati sincronizzati e a qualsiasi accesso o contenuto dell\'App collegato a tale account Gourmetpedia.',
        },
        {
          kind: 'note',
          html: '<strong>Importante:</strong> l\'eliminazione del Suo account Gourmetpedia non annulla automaticamente il Suo abbonamento Apple App Store o Google Play. Se ha un abbonamento attivo, deve annullarlo separatamente tramite le impostazioni di abbonamento del Suo Apple ID o le impostazioni di abbonamento di Google Play per evitare futuri rinnovi.',
        },
        {
          kind: 'p',
          html: 'Apple, Google e RevenueCat possono conservare registri di acquisto, ricevute di abbonamento e informazioni sulle relative transazioni in conformità ai propri obblighi legali e alle proprie policy. Se crea un nuovo account Gourmetpedia dopo l\'eliminazione, le ricette eliminate e i dati dell\'account eliminati non potranno essere recuperati. Se il Suo abbonamento Apple o Google è ancora attivo, può utilizzare l\'opzione di ripristino degli acquisti dell\'App ove disponibile, ma ciò non ripristinerà le ricette eliminate né i dati dell\'account eliminati.',
        },
      ],
    },
    {
      id: 'your-rights',
      title: '11. I Suoi diritti',
      blocks: [
        { kind: 'p', html: 'A seconda della Sua ubicazione, Lei può avere il diritto di:' },
        {
          kind: 'ul',
          items: [
            'accedere ai dati personali che deteniamo sul Suo conto;',
            'richiedere la rettifica dei dati personali inesatti;',
            'richiedere la cancellazione dei Suoi dati personali;',
            'opporsi a determinate attività di trattamento;',
            'richiedere la limitazione del trattamento;',
            'richiedere una copia dei Suoi dati personali;',
            'revocare il consenso, qualora il trattamento si basi sul consenso;',
            'presentare reclamo a un\'autorità di controllo competente in materia di protezione dei dati.',
          ],
        },
        {
          kind: 'p',
          html: 'Per esercitare i Suoi diritti, ci contatti all\'indirizzo: <a href="mailto:support@getgourmetpedia.com">support@getgourmetpedia.com</a>. Potremmo dover verificare la Sua identità prima di rispondere alla Sua richiesta.',
        },
      ],
    },
    {
      id: 'security',
      title: '12. Sicurezza',
      blocks: [
        {
          kind: 'p',
          html: 'Adottiamo misure tecniche e organizzative ragionevoli per proteggere le Sue informazioni da accessi non autorizzati, perdite, usi impropri, alterazioni o divulgazioni. Tuttavia, nessun sistema è completamente sicuro e non possiamo garantire una sicurezza assoluta.',
        },
      ],
    },
    {
      id: 'childrens-privacy',
      title: '13. Privacy dei minori',
      blocks: [
        {
          kind: 'p',
          html: 'Gourmetpedia è destinata a un pubblico generale. Se Lei ha un\'età inferiore a quella richiesta dalle leggi del Suo Paese per acconsentire all\'utilizzo di servizi online, deve utilizzare l\'App solo con il consenso e la supervisione di un genitore o tutore legale.',
        },
        {
          kind: 'p',
          html: 'Non raccogliamo consapevolmente dati personali di minori senza il consenso appropriato, ove richiesto dalla legge. Se ritiene che un minore abbia fornito dati personali senza il consenso appropriato, La preghiamo di contattarci all\'indirizzo <a href="mailto:support@getgourmetpedia.com">support@getgourmetpedia.com</a>.',
        },
      ],
    },
    {
      id: 'changes',
      title: '14. Modifiche alla presente Informativa sulla Privacy',
      blocks: [
        {
          kind: 'p',
          html: 'Possiamo aggiornare la presente Informativa sulla Privacy di volta in volta. Quando apportiamo modifiche, aggiorneremo la data di "Ultimo aggiornamento" in cima al presente documento. Se le modifiche sono significative, potremo informarLa tramite l\'App o con altri mezzi appropriati.',
        },
      ],
    },
    {
      id: 'contact',
      title: '15. Contatti',
      blocks: [
        {
          kind: 'p',
          html: 'Per domande sulla presente Informativa sulla Privacy o su come trattiamo i dati personali, ci contatti all\'indirizzo:',
        },
        {
          kind: 'p',
          html: '<strong>Quentin Tusset</strong><br>Gourmetpedia<br>Liegi, Belgio<br>Email: <a href="mailto:support@getgourmetpedia.com">support@getgourmetpedia.com</a>',
        },
      ],
    },
  ],
}

export default privacy
