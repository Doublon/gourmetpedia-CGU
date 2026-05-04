import type { PageContent } from '../types'

const deleteAccount: PageContent = {
  title: "Elimina l'Account e i Dati",
  lastUpdatedISO: '2026-05-03',
  intro: [
    {
      kind: 'p',
      html: 'Questa pagina spiega come può eliminare il Suo account Gourmetpedia e cosa succede ai Suoi dati quando il Suo account viene eliminato.',
    },
    {
      kind: 'p',
      html: 'Questa pagina è destinata a essere disponibile all\'indirizzo <a href="https://gourmetpedia.com/delete-account">https://gourmetpedia.com/delete-account</a>.',
    },
  ],
  sections: [
    {
      id: 'how-to-delete',
      title: '1. Come eliminare il Suo account',
      blocks: [
        {
          kind: 'p',
          html: 'Può eliminare il Suo account Gourmetpedia direttamente nell\'App:',
        },
        { kind: 'p', html: '<strong>Profilo &gt; Elimina Account</strong>' },
        {
          kind: 'p',
          html: 'Prima che il Suo account venga eliminato, Le potrebbe essere chiesto di confermare la Sua scelta. L\'eliminazione dell\'account tramite l\'App è <strong>immediata e irreversibile</strong>.',
        },
      ],
    },
    {
      id: 'cannot-access-app',
      title: '2. Se non può accedere all\'App',
      blocks: [
        {
          kind: 'p',
          html: 'Se non può accedere all\'App, può richiedere l\'eliminazione dell\'account e dei dati contattandoci all\'indirizzo <a href="mailto:support@gourmetpedia.com">support@gourmetpedia.com</a>.',
        },
        {
          kind: 'p',
          html: 'Per aiutarci a identificare il Suo account, La preghiamo di contattarci dall\'indirizzo email associato al Suo account Gourmetpedia e di utilizzare l\'oggetto <strong>Elimina il mio account Gourmetpedia</strong>. Potremmo chiederLe di verificare la Sua identità prima di elaborare la richiesta.',
        },
        {
          kind: 'p',
          html: 'Una volta verificata ed elaborata la Sua richiesta, il Suo account e i dati associati verranno eliminati come descritto di seguito.',
        },
      ],
    },
    {
      id: 'what-data-is-deleted',
      title: '3. Quali dati vengono eliminati',
      blocks: [
        {
          kind: 'p',
          html: 'Quando elimina il Suo account, Gourmetpedia elimina i dati personali e i contenuti associati al Suo account, inclusi:',
        },
        {
          kind: 'ul',
          items: [
            'il Suo account Gourmetpedia;',
            'il Suo indirizzo email;',
            'il Suo nome e cognome;',
            'le Sue ricette salvate;',
            'la Sua libreria di ricette;',
            'la Sua organizzazione, impostazioni e preferenze;',
            'i Suoi dati sincronizzati tra i dispositivi.',
          ],
        },
        {
          kind: 'p',
          html: 'Dopo l\'eliminazione, Gourmetpedia non conserva più i dati del Suo account nei propri sistemi.',
        },
      ],
    },
    {
      id: 'shared-recipes',
      title: '4. Ricette condivise',
      blocks: [
        {
          kind: 'p',
          html: 'Se in precedenza ha condiviso una ricetta con un altro utente, tale ricetta potrebbe rimanere disponibile nell\'account del destinatario.',
        },
        {
          kind: 'p',
          html: 'Quando una ricetta viene condivisa in Gourmetpedia, viene copiata o duplicata nella libreria di ricette del destinatario. Gourmetpedia non conserva un collegamento persistente all\'autore che ci consenta di identificare o rimuovere tutte le copie di una ricetta dopo l\'eliminazione dell\'account originale.',
        },
        {
          kind: 'p',
          html: 'L\'eliminazione del Suo account rimuove il Suo account e la Sua libreria di ricette, ma non elimina automaticamente le copie di ricette precedentemente salvate da altri utenti.',
        },
      ],
    },
    {
      id: 'subscription-and-purchases',
      title: '5. Abbonamento e acquisti',
      blocks: [
        {
          kind: 'note',
          html: '<strong>Importante:</strong> l\'eliminazione del Suo account Gourmetpedia non annulla automaticamente il Suo abbonamento Apple App Store o Google Play.',
        },
        {
          kind: 'p',
          html: 'Se ha un abbonamento attivo, deve annullarlo separatamente tramite il Suo Apple ID o l\'account Google Play.',
        },
        {
          kind: 'p',
          html: 'Se elimina il Suo account Gourmetpedia senza annullare il Suo abbonamento, Apple o Google potrebbero continuare a gestire e fatturare l\'abbonamento secondo i propri termini e politiche.',
        },
        {
          kind: 'p',
          html: 'Dopo l\'eliminazione dell\'account, potrebbe perdere l\'accesso alle funzionalità premium, alle ricette salvate, ai dati sincronizzati e a qualsiasi contenuto associato al Suo account Gourmetpedia.',
        },
        {
          kind: 'p',
          html: 'Il ripristino di un acquisto può ripristinare il Suo diritto all\'abbonamento ove tecnicamente possibile, ma non ripristinerà ricette, impostazioni, registrazioni di ricette condivise o dati dell\'account che sono stati eliminati definitivamente.',
        },
      ],
    },
    {
      id: 'before-deleting',
      title: '6. Prima di eliminare il Suo account',
      blocks: [
        { kind: 'p', html: 'Prima di eliminare il Suo account, Le consigliamo di:' },
        {
          kind: 'ul',
          items: [
            'esportare o salvare le ricette che desidera conservare, se questa opzione è disponibile;',
            'annullare il Suo abbonamento attivo tramite Apple o Google se non desidera più essere addebitato;',
            'comprendere che l\'eliminazione dell\'account è permanente e non può essere annullata.',
          ],
        },
      ],
    },
    {
      id: 'need-help',
      title: '7. Ha bisogno di aiuto?',
      blocks: [
        {
          kind: 'p',
          html: 'Se ha domande sull\'eliminazione dell\'account o sui Suoi dati, può contattarci a:',
        },
        {
          kind: 'p',
          html: '<a href="mailto:support@gourmetpedia.com">support@gourmetpedia.com</a>',
        },
        {
          kind: 'p',
          html: 'Operatore:<br><strong>Quentin Tusset</strong><br>Liegi, Belgio',
        },
      ],
    },
  ],
}

export default deleteAccount
