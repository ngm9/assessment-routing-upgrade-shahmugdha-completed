function AssessmentList({ assessments, onSelectAssessment }) {
  return (
    <div>
      <h2>Available assessments</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {assessments.map((assessment) => (
          <li
            key={assessment.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '4px',
              padding: '12px',
              marginBottom: '8px',
              cursor: 'pointer'
            }}
            onClick={() => onSelectAssessment(assessment.id)}
          >
            <div style={{ fontWeight: 'bold' }}>{assessment.title}</div>
            <div style={{ fontSize: '14px', color: '#555' }}>
              Difficulty: {assessment.difficulty} • Duration: {assessment.durationMinutes} minutes
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AssessmentList;
