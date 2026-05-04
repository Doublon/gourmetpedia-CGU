import type { PageContent } from '../types'

const deleteAccount: PageContent = {
  title: 'Account en gegevens verwijderen',
  lastUpdatedISO: '2026-05-03',
  intro: [
    {
      kind: 'p',
      html: 'Deze pagina legt uit hoe u uw Gourmetpedia-account kunt verwijderen en wat er met uw gegevens gebeurt wanneer uw account wordt verwijderd.',
    },
    {
      kind: 'p',
      html: 'Deze pagina is bedoeld om beschikbaar te zijn op <a href="https://gourmetpedia.com/delete-account">https://gourmetpedia.com/delete-account</a>.',
    },
  ],
  sections: [
    {
      id: 'how-to-delete',
      title: '1. Hoe uw account te verwijderen',
      blocks: [
        { kind: 'p', html: 'U kunt uw Gourmetpedia-account rechtstreeks in de App verwijderen:' },
        { kind: 'p', html: '<strong>Profiel &gt; Account verwijderen</strong>' },
        {
          kind: 'p',
          html: 'Voordat uw account wordt verwijderd, kan u worden gevraagd uw keuze te bevestigen. Accountverwijdering via de App is <strong>onmiddellijk en onomkeerbaar</strong>.',
        },
      ],
    },
    {
      id: 'cannot-access-app',
      title: '2. Indien u geen toegang heeft tot de App',
      blocks: [
        {
          kind: 'p',
          html: 'Indien u geen toegang heeft tot de App, kunt u verwijdering van uw account en gegevens aanvragen door contact met ons op te nemen via <a href="mailto:support@gourmetpedia.com">support@gourmetpedia.com</a>.',
        },
        {
          kind: 'p',
          html: 'Om ons te helpen uw account te identificeren, neemt u alstublieft contact met ons op vanaf het e-mailadres dat aan uw Gourmetpedia-account is gekoppeld en gebruikt u de onderwerpregel <strong>Verwijder mijn Gourmetpedia-account</strong>. Wij kunnen u vragen uw identiteit te verifiëren voordat wij het verzoek verwerken.',
        },
        {
          kind: 'p',
          html: 'Zodra uw verzoek is geverifieerd en verwerkt, worden uw account en de bijbehorende gegevens verwijderd zoals hieronder beschreven.',
        },
      ],
    },
    {
      id: 'what-data-is-deleted',
      title: '3. Welke gegevens worden verwijderd',
      blocks: [
        {
          kind: 'p',
          html: 'Wanneer u uw account verwijdert, verwijdert Gourmetpedia de persoonsgegevens en inhoud die aan uw account zijn gekoppeld, met inbegrip van:',
        },
        {
          kind: 'ul',
          items: [
            'uw Gourmetpedia-account;',
            'uw e-mailadres;',
            'uw voornaam en achternaam;',
            'uw opgeslagen recepten;',
            'uw receptbibliotheek;',
            'uw organisatie, instellingen en voorkeuren;',
            'uw gesynchroniseerde gegevens tussen apparaten.',
          ],
        },
        {
          kind: 'p',
          html: 'Na verwijdering bewaart Gourmetpedia uw accountgegevens niet langer in zijn eigen systemen.',
        },
      ],
    },
    {
      id: 'shared-recipes',
      title: '4. Gedeelde recepten',
      blocks: [
        {
          kind: 'p',
          html: 'Indien u eerder een recept met een andere gebruiker heeft gedeeld, kan dat recept beschikbaar blijven in het account van de ontvanger.',
        },
        {
          kind: 'p',
          html: 'Wanneer een recept in Gourmetpedia wordt gedeeld, wordt het gekopieerd of gedupliceerd naar de eigen receptbibliotheek van de ontvanger. Gourmetpedia bewaart geen permanente koppeling met de auteur waarmee wij na verwijdering van het oorspronkelijke account alle kopieën van een recept zouden kunnen identificeren of verwijderen.',
        },
        {
          kind: 'p',
          html: 'Het verwijderen van uw account verwijdert uw eigen account en uw eigen receptbibliotheek, maar het verwijdert niet automatisch receptkopieën die eerder door andere gebruikers zijn opgeslagen.',
        },
      ],
    },
    {
      id: 'subscription-and-purchases',
      title: '5. Abonnement en aankopen',
      blocks: [
        {
          kind: 'note',
          html: '<strong>Belangrijk:</strong> het verwijderen van uw Gourmetpedia-account zegt uw Apple App Store- of Google Play-abonnement niet automatisch op.',
        },
        {
          kind: 'p',
          html: 'Indien u een actief abonnement heeft, dient u dit afzonderlijk op te zeggen via uw Apple ID of Google Play-account.',
        },
        {
          kind: 'p',
          html: 'Indien u uw Gourmetpedia-account verwijdert zonder uw abonnement op te zeggen, kunnen Apple of Google het abonnement blijven beheren en factureren in overeenstemming met hun eigen voorwaarden en beleid.',
        },
        {
          kind: 'p',
          html: 'Na accountverwijdering kunt u de toegang verliezen tot premiumfuncties, opgeslagen recepten, gesynchroniseerde gegevens en alle inhoud die aan uw Gourmetpedia-account is gekoppeld.',
        },
        {
          kind: 'p',
          html: 'Het herstellen van een aankoop kan uw abonnementsrecht herstellen waar dit technisch mogelijk is, maar het zal geen recepten, instellingen, gedeelde receptregistraties of accountgegevens herstellen die definitief zijn verwijderd.',
        },
      ],
    },
    {
      id: 'before-deleting',
      title: '6. Voordat u uw account verwijdert',
      blocks: [
        { kind: 'p', html: 'Voordat u uw account verwijdert, raden wij u aan:' },
        {
          kind: 'ul',
          items: [
            'recepten die u wilt behouden te exporteren of op te slaan, indien deze optie beschikbaar is;',
            'uw actieve abonnement op te zeggen via Apple of Google indien u niet langer wenst te worden gefactureerd;',
            'te begrijpen dat accountverwijdering definitief is en niet ongedaan kan worden gemaakt.',
          ],
        },
      ],
    },
    {
      id: 'need-help',
      title: '7. Hulp nodig?',
      blocks: [
        {
          kind: 'p',
          html: 'Indien u vragen heeft over accountverwijdering of uw gegevens, kunt u contact met ons opnemen via:',
        },
        {
          kind: 'p',
          html: '<a href="mailto:support@gourmetpedia.com">support@gourmetpedia.com</a>',
        },
        {
          kind: 'p',
          html: 'Exploitant:<br><strong>Quentin Tusset</strong><br>Luik, België',
        },
      ],
    },
  ],
}

export default deleteAccount
