import Router from '@/components/globals/Router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RootLayout() {

  return (
    <SafeAreaView>
      <Router />
    </SafeAreaView>
  );
}
