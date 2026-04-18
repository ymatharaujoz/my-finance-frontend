import { useState } from 'react';
import { LandingPage } from './components/landing/LandingPage';
import { LoginSection } from './components/landing/LoginSection';
import { AdminPortal } from './components/portal/AdminPortal';

const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'admin',
};

function App() {
  const [screen, setScreen] = useState('landing');
  const [session, setSession] = useState(null);

  const openLogin = () => {
    setScreen('login');
  };

  const returnToLanding = () => {
    setScreen('landing');
  };

  const handleLogin = ({ username, password }) => {
    if (
      username.trim().toLowerCase() === ADMIN_CREDENTIALS.username &&
      password === ADMIN_CREDENTIALS.password
    ) {
      setSession({
        username: ADMIN_CREDENTIALS.username,
        company: 'Atelier Costa Distribuicao',
      });
      setScreen('portal');

      return {
        success: true,
        message: 'Acesso liberado. Bem-vindo ao portal administrativo.',
      };
    }

    return {
      success: false,
      message: 'Credenciais Inválidas. Tente Novamente!',
    };
  };

  const handleLogout = () => {
    setSession(null);
    setScreen('landing');
  };

  if (screen === 'portal' && session) {
    return <AdminPortal session={session} onLogout={handleLogout} />;
  }

  if (screen === 'login') {
    return (
      <main className="min-h-screen overflow-hidden bg-[#f8fbff] text-slate-900">
        <div className="page-shell">
          <LoginSection
            isActive
            onBackToLanding={returnToLanding}
            onLogin={handleLogin}
          />
        </div>
      </main>
    );
  }

  return (
    <LandingPage onAccessPlatform={openLogin} />
  );
}

export default App;
