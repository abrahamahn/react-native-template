import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

interface Props {
  value: string,
  setValue: string,
  placeholder: string,
}
const CustomInput = ({value, setValue, placeholder, secureTextEntry}: Props) => {
  return (
    <View>
      <TextInput 
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input} 
        secureTextEntry={secureTextEntry}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
  
    borderWidth: 0.5,
    borderRadius: 5,

    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  input: {
    backgroundColor: '#f1f1f1',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 3,
    marginTop: 10,
  },
})


export default CustomInput