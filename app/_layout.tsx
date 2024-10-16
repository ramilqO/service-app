import Router from '@/components/globals/Router';
import ThemeProvider from '@/providers/ThemeProvider';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'Roboto': require('../assets/fonts/Roboto/Roboto/Roboto-Black.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <SafeAreaView>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </SafeAreaView>
  );
}
