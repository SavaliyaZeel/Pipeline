import { Text, View } from 'react-native';
import React from 'react';
import { styles } from './index.styles';

interface ItemProps {
  route: {
    params: {
      id: number;
      name: string;
      data: {
        id: string;
        name: string;
      };
    };
  };
}

const Item = ({ route }: ItemProps) => {
  const { data } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.detials}>
        <Text>ID : {data.id}</Text>
        <Text>name : {data.name}</Text>
      </View>
    </View>
  );
};

export default Item;
