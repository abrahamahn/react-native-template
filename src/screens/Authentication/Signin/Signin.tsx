import React, { useState } from 'react'
import { 
  StyleSheet, 
  Image, 
  Text, 
  View, 
  useWindowDimensions, 
  ScrollView 
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { auth } from '../../../config/firebase'
import Logo from '../../../../assets/images/logo.png';
import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/Buttons/CustomButton';
import SocialSignInButton from '../../../components/Buttons/SocialSignInButton';

export default function Signin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const onSignInPressed = () => {
    navigation.navigate('Home');
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate('Forgot');
  };

  const onSignUpPressed = () => {
    navigation.navigate('Signup');
  };

  return (
    <ScrollView showVerticalScrollIndicater={false}>
      <View style={styles.root}>
        <Image 
          source={Logo} 
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain" 
        />

        <CustomInput 
          placeholder="Username" 
          value={username} 
          setValue={setUsername}
          style={styles.inputContainer}
        />
        <CustomInput 
          placeholder="Password" 
          value={password} 
          setValue={setPassword}
          style={styles.inputContainer}
          secureTextEntry
        />

        <CustomButton 
          text="Sign In" 
          onPress={onSignInPressed} 
          style={styles.signIn}
          type="PRIMARY"
        />

        <CustomButton 
          text="Forgot password?" 
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />

        <SocialSignInButton />

        <CustomButton 
          text="Don't have an account? Create one" 
          onPress={onSignUpPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 20,
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "white",
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    height: 100,
    alignContent: "center",
    justifyContent: "center",
  },
});