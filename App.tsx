import React from 'react';
import './src/config/firebase'
import AuthStack from './src/navigation/authStack.tsx';

export default function App() {
  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.root}>
      <AuthStack />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
});
