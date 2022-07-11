import React, {useState} from 'react';
import {SafeAreaView, View, FlatList, StyleSheet} from 'react-native';
import udemy_data from './udemy-data.json';
import EducationCard from './EducationCard';
import SearchBar from './SearchBar';

function App() {
  const [list, setList] = useState(udemy_data);
  const renderEducation = ({item}) => <EducationCard education={item} />;

  const renderSeperator = () => <View style={styles.seperator} />;
  const handleSearch = text => {
    const filteredList = udemy_data.filter(education => {
      const searchedText = text.toLowerCase();
      const currentTitle = education.title.toLowerCase();
      return currentTitle.indexOf(searchedText) > -1;
    });
    setList(filteredList);
  };
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <FlatList
        keyExtractor={item => item.id}
        data={list}
        renderItem={renderEducation}
        ItemSeparatorComponent={renderSeperator}
      />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
  seperator: {
    borderWidth: 1,
    borderColor: '#dfe4ea',
  },
});
