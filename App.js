import React from 'react';
import { Button } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  <Button
    onPress = {onPressLearnMore}
    title = "Learn More!";
    color = "#841584"
    accessibilityLabel = "Learn more about this purple button!"
  />
  
  if({onPressLearnMore} == yes){
  	render(){
    	return(
      	<View style={styles.container}>
      	
      
      	</View>
    	)
  	}
  }
	
  
  else {
    render() {
    	return (
      	<View style={styles.container}>
        	<Text>Il testo è stato cambiato!</Text>
        	<Text>Non è più in inglese!</Text>
        	<Text>Ora è in italiano!</Text>
      	</View>
    	);
  	}
	}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});