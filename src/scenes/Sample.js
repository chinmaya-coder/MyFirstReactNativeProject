import React, {useState, useEffect, lazy, Suspense} from 'react';
import {View, Text, Button} from 'react-native';

function Sample() {
  const [playerName, setPlayerName] = useState([]);
  const [playerPic, setPlayerPic] = useState([]);

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text> {this.props.name} </Text>
      <Button
        title="Details"
        onPress={() => this.props.navigation.navigate('Details')}
      />
    </View>
  );
}

export default Sample;
