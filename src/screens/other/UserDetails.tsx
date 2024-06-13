import React, { useState } from 'react';
import { View, TextInput, Button, Alert,StyleSheet,Text,TouchableOpacity,ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import appImages from '../../assets/index';

const UserDetails = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const navigation = useNavigation();

  const handleSaveName = async() =>{
    try{
       // Perform validation for required fields
       if (!name.trim() || !age.trim() || !gender.trim()) {
        Alert.alert('Error', 'Please fill in all fields');
        return;
      }
      navigation.navigate('Emotions');
        let result = await fetch('https://663995d91ae792804bec2f09.mockapi.io/api/v1/users',{
          method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name,age,gender }),
        });
        result = await result.json();
        if(result){
          Alert.alert('Success', 'User saved successfully');
          
        }else {
          throw new Error('Failed to save name');
        }
      }catch (error) {
        console.error('Error saving name:', error);
        Alert.alert('Error', 'Failed to save name');
      }
    };

    return (
      <ImageBackground source={appImages.BACKGROUND} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Enter Your Information</Text>
        
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            onChangeText={(text) => setName(text)}
            value={name}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your age"
            onChangeText={(text) => setAge(text)}
            value={age}
            keyboardType="numeric" // Specify numeric keyboard for age input
          />
          <TextInput
            style={styles.input}
            placeholder="Enter a Gender"
            onChangeText={(text) => setGender(text)}
            value={gender}
          />
          <TouchableOpacity style={styles.button} onPress={handleSaveName}>
            <Text style={styles.buttonText}>Submit</Text>
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
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 20,
      color:'white'
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
    
  });
  
  export default UserDetails;