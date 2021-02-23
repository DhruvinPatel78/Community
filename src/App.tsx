import React, {FC, useEffect, useState} from 'react';
import SplashScreen from './screens/SplashScreen/SplashScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';

const App: FC = () => {
  const [screen, setScreen] = useState<string>('splash');

  useEffect(() => {
    setTimeout(() => setScreen('login'), 3000);
  }, []);

  return screen === 'splash' ? <SplashScreen /> : <LoginScreen />;
};

export default App;
