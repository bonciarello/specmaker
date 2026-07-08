import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { generateMarkdown, generatePlainText } from '../src/utils/generateMarkdown.js';
import { templates, templateIconMap } from '../src/data/templates.js';

describe('Templates Data', () => {
  it('should have exactly 4 templates', () => {
    assert.equal(templates.length, 4);
  });

  it('each template should have required properties', () => {
    for (const t of templates) {
      assert.ok(t.id, `template missing id`);
      assert.ok(t.name, `template ${t.id} missing name`);
      assert.ok(t.icon, `template ${t.id} missing icon`);
      assert.ok(t.description, `template ${t.id} missing description`);
      assert.ok(t.fields, `template ${t.id} missing fields`);
      assert.ok(t.fields.objective, `template ${t.id} missing objective field`);
      assert.ok(t.fields.users, `template ${t.id} missing users field`);
      assert.ok(t.fields.functionality, `template ${t.id} missing functionality field`);
      assert.ok(t.fields.constraints, `template ${t.id} missing constraints field`);
    }
  });

  it('each template field should have label, hint, placeholder, defaultValue', () => {
    for (const t of templates) {
      for (const [key, def] of Object.entries(t.fields)) {
        assert.ok(def.label, `template ${t.id} field ${key} missing label`);
        assert.ok(def.hint, `template ${t.id} field ${key} missing hint`);
        assert.ok(def.placeholder !== undefined, `template ${t.id} field ${key} missing placeholder`);
        assert.ok(def.defaultValue !== undefined, `template ${t.id} field ${key} missing defaultValue`);
      }
    }
  });

  it('all template icons should have SVG definitions', () => {
    const iconsUsed = new Set(templates.map((t) => t.icon));
    for (const icon of iconsUsed) {
      assert.ok(templateIconMap[icon], `icon ${icon} missing from templateIconMap`);
      assert.ok(templateIconMap[icon].includes('<svg'), `icon ${icon} should contain SVG markup`);
    }
  });

  it('template IDs should be unique', () => {
    const ids = templates.map((t) => t.id);
    assert.equal(new Set(ids).size, ids.length);
  });
});

describe('generateMarkdown', () => {
  const template = templates[0];
  const fields = {
    objective: 'Test App Objective',
    users: 'Test users description',
    functionality: '- Feature 1\n- Feature 2',
    constraints: '- Constraint 1\n- Constraint 2',
  };

  it('should include the objective in the title', () => {
    const md = generateMarkdown(template, fields);
    assert.ok(md.includes('# Specifica Software: Test App Objective'));
  });

  it('should include the template name', () => {
    const md = generateMarkdown(template, fields);
    assert.ok(md.includes(template.name));
  });

  it('should handle empty fields gracefully', () => {
    const emptyFields = {
      objective: '',
      users: '',
      functionality: '',
      constraints: '',
    };
    const md = generateMarkdown(template, emptyFields);
    assert.ok(md.includes('Da compilare'));
    assert.ok(md.includes('(senza titolo)'));
  });

  it('should include all section headings', () => {
    const md = generateMarkdown(template, fields);
    assert.ok(md.includes('## 1. Obiettivo'));
    assert.ok(md.includes('## 2. Utenti target'));
    assert.ok(md.includes('## 3. Funzionalità principali'));
    assert.ok(md.includes('## 4. Vincoli tecnici'));
  });

  it('should include generation date', () => {
    const md = generateMarkdown(template, fields);
    assert.ok(md.includes('**Data:**'));
  });

  it('should include the canonical URL in footer', () => {
    const md = generateMarkdown(template, fields);
    assert.ok(md.includes('cristianporco.it/app/specmaker'));
  });
});

describe('generatePlainText', () => {
  const template = templates[0];
  const fields = {
    objective: 'Plain text test',
    users: 'Test users',
    functionality: 'Feature 1\nFeature 2',
    constraints: 'Constraint 1',
  };

  it('should include the objective', () => {
    const text = generatePlainText(template, fields);
    assert.ok(text.includes('Plain text test'));
  });

  it('should include the template name', () => {
    const text = generatePlainText(template, fields);
    assert.ok(text.includes(template.name));
  });

  it('should handle empty fields with placeholder text', () => {
    const emptyFields = {
      objective: '',
      users: '',
      functionality: '',
      constraints: '',
    };
    const text = generatePlainText(template, emptyFields);
    assert.ok(text.includes('(da compilare)'));
    assert.ok(text.includes('(senza titolo)'));
  });
});
