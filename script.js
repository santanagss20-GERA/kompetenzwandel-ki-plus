const SOCIAL_URLS = {
  linkedin: "https://www.linkedin.com/in/geraldine-sep%C3%BAlveda-santana-681823a3",
  instagram: "https://www.instagram.com/gss_consulting/"
};

const WHATSAPP_URL = "";

if ("scrollRestoration" in history && document.querySelector(".module-page-main") && !window.location.hash) {
  history.scrollRestoration = "manual";
}

const translations = {
  de: {
    "nav.home": "Startseite",
    "nav.offer": "Leistung",
    "nav.modules": "Module",
    "nav.implementation": "Umsetzung",
    "nav.practiceImpact": "Praxis & Impact",
    "nav.impact": "Impact",
    "nav.practice": "Praxis",
    "nav.quality": "Förderung",
    "nav.about": "Über uns",
    "nav.profile": "Profil",
    "nav.contact": "Kontakt",
    "nav.notice": "Hinweise",
    "hero.eyebrow": "Eine Leistung von GSS Management Consulting",
    "hero.title": "KompetenzWandel <span>KI+</span>",
    "hero.lead": "Upgrade statt Neustart.",
    "hero.text": "Ein Frankfurter Innovationsmodell für KI-gestütztes Kompetenz-Upgrade: migrantische und internationale Berufsbiografien sowie weitere berufliche Übergänge werden sichtbar und mit Digitalisierung, KI, Fachsprache und Arbeitsmarktwissen zu Zukunftskompetenz weiterentwickelt.",
    "hero.subtext": "Im Mittelpunkt steht vorhandene berufliche Substanz: Erfahrung, Wissen und Kompetenzen, die in Weiterbildung, Spezialisierung, Beschäftigung oder Selbständigkeit anschlussfähig werden.",
    "hero.primary": "Kostenloses Erstgespräch anfragen",
    "hero.secondary": "Module ansehen",
    "hero.badge2": "AZAV-Zertifizierung",
    "status.ribbon": "Leistung in Vorbereitung",
    "status.finalPhase": "in finaler Phase",
    "trust.modules": "Module",
    "trust.path": "UE Programm",
    "trust.ai": "Kompetenz-Upgrade",
    "trust.note": "80 UE Programm: KompetenzScan, BasisPass Digitalisierung & KI sowie PraxisProfil & Wandelpfad verbinden Kompetenzfeststellung, Basisqualifizierung, berufliche Sichtbarkeit und Förderberatung.",
    "intro.eyebrow": "Berufliche Substanz als Ausgangspunkt.",
    "intro.title": "Aus beruflicher Substanz wird Zukunftskompetenz.",
    "intro.p1": "KompetenzWandel KI+ ist als modularer, arbeitsmarktnaher Transformationspfad konzipiert. Die Leistung macht vorhandene berufliche Substanz sichtbar: Erfahrung, Wissen, Kompetenzen, Qualifikationen, digitale Fähigkeiten und Entwicklungspotenzial.",
    "intro.ctaFunding": "Förderung ansehen",
    "intro.p2": "Vorhandene berufliche Substanz wird strukturiert erfasst, in berufliche Kompetenzfelder übersetzt und mit Digitalisierung, KI-Grundlagen, Fachsprache, FairWelcome-orientierter Arbeitsmarktintegration und Arbeitsmarktwissen verbunden.",
    "intro.p3": "So entsteht Orientierung: Welche Kompetenzen sind bereits nutzbar? Welche digitale, sprachliche oder fachliche Basis sollte ergänzt werden? Und welcher nächste Anschluss passt: Weiterbildung, Spezialisierung, Beschäftigung oder eine passende Selbständigkeit?",
    "intro.p4": "Zukunftskompetenz bedeutet hier nicht nur Technik. Es geht auch um Lernfähigkeit, Resilienz, nachhaltiges Arbeiten, digitale Souveränität und die Fähigkeit, vorhandenes Fachwissen in berufliche Transformation zu übertragen.",
    "modules.eyebrow": "Leistungsstruktur",
    "modules.title": "Drei Bausteine: erkennen, befähigen, beruflich wirksam machen.",
    "modules.text": "Die drei Bausteine machen aus vorhandener beruflicher Substanz einen konkreten nächsten Schritt: sichtbar, digital anschlussfähig und beruflich wirksam.",
    "m1.title": "KompetenzScan",
    "m1.text": "Der KompetenzScan macht sichtbar, welche Erfahrung, Kenntnisse und Kompetenzen bereits nutzbar sind, welche Anteile anerkannt, übertragbar oder entwickelbar sind und welcher nächste berufliche Anschluss realistisch ist.",
    "m1.li1": "Kompetenzprofil",
    "m1.li2": "Stärken und Entwicklungslücken",
    "m1.li3": "erste Qualifizierungs- und Praxisschritte",
    "m1.duration": "Standard: 2 Wochen / 8 UE.",
    "m2.title": "BasisPass Digitalisierung & KI",
    "m2.text": "Der BasisPass schafft eine gemeinsame Grundlage in Digitalisierung, KI, Datenschutz, Recherche, Dokumentation, Kommunikation, Selbstmarketing, modernen Bewerbungsstrategien und berufsspezifischer Tool-Nutzung.",
    "m2.li1": "DigitalisierungsPass",
    "m2.li2": "KI-GrundlagenPass",
    "m2.li3": "verantwortungsvolle Anwendung",
    "m2.duration": "Standard: 4 Wochen / 32 UE; Rahmen: 3-5 Wochen / 24-40 UE.",
    "m3.title": "PraxisProfil & Wandelpfad",
    "m3.text": "Das PraxisProfil übersetzt Scan und BasisPass in einen konkreten Wandelpfad: Kurzprofil, Portfolio oder Arbeitsprobe, Praxisaufgaben und Anschluss in Weiterbildung, Spezialisierung, Beschäftigung oder Gründung. So wird berufliche Transformation praktisch vorbereitet.",
    "m3.li1": "professionelles Kurzprofil",
    "m3.li2": "Praxisformate und Brückenfunktionen",
    "m3.li3": "Weiterbildungs- und Spezialisierungsroute",
    "m3.duration": "Standard: 10 Wochen / 40 UE; Rahmen: 8-12 Wochen / 32-48 UE.",
    "modules.more": "Mehr erfahren & anmelden",
    "modules.prev": "Vorheriges Modul",
    "modules.next": "Nächstes Modul",
    "modules.measureNote": "80 UE Programm: KompetenzScan, BasisPass Digitalisierung & KI sowie PraxisProfil & Wandelpfad verbinden Kompetenzfeststellung, Basisqualifizierung, berufliche Sichtbarkeit und Förderberatung.",
    "azav.eyebrow": "Förderung & Qualität",
    "azav.title": "AZAV-Zertifizierung: Qualität, Förderung und Anschlusswege.",
    "azav.text": "GSS entwickelt KompetenzWandel KI+ entlang eines strukturierten Qualitäts- und Förderrahmens. Die AZAV-Zertifizierung stärkt Transparenz, Dokumentation, Qualitätssicherung und arbeitsmarktliche Relevanz.",
    "azav.text2": "Im Mittelpunkt stehen individuelle Passung, nachvollziehbare Entwicklungsschritte und realistische Wege in Qualifizierung, berufliche Integration, Spezialisierung oder Selbständigkeit.",
    "azav.note": "Förderfähigkeit, Zugang über AVGS oder Bildungsgutschein sowie individuelle Voraussetzungen werden im Erstgespräch geprüft. Eine konkrete Förderung hängt von gültiger Zulassung, passender Maßnahme und Entscheidung des zuständigen Kostenträgers ab.",
    "azav.cta": "Förderberatung",
    "azav.activationTitle": "Aktivierung und berufliche Eingliederung",
    "azav.activationText": "Anschlussfähig für Kompetenzfeststellung, berufliche Orientierung, Coaching, moderne Bewerbungsstrategie, Integrationsbegleitung sowie Wege in Beschäftigung oder passende Selbständigkeit.",
    "azav.trainingTitle": "Berufliche Weiterbildung",
    "azav.trainingText": "Anschlussfähig für weiterführende Qualifizierung in Digitalisierung, KI-Grundlagen, berufsspezifischer Anwendung, Fachsprache, Dokumentation, Projektarbeit und Transformationskompetenz.",
    "implementation.eyebrow": "Umsetzung",
    "path.eyebrow": "Brücke in die Praxis",
    "path.title": "Kompetenzen nutzen, während Anerkennung, Weiterbildung oder Spezialisierung weiterlaufen.",
    "path.s1": "Kompetenzen erfassen, Anschlussmöglichkeiten prüfen und rechtlich sensible Grenzen beachten.",
    "path.s2": "Gemeinsame Basis in Digitalisierung und KI aufbauen: DigitalisierungsPass und KI-GrundlagenPass.",
    "path.s3": "Praxisformate wie Projekte, Hospitationen, Praktika oder Praxislabore vorbereiten.",
    "path.s4": "Weiterbildung, Spezialisierung und Praxis in einen realistischen Wandelpfad verbinden.",
    "path.summary": "Nach einem gemeinsamen Einstieg zeigt KompetenzWandel KI+, welche Erfahrungen, Kenntnisse und Kompetenzen bereits nutzbar sind, welche digitale, sprachliche oder fachliche Basis ergänzt werden sollte und welcher nächste Anschluss passt: Praxisaufgaben, Projektarbeit, Hospitation, Weiterbildung, Spezialisierung, Beschäftigung oder eine passende Selbständigkeit.",
    "path.summary2": "So entsteht ein strukturierter Übergang: vorhandenes Können wird sichtbar, erprobt und Schritt für Schritt in berufliche Wirksamkeit übersetzt.",
    "path.more": "Wandelpfad ansehen",
    "profile.eyebrow": "Gründerinnenprofil",
    "profile.title": "Aus gelebtem Wandel entsteht Methode.",
    "profile.p1": "Geraldine Sepúlveda Santana, Inhaberin von GSS Management Consulting, entwickelt KompetenzWandel KI+ aus eigener Erfahrung und fachlicher Perspektive.",
    "profile.p2": "Sie bringt einen internationalen Hochschulabschluss als Ingeniera de Sistemas y Computación, Erfahrung als Analytikerin und Programmiererin, eine ZAB-Bewertung ihres Abschlusses, Weiterbildungen sowie ein Jahr Umschulung in Richtung Anwendungsentwicklung mit. Ihr eigener Weg führte über Anerkennungs- und Bewertungsprozesse, Weiterbildung, berufliche Übergänge und selbständige Tätigkeit bis in die heutige Arbeit als Beraterin, Coach, Dozentin sowie Sprach- und Kulturvermittlerin.",
    "profile.p3": "Ich habe selbst erlebt, wie viel berufliche Substanz in Übergängen unsichtbar bleiben kann. Deshalb entwickle ich KompetenzWandel KI+ als Upgrade statt Neustart: ein Modell, das vorhandene Erfahrung, Wissen und Kompetenzen sichtbar macht und in Zukunftskompetenz übersetzt.",
    "profile.team": "Zum Kernteam gehören Geraldine Sepúlveda Santana (CEO / Geschäftsführung) und Klaus Schmidt (COO / Betriebsleitung). Gemeinsam verbinden sie Gründung, operative Umsetzung, Beratung, Integrationsarbeit und Prozesssteuerung.",
    "impact.eyebrow": "Impact",
    "impact.title": "Berufliche Welten zu Hause in Frankfurt.",
    "impact.text": "Frankfurt ist ein Ort vielfältiger, migrantischer und internationaler Berufsbiografien. KompetenzWandel KI+ macht vorhandene berufliche Substanz lokal sichtbar, digital anschlussfähig und praktisch nutzbar.",
    "impact.duoTitle": "Vorhandenes Potenzial wird Standortvorteil.",
    "impact.duoP1": "Frankfurt braucht Fachkräfte, Unternehmen brauchen Zukunftskompetenz, und viele Menschen bringen berufliche Substanz mit, die in Übergangsphasen, Anerkennungsprozessen oder neuen beruflichen Kontexten erst sichtbar und anschlussfähig gemacht werden muss.",
    "impact.duoP2": "KompetenzWandel KI+ macht dieses Potenzial lokal nutzbar: durch Kompetenzfeststellung, digitale und KI-bezogene Grundlagen, Fachsprache, Arbeitsmarktwissen und praxisnahe Anschlusswege.",
    "impact.duoP3": "Der Impact liegt nicht nur in schnellerer Orientierung, sondern auch in Resilienz, nachhaltiger Kompetenzentwicklung und beruflicher Transformation.",
    "impact.i1t": "Für Teilnehmende",
    "impact.i1": "Vorhandene Erfahrung, Kenntnisse und Kompetenzen werden sichtbar gemacht, digital gestärkt und in realistische nächste Schritte übersetzt: Weiterbildung, Spezialisierung, Beschäftigung, Praxisformate oder Selbständigkeit.",
    "impact.i2t": "Für Unternehmen",
    "impact.i2": "Unternehmen erhalten besseren Zugang zu Menschen mit internationaler Erfahrung, fachlichem Potenzial und wachsender digitaler Kompetenz. Kompetenzprofile, Praxisaufgaben und klare Anschlusswege erleichtern Orientierung und Zusammenarbeit.",
    "impact.i3t": "Für Frankfurt",
    "impact.i3": "Das Modell nutzt vorhandenes Fachkräftepotenzial vor Ort, stärkt berufliche Integration und verbindet soziale Teilhabe mit Innovation, Digitalisierung und nachhaltiger Arbeitsmarktentwicklung.",
    "contact.eyebrow": "Interesse & Zugang",
    "contact.title": "Interesse an KompetenzWandel KI+?",
    "contact.text": "Für ein erstes Gespräch, eine Förderberatung oder eine Vormerkung zur Teilnahme können Sie direkt Kontakt aufnehmen.",
    "contact.panelTitle": "Kostenloses Erstgespräch",
    "contact.panelText": "Schreiben Sie kurz, ob Sie als teilnehmende Person, Unternehmen oder Kooperationskontakt Interesse haben. Im kostenlosen Erstgespräch klären wir Ausgangssituation, passende nächste Schritte und mögliche Zugänge über Förderung (AVGS oder Bildungsgutschein) oder Selbstzahlung.",
    "contact.emailLabel": "Direkt per E-Mail:",
    "contact.emailCta": "E-Mail senden",
    "contact.phoneLabel": "Telefon:",
    "contact.primary": "Direkt per WhatsApp",
    "contact.secondary": "GSS Website öffnen",
    "contact.note": "Die Umsetzung wird vorbereitet. Erstgespräche, Vormerkungen und Förderberatung sind bereits möglich.",
    "legal.eyebrow": "Hinweise",
    "legal.title": "Klarer Rahmen. Sicherer Wandel.",
    "legal.text": "KompetenzWandel KI+ arbeitet mit beruflicher Substanz, persönlichen Berufsbiografien, Kompetenzprofilen und KI-gestützten Arbeitsprozessen. Damit daraus Vertrauen entsteht, werden Datenschutz, Anerkennungsgrenzen und verantwortliche KI-Nutzung von Anfang an offen benannt und methodisch mitgeführt.",
    "legal.pill1": "Datenschutz",
    "legal.pill2": "Anerkennungsrahmen",
    "legal.pill3": "KI-Verantwortung",
    "legal.card1t": "Biografien schützen",
    "legal.card1": "Sensible Dokumente werden nicht über die Landingpage abgefragt. Für Beratung und Teilnahme gelten separate Hinweise, Einwilligungen und transparente Abläufe.",
    "legal.card2t": "Anerkennung sauber einordnen",
    "legal.card2": "Die Leistung begleitet Kompetenzsichtbarkeit, Transfer und Qualifizierung. Formale Anerkennung, Rechtsberatung und Entscheidungen von Behörden bleiben getrennte Verfahren.",
    "legal.card3t": "KI nachvollziehbar einsetzen",
    "legal.card3": "KI unterstützt Recherche, Strukturierung, Reflexion und Arbeitsproben. Quellenprüfung, Datenschutz, Transparenz und menschliche Entscheidung bleiben verbindlich.",
    "legal.l1t": "Anbieter & Leistungsstatus",
    "legal.l1": "KompetenzWandel KI+ ist eine Leistung von GSS Management Consulting und befindet sich in Vorbereitung. Inhalte, Dauer und Formate können bis zur Veröffentlichung präzisiert werden; Impressum und Datenschutz stehen auf einer separaten Rechtliches-Seite.",
    "legal.l2t": "Datenschutz",
    "legal.l2": "Kontaktanfragen werden nur zur Bearbeitung des Anliegens genutzt. Sensible Dokumente werden über diese Landingpage nicht abgefragt; für Beratung oder Teilnahme werden separate Hinweise und Einwilligungen bereitgestellt.",
    "legal.l3t": "Anerkennung & Rechtsrahmen",
    "legal.l3": "Die Leistung ersetzt keine berufliche Anerkennung, Rechtsberatung oder behördliche Entscheidung. Sie unterstützt dabei, vorhandene Kompetenzen sichtbar zu machen und zulässige Praxis- und Qualifizierungsschritte zu planen.",
    "legal.l4t": "KI-Verantwortung",
    "legal.l4": "KI wird als Lern-, Strukturierungs- und Arbeitshilfe eingesetzt. Teilnehmende lernen Datenschutz, Quellenprüfung, Transparenz und verantwortungsvolle Nutzung im beruflichen Kontext.",
    "legal.noteTitle": "Kurz gesagt",
    "legal.summary": "Die wichtigsten rechtlichen Hinweise stehen bewusst getrennt auf einer eigenen Seite, damit die Landingpage lesbar bleibt und die Informationen auffindbar sind.",
    "legal.legalCta": "Rechtliches öffnen",
    "legal.privacyCta": "Datenschutz lesen",
    "legalPage.eyebrow": "Rechtliches",
    "legalPage.title": "Impressum und Datenschutz",
    "legalPage.text": "Diese Seite bündelt die Anbieterkennzeichnung und Datenschutzhinweise zur Projektseite KompetenzWandel KI+.",
    "legalPage.back": "Zurück zur Landingpage",
    "footer.claim": "Klarheit, Struktur und Entwicklung für die digitale Zukunft.",
    "footer.offer": "KompetenzWandel KI+",
    "footer.access": "Zugang & Förderung",
    "footer.freeCall": "Kostenloses Erstgespräch",
    "footer.avgs": "Förderberatung",
    "footer.voucher": "Bildungsgutschein klären",
    "footer.email": "info@gss-consulting.de",
    "footer.website": "GSS Website",
    "footer.imprint": "Impressum",
    "footer.privacy": "Datenschutz",
    "footer.linkedin": "LinkedIn",
    "footer.instagram": "Instagram",
    "footer.x": "X",
    "footer.social": "Folge uns",
    "legal.imprintLink": "Impressum",
    "legal.privacyLink": "Datenschutz",
    "search.button": "Suchen",
    "search.label": "Landingpage durchsuchen",
    "search.placeholder": "Landingpage durchsuchen",
    "search.hint": "Suchbegriff eingeben.",
    "modulePage.main": "Zur Hauptseite",
    "modulePage.back": "Zurück zu den Modulen",
    "modulePage.eyebrow": "Modul im Detail",
    "modulePage.primary": "Anfrage starten",
    "modulePage.funding": "Förderrahmen prüfen",
    "modulePage.includes": "Was enthalten ist",
    "modulePage.duration": "Zeitrahmen",
    "modulePage.outcome": "Ergebnis",
    "modulePage.accessTitle": "Zugang & Förderung",
    "form.eyebrow": "Anmeldung & Beratung",
    "form.title": "Erstgespräch, Anmeldung oder Förderberatung anfragen.",
    "form.text": "Füllen Sie die Felder aus. Beim Absenden wird eine vorbereitete E-Mail an GSS Management Consulting geöffnet; es werden keine Daten über die Website gespeichert.",
    "form.name": "Name",
    "form.email": "E-Mail",
    "form.role": "Ich melde mich als",
    "form.roleParticipant": "Teilnehmende Person",
    "form.roleCompany": "Unternehmen",
    "form.rolePartner": "Kooperationskontakt",
    "form.interest": "Anliegen",
    "form.optionCall": "Kostenloses Erstgespräch",
    "form.optionRegister": "Anmeldung vormerken",
    "form.optionAvgs": "AVGS einlösen / klären",
    "form.optionVoucher": "Bildungsgutschein klären",
    "form.optionFunding": "Förderberatung anfragen",
    "form.message": "Kurzbeschreibung",
    "form.messagePlaceholder": "Ausgangssituation, beruflicher Hintergrund, Anerkennung/ZAB, gewünschter nächster Schritt",
    "form.mailGreeting": "Hallo GSS Management Consulting,",
    "form.mailInterested": "ich interessiere mich für:",
    "form.mailRequest": "Anliegen:",
    "form.mailName": "Name:",
    "form.mailEmail": "E-Mail:",
    "form.mailRole": "Rolle:",
    "form.mailDescription": "Kurzbeschreibung:",
    "form.mailContact": "Bitte kontaktieren Sie mich für ein Erstgespräch.",
    "form.mailClosing": "Viele Grüße",
    "form.submit": "E-Mail vorbereiten",
    "form.note": "Hinweis: Förderfähigkeit setzt gültige Zulassungen, passende Maßnahmen und die individuelle Entscheidung des Kostenträgers voraus.",
    "imprint.eyebrow": "Anbieterkennzeichnung",
    "imprint.title": "Impressum",
    "imprint.provider": "<strong>GSS Management Consulting</strong><br>Inhaberin: Geraldine Sepúlveda Santana<br>Hanauer Landstraße 521, Büros 129-130, 1. Etage<br>60386 Frankfurt am Main<br>Deutschland<br>USt-IdNr.: DE459498394",
    "imprint.emailLabel": "E-Mail:",
    "imprint.phoneLabel": "Telefon:",
    "imprint.websiteLabel": "Website:",
    "imprint.note": "Diese Landingpage ist eine Projektseite zu KompetenzWandel KI+ von GSS Management Consulting. Die Umsatzsteuer-Identifikationsnummer wurde gemäß § 27a UStG erteilt; die Steuernummer wird nicht öffentlich ausgewiesen.",
    "imprint.liability": "Die Inhalte werden sorgfältig erstellt. Für Vollständigkeit, Aktualität und externe Links kann keine Gewähr übernommen werden. Eigene Texte, Gestaltung und Markenbestandteile dürfen nur im Rahmen des geltenden Urheber- und Kennzeichenrechts genutzt werden.",
    "privacy.eyebrow": "Datenschutz",
    "privacy.title": "Datenschutzhinweise",
    "privacy.controller": "Verantwortlich für diese Projektseite ist GSS Management Consulting, Geraldine Sepúlveda Santana, Hanauer Landstraße 521, Büros 129-130, 1. Etage, 60386 Frankfurt am Main. Kontakt: info@gss-consulting.de, Telefon: +49 176 32428387.",
    "privacy.contact": "Wenn Sie per E-Mail Kontakt aufnehmen, verarbeiten wir die von Ihnen übermittelten Angaben ausschließlich zur Bearbeitung Ihrer Anfrage, zur Vorbereitung eines Gesprächs und zur Kommunikation über KompetenzWandel KI+.",
    "privacy.localStorage": "Die Sprachauswahl wird lokal im Browser gespeichert, damit die Seite beim nächsten Besuch in der gewählten Sprache geöffnet werden kann. Es wird kein Tracking-Cookie gesetzt.",
    "privacy.external": "Diese Vorabversion nutzt externe Schriftarten und Bildquellen. Beim produktiven Betrieb sollten Anbieter, Zwecke, Rechtsgrundlagen und mögliche Drittlandübermittlungen in der finalen Datenschutzerklärung konkret dokumentiert oder die Medien lokal eingebunden werden.",
    "privacy.rights": "Betroffene Personen haben nach der DSGVO insbesondere Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch. Eine erteilte Einwilligung kann mit Wirkung für die Zukunft widerrufen werden."
  },
  en: {
    "nav.home": "Home",
    "nav.offer": "Service",
    "nav.modules": "Modules",
    "nav.implementation": "Implementation",
    "nav.practiceImpact": "Practice & impact",
    "nav.impact": "Impact",
    "nav.practice": "Practice",
    "nav.quality": "Funding",
    "nav.about": "About us",
    "nav.profile": "Profile",
    "nav.contact": "Contact",
    "nav.notice": "Notes",
    "hero.eyebrow": "A service by GSS Management Consulting",
    "hero.title": "KompetenzWandel <span>KI+</span>",
    "hero.lead": "Upgrade instead of starting over.",
    "hero.text": "An innovation model from Frankfurt for AI-supported competence upgrading: migrant and international professional biographies, as well as other professional transitions, are made visible and developed into future-ready competence with digitalization, AI, professional language and labor-market knowledge.",
    "hero.subtext": "At the center is existing professional substance: experience, knowledge and competencies that become connectable to further training, specialization, employment or self-employment.",
    "hero.primary": "Request a free first consultation",
    "hero.secondary": "View modules",
    "hero.badge2": "AZAV certification",
    "status.ribbon": "Service in preparation",
    "status.finalPhase": "in final phase",
    "trust.modules": "Modules",
    "trust.path": "training-unit program",
    "trust.ai": "competence upgrade",
    "trust.note": "80 training-unit program: Competence Scan, BasisPass Digitalization & AI and Practice Profile & Change Path connect competence assessment, basic qualification, professional visibility and funding consultation.",
    "intro.eyebrow": "Professional substance as the starting point.",
    "intro.title": "Professional substance becomes future-ready competence.",
    "intro.p1": "KompetenzWandel KI+ is designed as a modular, labor-market-oriented transformation path. The service makes existing professional substance visible: experience, knowledge, competencies, qualifications, digital skills and development potential.",
    "intro.ctaFunding": "View funding",
    "intro.p2": "Existing professional substance is captured in a structured way, translated into professional competence fields and connected with digitalization, AI basics, professional language, FairWelcome-oriented labor-market integration and labor-market knowledge.",
    "intro.p3": "This creates orientation: which competencies are already usable? Which digital, language-related or professional foundation should be added? And which next connection fits: further training, specialization, employment or suitable self-employment?",
    "intro.p4": "Future-ready competence does not mean technology alone. It also means learning ability, resilience, sustainable work, digital sovereignty and the ability to transfer existing professional knowledge into professional transformation.",
    "modules.eyebrow": "Service structure",
    "modules.title": "Three building blocks: identify, enable and make professionally effective.",
    "modules.text": "The three building blocks turn existing professional substance into a concrete next step: visible, digitally connectable and professionally effective.",
    "m1.title": "Competence Scan",
    "m1.text": "The Competence Scan makes visible which experience, knowledge and competencies are already usable, which parts are recognized, transferable or developable, and which next professional connection is realistic.",
    "m1.li1": "competence profile",
    "m1.li2": "strengths and development gaps",
    "m1.li3": "first qualification and practice steps",
    "m1.duration": "Standard: 2 weeks / 8 training units.",
    "m2.title": "BasisPass Digitalization & AI",
    "m2.text": "The BasisPass creates a shared foundation in digitalization, AI, data protection, research, documentation, communication, self-marketing, modern application strategies and profession-specific tool use.",
    "m2.li1": "Digitalization Pass",
    "m2.li2": "AI Foundations Pass",
    "m2.li3": "responsible application",
    "m2.duration": "Standard: 4 weeks / 32 training units; range: 3-5 weeks / 24-40 training units.",
    "m3.title": "Practice Profile & Change Path",
    "m3.text": "The Practice Profile translates the scan and BasisPass into a concrete change path: short profile, portfolio or work sample, practice tasks and connection to further training, specialization, employment or self-employment. This prepares professional transformation in practical terms.",
    "m3.li1": "professional short profile",
    "m3.li2": "practice formats and bridge functions",
    "m3.li3": "training and specialization route",
    "m3.duration": "Standard: 10 weeks / 40 training units; range: 8-12 weeks / 32-48 training units.",
    "modules.more": "Learn more & apply",
    "modules.prev": "Previous module",
    "modules.next": "Next module",
    "modules.measureNote": "80 training-unit program: Competence Scan, BasisPass Digitalization & AI and Practice Profile & Change Path connect competence assessment, basic qualification, professional visibility and funding consultation.",
    "azav.eyebrow": "Funding & quality",
    "azav.title": "AZAV certification: quality, funding and connection pathways.",
    "azav.text": "GSS is developing KompetenzWandel KI+ along a structured quality and funding framework. AZAV certification strengthens transparency, documentation, quality assurance and labor-market relevance.",
    "azav.text2": "The focus is on individual fit, traceable development steps and realistic routes into qualification, professional integration, specialization or self-employment.",
    "azav.note": "Funding eligibility, access through AVGS or Bildungsgutschein and individual requirements are reviewed in the first consultation. Concrete funding depends on valid approval, a suitable measure and the decision of the responsible funding body.",
    "azav.cta": "Funding consultation",
    "azav.activationTitle": "Activation and professional integration",
    "azav.activationText": "Connectable to competence assessment, professional orientation, coaching, modern application strategy, integration support and routes into employment or suitable self-employment.",
    "azav.trainingTitle": "Vocational further training",
    "azav.trainingText": "Connectable to further qualification in digitalization, AI basics, profession-specific application, professional language, documentation, project work and transformation competence.",
    "implementation.eyebrow": "Implementation",
    "path.eyebrow": "Bridge into practice",
    "path.title": "Use competencies while recognition, further training or specialization continue.",
    "path.s1": "Identify competencies, review connection points and respect legally sensitive boundaries.",
    "path.s2": "Build a shared foundation in digitalization and AI: Digitalization Pass and AI Foundations Pass.",
    "path.s3": "Prepare practical formats such as projects, job shadowing, internships or practice labs.",
    "path.s4": "Connect further training, specialization and practice into a realistic change path.",
    "path.summary": "After a shared entry point, KompetenzWandel KI+ shows which experiences, knowledge and competencies are already usable, which digital, language-related or professional foundation should be added and which next connection fits: practice tasks, project work, shadowing, further training, specialization, employment or suitable self-employment.",
    "path.summary2": "This creates a structured transition: existing ability becomes visible, is tested and is translated step by step into professional effectiveness.",
    "path.more": "View change path",
    "profile.eyebrow": "Founder profile",
    "profile.title": "Lived change becomes method.",
    "profile.p1": "Geraldine Sepúlveda Santana, owner of GSS Management Consulting, develops KompetenzWandel KI+ from lived experience and professional expertise.",
    "profile.p2": "She brings an international university degree as Ingeniera de Sistemas y Computación, experience as an analyst and programmer, a ZAB evaluation of her degree, further training and one year of retraining toward application development. Her own path led through recognition and evaluation processes, further training, professional transitions and self-employment into her current work as consultant, coach, lecturer and language and cultural mediator.",
    "profile.p3": "I have experienced myself how much professional substance can remain invisible during transitions. That is why I am developing KompetenzWandel KI+ as an upgrade instead of a restart: a model that makes existing experience, knowledge and competencies visible and translates them into future-ready competence.",
    "profile.team": "The core team consists of Geraldine Sepúlveda Santana (CEO / management) and Klaus Schmidt (COO / operations management). Together, they connect founding, operational implementation, consulting, integration work and process steering.",
    "impact.eyebrow": "Impact",
    "impact.title": "Professional worlds at home in Frankfurt.",
    "impact.text": "Frankfurt is a place of diverse migrant and international professional biographies. KompetenzWandel KI+ makes existing professional substance locally visible, digitally connectable and practically usable.",
    "impact.duoTitle": "Existing potential becomes a location advantage.",
    "impact.duoP1": "Frankfurt needs skilled workers, companies need future-ready competence, and many people bring professional substance that first has to be made visible and connectable during transitions, recognition processes or new professional contexts.",
    "impact.duoP2": "KompetenzWandel KI+ makes this potential usable locally: through competence assessment, digital and AI-related foundations, professional language, labor-market knowledge and practice-oriented connection routes.",
    "impact.duoP3": "The impact lies not only in faster orientation, but also in resilience, sustainable competence development and professional transformation.",
    "impact.i1t": "For participants",
    "impact.i1": "Existing experience, knowledge and competencies are made visible, digitally strengthened and translated into realistic next steps: further training, specialization, employment, practice formats or self-employment.",
    "impact.i2t": "For companies",
    "impact.i2": "Companies gain better access to people with international experience, specialist potential and growing digital competence. Competence profiles, practice tasks and clear connection routes support orientation and collaboration.",
    "impact.i3t": "For Frankfurt",
    "impact.i3": "The model uses existing skilled-worker potential locally, strengthens professional integration and connects social participation with innovation, digitalization and sustainable labor-market development.",
    "contact.eyebrow": "Interest & access",
    "contact.title": "Interested in KompetenzWandel KI+?",
    "contact.text": "For a first conversation, funding consultation or participation reservation, you can contact us directly.",
    "contact.panelTitle": "Free first consultation",
    "contact.panelText": "Send a short note saying whether you are interested as a participant, company or cooperation contact. In the free first consultation, we clarify the starting point, suitable next steps and possible access through funding (AVGS or Bildungsgutschein) or self-payment.",
    "contact.emailLabel": "Direct email:",
    "contact.emailCta": "Send email",
    "contact.phoneLabel": "Phone:",
    "contact.primary": "Direct WhatsApp",
    "contact.secondary": "Open GSS website",
    "contact.note": "Implementation is being prepared. First consultations, participation reservations and funding consultation are already possible.",
    "legal.eyebrow": "Notes",
    "legal.title": "Clear framework. Safe transformation.",
    "legal.text": "KompetenzWandel KI+ works with professional substance, personal professional biographies, competence profiles and AI-supported work processes. To build trust, data protection, recognition boundaries and responsible AI use are named openly and carried through the method from the start.",
    "legal.pill1": "Data protection",
    "legal.pill2": "Recognition framework",
    "legal.pill3": "AI responsibility",
    "legal.card1t": "Protect biographies",
    "legal.card1": "Sensitive documents are not requested through the landing page. Consulting and participation use separate notices, consent information and transparent processes.",
    "legal.card2t": "Classify recognition correctly",
    "legal.card2": "The service supports competence visibility, transfer and qualification. Formal recognition, legal advice and decisions by authorities remain separate procedures.",
    "legal.card3t": "Use AI transparently",
    "legal.card3": "AI supports research, structuring, reflection and work samples. Source checking, data protection, transparency and human decision-making remain binding.",
    "legal.l1t": "Provider & service status",
    "legal.l1": "KompetenzWandel KI+ is a service by GSS Management Consulting and is currently in preparation. Content, duration and formats may be refined before publication; legal notice and privacy information are provided on a separate legal page.",
    "legal.l2t": "Data protection",
    "legal.l2": "Contact requests are used only to process the inquiry. Sensitive documents are not requested through this landing page; separate notices and consent information will be provided for consulting or participation.",
    "legal.l3t": "Recognition & legal framework",
    "legal.l3": "The service does not replace professional recognition, legal advice or official decisions. It supports participants in making existing competencies visible and planning permissible practice and qualification steps.",
    "legal.l4t": "AI responsibility",
    "legal.l4": "AI is used as a learning, structuring and work-support tool. Participants learn data protection, source checking, transparency and responsible use in professional contexts.",
    "legal.noteTitle": "In brief",
    "legal.summary": "The key legal notes are intentionally kept on a separate page so the landing page remains readable and the information is easy to find.",
    "legal.legalCta": "Open legal information",
    "legal.privacyCta": "Read privacy information",
    "legalPage.eyebrow": "Legal information",
    "legalPage.title": "Legal Notice and Privacy",
    "legalPage.text": "This page brings together the provider information and privacy notes for the KompetenzWandel KI+ project page.",
    "legalPage.back": "Back to landing page",
    "footer.claim": "Clarity, structure and development for the digital future.",
    "footer.offer": "KompetenzWandel KI+",
    "footer.access": "Access & funding",
    "footer.freeCall": "Free first consultation",
    "footer.avgs": "Funding consultation",
    "footer.voucher": "Clarify Bildungsgutschein",
    "footer.email": "info@gss-consulting.de",
    "footer.website": "GSS website",
    "footer.imprint": "Legal notice",
    "footer.privacy": "Privacy",
    "footer.linkedin": "LinkedIn",
    "footer.instagram": "Instagram",
    "footer.x": "X",
    "footer.social": "Follow us",
    "legal.imprintLink": "Legal notice",
    "legal.privacyLink": "Privacy",
    "search.button": "Search",
    "search.label": "Search landing page",
    "search.placeholder": "Search landing page",
    "search.hint": "Enter a search term.",
    "modulePage.main": "Back to main page",
    "modulePage.back": "Back to modules",
    "modulePage.eyebrow": "Module details",
    "modulePage.primary": "Start inquiry",
    "modulePage.funding": "Check funding framework",
    "modulePage.includes": "What is included",
    "modulePage.duration": "Time frame",
    "modulePage.outcome": "Outcome",
    "modulePage.accessTitle": "Access & funding",
    "form.eyebrow": "Application & consultation",
    "form.title": "Request first consultation, application or funding consultation.",
    "form.text": "Fill in the fields. On submit, a prepared email to GSS Management Consulting opens; no data is stored by the website.",
    "form.name": "Name",
    "form.email": "Email",
    "form.role": "I am contacting as",
    "form.roleParticipant": "Participant",
    "form.roleCompany": "Company",
    "form.rolePartner": "Cooperation contact",
    "form.interest": "Request",
    "form.optionCall": "Free first consultation",
    "form.optionRegister": "Reserve application interest",
    "form.optionAvgs": "Redeem / clarify AVGS",
    "form.optionVoucher": "Clarify Bildungsgutschein",
    "form.optionFunding": "Request funding consultation",
    "form.message": "Short description",
    "form.messagePlaceholder": "Starting point, professional background, recognition/ZAB status, desired next step",
    "form.mailGreeting": "Hello GSS Management Consulting,",
    "form.mailInterested": "I am interested in:",
    "form.mailRequest": "Request:",
    "form.mailName": "Name:",
    "form.mailEmail": "Email:",
    "form.mailRole": "Role:",
    "form.mailDescription": "Short description:",
    "form.mailContact": "Please contact me for a first consultation.",
    "form.mailClosing": "Kind regards",
    "form.submit": "Prepare email",
    "form.note": "Note: Funding eligibility requires valid approvals, suitable measures and the individual decision of the funding body.",
    "imprint.eyebrow": "Provider information",
    "imprint.title": "Legal notice",
    "imprint.provider": "<strong>GSS Management Consulting</strong><br>Owner: Geraldine Sepúlveda Santana<br>Hanauer Landstraße 521, Offices 129-130, 1st floor<br>60386 Frankfurt am Main<br>Germany<br>VAT ID: DE459498394",
    "imprint.emailLabel": "Email:",
    "imprint.phoneLabel": "Phone:",
    "imprint.websiteLabel": "Website:",
    "imprint.note": "This landing page is a project page for KompetenzWandel KI+ by GSS Management Consulting. The VAT identification number was issued under Sec. 27a German VAT Act; the tax number is not published.",
    "imprint.liability": "The content is prepared with care. No guarantee can be given for completeness, currentness or external links. Own texts, design and brand elements may be used only within the limits of applicable copyright and trademark law.",
    "privacy.eyebrow": "Privacy",
    "privacy.title": "Privacy information",
    "privacy.controller": "The controller for this project page is GSS Management Consulting, Geraldine Sepúlveda Santana, Hanauer Landstraße 521, Offices 129-130, 1st floor, 60386 Frankfurt am Main. Contact: info@gss-consulting.de, phone: +49 176 32428387.",
    "privacy.contact": "If you contact us by email, we process the information you provide only to handle your inquiry, prepare a conversation and communicate about KompetenzWandel KI+.",
    "privacy.localStorage": "The language selection is stored locally in your browser so that the page can open in your chosen language on your next visit. No tracking cookie is set.",
    "privacy.external": "This preview version uses external fonts and image sources. For productive operation, providers, purposes, legal bases and possible third-country transfers should be documented in the final privacy policy, or the media should be hosted locally.",
    "privacy.rights": "Under the GDPR, data subjects have rights including access, rectification, erasure, restriction, data portability and objection. Consent can be withdrawn with future effect."
  },
  es: {
    "nav.home": "Página principal",
    "nav.offer": "Servicio",
    "nav.modules": "Módulos",
    "nav.implementation": "Implementación",
    "nav.practiceImpact": "Práctica e impacto",
    "nav.impact": "Impacto",
    "nav.practice": "Práctica",
    "nav.quality": "Financiación",
    "nav.about": "Sobre nosotros",
    "nav.profile": "Perfil",
    "nav.contact": "Contacto",
    "nav.notice": "Notas",
    "hero.eyebrow": "Un servicio de GSS Management Consulting",
    "hero.title": "KompetenzWandel <span>KI+</span>",
    "hero.lead": "Upgrade en vez de empezar de cero.",
    "hero.text": "Un modelo de innovación desde Frankfurt para el upgrade de competencias apoyado por IA: biografías profesionales migrantes e internacionales, así como otras transiciones profesionales, se hacen visibles y se desarrollan con digitalización, IA, lenguaje profesional y conocimiento del mercado laboral hacia competencias de futuro.",
    "hero.subtext": "En el centro está la sustancia profesional existente: experiencia, conocimientos y competencias que se vuelven conectables con formación continua, especialización, empleo o autoempleo.",
    "hero.primary": "Solicitar primera conversación gratuita",
    "hero.secondary": "Ver módulos",
    "hero.badge2": "Certificación AZAV",
    "status.ribbon": "Servicio en preparación",
    "status.finalPhase": "en fase final",
    "trust.modules": "Módulos",
    "trust.path": "UE programa",
    "trust.ai": "upgrade de competencias",
    "trust.note": "Programa de 80 UE: Escaneo de Competencias, BasisPass Digitalización e IA y Perfil Práctico y Ruta de Cambio conectan detección de competencias, cualificación base, visibilidad profesional y asesoría de financiación.",
    "intro.eyebrow": "La sustancia profesional como punto de partida.",
    "intro.title": "La sustancia profesional se convierte en competencias de futuro.",
    "intro.p1": "KompetenzWandel KI+ está concebido como una ruta modular de transformación orientada al mercado laboral. El servicio hace visible la sustancia profesional existente: experiencia, conocimientos, competencias, cualificaciones, habilidades digitales y potencial de desarrollo.",
    "intro.ctaFunding": "Ver financiación",
    "intro.p2": "La sustancia profesional existente se recoge de forma estructurada, se traduce en campos de competencia profesional y se conecta con digitalización, fundamentos de IA, lenguaje profesional, integración laboral con orientación FairWelcome y conocimiento del mercado laboral.",
    "intro.p3": "Así surge orientación: ¿qué competencias ya pueden utilizarse? ¿Qué base digital, lingüística o técnica debería complementarse? ¿Y qué siguiente conexión encaja: formación continua, especialización, empleo o un autoempleo adecuado?",
    "intro.p4": "Competencias de futuro no significa solo tecnología. También significa capacidad de aprendizaje, resiliencia, trabajo sostenible, soberanía digital y capacidad de transferir el conocimiento profesional existente hacia transformación profesional.",
    "modules.eyebrow": "Estructura del servicio",
    "modules.title": "Tres módulos: reconocer, habilitar y hacer profesionalmente efectivo.",
    "modules.text": "Los tres módulos convierten la sustancia profesional existente en un siguiente paso concreto: visible, conectable digitalmente y profesionalmente efectivo.",
    "m1.title": "Escaneo de Competencias",
    "m1.text": "El Escaneo de Competencias hace visible qué experiencia, conocimientos y competencias ya pueden utilizarse, qué partes están reconocidas, son transferibles o desarrollables, y cuál es el siguiente acceso profesional realista.",
    "m1.li1": "perfil de competencias",
    "m1.li2": "fortalezas y brechas de desarrollo",
    "m1.li3": "primeros pasos de cualificación y práctica",
    "m1.duration": "Estándar: 2 semanas / 8 UE.",
    "m2.title": "BasisPass Digitalización e IA",
    "m2.text": "El BasisPass crea una base común en digitalización, IA, protección de datos, investigación, documentación, comunicación, automarketing, estrategias modernas de candidatura y uso de herramientas según el contexto profesional.",
    "m2.li1": "pase de digitalización",
    "m2.li2": "pase de fundamentos de IA",
    "m2.li3": "aplicación responsable",
    "m2.duration": "Estándar: 4 semanas / 32 UE; marco: 3-5 semanas / 24-40 UE.",
    "m3.title": "Perfil Práctico y Ruta de Cambio",
    "m3.text": "El Perfil Práctico traduce el escaneo y el BasisPass en una ruta concreta de cambio: perfil breve, portafolio o muestra de trabajo, tareas prácticas y conexión con formación continua, especialización, empleo o autoempleo. Así se prepara de forma práctica la transformación profesional.",
    "m3.li1": "perfil profesional breve",
    "m3.li2": "formatos de práctica y funciones puente",
    "m3.li3": "ruta de formación y especialización",
    "m3.duration": "Estándar: 10 semanas / 40 UE; marco: 8-12 semanas / 32-48 UE.",
    "modules.more": "Ver más e inscribirse",
    "modules.prev": "Módulo anterior",
    "modules.next": "Siguiente módulo",
    "modules.measureNote": "Programa de 80 UE: Escaneo de Competencias, BasisPass Digitalización e IA y Perfil Práctico y Ruta de Cambio conectan detección de competencias, cualificación base, visibilidad profesional y asesoría de financiación.",
    "azav.eyebrow": "Financiación y calidad",
    "azav.title": "Certificación AZAV: calidad, financiación y rutas de conexión.",
    "azav.text": "GSS desarrolla KompetenzWandel KI+ dentro de un marco estructurado de calidad y financiación. La certificación AZAV fortalece transparencia, documentación, aseguramiento de calidad y relevancia para el mercado laboral.",
    "azav.text2": "El foco está en la adecuación individual, pasos de desarrollo trazables y rutas realistas hacia cualificación, integración profesional, especialización o autoempleo.",
    "azav.note": "La posibilidad de financiación, el acceso mediante AVGS o Bildungsgutschein y los requisitos individuales se revisan en la primera conversación. Una financiación concreta depende de autorización válida, medida adecuada y decisión del organismo financiador competente.",
    "azav.cta": "Asesoría de financiación",
    "azav.activationTitle": "Activación e integración profesional",
    "azav.activationText": "Conectable con detección de competencias, orientación profesional, coaching, estrategia moderna de candidatura, acompañamiento de integración y rutas hacia empleo o autoempleo adecuado.",
    "azav.trainingTitle": "Formación profesional continua",
    "azav.trainingText": "Conectable con cualificación continua en digitalización, fundamentos de IA, aplicación específica por profesión, lenguaje profesional, documentación, trabajo por proyectos y competencia de transformación.",
    "implementation.eyebrow": "Implementación",
    "path.eyebrow": "Puente hacia la práctica",
    "path.title": "Usar competencias mientras continúan reconocimiento, formación continua o especialización.",
    "path.s1": "Registrar competencias, revisar puntos de conexión y respetar límites legales sensibles.",
    "path.s2": "Construir una base común en digitalización e IA: pase de digitalización y pase de fundamentos de IA.",
    "path.s3": "Preparar formatos prácticos como proyectos, hospitaciones, prácticas o laboratorios de práctica.",
    "path.s4": "Conectar formación, especialización y práctica en una ruta realista de evolución.",
    "path.summary": "Después de una entrada común, KompetenzWandel KI+ muestra qué experiencias, conocimientos y competencias ya pueden utilizarse, qué base digital, lingüística o profesional conviene complementar y qué siguiente conexión encaja: tareas prácticas, trabajo por proyectos, hospitación, formación continua, especialización, empleo o autoempleo adecuado.",
    "path.summary2": "Así surge una transición estructurada: el saber hacer existente se hace visible, se prueba y se traduce paso a paso en efectividad profesional.",
    "path.more": "Ver Wandelpfad",
    "profile.eyebrow": "Perfil de la fundadora",
    "profile.title": "De un cambio vivido nace un método.",
    "profile.p1": "Geraldine Sepúlveda Santana, titular de GSS Management Consulting, desarrolla KompetenzWandel KI+ desde su propia experiencia y desde una perspectiva profesional.",
    "profile.p2": "Aporta un título universitario internacional como Ingeniera de Sistemas y Computación, experiencia como analista y programadora, una evaluación ZAB de su título, formaciones complementarias y un año de reconversión formativa hacia desarrollo de aplicaciones. Su propio camino pasó por procesos de reconocimiento y evaluación, formación continua, transiciones profesionales y trabajo autónomo hasta su actividad actual como consultora, coach, docente y mediadora lingüística y cultural.",
    "profile.p3": "Yo misma he vivido cuánta sustancia profesional puede quedar invisible en las transiciones. Por eso desarrollo KompetenzWandel KI+ como upgrade en vez de empezar de cero: un modelo que hace visibles la experiencia, los conocimientos y las competencias existentes, y las traduce en competencias de futuro.",
    "profile.team": "El equipo central está formado por Geraldine Sepúlveda Santana (CEO / dirección) y Klaus Schmidt (COO / dirección operativa). Juntos conectan creación de empresa, implementación operativa, consultoría, trabajo de integración y gestión de procesos.",
    "impact.eyebrow": "Impacto",
    "impact.title": "Mundos profesionales con hogar en Frankfurt.",
    "impact.text": "Frankfurt es un lugar de biografías profesionales diversas, migrantes e internacionales. KompetenzWandel KI+ hace visible la sustancia profesional existente en el contexto local, la conecta digitalmente y la vuelve útil en la práctica.",
    "impact.duoTitle": "El potencial existente se convierte en ventaja para la ciudad.",
    "impact.duoP1": "Frankfurt necesita personal cualificado, las empresas necesitan competencias de futuro, y muchas personas aportan sustancia profesional que primero debe hacerse visible y conectable durante transiciones, procesos de reconocimiento o nuevos contextos profesionales.",
    "impact.duoP2": "KompetenzWandel KI+ hace utilizable ese potencial a nivel local: mediante detección de competencias, bases digitales y de IA, lenguaje profesional, conocimiento del mercado laboral y rutas prácticas de conexión.",
    "impact.duoP3": "El impacto no está solo en una orientación más rápida, sino también en resiliencia, desarrollo sostenible de competencias y transformación profesional.",
    "impact.i1t": "Para participantes",
    "impact.i1": "La experiencia, los conocimientos y las competencias existentes se hacen visibles, se fortalecen digitalmente y se traducen en próximos pasos realistas: formación continua, especialización, empleo, formatos prácticos o autoempleo.",
    "impact.i2t": "Para empresas",
    "impact.i2": "Las empresas obtienen mejor acceso a personas con experiencia internacional, potencial técnico y competencia digital en crecimiento. Los perfiles de competencias, tareas prácticas y rutas claras facilitan orientación y colaboración.",
    "impact.i3t": "Para Frankfurt",
    "impact.i3": "El modelo aprovecha potencial cualificado ya existente en el territorio, fortalece integración profesional y conecta participación social con innovación, digitalización y desarrollo laboral sostenible.",
    "contact.eyebrow": "Interés y acceso",
    "contact.title": "¿Interés en KompetenzWandel KI+?",
    "contact.text": "Para una primera conversación, asesoría sobre financiación o una reserva de participación, puedes contactar directamente.",
    "contact.panelTitle": "Primera conversación gratuita",
    "contact.panelText": "Envía un mensaje breve indicando si te interesa como participante, empresa o contacto de cooperación. En la primera conversación gratuita revisamos la situación inicial, los próximos pasos adecuados y posibles accesos mediante financiación (AVGS o Bildungsgutschein) o pago propio.",
    "contact.emailLabel": "Correo directo:",
    "contact.emailCta": "Enviar correo",
    "contact.phoneLabel": "Teléfono:",
    "contact.primary": "Directo por WhatsApp",
    "contact.secondary": "Abrir sitio web de GSS",
    "contact.note": "La implementación está en preparación. Las primeras conversaciones, reservas de participación y asesorías de financiación ya son posibles.",
    "legal.eyebrow": "Notas",
    "legal.title": "Marco claro. Transformación segura.",
    "legal.text": "KompetenzWandel KI+ trabaja con sustancia profesional, biografías profesionales, perfiles de competencias y procesos apoyados por IA. Para generar confianza, la protección de datos, los límites del reconocimiento y el uso responsable de IA se nombran con claridad y forman parte del método desde el inicio.",
    "legal.pill1": "Protección de datos",
    "legal.pill2": "Marco de reconocimiento",
    "legal.pill3": "Responsabilidad en IA",
    "legal.card1t": "Proteger biografías",
    "legal.card1": "No se solicitan documentos sensibles a través de la landing page. Para asesoría y participación se usan avisos, consentimientos y procesos transparentes por separado.",
    "legal.card2t": "Ordenar el reconocimiento",
    "legal.card2": "El servicio acompaña la visibilidad de competencias, la transferencia y la cualificación. El reconocimiento formal, la asesoría jurídica y las decisiones oficiales siguen siendo procedimientos separados.",
    "legal.card3t": "Usar IA con transparencia",
    "legal.card3": "La IA apoya investigación, estructuración, reflexión y muestras de trabajo. La verificación de fuentes, la protección de datos, la transparencia y la decisión humana siguen siendo obligatorias.",
    "legal.l1t": "Entidad responsable y estado del servicio",
    "legal.l1": "KompetenzWandel KI+ es un servicio de GSS Management Consulting y está en preparación. Los contenidos, la duración y los formatos pueden precisarse antes de la publicación; el aviso legal y la protección de datos están en una página legal separada.",
    "legal.l2t": "Protección de datos",
    "legal.l2": "Las solicitudes de contacto se utilizan solo para responder al asunto planteado. En esta landing page no se solicitan documentos sensibles; para asesoría o participación se facilitarán avisos y consentimientos separados.",
    "legal.l3t": "Reconocimiento y marco legal",
    "legal.l3": "El servicio no sustituye el reconocimiento profesional, la asesoría jurídica ni decisiones de autoridades. Apoya a las personas participantes a hacer visibles sus competencias existentes y a planificar pasos permitidos de práctica y cualificación.",
    "legal.l4t": "Responsabilidad en IA",
    "legal.l4": "La IA se usa como herramienta de aprendizaje, estructuración y apoyo al trabajo. Las personas participantes aprenden protección de datos, verificación de fuentes, transparencia y uso responsable en contextos profesionales.",
    "legal.noteTitle": "En breve",
    "legal.summary": "Las notas legales principales están separadas intencionalmente en una página propia, para que la landing page sea legible y la información sea fácil de encontrar.",
    "legal.legalCta": "Abrir información legal",
    "legal.privacyCta": "Leer protección de datos",
    "legalPage.eyebrow": "Información legal",
    "legalPage.title": "Aviso legal y protección de datos",
    "legalPage.text": "Esta página reúne los datos de la entidad responsable y la información sobre protección de datos de la página del proyecto KompetenzWandel KI+.",
    "legalPage.back": "Volver a la landing page",
    "footer.claim": "Claridad, estructura y desarrollo para el futuro digital.",
    "footer.offer": "KompetenzWandel KI+",
    "footer.access": "Acceso y financiación",
    "footer.freeCall": "Primera conversación gratuita",
    "footer.avgs": "Asesoría de financiación",
    "footer.voucher": "Revisar Bildungsgutschein",
    "footer.email": "info@gss-consulting.de",
    "footer.website": "Sitio web de GSS",
    "footer.imprint": "Aviso legal",
    "footer.privacy": "Protección de datos",
    "footer.linkedin": "LinkedIn",
    "footer.instagram": "Instagram",
    "footer.x": "X",
    "footer.social": "Síguenos",
    "legal.imprintLink": "Aviso legal",
    "legal.privacyLink": "Protección de datos",
    "search.button": "Buscar",
    "search.label": "Buscar en la landing page",
    "search.placeholder": "Buscar en la landing page",
    "search.hint": "Escribe una palabra para buscar.",
    "modulePage.main": "Volver a la página principal",
    "modulePage.back": "Volver a los módulos",
    "modulePage.eyebrow": "Módulo en detalle",
    "modulePage.primary": "Iniciar solicitud",
    "modulePage.funding": "Revisar marco de financiación",
    "modulePage.includes": "Qué incluye",
    "modulePage.duration": "Duración estimada",
    "modulePage.outcome": "Resultado",
    "modulePage.accessTitle": "Acceso y financiación",
    "form.eyebrow": "Inscripción y asesoría",
    "form.title": "Solicitar primera conversación, preinscripción o asesoría de financiación.",
    "form.text": "Completa los campos. Al enviar, se abre un correo preparado para GSS Management Consulting; la página no guarda datos.",
    "form.name": "Nombre",
    "form.email": "Correo electrónico",
    "form.role": "Me contacto como",
    "form.roleParticipant": "Persona participante",
    "form.roleCompany": "Empresa",
    "form.rolePartner": "Contacto de cooperación",
    "form.interest": "Solicitud",
    "form.optionCall": "Primera conversación gratuita",
    "form.optionRegister": "Preinscripción",
    "form.optionAvgs": "Canjear / revisar AVGS",
    "form.optionVoucher": "Revisar Bildungsgutschein",
    "form.optionFunding": "Solicitar asesoría de financiación",
    "form.message": "Descripción breve",
    "form.messagePlaceholder": "Situación inicial, perfil profesional, reconocimiento/ZAB, próximo paso deseado",
    "form.mailGreeting": "Hola GSS Management Consulting,",
    "form.mailInterested": "Me interesa:",
    "form.mailRequest": "Solicitud:",
    "form.mailName": "Nombre:",
    "form.mailEmail": "Correo electrónico:",
    "form.mailRole": "Rol:",
    "form.mailDescription": "Descripción breve:",
    "form.mailContact": "Por favor, contáctenme para una primera conversación.",
    "form.mailClosing": "Saludos cordiales",
    "form.submit": "Preparar correo",
    "form.note": "Nota: la financiación requiere autorizaciones válidas, medidas adecuadas y la decisión individual del organismo financiador.",
    "imprint.eyebrow": "Datos de la entidad responsable",
    "imprint.title": "Aviso legal",
    "imprint.provider": "<strong>GSS Management Consulting</strong><br>Titular: Geraldine Sepúlveda Santana<br>Hanauer Landstraße 521, oficinas 129-130, 1.er piso<br>60386 Frankfurt am Main<br>Alemania<br>NIF-IVA/USt-IdNr.: DE459498394",
    "imprint.emailLabel": "Correo electrónico:",
    "imprint.phoneLabel": "Teléfono:",
    "imprint.websiteLabel": "Sitio web:",
    "imprint.note": "Esta landing page es una página de proyecto sobre KompetenzWandel KI+ de GSS Management Consulting. El número de identificación de IVA fue emitido conforme al § 27a UStG; la Steuernummer no se publica.",
    "imprint.liability": "Los contenidos se elaboran con cuidado. No se puede garantizar su integridad, actualidad ni los contenidos de enlaces externos. Los textos, el diseño y los elementos de marca propios solo pueden utilizarse dentro del marco legal aplicable de derechos de autor y marcas.",
    "privacy.eyebrow": "Protección de datos",
    "privacy.title": "Información sobre protección de datos",
    "privacy.controller": "La entidad responsable de esta página de proyecto es GSS Management Consulting, Geraldine Sepúlveda Santana, Hanauer Landstraße 521, oficinas 129-130, 1.er piso, 60386 Frankfurt am Main. Contacto: info@gss-consulting.de, teléfono: +49 176 32428387.",
    "privacy.contact": "Si contactas por correo electrónico, procesamos los datos que nos envíes únicamente para responder tu solicitud, preparar una conversación y comunicarnos sobre KompetenzWandel KI+.",
    "privacy.localStorage": "La selección de idioma se guarda localmente en tu navegador para que la página pueda abrirse en el idioma elegido en la próxima visita. No se instala ninguna cookie de seguimiento.",
    "privacy.external": "Esta versión previa utiliza fuentes e imágenes externas. Para el funcionamiento productivo, los proveedores, fines, bases legales y posibles transferencias a terceros países deben documentarse en la política de privacidad final, o los medios deben alojarse localmente.",
    "privacy.rights": "De acuerdo con el RGPD, las personas afectadas tienen, entre otros, derechos de acceso, rectificación, supresión, limitación, portabilidad y oposición. Un consentimiento otorgado puede revocarse con efecto futuro."
  }
};

const moduleDetails = {
  de: {
    scan: {
      title: "KompetenzScan",
      kicker: "Berufliche Substanz sichtbar machen und neu anschlussfähig machen.",
      description: "Der KompetenzScan ordnet Studium, Berufserfahrung, Fachwissen, praktische Fähigkeiten, digitale Kompetenzen, Anerkennungsstatus und sofort nutzbare Kompetenzanteile. Daraus entsteht ein belastbares Zielprofil mit ersten Empfehlungen für Qualifizierung, Praxisformate und Anschlusswege.",
      duration: "Standard: 2 Wochen / 8 UE.",
      includes: [
        "strukturierte Kompetenzfeststellung mit beruflichem Kurzprofil",
        "Analyse von anerkannten, übertragbaren und entwickelbaren Kompetenzen",
        "Zielprofil, KompetenzWandel-Plan und erste Pfadentscheidung"
      ],
      outcome: "Ein klares Kompetenzprofil mit nächsten Schritten: welche Erfahrung, Kenntnisse und Kompetenzen bereits sichtbar gemacht werden können, welche Kompetenzen ergänzt werden sollten und welcher Anschlussweg realistisch ist.",
      access: "Im Erstgespräch wird geklärt, ob ein Zugang über Förderung (AVGS oder Bildungsgutschein) oder Selbstzahlung passend ist. Der Scan eignet sich als Einstieg in Beratung, berufliche Eingliederung oder weitere Qualifizierungsschritte.",
      visualClass: "detail-visual-scan"
    },
    basis: {
      title: "BasisPass Digitalisierung & KI",
      kicker: "Die gemeinsame Ausgangsbasis für das nächste berufliche Level.",
      description: "Der BasisPass schafft eine gemeinsame Grundlage in Digitalisierung, KI, Datenschutz, Recherche, Dokumentation, Kommunikation, Selbstmarketing, modernen Bewerbungsstrategien und berufsspezifischer Tool-Nutzung.",
      duration: "Standard: 4 Wochen / 32 UE. Rahmen: 3-5 Wochen / 24-40 UE.",
      includes: [
        "DigitalisierungsPass für sichere digitale Arbeitsprozesse",
        "KI-GrundlagenPass für verantwortungsvolle Anwendung im Beruf",
        "praxisnahe Übungen für Dokumentation, Recherche, Selbstmarketing, moderne Bewerbungsstrategien, Präsentation und Fachgespräche"
      ],
      outcome: "Teilnehmende starten nicht bei null, sondern mit einer vergleichbaren digitalen und KI-bezogenen Basis, auf der Spezialisierungen und Weiterbildung aufbauen können.",
      access: "Im Erstgespräch wird geklärt, ob ein Zugang über Förderung (AVGS oder Bildungsgutschein) oder Selbstzahlung passend ist. Der BasisPass kann an berufliche Weiterbildung, Bildungsgutschein-Prüfung und ergänzende Module anschließen.",
      visualClass: "detail-visual-basis"
    },
    praxis: {
      title: "PraxisProfil & Wandelpfad",
      kicker: "Aus Erfahrung, Wissen und Kompetenz wird ein konkreter Wandelpfad.",
      description: "Das PraxisProfil bündelt KompetenzScan und BasisPass zu einer beruflichen Transformation in konkreten Schritten: professionelles Kurzprofil, Portfolio oder Arbeitsprobe, Transferaufgaben, Praxisformate, Brückenfunktionen und passende Anschlusswege in Weiterbildung, Spezialisierung, Beschäftigung oder Gründung.",
      duration: "Standard: 10 Wochen / 40 UE. Rahmen: 8-12 Wochen / 32-48 UE.",
      includes: [
        "professionelles PraxisProfil, Portfolio oder Arbeitsprobe",
        "Brückenfunktionen, Projekte, Hospitationen, Praktika oder Praxislabore",
        "Transformationspfad mit Transferaufgaben, Weiterbildung, Spezialisierung und klarer Pfadentscheidung"
      ],
      outcome: "Ein handlungsfähiger Plan, der vorhandene Erfahrung, Wissen und Kompetenzen mit Praxis, Weiterbildung und beruflicher Sichtbarkeit verbindet.",
      access: "Im Erstgespräch wird geklärt, ob ein Zugang über Förderung (AVGS oder Bildungsgutschein) oder Selbstzahlung passend ist. Der Transformationspfad bereitet Transfer, Anschlussgespräche, Praxisformate oder weitere Qualifizierung vor.",
      visualClass: "detail-visual-praxis"
    }
  },
  en: {
    scan: {
      title: "Competence Scan",
      kicker: "Make professional substance visible and newly connectable.",
      description: "The Competence Scan organizes education, professional experience, specialist knowledge, practical skills, digital competencies, recognition status and immediately usable competence elements. The result is a reliable target profile with initial recommendations for qualification, practice formats and connection routes.",
      duration: "Standard: 2 weeks / 8 training units.",
      includes: [
        "structured competence assessment with a professional short profile",
        "analysis of recognized, transferable and developable competencies",
        "target profile, KompetenzWandel plan and first path decision"
      ],
      outcome: "A clear competence profile with next steps: which experience, knowledge and competencies can already be made visible, which competencies should be added and which connection route is realistic.",
      access: "The first consultation clarifies whether access through funding (AVGS or Bildungsgutschein) or self-payment is suitable. The scan is a starting point for consultation, professional integration or further qualification steps.",
      visualClass: "detail-visual-scan"
    },
    basis: {
      title: "BasisPass Digitalization & AI",
      kicker: "The shared starting base for the next professional level.",
      description: "The BasisPass creates a shared foundation in digitalization, AI, data protection, research, documentation, communication, self-marketing, modern application strategies and profession-specific tool use.",
      duration: "Standard: 4 weeks / 32 training units. Range: 3-5 weeks / 24-40 training units.",
      includes: [
        "Digitalization Pass for secure digital work processes",
        "AI Foundations Pass for responsible professional use",
        "practical exercises for documentation, research, self-marketing, modern application strategies, presentation and professional conversations"
      ],
      outcome: "Participants do not start from zero, but from a comparable digital and AI-related foundation that specializations and further training can build on.",
      access: "The first consultation clarifies whether access through funding (AVGS or Bildungsgutschein) or self-payment is suitable. The BasisPass can connect to further vocational training, Bildungsgutschein review and additional modules.",
      visualClass: "detail-visual-basis"
    },
    praxis: {
      title: "Practice Profile & Change Path",
      kicker: "Experience, knowledge and competence become a concrete change path.",
      description: "The Practice Profile combines the Competence Scan and BasisPass into professional transformation in concrete steps: professional short profile, portfolio or work sample, transfer tasks, practice formats, bridge functions and suitable connection routes into further training, specialization, employment or self-employment.",
      duration: "Standard: 10 weeks / 40 training units. Range: 8-12 weeks / 32-48 training units.",
      includes: [
        "professional practice profile, portfolio or work sample",
        "bridge functions, projects, shadowing, internships or practice labs",
        "transformation path with transfer tasks, further training, specialization and a clear path decision"
      ],
      outcome: "An actionable plan that connects existing experience, knowledge and competencies with practice, further training and professional visibility.",
      access: "The first consultation clarifies whether access through funding (AVGS or Bildungsgutschein) or self-payment is suitable. The transformation path prepares transfer, follow-up conversations, practice formats or further qualification.",
      visualClass: "detail-visual-praxis"
    }
  },
  es: {
    scan: {
      title: "Escaneo de Competencias",
      kicker: "Hacer visible la sustancia profesional y conectarla de nuevo.",
      description: "El Escaneo de Competencias ordena estudios, experiencia profesional, conocimientos técnicos, habilidades prácticas, competencias digitales, estado de reconocimiento y partes de competencia utilizables desde el inicio. El resultado es un perfil objetivo sólido con primeras recomendaciones para cualificación, formatos prácticos y rutas de conexión.",
      duration: "Estándar: 2 semanas / 8 UE.",
      includes: [
        "detección estructurada de competencias con perfil profesional breve",
        "análisis de competencias reconocidas, transferibles y desarrollables",
        "perfil objetivo, plan KompetenzWandel y primera decisión de ruta"
      ],
      outcome: "Un perfil claro de competencias con próximos pasos: qué experiencia, conocimientos y competencias ya pueden hacerse visibles, qué competencias conviene complementar y qué ruta de conexión profesional es realista.",
      access: "En la primera conversación revisamos si el acceso mediante financiación (AVGS o Bildungsgutschein) o pago propio es adecuado. El scan sirve como entrada para asesoría, integración profesional o nuevos pasos de cualificación.",
      visualClass: "detail-visual-scan"
    },
    basis: {
      title: "BasisPass Digitalización e IA",
      kicker: "La base común de partida para el siguiente nivel profesional.",
      description: "El BasisPass crea una base común en digitalización, IA, protección de datos, investigación, documentación, comunicación, automarketing, estrategias modernas de candidatura y uso de herramientas según el contexto profesional.",
      duration: "Estándar: 4 semanas / 32 UE. Marco: 3-5 semanas / 24-40 UE.",
      includes: [
        "DigitalisierungsPass para procesos digitales seguros",
        "KI-GrundlagenPass para uso profesional responsable",
        "ejercicios prácticos para documentación, investigación, automarketing, estrategias modernas de candidatura, presentación y conversaciones profesionales"
      ],
      outcome: "Las personas participantes no parten de cero, sino de una base digital y de IA comparable sobre la que pueden construirse especializaciones y formación continua.",
      access: "En la primera conversación revisamos si el acceso mediante financiación (AVGS o Bildungsgutschein) o pago propio es adecuado. El BasisPass puede conectarse con formación profesional continua, revisión de Bildungsgutschein y módulos complementarios.",
      visualClass: "detail-visual-basis"
    },
    praxis: {
      title: "Perfil Práctico y Ruta de Cambio",
      kicker: "Experiencia, conocimiento y competencia se convierten en una ruta concreta de cambio.",
      description: "El Perfil Práctico une el Escaneo de Competencias y el BasisPass en una transformación profesional con pasos concretos: perfil profesional breve, portafolio o muestra de trabajo, tareas de transferencia, formatos prácticos, funciones puente y rutas adecuadas hacia formación continua, especialización, empleo o autoempleo.",
      duration: "Estándar: 10 semanas / 40 UE. Marco: 8-12 semanas / 32-48 UE.",
      includes: [
        "perfil práctico, portafolio o muestra de trabajo",
        "funciones puente, proyectos, hospitaciones, prácticas o laboratorios de práctica",
        "ruta de transformación con tareas de transferencia, formación, especialización y decisión clara de ruta"
      ],
      outcome: "Un plan accionable que conecta experiencia, conocimientos y competencias existentes con práctica, formación continua y visibilidad profesional.",
      access: "En la primera conversación revisamos si el acceso mediante financiación (AVGS o Bildungsgutschein) o pago propio es adecuado. La ruta de transformación prepara transferencia, conversaciones de continuidad, formatos de práctica o cualificación adicional.",
      visualClass: "detail-visual-praxis"
    }
  }
};

function getModuleKey() {
  const requested = new URLSearchParams(window.location.search).get("mod");
  return ["scan", "basis", "praxis"].includes(requested) ? requested : "scan";
}

function renderModuleDetail(lang) {
  const page = document.querySelector(".module-page-main");
  if (!page) return;
  const key = getModuleKey();
  const detail = moduleDetails[lang][key] || moduleDetails.de.scan;
  const title = document.querySelector("#moduleTitle");
  const kicker = document.querySelector("#moduleKicker");
  const description = document.querySelector("#moduleDescription");
  const includes = document.querySelector("#moduleIncludes");
  const duration = document.querySelector("#moduleDuration");
  const outcome = document.querySelector("#moduleOutcome");
  const access = document.querySelector("#moduleAccess");
  const visual = document.querySelector("#moduleVisual");
  if (title) title.textContent = detail.title;
  if (kicker) kicker.textContent = detail.kicker;
  if (description) description.textContent = detail.description;
  if (duration) duration.textContent = detail.duration;
  if (includes) includes.innerHTML = detail.includes.map((item) => `<li>${item}</li>`).join("");
  if (outcome) outcome.textContent = detail.outcome;
  if (access) access.textContent = detail.access;
  if (visual) visual.className = `detail-visual ${detail.visualClass}`;
  document.title = `${detail.title} | KompetenzWandel KI+`;
}

function updateModuleCarouselDistance() {
  const track = document.querySelector("[data-carousel-track]");
  if (!track) return;
  const first = track.querySelector(".module-card:not(.module-card-clone)");
  const firstClone = track.querySelector(".module-card-clone");
  if (!first || !firstClone) return;
  const distance = firstClone.offsetLeft - first.offsetLeft;
  if (distance > 0) {
    track.style.setProperty("--module-loop-distance", `${distance}px`);
  }
}

function moduleCarouselMetrics(track) {
  const originals = Array.from(track.querySelectorAll(".module-card:not(.module-card-clone)"));
  const firstClone = track.querySelector(".module-card-clone");
  if (originals.length < 2 || !firstClone) return null;
  return {
    step: originals[1].offsetLeft - originals[0].offsetLeft,
    loopDistance: firstClone.offsetLeft - originals[0].offsetLeft
  };
}

function readCarouselOffset(track, loopDistance) {
  const transform = getComputedStyle(track).transform;
  if (!transform || transform === "none") return 0;
  const match = transform.match(/matrix\(([^)]+)\)/);
  if (!match) return 0;
  const values = match[1].split(",").map((value) => Number(value.trim()));
  const x = Number.isFinite(values[4]) ? values[4] : 0;
  return ((-x % loopDistance) + loopDistance) % loopDistance;
}

function parseAnimationSeconds(track) {
  const duration = (getComputedStyle(track).animationDuration || "").split(",")[0].trim();
  if (duration.endsWith("ms")) return Number.parseFloat(duration) / 1000;
  if (duration.endsWith("s")) return Number.parseFloat(duration);
  return Number.parseFloat(track.dataset.animationSeconds || "34") || 34;
}

let moduleCarouselResumeTimer;

function resumeModuleCarousel(track, offset, loopDistance) {
  const duration = Number(track.dataset.animationSeconds || "34") || 34;
  const progress = loopDistance ? offset / loopDistance : 0;
  track.style.animationDelay = `${-progress * duration}s`;
  track.classList.remove("module-carousel-manual");
  track.style.transition = "";
  track.style.transform = "";
}

function moveModuleCarousel(direction) {
  const track = document.querySelector("[data-carousel-track]");
  if (!track) return;
  const metrics = moduleCarouselMetrics(track);
  if (!metrics || metrics.step <= 0 || metrics.loopDistance <= 0) return;
  const duration = parseAnimationSeconds(track);
  track.dataset.animationSeconds = String(duration || 34);
  const current = readCarouselOffset(track, metrics.loopDistance);
  const next = ((current + direction * metrics.step) % metrics.loopDistance + metrics.loopDistance) % metrics.loopDistance;
  window.clearTimeout(moduleCarouselResumeTimer);
  track.classList.add("module-carousel-manual");
  track.style.transition = "transform .62s cubic-bezier(.22, .72, .18, 1)";
  track.style.transform = `translateX(${-next}px)`;
  moduleCarouselResumeTimer = window.setTimeout(() => {
    resumeModuleCarousel(track, next, metrics.loopDistance);
  }, 5200);
}

function setupModuleCarousel() {
  const track = document.querySelector("[data-carousel-track]");
  if (!track) return;
  track.querySelectorAll(".module-card-clone").forEach((card) => card.remove());
  const originals = Array.from(track.querySelectorAll(".module-card"));
  originals.forEach((card) => {
    const clone = card.cloneNode(true);
    clone.classList.add("module-card-clone");
    clone.setAttribute("aria-hidden", "true");
    clone.querySelectorAll("a, button").forEach((element) => {
      element.setAttribute("tabindex", "-1");
    });
    track.appendChild(clone);
  });
  window.requestAnimationFrame(updateModuleCarouselDistance);
}

function applyLanguage(lang) {
  const active = ["de", "en", "es"].includes(lang) ? lang : "de";
  const dict = translations[active];
  document.documentElement.lang = active;
  localStorage.setItem("gss-kwki-language", active);
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = dict[element.dataset.i18n];
    if (value) element.innerHTML = value;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const value = dict[element.dataset.i18nPlaceholder];
    if (value) element.setAttribute("placeholder", value);
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const value = dict[element.dataset.i18nAriaLabel];
    if (value) element.setAttribute("aria-label", value);
  });
  document.querySelectorAll(".lang").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === active);
  });
  renderModuleDetail(active);
  setupModuleCarousel();
  const titles = {
    de: "KompetenzWandel KI+ | KI-gestütztes Kompetenz-Upgrade in Frankfurt",
    en: "KompetenzWandel KI+ | AI-supported competence upgrade in Frankfurt",
    es: "KompetenzWandel KI+ | Upgrade de competencias con IA en Frankfurt"
  };
  const moduleTitles = {
    de: "Module | KompetenzWandel KI+ | KompetenzScan, BasisPass und Wandelpfad",
    en: "Modules | KompetenzWandel KI+ | Competence Scan, BasisPass and Change Path",
    es: "Módulos | KompetenzWandel KI+ | Escaneo, BasisPass y ruta de cambio"
  };
  const legalTitles = {
    de: "Impressum & Datenschutz | KompetenzWandel KI+ | GSS Management Consulting",
    en: "Legal Notice & Privacy | KompetenzWandel KI+ | GSS Management Consulting",
    es: "Aviso legal y protección de datos | KompetenzWandel KI+ | GSS Management Consulting"
  };
  const versionTitles = {
    de: "Versionen | KompetenzWandel KI+",
    en: "Versions | KompetenzWandel KI+",
    es: "Versiones | KompetenzWandel KI+"
  };
  if (window.location.pathname.endsWith("legal.html")) {
    document.title = legalTitles[active];
  } else if (window.location.pathname.endsWith("versionen.html")) {
    document.title = versionTitles[active];
  } else if (document.querySelector(".module-page-main")) {
    document.title = moduleTitles[active];
  } else if (!document.querySelector(".module-page-main")) {
    document.title = titles[active];
  }
}

const requestedLanguage = new URLSearchParams(window.location.search).get("lang");
const savedLanguage = localStorage.getItem("gss-kwki-language");
applyLanguage(requestedLanguage || savedLanguage || "de");

function resetModulePageScroll() {
  if (!document.querySelector(".module-page-main") || window.location.hash) return;
  window.requestAnimationFrame(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  });
}

resetModulePageScroll();
window.addEventListener("pageshow", resetModulePageScroll);

document.querySelectorAll(".lang").forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

document.querySelectorAll("[data-carousel-control]").forEach((button) => {
  button.addEventListener("click", () => {
    const direction = button.dataset.carouselControl === "prev" ? -1 : 1;
    moveModuleCarousel(direction);
  });
});

function headerOffset() {
  const header = document.querySelector(".site-header");
  return Math.ceil((header?.getBoundingClientRect().height || 0) + 12);
}

function anchorOffset(id) {
  const base = headerOffset();
  if (id === "module") return base + 10;
  return ["qualitaet", "kontakt"].includes(id) ? base + 8 : base;
}

function anchorElement(id, target) {
  if (id === "module") return target.querySelector(".section-head") || target;
  if (id === "qualitaet") return target.querySelector(".azav-grid") || target;
  if (id === "kontakt") return target.querySelector(".contact-grid") || target;
  return target;
}

function samePageHash(href) {
  if (!href || !href.includes("#")) return "";
  const url = new URL(href, window.location.href);
  const current = new URL(window.location.href);
  const samePath = url.origin === current.origin && url.pathname === current.pathname;
  return samePath ? url.hash : "";
}

function scrollToHashTarget(hash, behavior = "auto") {
  if (!hash) return false;
  const id = decodeURIComponent(hash.slice(1));
  const target = document.getElementById(id);
  if (!target) return false;
  const scrollTarget = anchorElement(id, target);
  const y = window.scrollY + scrollTarget.getBoundingClientRect().top - anchorOffset(id);
  window.scrollTo({ top: Math.max(0, y), behavior });
  return true;
}

document.querySelectorAll('a[href*="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const hash = samePageHash(link.getAttribute("href"));
    if (!hash) return;
    if (!document.getElementById(decodeURIComponent(hash.slice(1)))) return;
    event.preventDefault();
    history.pushState(null, "", hash);
    scrollToHashTarget(hash, "smooth");
  });
});

document.querySelectorAll(".submenu a").forEach((link) => {
  link.addEventListener("click", () => {
    const group = link.closest(".nav-group");
    if (!group) return;
    group.classList.add("submenu-closing");
    link.blur();
    group.querySelector(".nav-parent")?.blur();
    const release = () => group.classList.remove("submenu-closing");
    group.addEventListener("mouseleave", release, { once: true });
    window.setTimeout(release, 2400);
  });
});

window.addEventListener("hashchange", () => {
  scrollToHashTarget(window.location.hash, "auto");
});

function settleHashScroll() {
  if (!window.location.hash) return;
  [0, 80, 250, 600].forEach((delay) => {
    window.setTimeout(() => scrollToHashTarget(window.location.hash, "auto"), delay);
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", settleHashScroll);
} else {
  settleHashScroll();
}

window.addEventListener("load", settleHashScroll);
window.addEventListener("resize", updateModuleCarouselDistance);

const SITE_SEARCH_INDEX = {
  de: [
    { title: "Startseite", text: "KompetenzWandel KI+ GSS Zukunftskompetenz Frankfurt", url: "index.html" },
    { title: "Leistung", text: "berufliche Substanz sichtbar machen Upgrade Zukunftskompetenz Kompetenzen", url: "index.html#angebot" },
    { title: "Module", text: "KompetenzScan BasisPass Digitalisierung KI PraxisProfil Wandelpfad moderne Bewerbungsstrategien", url: "index.html#module" },
    { title: "Umsetzung", text: "Impact Praxis Brücke Anerkennung Weiterbildung Frankfurt", url: "index.html#umsetzung" },
    { title: "Förderung", text: "AZAV § 45 SGB III AVGS Förderung Beschäftigung Gründung", url: "index.html#qualitaet" },
    { title: "Profil", text: "Gründerinnenprofil Geraldine Sepúlveda Santana Coaching Beratung Dozentin", url: "index.html#profil" },
    { title: "Kontakt", text: "Kostenloses Erstgespräch E-Mail Beratung Förderung", url: "index.html#kontakt" },
    { title: "KompetenzScan", text: "Kompetenzfeststellung Profil Stärken Qualifizierung Praxis", url: "modul.html?mod=scan" },
    { title: "BasisPass Digitalisierung & KI", text: "DigitalisierungsPass KI-GrundlagenPass Datenschutz Tools", url: "modul.html?mod=basis" },
    { title: "PraxisProfil & Wandelpfad", text: "Praxisformate Brückenfunktionen Spezialisierung Anschlussschritte Transformation", url: "modul.html?mod=praxis" },
    { title: "Rechtliches", text: "Impressum Datenschutz KI Verantwortung Anerkennung", url: "legal.html" }
  ],
  en: [
    { title: "Home", text: "KompetenzWandel KI+ GSS future-ready competence Frankfurt", url: "index.html" },
    { title: "Service", text: "make professional substance visible upgrade future-ready competence competencies", url: "index.html#angebot" },
    { title: "Modules", text: "Competence Scan BasisPass Digitalization AI Practice Profile Change Path modern application strategies", url: "index.html#module" },
    { title: "Implementation", text: "impact practice bridge recognition training Frankfurt", url: "index.html#umsetzung" },
    { title: "Funding", text: "AZAV § 45 SGB III AVGS funding employment self-employment", url: "index.html#qualitaet" },
    { title: "Profile", text: "founder Geraldine Sepúlveda Santana coaching consulting lecturer", url: "index.html#profil" },
    { title: "Contact", text: "free first consultation email funding consultation", url: "index.html#kontakt" },
    { title: "Competence Scan", text: "competence assessment profile strengths qualification practice", url: "modul.html?mod=scan" },
    { title: "BasisPass Digitalization & AI", text: "Digitalization Pass AI Foundations data protection tools modern application strategies", url: "modul.html?mod=basis" },
    { title: "Practice Profile & Change Path", text: "practice formats bridge functions specialization transformation next steps", url: "modul.html?mod=praxis" },
    { title: "Legal information", text: "legal notice privacy AI responsibility recognition", url: "legal.html" }
  ],
  es: [
    { title: "Página principal", text: "KompetenzWandel KI+ GSS competencias de futuro Frankfurt", url: "index.html" },
    { title: "Servicio", text: "hacer visible sustancia profesional upgrade competencias de futuro", url: "index.html#angebot" },
    { title: "Módulos", text: "Escaneo Competencias BasisPass digitalización IA Perfil Práctico ruta cambio estrategias modernas candidatura", url: "index.html#module" },
    { title: "Implementación", text: "impacto práctica puente reconocimiento formación Frankfurt", url: "index.html#umsetzung" },
    { title: "Financiación", text: "AZAV § 45 SGB III AVGS financiación empleo autoempleo", url: "index.html#qualitaet" },
    { title: "Perfil", text: "fundadora Geraldine Sepúlveda Santana coaching consultora docente", url: "index.html#profil" },
    { title: "Contacto", text: "primera conversación gratuita correo asesoría financiación", url: "index.html#kontakt" },
    { title: "Escaneo de Competencias", text: "detección competencias perfil fortalezas cualificación práctica", url: "modul.html?mod=scan" },
    { title: "BasisPass Digitalización e IA", text: "pase digitalización fundamentos IA protección datos herramientas estrategias modernas candidatura", url: "modul.html?mod=basis" },
    { title: "Perfil Práctico y Ruta de Cambio", text: "formatos práctica funciones puente especialización transformación próximos pasos", url: "modul.html?mod=praxis" },
    { title: "Información legal", text: "aviso legal protección datos responsabilidad IA reconocimiento", url: "legal.html" }
  ]
};

function normalizeText(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ß/g, "ss");
}

function getActiveLang() {
  return ["de", "en", "es"].includes(document.documentElement.lang) ? document.documentElement.lang : "de";
}

function searchLabels() {
  return {
    de: { hint: "Suchbegriff eingeben.", empty: "Keine Ergebnisse gefunden.", section: "Bereich" },
    en: { hint: "Enter a search term.", empty: "No results found.", section: "Area" },
    es: { hint: "Escribe una palabra para buscar.", empty: "No se encontraron resultados.", section: "Área" }
  }[getActiveLang()];
}

function renderSearchResults(root, query) {
  const results = root.querySelector(".search-results");
  if (!results) return;
  const labels = searchLabels();
  const q = normalizeText(query).trim();
  if (q.length < 2) {
    results.innerHTML = `<p>${labels.hint}</p>`;
    return;
  }
  const words = q.split(/\s+/).filter(Boolean);
  const found = (SITE_SEARCH_INDEX[getActiveLang()] || SITE_SEARCH_INDEX.de)
    .map((item) => {
      const haystack = normalizeText(`${item.title} ${item.text}`);
      const score = words.reduce((sum, word) => sum + (haystack.includes(word) ? 1 : 0), 0);
      return { ...item, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8);
  if (!found.length) {
    results.innerHTML = `<p>${labels.empty}</p>`;
    return;
  }
  results.innerHTML = found.map((item) => `<a class="search-result" role="option" href="${item.url}"><strong>${item.title}</strong><span>${labels.section}: ${item.text.split(" ").slice(0, 8).join(" ")}...</span></a>`).join("");
}

function setupSiteSearch() {
  document.querySelectorAll(".site-search").forEach((root) => {
    const toggle = root.querySelector(".search-toggle");
    const panel = root.querySelector(".search-panel");
    const input = root.querySelector(".site-search-input");
    const form = root.querySelector(".site-search-form");
    if (!toggle || !panel || !input || !form) return;
    toggle.addEventListener("click", () => {
      const open = panel.hasAttribute("hidden");
      document.querySelectorAll(".search-panel").forEach((item) => item.setAttribute("hidden", ""));
      document.querySelectorAll(".search-toggle").forEach((button) => button.setAttribute("aria-expanded", "false"));
      if (open) {
        panel.removeAttribute("hidden");
        toggle.setAttribute("aria-expanded", "true");
        input.focus();
        renderSearchResults(root, input.value);
      }
    });
    input.addEventListener("input", () => renderSearchResults(root, input.value));
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const first = root.querySelector(".search-result");
      if (first) window.location.href = first.getAttribute("href");
      else renderSearchResults(root, input.value);
    });
    document.addEventListener("click", (event) => {
      if (!root.contains(event.target)) {
        panel.setAttribute("hidden", "");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  });
}

setupSiteSearch();

document.querySelectorAll("[data-social]").forEach((link) => {
  const url = SOCIAL_URLS[link.dataset.social];
  if (url) {
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener";
  } else {
    link.addEventListener("click", (event) => {
      event.preventDefault();
    });
  }
});

document.querySelectorAll("[data-contact='whatsapp']").forEach((link) => {
  if (WHATSAPP_URL) {
    link.href = WHATSAPP_URL;
    link.target = "_blank";
    link.rel = "noopener";
  } else {
    link.setAttribute("aria-disabled", "true");
    link.title = "WhatsApp-Link wird nach Freigabe der Nummer aktiviert.";
    link.addEventListener("click", (event) => event.preventDefault());
  }
});

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const moduleForm = document.querySelector("#moduleForm");
if (moduleForm) {
  moduleForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const lang = document.documentElement.lang || "de";
    const detail = moduleDetails[lang][getModuleKey()] || moduleDetails.de.scan;
    const name = document.querySelector("#formName")?.value.trim() || "";
    const email = document.querySelector("#formEmail")?.value.trim() || "";
    const role = document.querySelector("#formRole")?.selectedOptions[0]?.textContent.trim() || "";
    const interest = document.querySelector("#formInterest")?.selectedOptions[0]?.textContent.trim() || "";
    const message = document.querySelector("#formMessage")?.value.trim() || "";
    const dict = translations[lang] || translations.de;
    const subject = `KompetenzWandel KI+ - ${detail.title} - ${interest}`;
    const body = [
      dict["form.mailGreeting"],
      "",
      `${dict["form.mailInterested"]} ${detail.title}`,
      `${dict["form.mailRequest"]} ${interest}`,
      `${dict["form.mailName"]} ${name}`,
      `${dict["form.mailEmail"]} ${email}`,
      `${dict["form.mailRole"]} ${role}`,
      "",
      dict["form.mailDescription"],
      message,
      "",
      dict["form.mailContact"],
      "",
      dict["form.mailClosing"]
    ].join("\n");
    window.location.href = `mailto:info@gss-consulting.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
