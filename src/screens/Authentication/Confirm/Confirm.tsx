import React, { useState } from 'react'
import { 
  View, Text, StyleSheet, ScrollView
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/Buttons/CustomButton';
import SocialSignInButton from '../../../components/Buttons/SocialSignInButton';

export default function Confirm() {
  const [code, setCode] = useState('');

  const navigation = useNavigation();

  const onConfirmPressed = () => {
    navigation.navigate('Signin');
  };

  const onSignInPressed = () => {
    navigation.navigate('Signin');
  };

  const onResendPress = () => {
    console.warn('onResendPress');
  };

  return (
    <ScrollView showVerticalScrollIndicater={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your e-mail</Text>

        <CustomInput 
          placeholder="Enter your confirmation code " 
          value={code} 
          setValue={setCode}
        />

        <CustomButton text="Confirm" onPress={onConfirmPressed} />

        <CustomButton 
          text="Resend code" 
          onPress={onResendPress}
          type="SECONDARY"
        />

        <CustomButton 
          text="Back to Sign in" 
          onPress={onSignInPressed}
          type="TERTTIARY"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075'
  },
});