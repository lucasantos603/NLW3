import { StatusBar } from 'expo-status-bar';
import React from 'react';

import {useFonts} from 'expo-font'
import {NunitoSans_600SemiBold, NunitoSans_700Bold, NunitoSans_800ExtraBold} from '@expo-google-fonts/nunito-sans'

import Routes from './src/routes'

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_600SemiBold,
    NunitoSans_700Bold,
    NunitoSans_800ExtraBold
  });

  if(!fontsLoaded){
    return null;
  }

  return (
    <Routes />
  );
}

