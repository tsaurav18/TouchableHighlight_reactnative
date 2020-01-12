/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
  
} from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

const App= () =>  {
  const [pressing, setPressing] = useState(false)
  _onPressIn = ()=>{
    setPressing(true)
  }
  _onPressOut = ()=>{
    setPressing(false)
  }
  return (
    <>
      
    <View style={styles.container}>
          <TouchableHighlight onPressIn={_onPressIn}
          onPressOut={_onPressOut}
          style={styles.touchable}>
            <View style={styles.button}>
              <Text style={styles.welcome}>
                {pressing ? "oh my god" : "Push me"}
              </Text>

            </View>
          </TouchableHighlight>
     
      
    </View>
   
    </>
    
  );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#F5FCFF'
  },
  welcome:{fontSize:20, textAlign:"center", margin:10, color:"#FFFFFF"},
  touchable:{borderRadius:100},
  button:{
    backgroundColor:"#FF0000",
    borderRadius:100,
    height:200,
    width:200,
    justifyContent:"center"
  }
  
});

export default App;
