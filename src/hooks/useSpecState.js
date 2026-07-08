import { useState, useCallback, useMemo } from 'react';
import { templates } from '../data/templates';
import { generateMarkdown } from '../utils/generateMarkdown';

export function useSpecState() {
  const [activeTemplateId, setActiveTemplateId] = useState(templates[0].id);
  const [fields, setFields] = useState(() => {
    const initial = {};
    for (const t of templates) {
      initial[t.id] = {};
      for (const key of Object.keys(t.fields)) {
        initial[t.id][key] = t.fields[key].defaultValue;
      }
    }
    return initial;
  });

  const activeTemplate = useMemo(
    () => templates.find((t) => t.id === activeTemplateId),
    [activeTemplateId]
  );

  const activeFields = useMemo(
    () => fields[activeTemplateId] || {},
    [fields, activeTemplateId]
  );

  const markdown = useMemo(
    () => generateMarkdown(activeTemplate, activeFields),
    [activeTemplate, activeFields]
  );

  const selectTemplate = useCallback((id) => {
    setActiveTemplateId(id);
  }, []);

  const updateField = useCallback((fieldKey, value) => {
    setFields((prev) => ({
      ...prev,
      [activeTemplateId]: {
        ...prev[activeTemplateId],
        [fieldKey]: value,
      },
    }));
  }, [activeTemplateId]);

  const resetAll = useCallback(() => {
    setFields((prev) => {
      const next = { ...prev };
      next[activeTemplateId] = {};
      for (const key of Object.keys(activeTemplate.fields)) {
        next[activeTemplateId][key] = activeTemplate.fields[key].defaultValue;
      }
      return next;
    });
  }, [activeTemplateId, activeTemplate]);

  return {
    templates,
    activeTemplate,
    activeTemplateId,
    activeFields,
    markdown,
    selectTemplate,
    updateField,
    resetAll,
  };
}
