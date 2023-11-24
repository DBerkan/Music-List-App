import React,{useState} from "react";
import { View,FlatList, Text , SafeAreaView , StyleSheet } from "react-native";
import music_data from './music-data.json';
import SongCard from "./components/SongCard/SongCard";
import SearchBar from "./components/SearchBar/SearchBar";



function App(){
  const [list,setList] = useState(music_data)
  const renderCardItem = ({item}) => <SongCard song = {item} />;
  const renderSeperator  = () =><View style={styles.seperator}></View>

  const handleSearch = text => {
    const filteredList = music_data.filter(song =>{
      const searchText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searchText) > - 1;
    })
    setList(filteredList);
  };

  return (


    <SafeAreaView style={styles.container}>

      <SearchBar onSearch={handleSearch}/>
        <FlatList

          keyExtractor={(item) => item.id}
          data={list}
          renderItem={renderCardItem}
          ItemSeparatorComponent={renderSeperator}
        />


    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  seperator:{
    borderWidth:1,
    borderColor:'#e0e0e0',
  },
});