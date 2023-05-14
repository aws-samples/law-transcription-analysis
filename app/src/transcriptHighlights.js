import s from './transcriptHighlights.module.css';

// This file defines the CSS class names we add to each category,
// so it can be shared between TranscriptLine and TranscriptPane
const transcriptHighlights = {
  DATE: s.phi,
  EVENT: s.condition,
  LOCATION: s.anatomy,
  ORGANIZATION: s.medication,
  PERSON: s.treatment,
};

export default transcriptHighlights;
