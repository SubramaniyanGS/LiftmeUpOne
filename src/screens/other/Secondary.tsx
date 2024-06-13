import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import appImages from '../../assets/index';

const SecondaryReasons = () => {
  // List of secondary reasons
  const secondaryReasons = [
    'Health Concerns',
    'Financial Stability',
    'Relationship Issues',
    'Work Stress',
    'Safety & Security',
    'Future Uncertainty',
    'Parenting Concerns',
    'Exixtential Angst',
    'Social Pressures',
    'Environmental Worries'
    // Add more options as needed
  ];
  const navigation = useNavigation();

  // Function to handle option selection
  const handleOptionSelection = (option) => {
    // Add your logic here for handling the selected option
    alert(`Selected option: ${option}`);
    navigation.navigate('ChatScreen');
  };

  return (
    <ImageBackground source={appImages.BACKGROUND} style={styles.backgroundImage}>
    <View style={styles.container}>
      <Text style={styles.title}>Choose the Secondary Reasons</Text>
      <View style={styles.optionsContainer}>
        {secondaryReasons.map((option, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleOptionSelection(option)}
            style={styles.optionButton}>
            <Text style={styles.optionText}>{option}</Text>
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
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'white'
  },
  optionsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionButton: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    borderRadius: 8,
    borderColor: '#FFFFFF',  // Add this line
    borderWidth: 1,
  },
  optionText: {
    fontSize: 20,
    color: 'white',
  },
});

export default SecondaryReasons;
