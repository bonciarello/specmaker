export function generateMarkdown(template, fields) {
  const { name, description } = template;
  const { objective, users, functionality, constraints } = fields;
  const now = new Date().toLocaleDateString('it-IT', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return `# Specifica Software: ${objective || '(senza titolo)'}

> **Modello:** ${name} — ${description}
> **Data:** ${now}

---

## 1. Obiettivo

${objective || '*Da compilare*'}

## 2. Utenti target

${users || '*Da compilare*'}

## 3. Funzionalità principali

${functionality || '*Da compilare*'}

## 4. Vincoli tecnici

${constraints || '*Da compilare*'}

---

*Specifica generata con [Costruttore di Specifiche Software](https://github.com/bonciarello/specmaker/)*
`;
}

export function generatePlainText(template, fields) {
  const { name, description } = template;
  const { objective, users, functionality, constraints } = fields;
  const now = new Date().toLocaleDateString('it-IT', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return `SPECIFICA SOFTWARE: ${objective || '(senza titolo)'}

Modello: ${name} — ${description}
Data: ${now}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. OBIETTIVO
${objective || '(da compilare)'}

2. UTENTI TARGET
${users || '(da compilare)'}

3. FUNZIONALITÀ PRINCIPALI
${functionality || '(da compilare)'}

4. VINCOLI TECNICI
${constraints || '(da compilare)'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Generata con Costruttore di Specifiche Software
https://github.com/bonciarello/specmaker/
`;
}
