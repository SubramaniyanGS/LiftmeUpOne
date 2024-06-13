import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity,ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import appImages from '../../assets/index';

const Emotions = () => {
  const [emotions, setEmotions] = useState([
    { emoji: '😊', name: 'Happy' },
    { emoji: '😄', name: 'Joyful' },
    { emoji: '😃', name: 'Excited' },
    { emoji: '😆', name: 'Laughing' },
    { emoji: '😁', name: 'Smiling' },
    { emoji: '😂', name: 'Tears of Joy' },
    { emoji: '😍', name: 'Heart Eyes' },
    { emoji: '😎', name: 'Cool' },
    { emoji: '😇', name: 'Blessed' },
    { emoji: '🥳', name: 'Celebrating' },
    { emoji: '😔', name: 'Sad' },
    { emoji: '😢', name: 'Crying' },
    { emoji: '😞', name: 'Disappointed' },
    { emoji: '😟', name: 'Worried' },
    { emoji: '😣', name: 'Stressed' },
    { emoji: '😩', name: 'Tired' },
    { emoji: '😴', name: 'Sleepy' },
    { emoji: '🤔', name: 'Thinking' },
    { emoji: '😒', name: 'Unamused' },
    { emoji: '😳', name: 'Surprised' },
  ]);
  const navigation = useNavigation();

  const handleEmojiClick = (name) => {
    alert(`You clicked on: ${name}`);
    navigation.navigate('Secondary');

  };

  return (
    <ImageBackground source={appImages.BACKGROUND} style={styles.backgroundImage}>
    <View style={styles.container}>
      <Text style={styles.title}>How are you feeling?</Text>
      <View style={styles.emotionContainer}>
        {emotions.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleEmojiClick(item.name)}
            style={styles.emotionItem}>
            <Text style={styles.emoji}>{item.emoji}</Text>
            <Text style={styles.emojiName}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
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
    color: 'white'
  },
  emotionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    backgroundColor: 'rgba(0, 0, 0, 0)', // Background color for emoji container
    padding: 20, // Padding for emoji container
    borderRadius: 10, // Border radius for emoji container
  },
  emotionItem: {
    alignItems: 'center',
    margin: 10,
  },
  emoji: {
    fontSize: 30,
    color: 'black'
  },
  emojiName: {
    marginTop: 5,
    fontSize: 16,
    color: 'white'
  },
});

export default Emotions;
