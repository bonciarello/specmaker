import { templateIconMap } from '../data/templates';

export default function TemplateSelector({ templates, activeId, onSelect }) {
  return (
    <nav className="template-selector" aria-label="Seleziona un modello di specifica">
      {templates.map((t) => (
        <button
          key={t.id}
          className={`template-btn${t.id === activeId ? ' template-btn--active' : ''}`}
          onClick={() => onSelect(t.id)}
          aria-pressed={t.id === activeId}
          aria-label={`Modello ${t.name}: ${t.description}`}
        >
          <span
            className="template-btn__icon"
            aria-hidden="true"
            dangerouslySetInnerHTML={{ __html: templateIconMap[t.icon] }}
          />
          <span>{t.name}</span>
        </button>
      ))}
    </nav>
  );
}
