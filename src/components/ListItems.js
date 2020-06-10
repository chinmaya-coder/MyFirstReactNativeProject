import React from 'react';
import {Text, FlatList, View, StyleSheet} from 'react-native';

const renderItem = ({item}) => {
  return (
    <View style={Styles.separator}>
      <Text style={Styles.text}>Employee name: {item.employee_name} </Text>
      <Text style={Styles.text}>Employee salary: {item.employee_salary}</Text>
      <Text style={Styles.text}>Employee age: {item.employee_age}</Text>
    </View>
  );
};

const renderSeparator = () => {
  return <View style={{height: 1, width: '100%', backgroundColor: 'black'}} />;
};

const ListItems = ({data}) => {
  return (
    <FlatList
      data={data}
      ItemSeparatorComponent={renderSeparator}
      renderItem={renderItem}
    />
  );
};

const Styles = StyleSheet.create({
  text: {
    flex: 1,
    fontSize: 20,
    paddingLeft: 5,
  },
  separator: {
    paddingTop: 10,
    paddingBottom: 10,
    marginRight: 40,
    marginLeft: 40,
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
});

export default ListItems;
