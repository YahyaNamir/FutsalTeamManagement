import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { DraxProvider, DraxView } from 'react-native-drax';

const positions = {
  GK: { top: '40%', left: '2%' },
  LB: { top: '15%', left: '22%' },
  RB: { top: '15%', right: '22%' },
  LM: { top: '62%', left: '22%' },
  RM: { top: '62%', right: '22%' },
};

const FormationScreen = ({ formation, setFormation }) => {
  return (
    <View style={styles.formationContainer}>
      <DraxProvider>
        <ImageBackground source={require('./assets/stade.jpeg')} style={styles.field}>
          {formation.map((player) => (
            <DraxView
              key={player.position}
              style={[styles.position, positions[player.position]]}
              payload={player.position}
              receivingStyle={styles.receiving}
              onReceiveDragDrop={(event) => {
                const draggedPlayer = event.dragged.payload;
                if (player.name === '') {
                  setFormation(prevFormation =>
                    prevFormation.map(p =>
                      p.position === player.position
                        ? { ...p, name: draggedPlayer.name }
                        : p
                    )
                  );
                }
              }}
            >
              <Text style={styles.playerText}>{player.name || player.position}</Text>
            </DraxView>
          ))}
        </ImageBackground>
      </DraxProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  formationContainer: {
    flex: 1,
    marginTop: 16,
    alignItems: 'center',
  },
  field: {
    width: '100%',
    aspectRatio: 1,
    position: 'relative',
  },
  position: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    position: 'absolute',
    backgroundColor: '#5DADE2',
    borderColor: '#1B4F72',
    borderWidth: 2,
  },
  playerText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  receiving: {
    borderColor: 'yellow',
    borderWidth: 2,
  },
});

export default FormationScreen;
