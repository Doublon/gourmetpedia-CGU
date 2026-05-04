import type { PageContent } from '../types'

const deleteAccount: PageContent = {
  title: 'Supprimer le compte et les données',
  lastUpdatedISO: '2026-05-03',
  intro: [
    {
      kind: 'p',
      html: 'Cette page explique comment vous pouvez supprimer votre compte Gourmetpedia et ce qu\'il advient de vos données lorsque votre compte est supprimé.',
    },
    {
      kind: 'p',
      html: 'Cette page est destinée à être disponible à l\'adresse <a href="https://gourmetpedia.com/delete-account">https://gourmetpedia.com/delete-account</a>.',
    },
  ],
  sections: [
    {
      id: 'how-to-delete',
      title: '1. Comment supprimer votre compte',
      blocks: [
        { kind: 'p', html: 'Vous pouvez supprimer votre compte Gourmetpedia directement dans l\'Application&nbsp;:' },
        { kind: 'p', html: '<strong>Profil &gt; Supprimer le compte</strong>' },
        {
          kind: 'p',
          html: 'Avant la suppression de votre compte, il pourra vous être demandé de confirmer votre choix. La suppression du compte via l\'Application est <strong>immédiate et irréversible</strong>.',
        },
      ],
    },
    {
      id: 'cannot-access-app',
      title: '2. Si vous ne pouvez pas accéder à l\'Application',
      blocks: [
        {
          kind: 'p',
          html: 'Si vous ne pouvez pas accéder à l\'Application, vous pouvez demander la suppression de votre compte et de vos données en nous contactant à <a href="mailto:support@gourmetpedia.com">support@gourmetpedia.com</a>.',
        },
        {
          kind: 'p',
          html: 'Pour nous aider à identifier votre compte, veuillez nous contacter depuis l\'adresse e-mail associée à votre compte Gourmetpedia et utiliser comme objet <strong>Supprimer mon compte Gourmetpedia</strong>. Nous pourrons vous demander de vérifier votre identité avant de traiter votre demande.',
        },
        {
          kind: 'p',
          html: 'Une fois votre demande vérifiée et traitée, votre compte et les données associées seront supprimés comme décrit ci-dessous.',
        },
      ],
    },
    {
      id: 'what-data-is-deleted',
      title: '3. Quelles données sont supprimées',
      blocks: [
        {
          kind: 'p',
          html: 'Lorsque vous supprimez votre compte, Gourmetpedia supprime les données personnelles et le contenu associés à votre compte, notamment&nbsp;:',
        },
        {
          kind: 'ul',
          items: [
            'votre compte Gourmetpedia&nbsp;;',
            'votre adresse e-mail&nbsp;;',
            'vos prénom et nom&nbsp;;',
            'vos recettes enregistrées&nbsp;;',
            'votre bibliothèque de recettes&nbsp;;',
            'votre organisation, vos paramètres et vos préférences&nbsp;;',
            'vos données synchronisées entre les appareils.',
          ],
        },
        {
          kind: 'p',
          html: 'Après la suppression, Gourmetpedia ne conserve plus les données de votre compte dans ses propres systèmes.',
        },
      ],
    },
    {
      id: 'shared-recipes',
      title: '4. Recettes partagées',
      blocks: [
        {
          kind: 'p',
          html: 'Si vous avez précédemment partagé une recette avec un autre utilisateur, cette recette peut rester disponible dans le compte du destinataire.',
        },
        {
          kind: 'p',
          html: 'Lorsqu\'une recette est partagée dans Gourmetpedia, elle est copiée ou dupliquée dans la propre bibliothèque de recettes du destinataire. Gourmetpedia ne conserve pas de lien d\'auteur persistant nous permettant d\'identifier ou de supprimer toutes les copies d\'une recette après la suppression du compte d\'origine.',
        },
        {
          kind: 'p',
          html: 'La suppression de votre compte supprime votre propre compte et votre propre bibliothèque de recettes, mais n\'entraîne pas automatiquement la suppression des copies de recettes précédemment enregistrées par d\'autres utilisateurs.',
        },
      ],
    },
    {
      id: 'subscription-and-purchases',
      title: '5. Abonnement et achats',
      blocks: [
        {
          kind: 'note',
          html: '<strong>Important&nbsp;:</strong> la suppression de votre compte Gourmetpedia n\'annule pas automatiquement votre abonnement Apple App Store ou Google Play.',
        },
        {
          kind: 'p',
          html: 'Si vous avez un abonnement actif, vous devez l\'annuler séparément via votre Apple ID ou votre compte Google Play.',
        },
        {
          kind: 'p',
          html: 'Si vous supprimez votre compte Gourmetpedia sans annuler votre abonnement, Apple ou Google peuvent continuer à gérer et à facturer l\'abonnement conformément à leurs propres conditions et politiques.',
        },
        {
          kind: 'p',
          html: 'Après la suppression du compte, vous pouvez perdre l\'accès aux fonctionnalités premium, aux recettes enregistrées, aux données synchronisées et à tout contenu associé à votre compte Gourmetpedia.',
        },
        {
          kind: 'p',
          html: 'La restauration d\'un achat peut restaurer votre droit d\'abonnement lorsque cela est techniquement possible, mais elle ne restaurera pas les recettes, les paramètres, les enregistrements de recettes partagées ou les données de compte qui ont été définitivement supprimés.',
        },
      ],
    },
    {
      id: 'before-deleting',
      title: '6. Avant de supprimer votre compte',
      blocks: [
        { kind: 'p', html: 'Avant de supprimer votre compte, nous vous recommandons de&nbsp;:' },
        {
          kind: 'ul',
          items: [
            'exporter ou enregistrer toutes les recettes que vous souhaitez conserver, si cette option est disponible&nbsp;;',
            'résilier votre abonnement actif via Apple ou Google si vous ne souhaitez plus être facturé&nbsp;;',
            'comprendre que la suppression du compte est définitive et ne peut pas être annulée.',
          ],
        },
      ],
    },
    {
      id: 'need-help',
      title: '7. Besoin d\'aide ?',
      blocks: [
        {
          kind: 'p',
          html: 'Si vous avez des questions concernant la suppression de votre compte ou vos données, vous pouvez nous contacter à&nbsp;:',
        },
        {
          kind: 'p',
          html: '<a href="mailto:support@gourmetpedia.com">support@gourmetpedia.com</a>',
        },
        {
          kind: 'p',
          html: 'Exploitant&nbsp;:<br><strong>Quentin Tusset</strong><br>Liège, Belgique',
        },
      ],
    },
  ],
}

export default deleteAccount
