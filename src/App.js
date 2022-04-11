
import './App.css';
import { useState } from 'react';

function App() {
  const [to, setTo] = useState('TLP');
  const [message, setMessage] = useState('Winner InshaAllah');
  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      alert(`Election commession say ${message} party ${to}`)
    }, 3000)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        To:{''}
        <select
          value={to}
          onChange={e => setTo(e.target.value)}>
          <option value="TLP">TLP</option>
          <option value="pti">pti</option>
        </select>
        <textarea
          placeholder="Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </label>
    </form>
  );
}

export default App;
