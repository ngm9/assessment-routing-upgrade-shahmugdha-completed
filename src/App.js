import { useState } from 'react';
import AssessmentList from './components/AssessmentList';
import { assessments } from './data/assessments';

function App() {
  const [lastSelectedId, setLastSelectedId] = useState(null);

  function handleSelectAssessment(id) {
    setLastSelectedId(id);
    console.log('Selected assessment:', id);
  }

  return (
    <div style={{ padding: '16px', fontFamily: 'sans-serif' }}>
      <h1>Utkrusht Assessment Browser</h1>
      <p>
        This internal tool shows a list of live skill assessments on Utkrusht. Clicking an
        assessment currently just records which one was clicked.
      </p>
      <AssessmentList assessments={assessments} onSelectAssessment={handleSelectAssessment} />
      <div style={{ marginTop: '16px', fontSize: '14px', color: '#555' }}>
        {lastSelectedId ? (
          <span>Last clicked assessment id: {lastSelectedId}</span>
        ) : (
          <span>No assessment selected yet.</span>
        )}
      </div>
    </div>
  );
}

export default App;
