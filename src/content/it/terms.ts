import type { PageContent } from '../types'

const terms: PageContent = {
  title: 'Termini di Utilizzo e di Vendita',
  lastUpdatedISO: '2026-05-06',
  intro: [
    {
      kind: 'p',
      html: 'I presenti Termini di Utilizzo e di Vendita (i "Termini") disciplinano l\'accesso e l\'utilizzo di Gourmetpedia (la "App"), inclusa la versione gratuita ed eventuali abbonamenti a pagamento offerti nell\'App.',
    },
    {
      kind: 'p',
      html: 'L\'App è gestita da <strong>Quentin Tusset</strong>, con sede a Liegi, Belgio ("noi", "ci" o "nostro"). Creando un account, utilizzando l\'App o acquistando un abbonamento, Lei accetta i presenti Termini. Se non li accetta, non deve utilizzare l\'App.',
    },
  ],
  sections: [
    {
      id: 'about-gourmetpedia',
      title: '1. Informazioni su Gourmetpedia',
      blocks: [
        {
          kind: 'p',
          html: 'Gourmetpedia è un\'applicazione che consente agli utenti di salvare, organizzare e consultare ricette trovate online, comprese ricette individuate tramite Instagram, TikTok e altre piattaforme di social media. L\'App consente inoltre agli utenti di creare, archiviare, sincronizzare e condividere ricette.',
        },
        {
          kind: 'p',
          html: 'Gourmetpedia non è affiliata, approvata o sponsorizzata da Instagram, TikTok, Meta, ByteDance o da qualsiasi altra piattaforma di social media o sito web di terzi.',
        },
      ],
    },
    {
      id: 'contact-and-operator',
      title: '2. Informazioni di contatto e sul gestore',
      blocks: [
        { kind: 'p', html: 'L\'App è gestita da:' },
        {
          kind: 'p',
          html: '<strong>Quentin Tusset</strong><br>Liegi, Belgio<br>Email: <a href="mailto:support@getgourmetpedia.com">support@getgourmetpedia.com</a>',
        },
        {
          kind: 'p',
          html: 'In caso di domande sui presenti Termini, sul Suo account o sul Suo abbonamento, può contattarci all\'indirizzo <a href="mailto:support@getgourmetpedia.com">support@getgourmetpedia.com</a>.',
        },
      ],
    },
    {
      id: 'account-registration',
      title: '3. Registrazione dell\'account',
      blocks: [
        {
          kind: 'p',
          html: 'Per utilizzare l\'App è necessario un account utente. Quando crea un account, deve fornire informazioni accurate e aggiornate, inclusi il Suo indirizzo email e il Suo nome e cognome.',
        },
        {
          kind: 'p',
          html: 'Lei è responsabile della riservatezza delle Sue credenziali di accesso e di tutte le attività che si svolgono attraverso il Suo account. Deve avvisarci immediatamente qualora ritenga che il Suo account sia stato consultato senza autorizzazione.',
        },
        {
          kind: 'p',
          html: 'L\'App è destinata a un pubblico generale. Se ha un\'età inferiore a quella richiesta dalla legge del Suo Paese per stipulare i presenti Termini, può utilizzare l\'App solo con il permesso e la supervisione di un genitore o tutore legale.',
        },
      ],
    },
    {
      id: 'free-version',
      title: '4. Versione gratuita',
      blocks: [
        {
          kind: 'p',
          html: 'Gourmetpedia offre una versione gratuita dell\'App. Nella versione gratuita, gli utenti possono salvare fino a <strong>10 ricette</strong>. Possono applicarsi limiti aggiuntivi o restrizioni tecniche, come indicato nell\'App.',
        },
        {
          kind: 'p',
          html: 'Possiamo modificare di volta in volta le funzionalità o i limiti della versione gratuita. Tali modifiche non incideranno sui Suoi diritti inderogabili in qualità di consumatore.',
        },
      ],
    },
    {
      id: 'premium-subscription',
      title: '5. Abbonamento Gourmetpedia Premium',
      blocks: [
        {
          kind: 'p',
          html: 'Gourmetpedia può offrire un abbonamento a pagamento, attualmente presentato come abbonamento per ricette illimitate. Le funzionalità premium attualmente includono:',
        },
        {
          kind: 'ul',
          items: [
            'ricette illimitate nella Sua libreria;',
            'sincronizzazione sicura su più dispositivi;',
            'accesso ad altre funzionalità premium visualizzate nell\'App, se presenti.',
          ],
        },
        { kind: 'p', html: 'Le opzioni di abbonamento attualmente visualizzate nell\'App sono:' },
        {
          kind: 'ul',
          items: [
            '<strong>Abbonamento mensile:</strong> USD 2,99 al mese;',
            '<strong>Abbonamento annuale:</strong> USD 19,99 all\'anno.',
          ],
        },
        {
          kind: 'p',
          html: 'I prezzi possono variare in base a Paese, valuta, imposte, commissioni della piattaforma, promozioni o impostazioni dello store. Il prezzo finale, il periodo di fatturazione e le imposte applicabili sono visualizzati al checkout di Apple App Store o Google Play prima della conferma dell\'acquisto. In caso di differenza tra il prezzo indicato nel presente documento e il prezzo indicato al checkout dello store, prevale il prezzo del checkout dello store.',
        },
      ],
    },
    {
      id: 'payment-processing',
      title: '6. Elaborazione dei pagamenti',
      blocks: [
        {
          kind: 'p',
          html: 'Tutti gli acquisti in-app e gli abbonamenti sono elaborati dalla piattaforma tramite la quale ha acquistato l\'abbonamento, ovvero Apple App Store o Google Play. Non raccogliamo né conserviamo direttamente i dati completi della Sua carta di pagamento.',
        },
        {
          kind: 'p',
          html: 'Acquistando un abbonamento tramite Apple o Google, Lei accetta inoltre i termini, le regole di pagamento, le regole di fatturazione e le politiche di rimborso applicabili di Apple App Store o Google Play.',
        },
        {
          kind: 'p',
          html: 'L\'App utilizza RevenueCat per contribuire alla gestione dello stato dell\'abbonamento, dei diritti di acquisto e del ripristino degli acquisti. L\'App può inoltre utilizzare Firebase per servizi di account, autenticazione, archiviazione, sincronizzazione e relativi servizi backend.',
        },
      ],
    },
    {
      id: 'auto-renewal-and-cancellation',
      title: '7. Rinnovo automatico e annullamento',
      blocks: [
        {
          kind: 'p',
          html: 'Gli abbonamenti si rinnovano automaticamente salvo che vengano annullati tramite Apple App Store o Google Play prima della fine del periodo di fatturazione in corso, secondo le regole della piattaforma utilizzata per l\'acquisto.',
        },
        {
          kind: 'p',
          html: 'Lei è responsabile dell\'annullamento del Suo abbonamento tramite la stessa piattaforma su cui lo ha acquistato. L\'eliminazione dell\'App o l\'eliminazione del Suo account Gourmetpedia <strong>non</strong> annulla automaticamente il Suo abbonamento Apple App Store o Google Play.',
        },
        { kind: 'h3', text: 'Come annullare' },
        {
          kind: 'ul',
          items: [
            '<strong>Apple App Store:</strong> apra l\'app Impostazioni sul Suo dispositivo Apple, tocchi il nome del Suo Apple Account, vada su Abbonamenti, selezioni Gourmetpedia e annulli l\'abbonamento. Apple offre inoltre assistenza per gli abbonamenti all\'indirizzo <a href="https://support.apple.com/billing">support.apple.com/billing</a>.',
            '<strong>Google Play:</strong> apra Google Play, vada su Pagamenti e abbonamenti o Abbonamenti, selezioni Gourmetpedia e annulli l\'abbonamento. Google offre inoltre assistenza per gli abbonamenti all\'indirizzo <a href="https://support.google.com/googleplay">support.google.com/googleplay</a>.',
          ],
        },
        {
          kind: 'p',
          html: 'Dopo l\'annullamento, Lei potrà continuare ad accedere alle funzionalità a pagamento fino al termine del periodo di fatturazione a pagamento in corso, salvo diversa indicazione della piattaforma.',
        },
      ],
    },
    {
      id: 'refunds',
      title: '8. Rimborsi',
      blocks: [
        {
          kind: 'p',
          html: 'I rimborsi per gli acquisti effettuati tramite Apple App Store o Google Play sono gestiti da Apple o Google in conformità alle proprie politiche di rimborso e alla legge applicabile. Non possiamo emettere direttamente rimborsi per gli acquisti elaborati da Apple o Google.',
        },
        {
          kind: 'p',
          html: 'Se ritiene che vi sia stato un errore di fatturazione, contatti Apple o Google tramite il canale di assistenza della relativa piattaforma. Può inoltre contattarci all\'indirizzo <a href="mailto:support@getgourmetpedia.com">support@getgourmetpedia.com</a>, ma gli acquisti effettuati tramite la piattaforma restano soggetti alla procedura di rimborso della piattaforma stessa.',
        },
      ],
    },
    {
      id: 'right-of-withdrawal',
      title: '9. Diritto di recesso per i consumatori',
      blocks: [
        {
          kind: 'p',
          html: 'Se Lei è un consumatore situato nello Spazio Economico Europeo o in un\'altra giurisdizione con norme analoghe a tutela dei consumatori, può avere un diritto legale di recesso per determinati contratti a distanza.',
        },
        {
          kind: 'p',
          html: 'Poiché gli abbonamenti Gourmetpedia forniscono accesso immediato a servizi digitali e funzionalità premium, confermando l\'acquisto e utilizzando le funzionalità premium Lei richiede l\'esecuzione immediata del servizio. Nei limiti consentiti dalla legge applicabile, Lei riconosce che il Suo diritto di recesso può essere limitato o perduto una volta iniziata l\'erogazione del servizio digitale.',
        },
        {
          kind: 'p',
          html: 'La presente sezione non limita gli eventuali diritti inderogabili a tutela dei consumatori che Le spettano ai sensi della legge applicabile. Le richieste di rimborso o recesso per gli abbonamenti acquistati tramite Apple o Google devono in genere essere inoltrate tramite la relativa piattaforma, salvo diversa disposizione della legge applicabile.',
        },
      ],
    },
    {
      id: 'user-recipes',
      title: '10. Ricette degli utenti e contenuti condivisi',
      blocks: [
        {
          kind: 'p',
          html: 'Lei può aggiungere, salvare, organizzare, modificare e condividere ricette tramite l\'App. Ciò include titoli di ricette, collegamenti, URL di origine, ingredienti, istruzioni, note, categorie, immagini e altre informazioni che sceglie di inserire, ove supportato dall\'App.',
        },
        {
          kind: 'p',
          html: 'Lei resta responsabile di tutti i contenuti che aggiunge all\'App. Deve assicurarsi di avere il diritto di salvare, utilizzare, caricare o condividere qualsiasi ricetta, testo, immagine, collegamento o altro contenuto che aggiunge. Non deve utilizzare l\'App per archiviare o condividere contenuti illeciti, dannosi, lesivi, ingannevoli, riservati o non autorizzati.',
        },
        {
          kind: 'p',
          html: 'Aggiungendo contenuti all\'App, Lei ci concede una licenza limitata, non esclusiva, mondiale e gratuita per ospitare, archiviare, copiare, visualizzare, formattare, sincronizzare, trasmettere ed elaborare tali contenuti solo nella misura necessaria per gestire, mettere in sicurezza, fornire e migliorare l\'App. Se condivide una ricetta, ci autorizza a renderla disponibile agli utenti o destinatari da Lei scelti.',
        },
        {
          kind: 'p',
          html: 'Quando Lei elimina i contenuti o elimina il Suo account, tale licenza cessa per i contenuti eliminati, salvo nei casi in cui il trattamento continuativo sia tecnicamente o legalmente necessario o nei casi in cui i contenuti siano già stati consultati, salvati, copiati o condivisi da altri al di fuori del nostro controllo.',
        },
      ],
    },
    {
      id: 'recipes-from-third-parties',
      title: '11. Ricette da siti web e social media',
      blocks: [
        {
          kind: 'p',
          html: 'Gourmetpedia può aiutarLa a salvare ricette o informazioni relative alle ricette trovate online. Lei è responsabile del rispetto dei termini, delle norme sul diritto d\'autore e delle restrizioni d\'uso di qualsiasi sito web di terzi, piattaforma di social media o fonte di contenuti dalla quale copia, salva o condivide contenuti relativi alle ricette.',
        },
        {
          kind: 'p',
          html: 'Non rivendichiamo la titolarità di contenuti di terzi e non Le concediamo diritti su ricette, immagini, video, marchi o altri materiali di terzi.',
        },
      ],
    },
    {
      id: 'food-allergens-health',
      title: '12. Informazioni alimentari, allergeni e salute',
      blocks: [
        {
          kind: 'p',
          html: 'L\'App è uno strumento per organizzare le ricette. Non fornisce consulenza medica, nutrizionale, dietetica, sulle allergie o consulenza professionale in materia di sicurezza alimentare.',
        },
        {
          kind: 'p',
          html: 'Lei è l\'unico responsabile delle ricette e delle informazioni che inserisce, salva, utilizza o condivide. Deve verificare ingredienti, allergeni, istruzioni di preparazione degli alimenti, tempi di cottura, istruzioni di conservazione, idoneità dietetica e qualsiasi informazione nutrizionale o relativa alla salute prima di utilizzare una ricetta.',
        },
        {
          kind: 'p',
          html: 'Non verifichiamo le ricette inserite dagli utenti e non possiamo garantire che le ricette siano accurate, sicure, complete, adatte alla Sua dieta o prive di allergeni o altri rischi.',
        },
      ],
    },
    {
      id: 'prohibited-use',
      title: '13. Utilizzo vietato',
      blocks: [
        { kind: 'p', html: 'Lei si impegna a non:' },
        {
          kind: 'ul',
          items: [
            'utilizzare l\'App per finalità illecite, fraudolente, dannose o abusive;',
            'caricare, salvare o condividere contenuti che violino diritti di proprietà intellettuale o di privacy;',
            'condividere informazioni riservate, sensibili o personali che non ha il diritto di condividere;',
            'tentare di accedere all\'account di un altro utente o di interferire con la sicurezza dell\'App;',
            'effettuare reverse engineering, decompilare, copiare, rivendere o sfruttare l\'App, salvo nella misura consentita da norme inderogabili;',
            'utilizzare bot, strumenti di scraping o sistemi automatizzati per sovraccaricare o utilizzare impropriamente l\'App;',
            'utilizzare l\'App in modo tale da poter danneggiare, disabilitare o compromettere i nostri servizi o i servizi di terzi.',
          ],
        },
      ],
    },
    {
      id: 'intellectual-property',
      title: '14. Proprietà intellettuale',
      blocks: [
        {
          kind: 'p',
          html: 'L\'App, il suo design, il software, le interfacce, i loghi, i marchi, il branding e i contenuti originali sono di nostra proprietà o dei nostri licenzianti e sono protetti dalle leggi applicabili in materia di proprietà intellettuale.',
        },
        {
          kind: 'p',
          html: 'I presenti Termini non Le trasferiscono alcun diritto di proprietà sull\'App. Subordinatamente al rispetto dei presenti Termini, Le concediamo una licenza limitata, personale, non esclusiva, non trasferibile e revocabile per utilizzare l\'App per le Sue finalità personali.',
        },
      ],
    },
    {
      id: 'third-party-services',
      title: '15. Servizi di terze parti',
      blocks: [
        {
          kind: 'p',
          html: 'L\'App può dipendere da piattaforme e servizi di terze parti, inclusi Apple App Store, Google Play, RevenueCat, Firebase, fornitori di hosting e fonti di contenuti di social media o web. Tali terze parti possono avere termini e informative sulla privacy propri.',
        },
        {
          kind: 'p',
          html: 'Non siamo responsabili di piattaforme di terze parti, processori di pagamento, social network, siti web, contenuti, policy, interruzioni, decisioni o procedure di rimborso, salvo nei casi in cui norme inderogabili dispongano diversamente.',
        },
      ],
    },
    {
      id: 'availability',
      title: '16. Disponibilità e modifiche all\'App',
      blocks: [
        {
          kind: 'p',
          html: 'Ci impegniamo a mantenere Gourmetpedia disponibile e funzionante, ma non garantiamo che l\'App sarà sempre ininterrotta, priva di errori, sicura o disponibile su ogni dispositivo o sistema operativo.',
        },
        {
          kind: 'p',
          html: 'Possiamo aggiornare, modificare, sospendere o interrompere parti dell\'App, incluse funzionalità, requisiti tecnici o limiti gratuiti. Qualora una modifica incida in modo sostanziale sulle funzionalità dell\'abbonamento a pagamento, cercheremo di fornire un preavviso ragionevole ove richiesto dalla legge applicabile o dalle regole della piattaforma.',
        },
      ],
    },
    {
      id: 'account-deletion-loss',
      title: '17. Eliminazione dell\'account e perdita dell\'accesso',
      blocks: [
        {
          kind: 'p',
          html: 'Può eliminare il Suo account Gourmetpedia nell\'App accedendo a <strong>Profilo &gt; Elimina Account</strong> e confermando l\'eliminazione.',
        },
        {
          kind: 'p',
          html: 'L\'eliminazione dell\'account è <strong>immediata e irreversibile</strong>. Quando elimina il Suo account, Gourmetpedia elimina il Suo account e i dati ad esso associati in Gourmetpedia, comprese le ricette salvate, la libreria delle ricette, i dati di sincronizzazione, le informazioni del profilo e i contenuti relativi all\'account archiviati dall\'App.',
        },
        {
          kind: 'p',
          html: 'Dopo l\'eliminazione dell\'account, le Sue ricette, le impostazioni, i registri delle ricette condivise associati al Suo account e gli altri dati dell\'account non possono essere ripristinati da Gourmetpedia.',
        },
        {
          kind: 'note',
          html: '<strong>Importante:</strong> l\'eliminazione del Suo account Gourmetpedia non annulla il Suo abbonamento Apple App Store o Google Play. Deve annullare il Suo abbonamento separatamente tramite Apple o Google. Se elimina il Suo account mentre il Suo abbonamento è ancora attivo, potrebbe perdere l\'accesso alle funzionalità premium e a tutti i dati associati al Suo account Gourmetpedia. Potrebbe essere in grado di utilizzare Ripristina Acquisti dopo aver creato un nuovo account, qualora Apple, Google e RevenueCat possano verificare un diritto attivo, ma il ripristino di un acquisto non ripristinerà ricette eliminate, impostazioni eliminate o dati dell\'account eliminati.',
        },
        {
          kind: 'p',
          html: 'Non forniamo rimborsi per il fatto che un account sia stato eliminato. I rimborsi per gli acquisti su Apple App Store o Google Play sono gestiti dalla relativa piattaforma, salvo che norme inderogabili dispongano diversamente.',
        },
      ],
    },
    {
      id: 'suspension-termination',
      title: '18. Sospensione e cessazione',
      blocks: [
        {
          kind: 'p',
          html: 'Possiamo sospendere o cessare il Suo accesso all\'App qualora Lei violi i presenti Termini, utilizzi impropriamente l\'App, generi rischi legali o di sicurezza, violi diritti di terzi o qualora siamo tenuti a farlo per legge o da parte di un fornitore della piattaforma.',
        },
        {
          kind: 'p',
          html: 'Lei può smettere di utilizzare l\'App in qualsiasi momento. Se ha un abbonamento attivo, resta responsabile dell\'annullamento dello stesso tramite Apple o Google come descritto sopra.',
        },
      ],
    },
    {
      id: 'privacy',
      title: '19. Privacy',
      blocks: [
        {
          kind: 'p',
          html: 'La nostra raccolta e il nostro utilizzo dei dati personali sono descritti nella nostra Informativa sulla Privacy, disponibile nell\'App e all\'indirizzo <a href="https://gourmetpedia.com/privacy">gourmetpedia.com/privacy</a>, qualora tale pagina sia disponibile. L\'Informativa sulla Privacy spiega quali dati raccogliamo, perché li raccogliamo, per quanto tempo li conserviamo e come può richiedere la cancellazione o esercitare i Suoi diritti.',
        },
      ],
    },
    {
      id: 'disclaimer',
      title: '20. Esclusione di garanzie',
      blocks: [
        {
          kind: 'p',
          html: 'Nella massima misura consentita dalla legge applicabile, l\'App è fornita "così com\'è" e "come disponibile". Non rilasciamo alcuna garanzia che l\'App soddisfi le Sue aspettative, che le ricette o i contenuti condivisi siano accurati o sicuri, o che l\'App sia ininterrotta o priva di errori.',
        },
        {
          kind: 'p',
          html: 'Nulla nei presenti Termini esclude o limita garanzie, condizioni o diritti del consumatore che non possano essere esclusi o limitati ai sensi della legge applicabile.',
        },
      ],
    },
    {
      id: 'liability',
      title: '21. Limitazione di responsabilità',
      blocks: [
        {
          kind: 'p',
          html: 'Nella massima misura consentita dalla legge applicabile, non siamo responsabili per danni indiretti, incidentali, speciali, consequenziali, punitivi o per perdita di profitti derivanti dall\'uso dell\'App, dalle Sue ricette, da contenuti di terzi, da problemi della piattaforma di abbonamento o dalla perdita di dati a seguito dell\'eliminazione dell\'account.',
        },
        {
          kind: 'p',
          html: 'Nulla nei presenti Termini limita la responsabilità che non può essere legalmente limitata, inclusa la responsabilità per frode, dolo o diritti inderogabili dei consumatori ai sensi della legge applicabile.',
        },
      ],
    },
    {
      id: 'changes',
      title: '22. Modifiche ai presenti Termini',
      blocks: [
        {
          kind: 'p',
          html: 'Possiamo aggiornare di volta in volta i presenti Termini. Quando lo facciamo, aggiorneremo la data di "Ultimo aggiornamento" in cima al presente documento. Se le modifiche sono sostanziali, possiamo informarLa nell\'App o con altro metodo appropriato.',
        },
        {
          kind: 'p',
          html: 'Il continuato utilizzo dell\'App dopo che i Termini aggiornati siano divenuti efficaci comporta l\'accettazione dei Termini aggiornati. Se non accetta i Termini aggiornati, deve smettere di utilizzare l\'App e, se applicabile, annullare il Suo abbonamento tramite Apple o Google.',
        },
      ],
    },
    {
      id: 'governing-law',
      title: '23. Legge applicabile e controversie',
      blocks: [
        {
          kind: 'p',
          html: 'I presenti Termini sono disciplinati dalle leggi del Belgio, fatte salve eventuali norme inderogabili a tutela dei consumatori applicabili nel Suo Paese di residenza.',
        },
        {
          kind: 'p',
          html: 'Se è un consumatore, può avere il diritto di promuovere azioni dinanzi ai tribunali consentiti dalle norme inderogabili a tutela dei consumatori. Diversamente, i tribunali di Liegi, Belgio, avranno competenza sulle controversie relative ai presenti Termini.',
        },
      ],
    },
    {
      id: 'severability',
      title: '24. Clausola salvatoria',
      blocks: [
        {
          kind: 'p',
          html: 'Qualora una qualsiasi disposizione dei presenti Termini risulti invalida o non applicabile, le restanti disposizioni continueranno ad applicarsi. La disposizione invalida o non applicabile sarà interpretata o sostituita nella misura necessaria a renderla valida ed applicabile, preservandone il più possibile la finalità originaria.',
        },
      ],
    },
    {
      id: 'contact',
      title: '25. Contatti',
      blocks: [
        {
          kind: 'p',
          html: 'Per domande sui presenti Termini, sull\'App, sul Suo account o sul Suo abbonamento, contatti:',
        },
        {
          kind: 'p',
          html: '<strong>Quentin Tusset</strong><br>Gourmetpedia<br>Liegi, Belgio<br>Email: <a href="mailto:support@getgourmetpedia.com">support@getgourmetpedia.com</a>',
        },
      ],
    },
  ],
}

export default terms
