import React from 'react';
import { Alert, Button, StyleSheet, Text, View, Image, Dimensions,ScrollView,TouchableHighlight } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

var fullwidth = Dimensions.get('window').width; //full width
var fullheight = Dimensions.get('window').height; //full height

export default class InstructionScreen extends React.Component {
  static navigationOptions = {
    title: 'Instruction',
    headerLeft: () => (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Back"
      />
    ),
};
  render() {
      return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.headerStyle}>Annotate Animals on the Image</Text>
          <ContentContainer />
          <TouchableHighlight onPress={() => this.props.navigation.navigate('TaskScreen')}>
            <View style={styles.cbutton}><Text style={styles.cbuttonText}>Start Task</Text></View>
          </TouchableHighlight>
        </View>
      </ScrollView>
      );
  }
}

class ContentContainer extends React.Component {
  render(){
    return (
      <View style={styles.elementsContainer}>
        <Introductions />
        <Correct />
        <Wrong />
        {/* <FootButtons /> */}
      </View>
    );
  }
}

class Introductions extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Text style={styles.title}>Instructions</Text>
        <Text style={styles.contentText}>Annotation Task In this task, you are going to draw a bounding box around animals that appear on a roadway.</Text>
      </View>
    );
  }
}

class Correct extends React.Component {
  render() {
    return (
      <View style={{flex: 3}}>
        <Text style={styles.title}>Positive Examples</Text>
          <View style={styles.imageContainer}>
            <Text>
            <Image style={styles.image} source={require('../assets/images/tutorial_yes1.jpg')} />
            <Image style={styles.image} source={require('../assets/images/tutorial_yes2.jpg')} />
            <Image style={styles.image} source={require('../assets/images/tutorial_yes3.jpg')} />
            </Text>
          </View>
      </View>
    );
  }
}

class Wrong extends React.Component {
  render() {
    return (
      <View style={{flex: 3}}>
        <Text style={styles.title}>Negative Examples</Text>
        <View style={styles.imageContainer}>
            <Text>
          <Image style={styles.image} source={require('../assets/images/tutorial_no1.jpg')} />
          <Image style={styles.image} source={require('../assets/images/tutorial_no2.jpg')} />
        </Text>
        </View>
      </View>
    );
  }
}

class FootButtons extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={[styles.button, styles.foot]}>
          <Button title='Back' onPress={() => Alert.alert('Press back!')} />
          <Button title='Start' onPress={() => Alert.alert('Press start!')} />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderColor: 'orange',
    // borderWidth: 2,
  },
  elementsContainer: {
    backgroundColor: '#f7f6f5',
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 24,
    padding:15,
  },
  title: {
    color: 'black',
    fontSize: 20,
    paddingTop:10,
    paddingBottom:10,
  },
  contentText: {
    color: 'grey',
  },
  image: {
    width: 100,
    height: 100,
  },
  imageContainer: {
    // borderColor: 'green',
    // borderWidth: 4,
  },
  foot: {
    alignItems: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  headerStyle: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 30,
    marginBottom:20
  },
  cbutton:{
    flex:1,
    flexDirection:'row',
    backgroundColor:'#fbc02d',
    width:fullwidth-30,
    padding:10,
    marginLeft:15,
    marginRight:15,
    marginBottom:10,
    textAlign:'center',
    justifyContent:'center'
  },
  cbuttonText:{
    fontSize:20,
  }
});

// let dimensions = Dimensions.get('window');
//   let imageHeight = Math.round(dimensions.height / 10 * 3);
//   let imageWidth = Math.round(dimensions.width / 10 * 3);