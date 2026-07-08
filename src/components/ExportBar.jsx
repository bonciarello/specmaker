import { useCallback } from 'react';
import { generateMarkdown as generateMd } from '../utils/generateMarkdown';

export default function ExportBar({ template, fields }) {
  const handleDownloadMd = useCallback(() => {
    const md = generateMd(template, fields);
    const slug = (fields.objective || 'specifica')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
      .slice(0, 60) || 'specifica';
    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${slug}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [template, fields]);

  const handlePrintPdf = useCallback(() => {
    window.print();
  }, []);

  return (
    <div className="export-bar">
      <button
        type="button"
        className="btn btn--primary"
        onClick={handleDownloadMd}
        aria-label="Scarica la specifica in formato Markdown"
      >
        <span className="btn__icon" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
        </span>
        Scarica Markdown
      </button>
      <button
        type="button"
        className="btn btn--secondary"
        onClick={handlePrintPdf}
        aria-label="Stampa la specifica o salvala come PDF dal browser"
      >
        <span className="btn__icon" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 6 2 18 2 18 9"/>
            <path d="M6 12H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2"/>
            <rect x="6" y="14" width="12" height="8"/>
          </svg>
        </span>
        Stampa / Salva PDF
      </button>
    </div>
  );
}
