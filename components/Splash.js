import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import LottieView from 'lottie-react-native';

export default function Splash({ navigation }) {
  return (
    <View
      style={{
          flex: 1,
          backgroundColor: '#ffffff'
      }}
    >
      <LottieView
          source={require('../assets/nowyouknown.json')}
          autoPlay
          loop={false}
          speed={0.5}
          onAnimationFinish={() => {
              console.log('Animation Finished!')
              navigation.push('Home');
          }}
      />
       <View style={{flex:1, flexDirection: 'row', marginTop: 30}}>
            <View style={{backgroundColor: 'black', height: 2, flex: 1, alignSelf: 'center'}} />
            <Text style={{ alignSelf:'center', paddingHorizontal:5, fontSize: 13, fontFamily: 'Myanmarfonts', }}>PGDM 19th BARTH FINAL SHOW PROJECT</Text>
            <View style={{backgroundColor: 'black', height: 2, flex: 1, alignSelf: 'center'}} />
          </View>

          <View style={{flex:1, flexDirection: 'row',}}>
            <View style={{backgroundColor: 'black', height: 2, flex: 1, alignSelf: 'center'}} />
            <Text style={{ alignSelf:'center', paddingHorizontal:5, fontSize: 13, fontFamily: 'Myanmarfonts', }}>SPONSOR BY YOON HAN THAR PRIVATE LIMITED</Text>
            <View style={{backgroundColor: 'black', height: 2, flex: 1, alignSelf: 'center'}} />
          </View>

          
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageDisplay:{
    marginTop: 50,
    width: '100%',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
},
imagelogo:{
    width: 50,
    height: 50
}
});
