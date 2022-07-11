import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './EducationCard.styles';
const EducationCard = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: props.education.imageUrl}} />
      <View style={styles.inner_container}>
        <Text style={styles.title}>{props.education.title}</Text>
        <View style={styles.content_conteiner}>
          <View style={styles.info_container}>
            <Text>{props.education.egitmen}</Text>
            <Text style={styles.dil}>{props.education.dil}</Text>
          </View>
          <View style={styles.fiyat_container}>
            <Text style={styles.fiyat}>{props.education.fiyat}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default EducationCard;
