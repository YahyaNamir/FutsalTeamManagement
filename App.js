import React, { useState } from 'react';
import { View, StyleSheet, Button, ImageBackground, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import PlayerListScreen from './PlayerListScreen';
import FormationScreen from './FormationScreen';

const App = () => {
  const [players, setPlayers] = useState([
    { id: '1', name: 'ANIBA' },
    { id: '2', name: 'ELFENNI' },
    { id: '3', name: 'CHARAOUI' },
    { id: '4', name: 'ALAYAN' },
    { id: '5', name: 'MESRAR' },
    { id: '6', name: 'IDRIS' },
    { id: '7', name: 'Safioui' },
    { id: '8', name: 'Mosry' },
    { id: '9', name: 'Player 9' },
    { id: '10', name: 'Player 10' },
  ]);

  const [absentPlayers, setAbsentPlayers] = useState([
    { id: '11', name: 'Absent 1' },
    { id: '12', name: 'Absent 2' },
    { id: '13', name: 'Absent 3' },
    { id: '14', name: 'Absent 4' },
    { id: '15', name: 'Absent 5' },
    { id: '16', name: 'Absent 6' },
    { id: '17', name: 'Absent 7' },
    { id: '18', name: 'Absent 8' },
  ]);

  const [formation, setFormation] = useState([
    { id: 'GK', name: '', position: 'GK' },
    { id: 'LB', name: '', position: 'LB' },
    { id: 'RB', name: '', position: 'RB' },
    { id: 'LM', name: '', position: 'LM' },
    { id: 'RM', name: '', position: 'RM' },
  ]);

  const handleStartGame = () => {
    console.log('Game Started');
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <ImageBackground source={require('./assets/stade.jpeg')} style={styles.imageBackground}>
        <View style={styles.header}>
          <Text style={styles.headerText}>MAROC</Text>
          <Text style={styles.headerText}>0:00</Text>
          <Text style={styles.headerText}>ALBANIA</Text>
        </View>
        <FormationScreen formation={formation} setFormation={setFormation} />
        <View style={styles.buttonContainer}>
          <Button title="Start GAME" onPress={handleStartGame} color="#FFDD00" />
        </View>
      </ImageBackground>
      <PlayerListScreen
        players={players}
        setPlayers={setPlayers}
        absentPlayers={absentPlayers}
        setAbsentPlayers={setAbsentPlayers}
        formation={formation}
        setFormation={setFormation}
      />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
});

export default App;
