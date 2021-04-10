import { useState } from 'react';

import EntryDisplay from './components/EntryDisplay';
import EntryForm from './components/EntryForm';
import Header from './components/Header';

import './App.scss';

function App() {
  const [entries, updateEntries] = useState([]);

  const addPhonebookEntry = (newNumber) => {
    updateEntries([...entries, newNumber]);
  }

  return (
    <div className='App'>
      <Header title='My Phone Book' />
      <div className="page-wrapper">
        <EntryForm addPhonebookEntry={addPhonebookEntry} />
        <EntryDisplay data={entries} />
      </div>
    </div>
  );
}

export default App;
