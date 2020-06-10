/*
   Implemented Redux and applymiddleware.
*/

import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as pageActions from '../actions/pageList';
import ListItems from '../components/ListItems';

class EmployeeList extends React.Component {
  getEmployeeList() {
    let {actions} = this.props;
    actions.getPageList();
  }

  render() {
    debugger;
    const {pageList} = this.props;
    return (
      <View styles={styles.mainContainer}>
        <TouchableOpacity
          style={styles.clickButton}
          onPress={() => this.getEmployeeList()}
          underlayColor="#fff">
          <Text style={styles.clickButtonText}>Click Here</Text>
        </TouchableOpacity>
        <ListItems data={pageList} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clickButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#1E6738',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  clickButtonText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
});

// Get data(State) from Redux and use as Props
const mapStateToProps = (state) => ({
  pageList: state.pageList,
});

const ActionCreators = Object.assign({}, pageActions);

// It helps to dispatch a function to redux store.
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);
