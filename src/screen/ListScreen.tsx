import React, {useState, useEffect} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  FlatList,
  ActivityIndicator,
  useColorScheme,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export const ListScreen = () => {
  const [data, setData] = useState([]);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <View>
        {data ? (
          <FlatList<{id: string; title: string}>
            data={data}
            renderItem={({item}) => (
              <View>
                <Text>{item.title}</Text>
              </View>
            )}
            keyExtractor={item => item.id}
          />
        ) : (
          <ActivityIndicator />
        )}
      </View>
    </SafeAreaView>
  );
};
