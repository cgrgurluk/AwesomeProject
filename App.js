
import React, { useState } from 'react';
import { SafeAreaView,
         FlatList, 
         View, Text,
         Image, 
         StyleSheet, TouchableOpacity, 
         Alert, RefreshControl } from 'react-native';

         const data = [
          {
            "albumId": 1,
            "id": 1,
            "title": "accusamus beatae ad facilis cum similique qui sunt",
            "url": "https://via.placeholder.com/600/92c952",
            "thumbnailUrl": "https://via.placeholder.com/150/92c952"
          },
          {
            "albumId": 1,
            "id": 2,
            "title": "reprehenderit est deserunt velit ipsam",
            "url": "https://via.placeholder.com/600/771796",
            "thumbnailUrl": "https://via.placeholder.com/150/771796"
          },
          {
            "albumId": 1,
            "id": 3,
            "title": "officia porro iure quia iusto qui ipsa ut modi",
            "url": "https://via.placeholder.com/600/24f355",
            "thumbnailUrl": "https://via.placeholder.com/150/24f355"
          },
          {
            "albumId": 1,
            "id": 4,
            "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
            "url": "https://via.placeholder.com/600/d32776",
            "thumbnailUrl": "https://via.placeholder.com/150/d32776"
          },
          {
            "albumId": 1,
            "id": 5,
            "title": "natus nisi omnis corporis facere molestiae rerum in",
            "url": "https://via.placeholder.com/600/f66b97",
            "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
          },
          {
            "albumId": 1,
            "id": 6,
            "title": "accusamus ea aliquid et amet sequi nemo",
            "url": "https://via.placeholder.com/600/56a8c2",
            "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
          },
          {
            "albumId": 1,
            "id": 7,
            "title": "officia delectus consequatur vero aut veniam explicabo molestias",
            "url": "https://via.placeholder.com/600/b0f7cc",
            "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
          },
          {
            "albumId": 1,
            "id": 8,
            "title": "aut porro officiis laborum odit ea laudantium corporis",
            "url": "https://via.placeholder.com/600/54176f",
            "thumbnailUrl": "https://via.placeholder.com/150/54176f"
          },
          {
            "albumId": 1,
            "id": 9,
            "title": "qui eius qui autem sed",
            "url": "https://via.placeholder.com/600/51aa97",
            "thumbnailUrl": "https://via.placeholder.com/150/51aa97"
          },
          {
            "albumId": 1,
            "id": 10,
            "title": "beatae et provident et ut vel",
            "url": "https://via.placeholder.com/600/810b14",
            "thumbnailUrl": "https://via.placeholder.com/150/810b14"
          },
          {
            "albumId": 1,
            "id": 11,
            "title": "nihil at amet non hic quia qui",
            "url": "https://via.placeholder.com/600/1ee8a4",
            "thumbnailUrl": "https://via.placeholder.com/150/1ee8a4"
          },
          {
            "albumId": 1,
            "id": 12,
            "title": "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
            "url": "https://via.placeholder.com/600/66b7d2",
            "thumbnailUrl": "https://via.placeholder.com/150/66b7d2"
          },
        ];
        


const App = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleCardPress = (item) => {
    console.log("pressed cards")
    Alert.alert(
      'Başlık ve Album ID',
      `Başlık: ${item.title}\nAlbum ID: ${item.albumId}`,
    );
  };

  const onRefresh = () => {
   
    setIsRefreshing(true);

    setTimeout(() => {
      setIsRefreshing(false);
    }, 2000); 
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleCardPress(item)} >
      <View style={styles.card} key={item.id}>
        <Image source={{ uri: item.thumbnailUrl }} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.id}>ID: {item.id}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={onRefresh}
          />
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical:30
  },
  card: {
    borderWidth: 1,
    borderColor: 'brown',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    marginTop: 10,
  },
  id: {
    fontSize: 16,
    color: 'gray',
  },
});

export default App;
