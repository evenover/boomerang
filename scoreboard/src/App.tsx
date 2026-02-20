// src/App.tsx

import './index.css'; // Importer Tailwind CSS her
import RegistrationForm from './components/RegistrationForm';

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <RegistrationForm />
    </div>
  );
};

export default App;
