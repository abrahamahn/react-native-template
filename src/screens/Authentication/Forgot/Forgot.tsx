import React, { useState } from 'react'
import { 
  View, Text, StyleSheet, ScrollView
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/Buttons/CustomButton';
import SocialSignInButton from '../../../components/Buttons/SocialSignInButton';

export default function Forgot() {
  const [username, setUsername] = useState('');

  const navigation = useNavigation();

  const onSendPressed = () => {
    navigation.navigate('Confirm');
  };

  const onSignInPressed = () => {
    navigation.navigate('Signin');
  };

  return (
    <ScrollView showVerticalScrollIndicater={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        <CustomInput 
          placeholder="Username"
          value={username} 
          setValue={setUsername}
        />

        <CustomButton text="Send" onPress={onSendPressed} />

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