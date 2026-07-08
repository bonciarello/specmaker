export default function SpecForm({ template, fields, onUpdate, onReset }) {
  if (!template) return null;

  return (
    <div className="spec-form">
      <p className="template-desc">{template.description}</p>

      {Object.entries(template.fields).map(([key, def]) => (
        <div className="form-field" key={key}>
          <label className="form-field__label" htmlFor={`field-${key}`}>
            {def.label}
          </label>
          <span className="form-field__hint" id={`hint-${key}`}>{def.hint}</span>
          {key === 'functionality' || key === 'constraints' ? (
            <textarea
              id={`field-${key}`}
              className="form-field__input form-field__input--multi"
              value={fields[key] || ''}
              onChange={(e) => onUpdate(key, e.target.value)}
              placeholder={def.placeholder}
              aria-describedby={`hint-${key}`}
              rows={5}
            />
          ) : (
            <input
              id={`field-${key}`}
              type="text"
              className="form-field__input form-field__input--single"
              value={fields[key] || ''}
              onChange={(e) => onUpdate(key, e.target.value)}
              placeholder={def.placeholder}
              aria-describedby={`hint-${key}`}
            />
          )}
        </div>
      ))}

      <div className="form-actions">
        <button
          type="button"
          className="btn btn--danger"
          onClick={onReset}
          aria-label="Cancella tutti i campi e ripristina i valori predefiniti"
        >
          <span className="btn__icon" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
            </svg>
          </span>
          Cancella tutto
        </button>
      </div>
    </div>
  );
}
