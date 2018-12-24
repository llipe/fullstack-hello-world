import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet } from 'react-native';

export default class Note extends Component {
    constructor(props){
        super(props);
        this.state ={ isLoading: true}
      }

    componentDidMount() {
        fetch('http://192.168.8.112:3000/products/', {
            method: 'GET'
          })
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({
                isLoading: false,
                dataSource: responseJson,
              }, function(){
      
              });
          })
          .catch((error) => {
              console.log(error);
          });
    };
    
    render(){

        if(this.state.isLoading){
          return(
            <View style={{flex: 1, padding: 20}}>
                <Text>Hello!</Text>
                <ActivityIndicator/>
            </View>
          )
        }
    
        return(
          <View style={styles.container}>
            <Text style={styles.titleText}>Product List</Text>
            <FlatList
              data={this.state.dataSource}
              renderItem={({item}) => <Text>{item.name} - ${item.price}</Text>}
            />
          </View>
        );
      }
}

const styles = StyleSheet.create ({
    container: {
       alignItems: 'center',
       marginTop: 100,
       padding: 20
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    normelText: {
        color: '#41cdf4',
       
    },
    wordBold: {
       fontWeight: 'bold',
       color: 'black'
    }
 })