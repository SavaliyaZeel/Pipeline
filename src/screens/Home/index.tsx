import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { styles } from './index.styles';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setData, setError, startLoading } from '../../store/slices/listSlice';

interface HomeProps {
  navigation: {
    navigate: (screen: string) => void;
  };
}
const Home = (props: HomeProps) => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.list);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    dispatch(startLoading());
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    await fetch('https://api.restful-api.dev/objects', requestOptions)
      .then((response) => response.json())
      .then((result) => dispatch(setData(result)))
      .catch((error) => dispatch(setError(error)));
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.loading}>
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="small" color="grey" />
            <Text>Loading...</Text>
          </View>
        </View>
      ) : (
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
      )}
    </View>
  );
};

export default Home;
