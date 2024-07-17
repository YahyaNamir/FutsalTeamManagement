import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { DraxProvider, DraxView } from 'react-native-drax';

const PlayerListScreen = ({ players, setPlayers, absentPlayers, setAbsentPlayers, setFormation }) => {
  const handleDragEnd = (event, target) => {
    const { dragged } = event;
    if (target === 'absent') {
      setAbsentPlayers([...absentPlayers, dragged.payload]);
      setPlayers(players.filter(p => p.id !== dragged.payload.id));
    } else if (target === 'formation') {
      setFormation(prev => {
        return prev.map(p =>
          p.position === target ? { ...p, name: dragged.payload.name } : p
        );
      });
      setPlayers(players.filter(p => p.id !== dragged.payload.id));
    }
  };

  return (
    <View style={styles.listContainer}>
      <Text style={styles.title}>Players</Text>
      <DraxProvider>
        <FlatList
          data={players}
          renderItem={({ item }) => (
            <DraxView
              style={styles.player}
              draggingStyle={styles.dragging}
              dragReleasedStyle={styles.dragging}
              hoverDraggingStyle={styles.hoverDragging}
              dragPayload={item}
              longPressDelay={150}
            >
              <Text>{item.name}</Text>
            </DraxView>
          )}
          keyExtractor={(item) => item.id}
          numColumns={4}
          columnWrapperStyle={styles.row}
        />
        <Text style={styles.absentTitle}>Joueur Absent</Text>
        <FlatList
          data={absentPlayers}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.absentPlayer}>
              <Text>{item.name}</Text>
            </View>
          )}
          numColumns={4}
          columnWrapperStyle={styles.row}
        />
      </DraxProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  absentTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  player: {
    width: 80,
    height: 60,
    backgroundColor: '#FFDD00',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderColor: '#000',
    borderWidth: 2,
    margin: 8,
  },
  row: {
    justifyContent: 'space-around',
  },
  dragging: {
    opacity: 0.2,
  },
  hoverDragging: {
    borderColor: 'red',
    borderWidth: 2,
  },
  absentPlayer: {
    width: 80,
    height: 60,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderColor: '#000',
    borderWidth: 2,
    margin: 8,
  },
});

export default PlayerListScreen;
