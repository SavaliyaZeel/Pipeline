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
    const fetchData = async () => {
      try {
        dispatch(startLoading()); // Dispatch the startLoading action here
        const response = await fetch('https://api.restful-api.dev/objects');
        const result = await response.json();
        dispatch(setData(result));
      } catch (err) {
        dispatch(setError(err));
      }
    };

    fetchData();
  }, [dispatch]);

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
