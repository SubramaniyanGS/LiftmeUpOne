import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import axios from 'axios';

const ChatScreen = () => {
  const [data, setData] = useState([{ type: 'bot', text: 'Hello! How can I assist you today?' }]);
  const apiKey = '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';
  const apiUrl = 'https://api-inference.huggingface.co/models/google/gemma-1.1-2b-it';
  const [textInput, setTextInput] = useState('');

  const handleSend = async () => {
    try {
      const prompt = textInput;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({ inputs: prompt })
      });

      
      const responseData = await response.json();
    

      const botResponseArray = responseData;

      if (Array.isArray(botResponseArray) && botResponseArray.length > 0) {
        const botResponse = botResponseArray[0].generated_text;
        setData([...data, { type: 'user', text: textInput }, { type: 'bot', text: botResponse }]);
        setTextInput('');
      } else {
        console.error('Invalid response format', responseData);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={90}
    >
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        style={styles.body}
        renderItem={({ item }) => (
          <View style={item.type === 'user' ? styles.userMessageContainer : styles.botMessageContainer}>
            <Text style={item.type === 'user' ? styles.userText : styles.botText}>{item.text}</Text>
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={textInput}
          onChangeText={text => setTextInput(text)}
          placeholder='Ask me anything'
        />
        <TouchableOpacity style={styles.button} onPress={handleSend}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  body: {
    flex: 1,
    width: '100%',
    marginBottom: 10,
  },
  userMessageContainer: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
    borderRadius: 15,
    padding: 10,
    marginVertical: 5,
    maxWidth: '80%',
  },
  botMessageContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#ECECEC',
    borderRadius: 15,
    padding: 10,
    marginVertical: 5,
    maxWidth: '80%',
    marginTop:15
  },
  userText: {
    fontSize: 16,
    color: '#333',
  },
  botText: {
    fontSize: 16,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  input: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
    marginBottom:10
  },
  button: {
    backgroundColor: '#008B8B',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10
  },
  buttonText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
  }
});

export default ChatScreen;
