/* eslint-disable react-native/no-inline-styles */
/*
   Implemented infinite scrolling.
*/

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';

export default class InfiniteScroll extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      page: 1,
      seed: 1,
      loading: false,
      error: null,
      refreshing: false,
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  async makeRemoteRequest() {
    console.log('makeRemoteRequest');
    const {page, seed} = this.state;
    const url = `http://jsonplaceholder.typicode.com/photos/?seed=${seed}&page=${page}&results=20`;
    const apiRequest = await fetch(url);
    const response = await apiRequest.json();
    this.setState({
      data: [...this.state.data, ...response],
      error: response.error || null,
      loading: false,
      refreshing: false,
    }).catch((error) => {
      this.setState({
        error: error,
        loading: false,
      });
    });
  }

  renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{flex: 1, flexDirection: 'row', marginBottom: 5}}>
        <Image
          style={{width: 70, height: 70, margin: 5}}
          source={{uri: item.thumbnailUrl}}
        />
        <View>
          <Text style={styles.text}>{item.title}</Text>
          <Text style={styles.text}>{item.id}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  renderSeparator = () => {
    return (
      <View style={{height: 1, width: '100%', backgroundColor: 'black'}} />
    );
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1,
      },
      () => {
        this.makeRemoteRequest();
      },
    );
  };

  render() {
    return (
      <View style={[styles.MainContainer]}>
        <FlatList
          data={this.state.data}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.renderSeparator}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={0}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    marginTop: 20,
    marginRight: 20,
  },
  text: {
    flex: 1,
    fontSize: 15,
    marginTop: 10,
  },
});
