import type { PageContent } from '../types'

const deleteAccount: PageContent = {
  title: 'Konto und Daten löschen',
  lastUpdatedISO: '2026-05-06',
  intro: [
    {
      kind: 'p',
      html: 'Diese Seite erläutert, wie Sie Ihr Gourmetpedia-Konto löschen können und was mit Ihren Daten geschieht, wenn Ihr Konto gelöscht wird.',
    },
    {
      kind: 'p',
      html: 'Diese Seite soll unter <a href="https://gourmetpedia.com/delete-account">https://gourmetpedia.com/delete-account</a> verfügbar sein.',
    },
  ],
  sections: [
    {
      id: 'how-to-delete',
      title: '1. So löschen Sie Ihr Konto',
      blocks: [
        { kind: 'p', html: 'Sie können Ihr Gourmetpedia-Konto direkt in der App löschen:' },
        { kind: 'p', html: '<strong>Profil &gt; Konto löschen</strong>' },
        {
          kind: 'p',
          html: 'Bevor Ihr Konto gelöscht wird, werden Sie möglicherweise gebeten, Ihre Auswahl zu bestätigen. Die Kontolöschung über die App ist <strong>sofort und unumkehrbar</strong>.',
        },
      ],
    },
    {
      id: 'cannot-access-app',
      title: '2. Wenn Sie nicht auf die App zugreifen können',
      blocks: [
        {
          kind: 'p',
          html: 'Wenn Sie nicht auf die App zugreifen können, können Sie die Löschung Ihres Kontos und Ihrer Daten anfordern, indem Sie uns unter <a href="mailto:support@getgourmetpedia.com">support@getgourmetpedia.com</a> kontaktieren.',
        },
        {
          kind: 'p',
          html: 'Damit wir Ihr Konto identifizieren können, kontaktieren Sie uns bitte von der mit Ihrem Gourmetpedia-Konto verknüpften E-Mail-Adresse aus und verwenden Sie die Betreffzeile <strong>Mein Gourmetpedia-Konto löschen</strong>. Wir können Sie bitten, Ihre Identität zu bestätigen, bevor wir die Anfrage bearbeiten.',
        },
        {
          kind: 'p',
          html: 'Sobald Ihre Anfrage überprüft und bearbeitet wurde, werden Ihr Konto und die zugehörigen Daten wie unten beschrieben gelöscht.',
        },
      ],
    },
    {
      id: 'what-data-is-deleted',
      title: '3. Welche Daten gelöscht werden',
      blocks: [
        {
          kind: 'p',
          html: 'Wenn Sie Ihr Konto löschen, löscht Gourmetpedia die personenbezogenen Daten und Inhalte, die mit Ihrem Konto verknüpft sind, einschließlich:',
        },
        {
          kind: 'ul',
          items: [
            'Ihres Gourmetpedia-Kontos;',
            'Ihrer E-Mail-Adresse;',
            'Ihres Vor- und Nachnamens;',
            'Ihrer gespeicherten Rezepte;',
            'Ihrer Rezeptbibliothek;',
            'Ihrer Organisation, Einstellungen und Präferenzen;',
            'Ihrer geräteübergreifend synchronisierten Daten.',
          ],
        },
        {
          kind: 'p',
          html: 'Nach der Löschung bewahrt Gourmetpedia Ihre Kontodaten nicht mehr in den eigenen Systemen auf.',
        },
      ],
    },
    {
      id: 'shared-recipes',
      title: '4. Geteilte Rezepte',
      blocks: [
        {
          kind: 'p',
          html: 'Wenn Sie zuvor ein Rezept mit einem anderen Nutzer geteilt haben, kann dieses Rezept im Konto des Empfängers verfügbar bleiben.',
        },
        {
          kind: 'p',
          html: 'Wenn ein Rezept in Gourmetpedia geteilt wird, wird es in die eigene Rezeptbibliothek des Empfängers kopiert oder dupliziert. Gourmetpedia speichert keine dauerhafte Autoren-Verknüpfung, die es uns ermöglichen würde, alle Kopien eines Rezepts nach der Löschung des ursprünglichen Kontos zu identifizieren oder zu entfernen.',
        },
        {
          kind: 'p',
          html: 'Das Löschen Ihres Kontos entfernt Ihr eigenes Konto und Ihre eigene Rezeptbibliothek, löscht jedoch nicht automatisch Rezeptkopien, die zuvor von anderen Nutzern gespeichert wurden.',
        },
      ],
    },
    {
      id: 'subscription-and-purchases',
      title: '5. Abonnement und Käufe',
      blocks: [
        {
          kind: 'note',
          html: '<strong>Wichtig:</strong> Das Löschen Ihres Gourmetpedia-Kontos kündigt nicht automatisch Ihr Apple App Store- oder Google Play-Abonnement.',
        },
        {
          kind: 'p',
          html: 'Wenn Sie ein aktives Abonnement haben, müssen Sie es separat über Ihre Apple ID oder Ihr Google Play-Konto kündigen.',
        },
        {
          kind: 'p',
          html: 'Wenn Sie Ihr Gourmetpedia-Konto löschen, ohne Ihr Abonnement zu kündigen, können Apple oder Google das Abonnement gemäß ihren eigenen Bedingungen und Richtlinien weiterhin verwalten und abrechnen.',
        },
        {
          kind: 'p',
          html: 'Nach der Kontolöschung können Sie den Zugriff auf Premium-Funktionen, gespeicherte Rezepte, synchronisierte Daten sowie alle mit Ihrem Gourmetpedia-Konto verknüpften Inhalte verlieren.',
        },
        {
          kind: 'p',
          html: 'Die Wiederherstellung eines Kaufs kann Ihre Abonnementberechtigung wiederherstellen, sofern dies technisch möglich ist, sie stellt jedoch keine Rezepte, Einstellungen, geteilten Rezeptdatensätze oder Kontodaten wieder her, die endgültig gelöscht wurden.',
        },
      ],
    },
    {
      id: 'before-deleting',
      title: '6. Vor der Kontolöschung',
      blocks: [
        { kind: 'p', html: 'Bevor Sie Ihr Konto löschen, empfehlen wir Ihnen:' },
        {
          kind: 'ul',
          items: [
            'alle Rezepte, die Sie behalten möchten, zu exportieren oder zu speichern, sofern diese Option verfügbar ist;',
            'Ihr aktives Abonnement über Apple oder Google zu kündigen, falls Sie keine weiteren Abrechnungen wünschen;',
            'zu verstehen, dass die Kontolöschung endgültig ist und nicht rückgängig gemacht werden kann.',
          ],
        },
      ],
    },
    {
      id: 'need-help',
      title: '7. Brauchen Sie Hilfe?',
      blocks: [
        {
          kind: 'p',
          html: 'Wenn Sie Fragen zur Kontolöschung oder zu Ihren Daten haben, können Sie uns kontaktieren unter:',
        },
        {
          kind: 'p',
          html: '<a href="mailto:support@getgourmetpedia.com">support@getgourmetpedia.com</a>',
        },
        {
          kind: 'p',
          html: 'Betreiber:<br><strong>Quentin Tusset</strong><br>Lüttich, Belgien',
        },
      ],
    },
  ],
}

export default deleteAccount
