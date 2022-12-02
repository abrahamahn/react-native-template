import React from 'react'
import { 
  StyleSheet,
  Text, 
  View, 
  ScrollView 
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../../components/Buttons/CustomButton';

export default function Home() {
  const navigation = useNavigation();

  const onSignInPressed = () => {
    navigation.navigate('Signin');
  };

  return (
    <ScrollView showVerticalScrollIndicater={false}>
      <View style={styles.root}>
        <Text style={{ fontSize: 24, alignSelf: 'center'}}>Home, sweet home</Text>
        <CustomButton 
          text="Back to Sign In" 
          onPress={onSignInPressed} 
          type="TERTIARY"
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
  logo: {
    width: '70%',
    maxWidth: 300,
    height: 100,
  },
});