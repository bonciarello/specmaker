import { useSpecState } from './hooks/useSpecState';
import Header from './components/Header';
import TemplateSelector from './components/TemplateSelector';
import SpecForm from './components/SpecForm';
import SpecPreview from './components/SpecPreview';
import ExportBar from './components/ExportBar';
import './App.css';

export default function App() {
  const {
    templates,
    activeTemplate,
    activeTemplateId,
    activeFields,
    markdown,
    selectTemplate,
    updateField,
    resetAll,
  } = useSpecState();

  return (
    <div className="app">
      <Header />

      <main className="app-main">
        {/* Editor Panel */}
        <section className="panel panel--editor" aria-labelledby="editor-title">
          <div className="panel__header">
            <p className="panel__eyebrow">Passo 1 &mdash; Scegli il modello</p>
            <TemplateSelector
              templates={templates}
              activeId={activeTemplateId}
              onSelect={selectTemplate}
            />
          </div>
          <div className="panel__body">
            <h2 id="editor-title" className="panel__title" style={{ marginBottom: 'var(--space-4)' }}>
              Compila i campi
            </h2>
            <SpecForm
              template={activeTemplate}
              fields={activeFields}
              onUpdate={updateField}
              onReset={resetAll}
            />
          </div>
        </section>

        {/* Preview Panel */}
        <section className="panel panel--preview" aria-labelledby="preview-title">
          <div className="panel__header">
            <p className="panel__eyebrow">Passo 2 &mdash; Rivedi ed esporta</p>
            <h2 id="preview-title" className="panel__title">
              Anteprima della specifica
            </h2>
          </div>
          <div className="panel__body">
            <SpecPreview
              markdown={markdown}
              templateName={activeTemplate?.name || ''}
            />
            <ExportBar
              template={activeTemplate}
              fields={activeFields}
            />
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <p>
          <strong>Costruttore di Specifiche Software</strong> &mdash; uno strumento
          gratuito per redigere specifiche tecniche da modelli pronti.{' '}
          <a href="https://github.com/bonciarello/specmaker/" rel="noopener noreferrer">
            github.com/bonciarello/specmaker
          </a>
        </p>
      </footer>
    </div>
  );
}
