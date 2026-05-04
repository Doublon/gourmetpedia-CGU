import type { PageContent } from '../types'

const privacy: PageContent = {
  title: 'Datenschutzerklärung',
  lastUpdatedISO: '2026-05-03',
  intro: [
    {
      kind: 'p',
      html: 'Diese Datenschutzerklärung erläutert, wie Quentin Tusset mit Sitz in Lüttich, Belgien („wir", „uns" oder „unser"), Informationen erhebt, verwendet, speichert und schützt, wenn Sie Gourmetpedia (die „App") nutzen.',
    },
    {
      kind: 'p',
      html: 'Gourmetpedia ist eine Anwendung, mit der Nutzer online gefundene Rezepte, einschließlich von Instagram, TikTok und anderen Social-Media-Plattformen, speichern, organisieren, synchronisieren und einsehen können.',
    },
    {
      kind: 'p',
      html: 'Durch die Nutzung der App bestätigen Sie, dass Sie diese Datenschutzerklärung gelesen und verstanden haben.',
    },
  ],
  sections: [
    {
      id: 'data-controller',
      title: '1. Verantwortlicher',
      blocks: [
        { kind: 'p', html: 'Die App wird betrieben von:' },
        {
          kind: 'p',
          html: '<strong>Quentin Tusset</strong><br>Lüttich, Belgien<br>E-Mail: <a href="mailto:support@gourmetpedia.com">support@gourmetpedia.com</a>',
        },
      ],
    },
    {
      id: 'information-we-collect',
      title: '2. Informationen, die wir erheben',
      blocks: [
        {
          kind: 'p',
          html: 'Wir bemühen uns, nur die Informationen zu erheben, die für den Betrieb der App, die Bereitstellung von Konten, die Ermöglichung der Synchronisierung und die Verwaltung von Abonnements erforderlich sind.',
        },
        {
          kind: 'p',
          html: 'Je nachdem, wie Sie die App nutzen, können wir die folgenden Kategorien von Informationen erheben:',
        },
        { kind: 'h3', text: 'Kontoinformationen' },
        {
          kind: 'ul',
          items: [
            'E-Mail-Adresse;',
            'Vor- und Nachname;',
            'Konto-Kennung;',
            'Datum der Kontoerstellung sowie Kontoeinstellungen.',
          ],
        },
        { kind: 'h3', text: 'Rezepte und Nutzerinhalte' },
        {
          kind: 'ul',
          items: [
            'Rezepte, die Sie in der App speichern, erstellen, organisieren oder bearbeiten;',
            'Rezeptlinks oder Quell-URLs, die Sie der App hinzufügen;',
            'Rezeptnotizen, Titel, Zutaten, Zubereitungsanweisungen, Kategorien oder andere Informationen, die Sie eingeben;',
            'Inhalte, die Sie sich entscheiden, mit anderen Nutzern oder über Freigabefunktionen zu teilen.',
          ],
        },
        {
          kind: 'p',
          html: 'Sie sind für die Inhalte verantwortlich, die Sie Ihren Rezepten hinzufügen. Sie sollten es vermeiden, persönliche, sensible, vertrauliche oder Drittinformationen in Ihre Rezepte aufzunehmen, es sei denn, Sie sind dazu berechtigt.',
        },
        { kind: 'h3', text: 'Abonnement- und Kaufinformationen' },
        {
          kind: 'ul',
          items: [
            'Abonnementstatus, etwa ob Ihr Abonnement aktiv, abgelaufen, gekündigt oder in einer Testphase ist;',
            'Kaufhistorie und Berechtigungsinformationen, die zur Bereitstellung des Premium-Zugriffs erforderlich sind;',
            'Store-bezogene Transaktionskennungen oder Belege, die über Apple App Store oder Google Play verarbeitet werden;',
            'Informationen, die über RevenueCat zur Verwaltung von Abonnements und zur Wiederherstellung von Käufen empfangen werden.',
          ],
        },
        {
          kind: 'p',
          html: 'Wir erfassen oder speichern Ihre vollständigen Zahlungskartendaten nicht direkt. Zahlungen und Abrechnungen werden je nach genutzter Plattform durch den Apple App Store oder Google Play abgewickelt. Für die Zahlungsabwicklung gelten deren eigene Bedingungen und Datenschutzrichtlinien.',
        },
        { kind: 'h3', text: 'Technische Informationen' },
        {
          kind: 'ul',
          items: [
            'Gerätetyp, Betriebssystem und App-Version;',
            'IP-Adresse oder ungefähre Netzwerkinformationen;',
            'Firebase-Kennungen und authentifizierungsbezogene Daten;',
            'Protokolle, Absturzinformationen und Diagnosedaten, die zur Aufrechterhaltung der Sicherheit, Zuverlässigkeit und Leistung erforderlich sind.',
          ],
        },
        { kind: 'h3', text: 'Support-Kommunikation' },
        {
          kind: 'ul',
          items: [
            'Ihre E-Mail-Adresse;',
            'der Inhalt Ihrer Support-Anfrage;',
            'Informationen, die zur Untersuchung und Beantwortung Ihrer Anfrage erforderlich sind.',
          ],
        },
      ],
    },
    {
      id: 'information-not-collected',
      title: '3. Informationen, die wir nicht absichtlich erheben',
      blocks: [
        {
          kind: 'p',
          html: 'Sofern nicht ausdrücklich anders angegeben, erheben wir nicht absichtlich:',
        },
        {
          kind: 'ul',
          items: [
            'genaue GPS-Standorte;',
            'Gesundheitsdaten;',
            'biometrische Daten;',
            'Kontakte aus Ihrem Gerät;',
            'Fotos, Videos oder Dateien aus Ihrem Gerät, es sei denn, Sie stellen diese über die App bereit;',
            'Kreditkartennummern;',
            'Werbekennungen für gezielte Werbung.',
          ],
        },
      ],
    },
    {
      id: 'how-we-use-information',
      title: '4. Wie wir Ihre Informationen verwenden',
      blocks: [
        { kind: 'p', html: 'Wir verwenden Ihre Informationen für die folgenden Zwecke:' },
        {
          kind: 'ul',
          items: [
            'um Ihr Konto zu erstellen, zu authentifizieren und zu verwalten;',
            'um Ihnen das Speichern, Organisieren, Synchronisieren und Einsehen von Rezepten auf verschiedenen Geräten zu ermöglichen;',
            'um die kostenlose Version der App bereitzustellen, einschließlich der Begrenzung auf 10 Rezepte;',
            'um kostenpflichtige Abonnements und den Premium-Zugriff zu verwalten;',
            'um Käufe wiederherzustellen, sofern dies von Apple, Google und RevenueCat unterstützt wird;',
            'um Kundensupport bereitzustellen;',
            'um die Sicherheit, Zuverlässigkeit und Leistung der App aufrechtzuerhalten;',
            'um Betrug, Missbrauch, unbefugten Zugriff oder technischen Missbrauch zu erkennen und zu verhindern;',
            'um gegebenenfalls rechtlichen, steuerlichen, buchhalterischen, verbraucherschutzrechtlichen und regulatorischen Verpflichtungen nachzukommen.',
          ],
        },
      ],
    },
    {
      id: 'legal-basis',
      title: '5. Rechtsgrundlage für die Verarbeitung',
      blocks: [
        {
          kind: 'p',
          html: 'Wenn Sie sich im Europäischen Wirtschaftsraum befinden, verarbeiten wir personenbezogene Daten auf der Grundlage einer oder mehrerer der folgenden Rechtsgrundlagen:',
        },
        {
          kind: 'ul',
          items: [
            '<strong>Vertragserfüllung:</strong> zur Bereitstellung der App, Verwaltung Ihres Kontos, Synchronisierung von Rezepten und Bereitstellung von Abonnementfunktionen;',
            '<strong>Rechtliche Verpflichtung:</strong> zur Einhaltung geltender rechtlicher, steuerlicher, buchhalterischer, verbraucherschutzrechtlicher oder regulatorischer Anforderungen;',
            '<strong>Berechtigte Interessen:</strong> zur Sicherung der App, Verhinderung von Betrug, Aufrechterhaltung der Servicezuverlässigkeit und Beantwortung von Support-Anfragen;',
            '<strong>Einwilligung:</strong> sofern wir Ihre Einwilligung für eine bestimmte Verarbeitungstätigkeit einholen.',
          ],
        },
      ],
    },
    {
      id: 'third-party-services',
      title: '6. Dienste von Drittanbietern',
      blocks: [
        {
          kind: 'p',
          html: 'Wir können vertrauenswürdige Drittanbieter zur Bereitstellung der App einsetzen. Diese Anbieter können in unserem Auftrag oder als unabhängige Anbieter, je nach Dienst, begrenzte Informationen verarbeiten.',
        },
        {
          kind: 'ul',
          items: [
            '<strong>Firebase:</strong> wird für Authentifizierung, Datenbank, Speicherung, Synchronisierung, Infrastruktur, Diagnose oder verwandte Backend-Dienste verwendet;',
            '<strong>RevenueCat:</strong> wird zur Verwaltung von Abonnements, Berechtigungen, Kaufstatus und Kaufwiederherstellung verwendet;',
            '<strong>Apple App Store und Google Play:</strong> werden zur Abwicklung von In-App-Käufen und Abonnements verwendet.',
          ],
        },
        {
          kind: 'p',
          html: 'Diese Dienste können Informationen gemäß ihren eigenen Datenschutzrichtlinien und geltenden Gesetzen verarbeiten. Wir verkaufen Ihre personenbezogenen Daten nicht.',
        },
      ],
    },
    {
      id: 'sharing-recipes',
      title: '7. Teilen und Sichtbarkeit von Rezepten',
      blocks: [
        {
          kind: 'p',
          html: 'In Ihrem Konto gespeicherte Rezepte sind mit Ihrem Gourmetpedia-Konto verknüpft und können auf Ihren Geräten synchronisiert werden.',
        },
        {
          kind: 'p',
          html: 'Wenn Sie eine Freigabefunktion verwenden, können die Rezeptinhalte, die Sie zu teilen wählen, für die Personen oder das über diese Funktion ausgewählte Publikum zugänglich werden. Sie sind dafür verantwortlich, dass alle von Ihnen geteilten Inhalte rechtmäßig und korrekt sind und keine Rechte Dritter verletzen.',
        },
      ],
    },
    {
      id: 'international-transfers',
      title: '8. Internationale Übermittlungen',
      blocks: [
        {
          kind: 'p',
          html: 'Einige Dienstanbieter, einschließlich Firebase, RevenueCat, Apple oder Google, können Informationen außerhalb Belgiens, des Europäischen Wirtschaftsraums oder Ihres Wohnsitzlandes verarbeiten. Soweit erforderlich, werden geeignete Schutzmaßnahmen gemäß den geltenden Datenschutzgesetzen angewandt.',
        },
      ],
    },
    {
      id: 'data-retention',
      title: '9. Aufbewahrung von Daten',
      blocks: [
        {
          kind: 'p',
          html: 'Wir bewahren personenbezogene Daten nur so lange auf, wie dies für die in dieser Datenschutzerklärung beschriebenen Zwecke erforderlich ist.',
        },
        {
          kind: 'ul',
          items: [
            'Kontodaten werden aufbewahrt, solange Ihr Konto aktiv bleibt.',
            'Rezepte und zugehörige Nutzerinhalte werden aufbewahrt, solange sie in Ihrem Konto gespeichert bleiben.',
            'Abonnementstatus und Berechtigungsinformationen werden so lange aufbewahrt, wie es zur Bereitstellung des Premium-Zugriffs und zur Unterstützung der Kaufwiederherstellung erforderlich ist.',
            'Support-Kommunikation kann so lange aufbewahrt werden, wie es zur Beantwortung Ihrer Anfrage und zur Aufrechterhaltung einer Aufzeichnung unserer Kommunikation erforderlich ist.',
          ],
        },
        {
          kind: 'p',
          html: 'Wenn Ihre Daten nicht mehr benötigt werden oder Ihr Konto gelöscht wird, löschen oder anonymisieren wir sie, soweit möglich, es sei denn, eine Aufbewahrung ist gesetzlich oder durch die Richtlinien von Drittanbietern wie Apple, Google, Firebase oder RevenueCat vorgeschrieben.',
        },
      ],
    },
    {
      id: 'account-deletion',
      title: '10. Kontolöschung und Folgen für Käufe',
      blocks: [
        {
          kind: 'p',
          html: 'Sie können Ihr Konto direkt in der App löschen, indem Sie auf Folgendes gehen: <strong>Profil &gt; Konto löschen</strong>.',
        },
        {
          kind: 'p',
          html: 'Wenn Sie die Kontolöschung bestätigen, soll die Löschung bei Gourmetpedia sofort wirksam werden. Ihre Gourmetpedia-Kontoinformationen, gespeicherten Rezepte und die mit Ihrem Konto verbundenen Daten werden aus unseren aktiven Systemen gelöscht. Diese Aktion ist unumkehrbar. Sobald Ihr Konto und Ihre Rezepte gelöscht sind, können wir sie nicht wiederherstellen.',
        },
        {
          kind: 'p',
          html: 'Das Löschen Ihres Gourmetpedia-Kontos kann dazu führen, dass Sie den Zugriff auf Premium-Funktionen, gespeicherte Rezepte, synchronisierte Daten sowie jeglichen App-Zugriff oder Inhalte verlieren, die mit diesem Gourmetpedia-Konto verknüpft sind.',
        },
        {
          kind: 'note',
          html: '<strong>Wichtig:</strong> Das Löschen Ihres Gourmetpedia-Kontos kündigt nicht automatisch Ihr Apple App Store- oder Google Play-Abonnement. Wenn Sie ein aktives Abonnement haben, müssen Sie es separat über Ihre Apple ID-Abonnementeinstellungen oder Ihre Google Play-Abonnementeinstellungen kündigen, um zukünftige Verlängerungen zu vermeiden.',
        },
        {
          kind: 'p',
          html: 'Apple, Google und RevenueCat können Kaufaufzeichnungen, Abonnementbelege und zugehörige Transaktionsinformationen gemäß ihren eigenen rechtlichen Verpflichtungen und Richtlinien aufbewahren. Wenn Sie nach der Löschung ein neues Gourmetpedia-Konto erstellen, können gelöschte Rezepte und gelöschte Kontodaten nicht wiederhergestellt werden. Wenn Ihr Apple- oder Google-Abonnement noch aktiv ist, können Sie gegebenenfalls die Option zur Wiederherstellung von Käufen in der App nutzen, dies stellt jedoch keine gelöschten Rezepte oder gelöschten Kontodaten wieder her.',
        },
      ],
    },
    {
      id: 'your-rights',
      title: '11. Ihre Rechte',
      blocks: [
        { kind: 'p', html: 'Je nach Ihrem Standort haben Sie möglicherweise das Recht:' },
        {
          kind: 'ul',
          items: [
            'auf die personenbezogenen Daten zuzugreifen, die wir über Sie speichern;',
            'die Berichtigung unrichtiger personenbezogener Daten zu verlangen;',
            'die Löschung Ihrer personenbezogenen Daten zu verlangen;',
            'bestimmten Verarbeitungstätigkeiten zu widersprechen;',
            'die Einschränkung der Verarbeitung zu verlangen;',
            'eine Kopie Ihrer personenbezogenen Daten anzufordern;',
            'eine Einwilligung zu widerrufen, sofern die Verarbeitung auf einer Einwilligung beruht;',
            'eine Beschwerde bei einer zuständigen Datenschutzbehörde einzureichen.',
          ],
        },
        {
          kind: 'p',
          html: 'Um Ihre Rechte auszuüben, kontaktieren Sie uns unter: <a href="mailto:support@gourmetpedia.com">support@gourmetpedia.com</a>. Wir müssen möglicherweise Ihre Identität überprüfen, bevor wir auf Ihre Anfrage antworten.',
        },
      ],
    },
    {
      id: 'security',
      title: '12. Sicherheit',
      blocks: [
        {
          kind: 'p',
          html: 'Wir verwenden angemessene technische und organisatorische Maßnahmen, um Ihre Informationen vor unbefugtem Zugriff, Verlust, Missbrauch, Veränderung oder Offenlegung zu schützen. Kein System ist jedoch vollständig sicher, und wir können keine absolute Sicherheit garantieren.',
        },
      ],
    },
    {
      id: 'childrens-privacy',
      title: '13. Datenschutz für Kinder',
      blocks: [
        {
          kind: 'p',
          html: 'Gourmetpedia ist für ein allgemeines Publikum bestimmt. Wenn Sie das nach den Gesetzen Ihres Landes erforderliche Alter zur Einwilligung in die Nutzung von Online-Diensten unterschreiten, dürfen Sie die App nur mit Zustimmung und unter Aufsicht eines Elternteils oder gesetzlichen Vormunds nutzen.',
        },
        {
          kind: 'p',
          html: 'Wir erheben wissentlich keine personenbezogenen Daten von Kindern ohne die gegebenenfalls gesetzlich erforderliche Einwilligung. Wenn Sie der Meinung sind, dass ein Kind ohne entsprechende Einwilligung personenbezogene Daten bereitgestellt hat, kontaktieren Sie uns bitte unter <a href="mailto:support@gourmetpedia.com">support@gourmetpedia.com</a>.',
        },
      ],
    },
    {
      id: 'changes',
      title: '14. Änderungen dieser Datenschutzerklärung',
      blocks: [
        {
          kind: 'p',
          html: 'Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Wenn wir Änderungen vornehmen, aktualisieren wir das Datum „Zuletzt aktualisiert" oben in diesem Dokument. Bei wesentlichen Änderungen können wir Sie über die App oder auf andere geeignete Weise benachrichtigen.',
        },
      ],
    },
    {
      id: 'contact',
      title: '15. Kontakt',
      blocks: [
        {
          kind: 'p',
          html: 'Bei Fragen zu dieser Datenschutzerklärung oder zum Umgang mit personenbezogenen Daten kontaktieren Sie uns unter:',
        },
        {
          kind: 'p',
          html: '<strong>Quentin Tusset</strong><br>Gourmetpedia<br>Lüttich, Belgien<br>E-Mail: <a href="mailto:support@gourmetpedia.com">support@gourmetpedia.com</a>',
        },
      ],
    },
  ],
}

export default privacy
