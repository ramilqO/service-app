import Router from '@/components/globals/Router';
import ThemeProvider from '@/providers/ThemeProvider';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaView>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </SafeAreaView>
  );
}
