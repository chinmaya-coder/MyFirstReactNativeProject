import * as React from 'react';
import {View, Text, Button} from 'react-native';
import Sample from './Sample';

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Ramesh',
    };
  }

  render() {
    console.log('Details render called...');
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {/* <Text> Details Hello There</Text> */}
        <Button
          title="ChangeName"
          onPress={() => this.setState({name: 'Madan'})}
        />
        <Sample name={this.state.name} />
      </View>
    );
  }
}

export default Details;
