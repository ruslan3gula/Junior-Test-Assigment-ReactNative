import React, {useState} from 'react';
import {StyleSheet, View, Button} from 'react-native';
import {Text} from 'react-native-elements';

export const HomeScreen = () => {
  const [color, setColor] = useState<string>('red');

  let count = 0;
  const maxCount = 4;
  const intervalTime = 1000;
  let intervalId: any = null;

  function changeBackgroundColor() {
    const colors = [' #D199E7', '#72C1ED', '#A196F1', '#7D72ED'];
    const color = colors[count];
    setColor(color);
    count++;
    if (count >= maxCount) {
      clearInterval(intervalId);
    }
  }

  function animation() {
    intervalId = setInterval(changeBackgroundColor, intervalTime);
  }

  return (
    <View style={{backgroundColor: color, flex: 1}}>
      <Button title="1" color="blue" onPress={() => animation()} />
      <Button title="2" color="yellow" />
      <Button title="3" color="green" />
    </View>
  );
};

const styles = StyleSheet.create({
  button_1: {
    width: '100px',
    height: '100px',
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
