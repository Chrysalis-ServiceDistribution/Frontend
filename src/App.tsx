import { Theme } from '@radix-ui/themes';
import Router from './pages/Router/Router';
import { AuthContextProvider } from './contexts/AuthContext';

import './reset.css';
import '@radix-ui/themes/styles.css';
import './index.css';

function App() {
  return (
    <>
      <Theme accentColor="mint" appearance="dark" className="background">
        <AuthContextProvider>
          <Router />
        </AuthContextProvider>
      </Theme>
    </>
  );
}

export default App;
