import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert,ImageBackground } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import appImages from '../../assets/index';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://192.168.240.114:8080/auth/signup', {
        name,
        email,
        phone,
        password,
      });

      if (response) {
        Alert.alert('Signup Successful', 'You can now log in');
        navigation.navigate('Login');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Signup Failed', 'Please check your details and try again');
    }
  };

  return (
    <ImageBackground source={appImages.BACKGROUND} style={styles.backgroundImage}>
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity  onPress={()=>{navigation.navigate('Login')}} >
        <Text style={styles.link}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: Add a semi-transparent overlay
  },
  title: {
    fontSize: 35,
    marginBottom: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  input: {
    width: '100%',
    padding: 15,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#008B8B',
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    color: 'white',
  },
});

export default Signup;
