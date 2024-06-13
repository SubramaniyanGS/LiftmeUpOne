import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ImageBackground } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { SocialIcon } from 'react-native-elements';
import appImages from '../../assets/index';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      console.log('Attempting to log in...');
      const response = await axios.post('http://192.168.240.114:8080/auth/login', {
        email,
        password,
      });
      console.log('Response:', response);
      if (response.status === 200) {
        Alert.alert('Login Successful', 'Welcome!');
        navigation.navigate('UserDetails');
        // Navigate to the next screen or perform other actions
      }
    } catch (error) {
      console.error('Login error:', error);
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('Request data:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error message:', error.message);
      }
      Alert.alert('Login Failed', 'Invalid email or password');
    }
  };

  return (
    <ImageBackground source={appImages.BACKGROUND} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
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
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { navigation.navigate('Signup') }}>
          <Text style={styles.link}>Don't have an account? Sign up</Text>
        </TouchableOpacity>
        
        <Text style={styles.orText}>OR</Text>
        
        <SocialIcon
          title='Continue with Google'
          button
          type='google'
          style={styles.socialButton}
        />
        <SocialIcon
          title='Continue with Facebook'
          button
          type='facebook'
          style={styles.socialButton}
        />
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
  orText: {
    marginVertical: 15,
    color: 'white',
    fontSize: 16,
  },
  socialButton: {
    width: '100%',
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default Login;
