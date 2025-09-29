import type { Question } from '../types';

export const QUESTIONS: Question[] = [
  {
    id: 'q1',
    text: 'What is the capital of France?',
    answers: [
      { id: 'q1a1', text: 'Paris', correct: true },
      { id: 'q1a2', text: 'Lyon', correct: false },
      { id: 'q1a3', text: 'Marseille', correct: false },
      { id: 'q1a4', text: 'Nice', correct: false },
    ],
  },
  {
    id: 'q2',
    text: 'Which language runs in a web browser?',
    answers: [
      { id: 'q2a1', text: 'Java', correct: false },
      { id: 'q2a2', text: 'C', correct: false },
      { id: 'q2a3', text: 'Python', correct: false },
      { id: 'q2a4', text: 'JavaScript', correct: true },
    ],
  },
  {
    id: 'q3',
    text: '2 + 2 * 2 = ?',
    answers: [
      { id: 'q3a1', text: '6', correct: true },
      { id: 'q3a2', text: '8', correct: false },
      { id: 'q3a3', text: '4', correct: false },
      { id: 'q3a4', text: '10', correct: false },
    ],
  },
  {
    id: 'q4',
    text: 'React is primarily used for…',
    answers: [
      { id: 'q4a1', text: 'Database management', correct: false },
      { id: 'q4a2', text: 'Building UIs', correct: true },
      { id: 'q4a3', text: 'Server hosting', correct: false },
      { id: 'q4a4', text: 'Operating systems', correct: false },
    ],
  },
  {
    id: 'q5',
    text: 'Which company created React?',
    answers: [
      { id: 'q5a1', text: 'Google', correct: false },
      { id: 'q5a2', text: 'Microsoft', correct: false },
      { id: 'q5a3', text: 'Facebook/Meta', correct: true },
      { id: 'q5a4', text: 'Amazon', correct: false },
    ],
  },
  {
    id: 'q6',
    text: 'What does CSS stand for?',
    answers: [
      { id: 'q6a1', text: 'Colorful Style Sheets', correct: false },
      { id: 'q6a2', text: 'Cascading Style Sheets', correct: true },
      { id: 'q6a3', text: 'Creative Style System', correct: false },
      { id: 'q6a4', text: 'Computer Style Sheets', correct: false },
    ],
  },
  {
    id: 'q7',
    text: 'TypeScript is a superset of…',
    answers: [
      { id: 'q7a1', text: 'Java', correct: false },
      { id: 'q7a2', text: 'C#', correct: false },
      { id: 'q7a3', text: 'JavaScript', correct: true },
      { id: 'q7a4', text: 'Python', correct: false },
    ],
  },
  {
    id: 'q8',
    text: 'Which hook manages state in a function component?',
    answers: [
      { id: 'q8a1', text: 'useEffect', correct: false },
      { id: 'q8a2', text: 'useMemo', correct: false },
      { id: 'q8a3', text: 'useState', correct: true },
      { id: 'q8a4', text: 'useRef', correct: false },
    ],
  },
  {
    id: 'q9',
    text: 'HTTP status code for “Not Found” is…',
    answers: [
      { id: 'q9a1', text: '200', correct: false },
      { id: 'q9a2', text: '301', correct: false },
      { id: 'q9a3', text: '404', correct: true },
      { id: 'q9a4', text: '500', correct: false },
    ],
  },
  {
    id: 'q10',
    text: 'Which array method creates a new array with elements that pass a test?',
    answers: [
      { id: 'q10a1', text: 'map', correct: false },
      { id: 'q10a2', text: 'filter', correct: true },
      { id: 'q10a3', text: 'reduce', correct: false },
      { id: 'q10a4', text: 'forEach', correct: false },
    ],
  },
  {
    id: 'q11',
    text: 'Which storage persists on device restarts in React Native (no backend)?',
    answers: [
      { id: 'q11a1', text: 'Redux store', correct: false },
      { id: 'q11a2', text: 'AsyncStorage', correct: true },
      { id: 'q11a3', text: 'Component state', correct: false },
      { id: 'q11a4', text: 'Context API', correct: false },
    ],
  },
  {
    id: 'q12',
    text: 'Which command starts Metro bundler?',
    answers: [
      { id: 'q12a1', text: 'npm start', correct: true },
      { id: 'q12a2', text: 'npm build', correct: false },
      { id: 'q12a3', text: 'npm deploy', correct: false },
      { id: 'q12a4', text: 'npm ship', correct: false },
    ],
  },
  {
    id: 'q13',
    text: 'Which of these is NOT a React Native core component?',
    answers: [
      { id: 'q13a1', text: 'View', correct: false },
      { id: 'q13a2', text: 'Span', correct: true },
      { id: 'q13a3', text: 'Text', correct: false },
      { id: 'q13a4', text: 'Image', correct: false },
    ],
  },
  {
    id: 'q14',
    text: 'What does JSON stand for?',
    answers: [
      { id: 'q14a1', text: 'Java Syntax Object Notation', correct: false },
      { id: 'q14a2', text: 'JavaScript Object Notation', correct: true },
      { id: 'q14a3', text: 'Joined String Object Nodes', correct: false },
      { id: 'q14a4', text: 'Java Source Object Numbers', correct: false },
    ],
  },
  {
    id: 'q15',
    text: 'Which variable declaration is block-scoped and re-assignable?',
    answers: [
      { id: 'q15a1', text: 'var', correct: false },
      { id: 'q15a2', text: 'let', correct: true },
      { id: 'q15a3', text: 'const', correct: false },
      { id: 'q15a4', text: 'static', correct: false },
    ],
  },
  {
    id: 'q16',
    text: 'Which React feature helps avoid unnecessary re-renders?',
    answers: [
      { id: 'q16a1', text: 'useCallback', correct: true },
      { id: 'q16a2', text: 'useMount', correct: false },
      { id: 'q16a3', text: 'useLayout', correct: false },
      { id: 'q16a4', text: 'useTimeout', correct: false },
    ],
  },
  {
    id: 'q17',
    text: 'What does REST stand for?',
    answers: [
      { id: 'q17a1', text: 'Representational State Transfer', correct: true },
      { id: 'q17a2', text: 'Remote Execution Standard Tier', correct: false },
      { id: 'q17a3', text: 'Reactive Event Streaming Tool', correct: false },
      { id: 'q17a4', text: 'Random Encoded Service Transfer', correct: false },
    ],
  },
  {
    id: 'q18',
    text: 'Which method merges array items into a single value?',
    answers: [
      { id: 'q18a1', text: 'map', correct: false },
      { id: 'q18a2', text: 'filter', correct: false },
      { id: 'q18a3', text: 'reduce', correct: true },
      { id: 'q18a4', text: 'slice', correct: false },
    ],
  },
  {
    id: 'q19',
    text: 'What does npm stand for?',
    answers: [
      { id: 'q19a1', text: 'Node Package Manager', correct: true },
      { id: 'q19a2', text: 'New Project Maker', correct: false },
      { id: 'q19a3', text: 'Node Program Mapper', correct: false },
      { id: 'q19a4', text: 'Network Protocol Manager', correct: false },
    ],
  },
  {
    id: 'q20',
    text: 'Which hook is best for running code on mount?',
    answers: [
      { id: 'q20a1', text: 'useState', correct: false },
      { id: 'q20a2', text: 'useEffect', correct: true },
      { id: 'q20a3', text: 'useMemo', correct: false },
      { id: 'q20a4', text: 'useReducer', correct: false },
    ],
  },
  {
    id: 'q21',
    text: 'Which keyword prevents reassignment?',
    answers: [
      { id: 'q21a1', text: 'const', correct: true },
      { id: 'q21a2', text: 'let', correct: false },
      { id: 'q21a3', text: 'var', correct: false },
      { id: 'q21a4', text: 'static', correct: false },
    ],
  },
  {
    id: 'q22',
    text: 'Which protocol is used to fetch web pages?',
    answers: [
      { id: 'q22a1', text: 'FTP', correct: false },
      { id: 'q22a2', text: 'HTTP', correct: true },
      { id: 'q22a3', text: 'SMTP', correct: false },
      { id: 'q22a4', text: 'SSH', correct: false },
    ],
  },
  {
    id: 'q23',
    text: 'Which RN API vibrates the device?',
    answers: [
      { id: 'q23a1', text: 'Haptics', correct: false },
      { id: 'q23a2', text: 'Vibration', correct: true },
      { id: 'q23a3', text: 'Feedback', correct: false },
      { id: 'q23a4', text: 'Shake', correct: false },
    ],
  },
  {
    id: 'q24',
    text: 'Which storage is best for small key-value data on RN?',
    answers: [
      { id: 'q24a1', text: 'SQLite', correct: false },
      { id: 'q24a2', text: 'AsyncStorage', correct: true },
      { id: 'q24a3', text: 'Realm', correct: false },
      { id: 'q24a4', text: 'MongoDB', correct: false },
    ],
  },
];
