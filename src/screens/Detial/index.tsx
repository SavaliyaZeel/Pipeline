import { Text, View } from 'react-native';
import React from 'react';
import { styles } from './index.styles';

interface DetialProps {
  route: {
    params: {
      id: number;
      name: string;
      data: {
        color: string;
        capacity: string;
      };
    };
  };
}

const Detial = ({ route }: DetialProps) => {
  const data = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.detials}>
        <Text>ID : {data.id}</Text>
        <Text>name : {data.name}</Text>
        <Text>color : {data.data.color}</Text>
        <Text>capacity : {data.data.capacity}</Text>
      </View>
    </View>
  );
};

export default Detial;
