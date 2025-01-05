import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import LoginForm from './components/LoginForm';
import ThemeToggler from './components/ThemeToggler';

const App = () => {
  const appStyle = {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  };

  return (
    <ThemeProvider>
      <div style={appStyle}>
        <ThemeToggler />
        <LoginForm />
      </div>
    </ThemeProvider>
  );
};

export default App;
