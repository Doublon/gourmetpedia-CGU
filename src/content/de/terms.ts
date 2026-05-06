import type { PageContent } from '../types'

const terms: PageContent = {
  title: 'Nutzungs- und Verkaufsbedingungen',
  lastUpdatedISO: '2026-05-06',
  intro: [
    {
      kind: 'p',
      html: 'Diese Nutzungs- und Verkaufsbedingungen (die „Bedingungen") regeln Ihren Zugang zu und Ihre Nutzung von Gourmetpedia (die „App"), einschließlich der kostenlosen Version und aller in der App angebotenen kostenpflichtigen Abonnements.',
    },
    {
      kind: 'p',
      html: 'Die App wird betrieben von <strong>Quentin Tusset</strong> mit Sitz in Lüttich, Belgien („wir", „uns" oder „unser"). Durch die Erstellung eines Kontos, die Nutzung der App oder den Erwerb eines Abonnements stimmen Sie diesen Bedingungen zu. Wenn Sie nicht einverstanden sind, dürfen Sie die App nicht nutzen.',
    },
  ],
  sections: [
    {
      id: 'about-gourmetpedia',
      title: '1. Über Gourmetpedia',
      blocks: [
        {
          kind: 'p',
          html: 'Gourmetpedia ist eine Anwendung, mit der Nutzer online gefundene Rezepte speichern, organisieren und einsehen können, einschließlich Rezepten, die über Instagram, TikTok und andere Social-Media-Plattformen gefunden wurden. Die App ermöglicht es Nutzern auch, Rezepte zu erstellen, zu speichern, zu synchronisieren und zu teilen.',
        },
        {
          kind: 'p',
          html: 'Gourmetpedia ist nicht mit Instagram, TikTok, Meta, ByteDance oder einer anderen Social-Media-Plattform oder Drittanbieter-Website verbunden, von ihnen unterstützt oder gesponsert.',
        },
      ],
    },
    {
      id: 'contact-and-operator',
      title: '2. Kontakt- und Betreiberinformationen',
      blocks: [
        { kind: 'p', html: 'Die App wird betrieben von:' },
        {
          kind: 'p',
          html: '<strong>Quentin Tusset</strong><br>Lüttich, Belgien<br>E-Mail: <a href="mailto:support@getgourmetpedia.com">support@getgourmetpedia.com</a>',
        },
        {
          kind: 'p',
          html: 'Bei Fragen zu diesen Bedingungen, Ihrem Konto oder Ihrem Abonnement können Sie uns unter <a href="mailto:support@getgourmetpedia.com">support@getgourmetpedia.com</a> kontaktieren.',
        },
      ],
    },
    {
      id: 'account-registration',
      title: '3. Kontoregistrierung',
      blocks: [
        {
          kind: 'p',
          html: 'Für die Nutzung der App ist ein Nutzerkonto erforderlich. Bei der Erstellung eines Kontos müssen Sie korrekte und aktuelle Informationen angeben, einschließlich Ihrer E-Mail-Adresse sowie Ihres Vor- und Nachnamens.',
        },
        {
          kind: 'p',
          html: 'Sie sind dafür verantwortlich, Ihre Anmeldedaten vertraulich zu behandeln, sowie für alle Aktivitäten, die über Ihr Konto stattfinden. Sie müssen uns unverzüglich benachrichtigen, wenn Sie der Meinung sind, dass auf Ihr Konto unbefugt zugegriffen wurde.',
        },
        {
          kind: 'p',
          html: 'Die App ist für ein allgemeines Publikum bestimmt. Wenn Sie das gesetzlich vorgeschriebene Alter zum Abschluss dieser Bedingungen in Ihrem Land unterschreiten, dürfen Sie die App nur mit Erlaubnis und unter Aufsicht eines Elternteils oder gesetzlichen Vormunds nutzen.',
        },
      ],
    },
    {
      id: 'free-version',
      title: '4. Kostenlose Version',
      blocks: [
        {
          kind: 'p',
          html: 'Gourmetpedia bietet eine kostenlose Version der App an. In der kostenlosen Version können Nutzer bis zu <strong>10 Rezepte</strong> speichern. Weitere Beschränkungen oder technische Einschränkungen können gelten, wie in der App angezeigt.',
        },
        {
          kind: 'p',
          html: 'Wir können die Funktionen oder Einschränkungen der kostenlosen Version von Zeit zu Zeit ändern. Solche Änderungen berühren nicht Ihre zwingenden Verbraucherrechte.',
        },
      ],
    },
    {
      id: 'premium-subscription',
      title: '5. Gourmetpedia Premium-Abonnement',
      blocks: [
        {
          kind: 'p',
          html: 'Gourmetpedia kann ein kostenpflichtiges Abonnement anbieten, das derzeit als Abonnement für unbegrenzte Rezepte präsentiert wird. Premium-Funktionen umfassen derzeit:',
        },
        {
          kind: 'ul',
          items: [
            'unbegrenzte Rezepte in Ihrer Bibliothek;',
            'sichere Multi-Geräte-Synchronisierung;',
            'Zugriff auf weitere in der App angezeigte Premium-Funktionen, sofern vorhanden.',
          ],
        },
        { kind: 'p', html: 'Die derzeit in der App angezeigten Abonnementoptionen sind:' },
        {
          kind: 'ul',
          items: [
            '<strong>Monatsabonnement:</strong> USD 2,99 pro Monat;',
            '<strong>Jahresabonnement:</strong> USD 19,99 pro Jahr.',
          ],
        },
        {
          kind: 'p',
          html: 'Die Preise können je nach Land, Währung, Steuern, Plattformgebühren, Aktionen oder Store-Einstellungen variieren. Der endgültige Preis, der Abrechnungszeitraum und die anwendbaren Steuern werden im Apple App Store- oder Google Play-Bezahlvorgang angezeigt, bevor Sie den Kauf bestätigen. Wenn es einen Unterschied zwischen dem in diesem Dokument angegebenen Preis und dem im Store-Bezahlvorgang angezeigten Preis gibt, gilt der Preis im Store-Bezahlvorgang für die Transaktion.',
        },
      ],
    },
    {
      id: 'payment-processing',
      title: '6. Zahlungsabwicklung',
      blocks: [
        {
          kind: 'p',
          html: 'Alle In-App-Käufe und Abonnements werden über die Plattform abgewickelt, über die Sie das Abonnement erworben haben, entweder über den Apple App Store oder Google Play. Wir erfassen oder speichern Ihre vollständigen Zahlungskartendaten nicht direkt.',
        },
        {
          kind: 'p',
          html: 'Mit dem Kauf eines Abonnements über Apple oder Google stimmen Sie auch den geltenden Bedingungen, Zahlungsregeln, Abrechnungsregeln und Rückerstattungsrichtlinien des Apple App Store oder Google Play zu.',
        },
        {
          kind: 'p',
          html: 'Die App nutzt RevenueCat zur Verwaltung des Abonnementstatus, der Kaufberechtigungen und der Wiederherstellung von Käufen. Die App kann auch Firebase für Konto, Authentifizierung, Speicherung, Synchronisierung und verwandte Backend-Dienste nutzen.',
        },
      ],
    },
    {
      id: 'auto-renewal-and-cancellation',
      title: '7. Automatische Verlängerung und Kündigung',
      blocks: [
        {
          kind: 'p',
          html: 'Abonnements verlängern sich automatisch, sofern sie nicht vor Ende des aktuellen Abrechnungszeitraums über den Apple App Store oder Google Play gemäß den Regeln der für den Kauf verwendeten Plattform gekündigt werden.',
        },
        {
          kind: 'p',
          html: 'Sie sind dafür verantwortlich, Ihr Abonnement über dieselbe Plattform zu kündigen, über die Sie es erworben haben. Das Löschen der App oder Ihres Gourmetpedia-Kontos kündigt Ihr Apple App Store- oder Google Play-Abonnement <strong>nicht</strong> automatisch.',
        },
        { kind: 'h3', text: 'So kündigen Sie' },
        {
          kind: 'ul',
          items: [
            '<strong>Apple App Store:</strong> Öffnen Sie die App „Einstellungen" auf Ihrem Apple-Gerät, tippen Sie auf Ihren Apple-Account-Namen, gehen Sie zu Abonnements, wählen Sie Gourmetpedia aus und kündigen Sie das Abonnement. Apple bietet auch Abonnementsupport unter <a href="https://support.apple.com/billing">support.apple.com/billing</a>.',
            '<strong>Google Play:</strong> Öffnen Sie Google Play, gehen Sie zu Zahlungen und Abonnements oder Abonnements, wählen Sie Gourmetpedia aus und kündigen Sie das Abonnement. Google bietet auch Abonnementsupport unter <a href="https://support.google.com/googleplay">support.google.com/googleplay</a>.',
          ],
        },
        {
          kind: 'p',
          html: 'Nach der Kündigung können Sie weiterhin auf kostenpflichtige Funktionen bis zum Ende des aktuellen bezahlten Abrechnungszeitraums zugreifen, sofern die Plattform nichts anderes angibt.',
        },
      ],
    },
    {
      id: 'refunds',
      title: '8. Rückerstattungen',
      blocks: [
        {
          kind: 'p',
          html: 'Rückerstattungen für Käufe, die über den Apple App Store oder Google Play getätigt wurden, werden von Apple oder Google gemäß ihren eigenen Rückerstattungsrichtlinien und dem geltenden Recht abgewickelt. Wir können keine direkten Rückerstattungen für von Apple oder Google verarbeitete Käufe ausstellen.',
        },
        {
          kind: 'p',
          html: 'Wenn Sie der Meinung sind, dass ein Abrechnungsfehler vorliegt, kontaktieren Sie Apple oder Google über den entsprechenden Plattform-Supportkanal. Sie können uns auch unter <a href="mailto:support@getgourmetpedia.com">support@getgourmetpedia.com</a> kontaktieren, doch unterliegen Plattformkäufe weiterhin dem Rückerstattungsverfahren der Plattform.',
        },
      ],
    },
    {
      id: 'right-of-withdrawal',
      title: '9. Widerrufsrecht für Verbraucher',
      blocks: [
        {
          kind: 'p',
          html: 'Wenn Sie ein Verbraucher mit Sitz im Europäischen Wirtschaftsraum oder in einer anderen Rechtsordnung mit ähnlichen Verbraucherschutzregeln sind, steht Ihnen möglicherweise ein gesetzliches Widerrufsrecht für bestimmte Fernabsatzverträge zu.',
        },
        {
          kind: 'p',
          html: 'Da Gourmetpedia-Abonnements unmittelbaren Zugang zu digitalen Diensten und Premium-Funktionen bieten, verlangen Sie mit der Bestätigung Ihres Kaufs und der Nutzung der Premium-Funktionen die sofortige Erbringung des Dienstes. Soweit nach geltendem Recht zulässig, erkennen Sie an, dass Ihr Widerrufsrecht eingeschränkt sein oder erlöschen kann, sobald die Erbringung des digitalen Dienstes begonnen hat.',
        },
        {
          kind: 'p',
          html: 'Dieser Abschnitt schränkt keine zwingenden Verbraucherrechte ein, die Ihnen nach geltendem Recht zustehen. Anträge auf Rückerstattung oder Widerruf für Abonnements, die über Apple oder Google erworben wurden, müssen in der Regel über die entsprechende Plattform eingereicht werden, sofern das geltende Recht nichts anderes vorsieht.',
        },
      ],
    },
    {
      id: 'user-recipes',
      title: '10. Nutzerrezepte und geteilte Inhalte',
      blocks: [
        {
          kind: 'p',
          html: 'Sie können über die App Rezepte hinzufügen, speichern, organisieren, bearbeiten und teilen. Dies umfasst Rezepttitel, Links, Quell-URLs, Zutaten, Zubereitungsanweisungen, Notizen, Kategorien, Bilder und andere von Ihnen eingegebene Informationen, soweit von der App unterstützt.',
        },
        {
          kind: 'p',
          html: 'Sie bleiben für alle Inhalte verantwortlich, die Sie der App hinzufügen. Sie müssen sicherstellen, dass Sie das Recht haben, Rezepte, Texte, Bilder, Links oder andere Inhalte, die Sie hinzufügen, zu speichern, zu nutzen, hochzuladen oder zu teilen. Sie dürfen die App nicht zur Speicherung oder Weitergabe von rechtswidrigen, schädlichen, rechtsverletzenden, irreführenden, vertraulichen oder unbefugten Inhalten verwenden.',
        },
        {
          kind: 'p',
          html: 'Indem Sie der App Inhalte hinzufügen, gewähren Sie uns eine begrenzte, nicht-exklusive, weltweite, gebührenfreie Lizenz, diese Inhalte zu hosten, zu speichern, zu kopieren, anzuzeigen, zu formatieren, zu synchronisieren, zu übertragen und zu verarbeiten, soweit dies für den Betrieb, die Sicherung, Bereitstellung und Verbesserung der App erforderlich ist. Wenn Sie ein Rezept teilen, ermächtigen Sie uns, dieses Rezept den von Ihnen ausgewählten Nutzern oder Empfängern zur Verfügung zu stellen.',
        },
        {
          kind: 'p',
          html: 'Wenn Sie Inhalte oder Ihr Konto löschen, endet diese Lizenz für die gelöschten Inhalte, außer dort, wo eine fortgesetzte Verarbeitung technisch oder rechtlich erforderlich ist oder wo Inhalte bereits von anderen außerhalb unserer Kontrolle abgerufen, gespeichert, kopiert oder geteilt wurden.',
        },
      ],
    },
    {
      id: 'recipes-from-third-parties',
      title: '11. Rezepte von Websites und sozialen Medien',
      blocks: [
        {
          kind: 'p',
          html: 'Gourmetpedia kann Ihnen helfen, online gefundene Rezepte oder rezeptbezogene Informationen zu speichern. Sie sind dafür verantwortlich, die Bedingungen, Urheberrechtsregeln und Nutzungsbeschränkungen aller Drittanbieter-Websites, Social-Media-Plattformen oder Inhaltsquellen einzuhalten, von denen Sie Rezeptinhalte kopieren, speichern oder teilen.',
        },
        {
          kind: 'p',
          html: 'Wir beanspruchen kein Eigentum an Inhalten Dritter und gewähren Ihnen keine Rechte an Rezepten, Bildern, Videos, Marken oder anderen Materialien Dritter.',
        },
      ],
    },
    {
      id: 'food-allergens-health',
      title: '12. Lebensmittel, Allergene und Gesundheitsinformationen',
      blocks: [
        {
          kind: 'p',
          html: 'Die App ist ein Werkzeug zur Rezeptorganisation. Sie bietet keine medizinische, ernährungswissenschaftliche, diätetische, allergiebezogene oder professionelle Beratung zur Lebensmittelsicherheit.',
        },
        {
          kind: 'p',
          html: 'Sie sind allein für die Rezepte und Informationen verantwortlich, die Sie eingeben, speichern, verwenden oder teilen. Sie müssen Zutaten, Allergene, Zubereitungsanweisungen, Garzeiten, Lagerungshinweise, Eignung für die Ernährung sowie Nährwert- oder gesundheitsbezogene Informationen überprüfen, bevor Sie ein Rezept verwenden.',
        },
        {
          kind: 'p',
          html: 'Wir überprüfen keine von Nutzern eingegebenen Rezepte und können nicht garantieren, dass Rezepte korrekt, sicher, vollständig, für Ihre Ernährung geeignet oder frei von Allergenen oder anderen Risiken sind.',
        },
      ],
    },
    {
      id: 'prohibited-use',
      title: '13. Verbotene Nutzung',
      blocks: [
        { kind: 'p', html: 'Sie verpflichten sich, Folgendes nicht zu tun:' },
        {
          kind: 'ul',
          items: [
            'die App für rechtswidrige, betrügerische, schädliche oder missbräuchliche Zwecke zu nutzen;',
            'Inhalte hochzuladen, zu speichern oder zu teilen, die Rechte des geistigen Eigentums oder Datenschutzrechte verletzen;',
            'vertrauliche, sensible oder persönliche Informationen zu teilen, zu deren Weitergabe Sie nicht berechtigt sind;',
            'zu versuchen, auf ein anderes Nutzerkonto zuzugreifen oder die Sicherheit der App zu beeinträchtigen;',
            'die App zurückzuentwickeln, zu dekompilieren, zu kopieren, weiterzuverkaufen oder auszunutzen, außer soweit dies durch zwingendes Recht erlaubt ist;',
            'Bots, Scraping-Tools oder automatisierte Systeme zu verwenden, um die App zu überlasten oder zu missbrauchen;',
            'die App in einer Weise zu nutzen, die unsere Dienste oder Drittanbieterdienste beschädigen, deaktivieren oder beeinträchtigen könnte.',
          ],
        },
      ],
    },
    {
      id: 'intellectual-property',
      title: '14. Geistiges Eigentum',
      blocks: [
        {
          kind: 'p',
          html: 'Die App, ihr Design, ihre Software, Schnittstellen, Logos, Marken, Branding und Originalinhalte sind unser Eigentum oder Eigentum unserer Lizenzgeber und durch geltende Gesetze zum Schutz des geistigen Eigentums geschützt.',
        },
        {
          kind: 'p',
          html: 'Diese Bedingungen übertragen Ihnen keine Eigentumsrechte an der App. Vorbehaltlich Ihrer Einhaltung dieser Bedingungen gewähren wir Ihnen eine begrenzte, persönliche, nicht-exklusive, nicht übertragbare, widerrufbare Lizenz zur Nutzung der App für Ihre eigenen persönlichen Zwecke.',
        },
      ],
    },
    {
      id: 'third-party-services',
      title: '15. Dienste von Drittanbietern',
      blocks: [
        {
          kind: 'p',
          html: 'Die App kann von Drittanbieter-Plattformen und -Diensten abhängen, einschließlich Apple App Store, Google Play, RevenueCat, Firebase, Hosting-Anbietern sowie Social-Media- oder Webinhaltsquellen. Diese Dritten können eigene Bedingungen und Datenschutzrichtlinien haben.',
        },
        {
          kind: 'p',
          html: 'Wir sind nicht verantwortlich für Drittanbieter-Plattformen, Zahlungsabwickler, soziale Netzwerke, Websites, Inhalte, Richtlinien, Ausfälle, Entscheidungen oder Rückerstattungsverfahren, sofern zwingendes Recht nichts anderes vorsieht.',
        },
      ],
    },
    {
      id: 'availability',
      title: '16. Verfügbarkeit und Änderungen der App',
      blocks: [
        {
          kind: 'p',
          html: 'Wir streben danach, Gourmetpedia verfügbar und funktionsfähig zu halten, garantieren jedoch nicht, dass die App stets ununterbrochen, fehlerfrei, sicher oder auf jedem Gerät oder Betriebssystem verfügbar sein wird.',
        },
        {
          kind: 'p',
          html: 'Wir können Teile der App, einschließlich Funktionen, technische Anforderungen oder kostenlose Beschränkungen, aktualisieren, ändern, aussetzen oder einstellen. Wenn eine Änderung kostenpflichtige Abonnementfunktionen wesentlich beeinträchtigt, werden wir uns bemühen, eine angemessene Vorankündigung zu geben, soweit dies nach geltendem Recht oder den Plattformregeln erforderlich ist.',
        },
      ],
    },
    {
      id: 'account-deletion-loss',
      title: '17. Kontolöschung und Verlust des Zugriffs',
      blocks: [
        {
          kind: 'p',
          html: 'Sie können Ihr Gourmetpedia-Konto in der App löschen, indem Sie auf <strong>Profil &gt; Konto löschen</strong> gehen und die Löschung bestätigen.',
        },
        {
          kind: 'p',
          html: 'Die Kontolöschung ist <strong>sofort und unumkehrbar</strong>. Wenn Sie Ihr Konto löschen, löscht Gourmetpedia Ihr Konto und die damit verbundenen Daten in Gourmetpedia, einschließlich Ihrer gespeicherten Rezepte, Ihrer Rezeptbibliothek, Synchronisierungsdaten, Profilinformationen und kontobezogenen Inhalte, die von der App gespeichert werden.',
        },
        {
          kind: 'p',
          html: 'Nach der Kontolöschung können Ihre Rezepte, Einstellungen, mit Ihrem Konto verknüpften geteilten Rezeptdatensätze und andere Kontodaten nicht von Gourmetpedia wiederhergestellt werden.',
        },
        {
          kind: 'note',
          html: '<strong>Wichtig:</strong> Das Löschen Ihres Gourmetpedia-Kontos kündigt nicht Ihr Apple App Store- oder Google Play-Abonnement. Sie müssen Ihr Abonnement separat über Apple oder Google kündigen. Wenn Sie Ihr Konto löschen, während Ihr Abonnement noch aktiv ist, können Sie den Zugriff auf Premium-Funktionen und alle mit Ihrem Gourmetpedia-Konto verknüpften Daten verlieren. Möglicherweise können Sie nach der Erstellung eines neuen Kontos „Käufe wiederherstellen" verwenden, sofern Apple, Google und RevenueCat eine aktive Berechtigung verifizieren können, die Wiederherstellung eines Kaufs stellt jedoch keine gelöschten Rezepte, gelöschten Einstellungen oder gelöschten Kontodaten wieder her.',
        },
        {
          kind: 'p',
          html: 'Wir bieten keine Rückerstattungen, weil ein Konto gelöscht wurde. Rückerstattungen für Apple App Store- oder Google Play-Käufe werden von der jeweiligen Plattform abgewickelt, sofern zwingendes Recht nichts anderes vorschreibt.',
        },
      ],
    },
    {
      id: 'suspension-termination',
      title: '18. Aussetzung und Beendigung',
      blocks: [
        {
          kind: 'p',
          html: 'Wir können Ihren Zugriff auf die App aussetzen oder beenden, wenn Sie gegen diese Bedingungen verstoßen, die App missbrauchen, ein rechtliches oder Sicherheitsrisiko darstellen, Rechte Dritter verletzen oder wenn wir gesetzlich oder durch einen Plattformanbieter dazu verpflichtet sind.',
        },
        {
          kind: 'p',
          html: 'Sie können die Nutzung der App jederzeit beenden. Wenn Sie ein aktives Abonnement haben, bleiben Sie dafür verantwortlich, dieses wie oben beschrieben über Apple oder Google zu kündigen.',
        },
      ],
    },
    {
      id: 'privacy',
      title: '19. Datenschutz',
      blocks: [
        {
          kind: 'p',
          html: 'Unsere Erhebung und Verwendung personenbezogener Daten ist in unserer Datenschutzerklärung beschrieben, die in der App und unter <a href="https://gourmetpedia.com/privacy">gourmetpedia.com/privacy</a> verfügbar ist, sofern diese Seite verfügbar ist. Die Datenschutzerklärung erläutert, welche Daten wir erheben, warum wir sie erheben, wie lange wir sie aufbewahren und wie Sie eine Löschung beantragen oder Ihre Rechte ausüben können.',
        },
      ],
    },
    {
      id: 'disclaimer',
      title: '20. Gewährleistungsausschluss',
      blocks: [
        {
          kind: 'p',
          html: 'Soweit nach geltendem Recht zulässig, wird die App „wie besehen" und „wie verfügbar" bereitgestellt. Wir geben keine Garantie dafür, dass die App Ihren Erwartungen entspricht, dass Rezepte oder geteilte Inhalte korrekt oder sicher sind oder dass die App ununterbrochen oder fehlerfrei sein wird.',
        },
        {
          kind: 'p',
          html: 'Nichts in diesen Bedingungen schließt eine Gewährleistung, Garantie oder ein Verbraucherrecht aus oder schränkt diese ein, die nach geltendem Recht nicht ausgeschlossen oder eingeschränkt werden können.',
        },
      ],
    },
    {
      id: 'liability',
      title: '21. Haftungsbeschränkung',
      blocks: [
        {
          kind: 'p',
          html: 'Soweit nach geltendem Recht zulässig, haften wir nicht für mittelbare, zufällige, besondere, Folge-, Straf- oder entgangenen Gewinn-Schäden, die sich aus Ihrer Nutzung der App, Ihren Rezepten, Inhalten Dritter, Problemen mit der Abonnementplattform oder dem Verlust von Daten nach Kontolöschung ergeben.',
        },
        {
          kind: 'p',
          html: 'Nichts in diesen Bedingungen beschränkt die Haftung, die rechtlich nicht beschränkt werden kann, einschließlich der Haftung für Betrug, vorsätzliches Fehlverhalten oder zwingende Verbraucherrechte nach geltendem Recht.',
        },
      ],
    },
    {
      id: 'changes',
      title: '22. Änderungen dieser Bedingungen',
      blocks: [
        {
          kind: 'p',
          html: 'Wir können diese Bedingungen von Zeit zu Zeit aktualisieren. Wenn wir dies tun, aktualisieren wir das Datum „Zuletzt aktualisiert" oben in diesem Dokument. Bei wesentlichen Änderungen können wir Sie in der App oder auf andere geeignete Weise benachrichtigen.',
        },
        {
          kind: 'p',
          html: 'Ihre fortgesetzte Nutzung der App nach Inkrafttreten der aktualisierten Bedingungen bedeutet, dass Sie die aktualisierten Bedingungen akzeptieren. Wenn Sie den aktualisierten Bedingungen nicht zustimmen, müssen Sie die Nutzung der App einstellen und gegebenenfalls Ihr Abonnement über Apple oder Google kündigen.',
        },
      ],
    },
    {
      id: 'governing-law',
      title: '23. Anwendbares Recht und Streitigkeiten',
      blocks: [
        {
          kind: 'p',
          html: 'Diese Bedingungen unterliegen dem Recht Belgiens, unbeschadet zwingender Verbraucherschutzbestimmungen, die in Ihrem Wohnsitzland gelten.',
        },
        {
          kind: 'p',
          html: 'Wenn Sie Verbraucher sind, haben Sie möglicherweise das Recht, Ansprüche vor den nach zwingendem Verbraucherrecht zulässigen Gerichten geltend zu machen. Andernfalls sind die Gerichte in Lüttich, Belgien, für Streitigkeiten im Zusammenhang mit diesen Bedingungen zuständig.',
        },
      ],
    },
    {
      id: 'severability',
      title: '24. Salvatorische Klausel',
      blocks: [
        {
          kind: 'p',
          html: 'Sollte sich eine Bestimmung dieser Bedingungen als ungültig oder undurchsetzbar erweisen, bleiben die übrigen Bestimmungen weiterhin gültig. Die ungültige oder undurchsetzbare Bestimmung wird so ausgelegt oder ersetzt, dass sie gültig und durchsetzbar wird, wobei der ursprüngliche Zweck so weit wie möglich erhalten bleibt.',
        },
      ],
    },
    {
      id: 'contact',
      title: '25. Kontakt',
      blocks: [
        {
          kind: 'p',
          html: 'Bei Fragen zu diesen Bedingungen, der App, Ihrem Konto oder Ihrem Abonnement wenden Sie sich an:',
        },
        {
          kind: 'p',
          html: '<strong>Quentin Tusset</strong><br>Gourmetpedia<br>Lüttich, Belgien<br>E-Mail: <a href="mailto:support@getgourmetpedia.com">support@getgourmetpedia.com</a>',
        },
      ],
    },
  ],
}

export default terms
