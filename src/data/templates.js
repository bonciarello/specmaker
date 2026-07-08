export const templates = [
  {
    id: 'mobile-app',
    name: 'App Mobile',
    icon: 'smartphone',
    description: 'Specifica per un\'app nativa iOS o Android, con focus su flussi utente, schermate e permessi.',
    fields: {
      objective: {
        label: 'Obiettivo',
        hint: 'Quale problema risolve l\'app? In una frase.',
        placeholder: 'es. Permettere ai liberi professionisti di tracciare ore e generare fatture dal telefono',
        defaultValue: '',
      },
      users: {
        label: 'Utenti target',
        hint: 'Chi userà l\'app? Descrivi i profili tipo.',
        placeholder: 'es. Liberi professionisti 25–45 anni, abituati a strumenti digitali, con partita IVA',
        defaultValue: '',
      },
      functionality: {
        label: 'Funzionalità principali',
        hint: 'Elenca le funzionalità essenziali, una per riga.',
        placeholder: 'es.\n- Registrazione con email o account Google\n- Timer giornaliero per progetto\n- Generazione fattura in PDF\n- Dashboard con ore mensili',
        defaultValue: '',
      },
      constraints: {
        label: 'Vincoli tecnici',
        hint: 'Piattaforme, accessibilità, performance, normative.',
        placeholder: 'es.\n- iOS 15+ e Android 12+\n- Supporto offline con sync\n- Conforme GDPR per dati fatturazione\n- Lingua: italiano e inglese',
        defaultValue: '',
      },
    },
  },
  {
    id: 'website',
    name: 'Sito Web',
    icon: 'globe',
    description: 'Specifica per un sito vetrina, landing page o portale informativo, inclusivo di SEO e accessibilità.',
    fields: {
      objective: {
        label: 'Obiettivo',
        hint: 'Cosa deve ottenere il sito? Conversione, informazione, raccolta contatti?',
        placeholder: 'es. Presentare lo studio legale e convertire visitatori in richieste di consulenza',
        defaultValue: '',
      },
      users: {
        label: 'Utenti target',
        hint: 'Chi sono i visitatori tipo? Età, contesto, dispositivo.',
        placeholder: 'es. Privati e piccole imprese che cercano assistenza legale, prevalentemente da mobile',
        defaultValue: '',
      },
      functionality: {
        label: 'Funzionalità principali',
        hint: 'Sezioni, interazioni, integrazioni richieste.',
        placeholder: 'es.\n- Home con hero e aree di pratica\n- Pagina team con bio\n- Form contatti con invio email\n- Blog con articoli\n- Mappa interattiva sedi',
        defaultValue: '',
      },
      constraints: {
        label: 'Vincoli tecnici',
        hint: 'Browser, performance, hosting, accessibilità.',
        placeholder: 'es.\n- Responsive mobile-first\n- Punteggio Lighthouse > 90\n- Hosting su Netlify\n- Accessibilità WCAG 2.1 AA\n- Cookie banner GDPR',
        defaultValue: '',
      },
    },
  },
  {
    id: 'api-rest',
    name: 'API REST',
    icon: 'server',
    description: 'Specifica per un\'API RESTful, con endpoint, autenticazione, formati dati e limiti di rate.',
    fields: {
      objective: {
        label: 'Obiettivo',
        hint: 'Quale servizio espone l\'API? A chi è destinata?',
        placeholder: 'es. Fornire dati meteo geolocalizzati ai partner per integrazione nei loro prodotti',
        defaultValue: '',
      },
      users: {
        label: 'Consumatori dell\'API',
        hint: 'Chi chiamerà gli endpoint? Sviluppatori interni, partner, pubblico?',
        placeholder: 'es. Sviluppatori di terze parti che integrano dati meteo in app mobile e siti web',
        defaultValue: '',
      },
      functionality: {
        label: 'Endpoint e risorse',
        hint: 'Elenca le risorse e le operazioni CRUD previste.',
        placeholder: 'es.\n- GET /v1/weather/current?lat=&lon= → meteo attuale\n- GET /v1/weather/forecast?lat=&lon=&days= → previsioni\n- GET /v1/alerts?region= → allerte meteo\n- POST /v1/subscriptions → iscrizione webhook',
        defaultValue: '',
      },
      constraints: {
        label: 'Vincoli tecnici',
        hint: 'Autenticazione, formati, rate limit, versionamento.',
        placeholder: 'es.\n- Autenticazione via API key in header X-API-Key\n- Rate limit: 100 req/min per key\n- Formato risposta JSON:API\n- Versionamento nell\'URL (/v1/)\n- Documentazione OpenAPI 3.0',
        defaultValue: '',
      },
    },
  },
  {
    id: 'batch-script',
    name: 'Script Batch',
    icon: 'terminal',
    description: 'Specifica per uno script automatizzato di elaborazione dati, ETL o utility da riga di comando.',
    fields: {
      objective: {
        label: 'Obiettivo',
        hint: 'Cosa deve fare lo script? Input, elaborazione, output.',
        placeholder: 'es. Leggere un CSV di transazioni bancarie, categorizzarle e produrre un report mensile in PDF',
        defaultValue: '',
      },
      users: {
        label: 'Utilizzatori',
        hint: 'Chi esegue lo script e in quale contesto.',
        placeholder: 'es. Team amministrativo, esecuzione schedulata ogni primo del mese su server interno',
        defaultValue: '',
      },
      functionality: {
        label: 'Passaggi di elaborazione',
        hint: 'Descrivi il flusso di lavoro, passo per passo.',
        placeholder: 'es.\n1. Legge il CSV dalla cartella condivisa\n2. Pulisce e normalizza i dati (date, importi)\n3. Categorizza con regole configurabili\n4. Genera PDF con grafici e tabelle\n5. Invia via email ai destinatari',
        defaultValue: '',
      },
      constraints: {
        label: 'Vincoli tecnici',
        hint: 'Linguaggio, dipendenze, compatibilità, errori.',
        placeholder: 'es.\n- Python 3.10+, solo librerie standard + pandas e fpdf2\n- Compatibile Windows e Linux\n- Log dettagliato su file\n- Gestione errori: saltare righe malformate, segnalare a fine esecuzione',
        defaultValue: '',
      },
    },
  },
];

export const templateIconMap = {
  smartphone: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
  globe: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  server: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
  terminal: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`,
};
