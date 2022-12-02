
import React, { useState } from 'react'
import { 
  View, Text, StyleSheet, ScrollView
} from "react-native";
import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/Buttons/CustomButton';
import SocialSignInButton from '../../../components/Buttons/SocialSignInButton';
import { useNavigation } from '@react-navigation/native';

export default function Confirm() {
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const navigation = useNavigation();

  const onSubmitPressed = () => {
    navigation.navigate('Signin');
  };

  const onSignInPressed = () => {
    navigation.navigate('Signin');
  };

  return (
    <ScrollView showVerticalScrollIndicater={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        <CustomInput 
          placeholder="Code"
          value={code} 
          setValue={setCode}
        />

        <CustomInput 
          placeholder="Enter your new password"
          value={newPassword} 
          setValue={setNewPassword}
        />

        <CustomButton text="Submit" onPress={onSubmitPressed} />

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