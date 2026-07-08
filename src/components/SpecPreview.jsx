import { useMemo } from 'react';

function renderMarkdownToHtml(md) {
  let html = md
    // Headings
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    // Bold
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    // Code blocks
    .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
    // Inline code
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    // Blockquote
    .replace(/^> (.*)$/gm, '<blockquote>$1</blockquote>')
    // Horizontal rule
    .replace(/^---$/gm, '<hr>')
    // Unordered lists (handle lines starting with -)
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    // Paragraphs (lines that aren't already wrapped in tags)
    .replace(/^(?!<[a-z]|$)(.+)$/gm, '<p>$1</p>')
    // Wrap consecutive <li> in <ul>
    .replace(/((?:<li>.*<\/li>\n?)+)/g, '<ul>$1</ul>')
    // Clean up extra newlines
    .replace(/\n{2,}/g, '\n');

  return html;
}

export default function SpecPreview({ markdown, templateName }) {
  const html = useMemo(() => renderMarkdownToHtml(markdown), [markdown]);

  const isEmpty =
    !markdown.includes('(senza titolo)') &&
    !markdown.includes('Da compilare') &&
    markdown.replace(/[#\s>*_\-\n]/g, '').trim().length < 30;

  return (
    <div className="spec-preview" aria-live="polite" aria-label={`Anteprima specifica per ${templateName}`}>
      {isEmpty ? (
        <p className="spec-preview__empty">
          Inizia a compilare i campi a sinistra per vedere l&rsquo;anteprima
          della tua specifica.
        </p>
      ) : (
        <div
          className="spec-preview__doc"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      )}
    </div>
  );
}
