import React, {FC, useEffect, useState} from 'react';
import SplashScreen from './screens/SplashScreen/SplashScreen';
import Navigation from './navigation/navigation';

const App: FC = () => {
  const [screen, setScreen] = useState<string>('splash');

  useEffect(() => {
    setTimeout(() => setScreen('login'), 3000);
  }, []);

  return screen === 'splash' ? <SplashScreen /> : <Navigation />;
};

export default App;
