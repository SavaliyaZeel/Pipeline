import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './index.styles';
import React, { useEffect, useState } from 'react';

interface HomeProps {
  navigation: {
    navigate: () => void;
  };
}
const Home = (props: HomeProps) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // Alert.alert('Hello', 'World');
    getData();
  }, []);

  const getData = async () => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    await fetch('https://api.restful-api.dev/objects', requestOptions)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.error(error));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 20, gap: 8 }}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Detial', item)}
            style={styles.item}
            key={index}
          >
            <Text>name : {item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;
