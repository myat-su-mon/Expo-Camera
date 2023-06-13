import react, { useState, useCallback }from 'react';
import { TouchableOpacity, Text, View, StyleSheet,TextInput,SafeAreaView, ScrollView, Image, Button, Alert} from 'react-native';
import DropDownPicker from "react-native-dropdown-picker";
import {useForm, Controller} from 'react-hook-form';
import RNTextArea from "@freakycoder/react-native-text-area";
import * as ImagePicker from 'expo-image-picker';


export default function Detail({ navigation }) {

  const iell = 'မြန်မာနိုင်ငံ၊ (အင်္ဂလိပ်: Myanmar သို့မဟုတ် "Burma" (ဘားမား)) တရားဝင်အားဖြင့် ပြည်ထောင်စု သမ္မတ မြန်မာနိုင်ငံတော် (Republic of the Union of Myanmar) သည် အရှေ့တောင်အာရှရှိ နိုင်ငံတစ်နိုင်ငံဖြစ်သည်။ အရှေ့တောင်အာရှ ကျွန်းဆွယ်ဒေသတွင် အကြီးဆုံးနိုင်ငံဖြစ်ပြီး ၂၀၁၈ ခုနှစ်အရ လူဦးရေ ၅၄ သန်းခန့်ရှိသည်။[၅] ဘင်္ဂလားဒေ့ရှ်၊ အိန္ဒိယ၊ တရုတ်ပြည်သူ့သမ္မတနိုင်ငံ၊ လာအို၊ ထိုင်းနိုင်ငံ၊ ကပ္ပလီပင်လယ်နှင့် ဘင်္ဂလားပင်လယ်အော်တို့နှင့် ထိစပ်နေသည်။ မြန်မာနိုင်ငံ၏ မြို့တော်မှာ နေပြည်တော်ဖြစ်ပြီး အကြီးဆုံးမြို့မှာ ရန်ကုန်ဖြစ်သည်။[၁]';

  const [image, setImage] = useState(null);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);


  const [genderOpen, setGenderOpen] = useState(false);
  const [genderValue, setGenderValue] = useState(null);
  const [gender, setGender] = useState([
    { label: "ယောက်ကျား", value: "male" },
    { label: "မိန်းမ", value: "female" },
    { label: "အခြောက်", value: "neutral" },
  ]);
  

  const onGenderOpen = useCallback(() => {
    //setCompanyOpen(false);
  }, []);
  const { handleSubmit, control } = useForm();
  const [value, onChangeText] = useState('');

  

  const pickImage3 = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage3(result.uri);
    }
  };

  const pickImage2 = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage2(result.uri);
    }
  };

  const pickImage1 = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage1(result.uri);
    }
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };



  return (
    <View style={styles.container}>
         <View style={styles.header}> 
          <Text style={styles.mtextHeader}>
            ကုန်ပစ္စည်းအသေးစိတ်စာရင်းထည့်သွင်းရန်
          </Text> 
          <TouchableOpacity style={styles.mButton} onPress={()=> navigation.goBack() }>
            <Text style={{color: '#FAF7F0'}}> Back Home</Text>
          </TouchableOpacity>
         
        </View>
        <DropDownPicker
            style={{marginBottom: 10}}
            open={genderOpen}
            value={genderValue} //genderValue
            items={gender}
            setOpen={setGenderOpen}
            setValue={setGenderValue}
            setItems={setGender}
            placeholder="အမျိုးအစားရွေးချယ်ရန်"
            placeholderStyle={{fontFamily: 'Myanmarfonts', fontSize:10}}
            onOpen={onGenderOpen}
            //onChangeValue={onChange}
            zIndex={3000}
            zIndexInverse={3000}
          />
      <SafeAreaView>
        <ScrollView>
          
          <TextInput style={styles.Inputstyle} placeholder={'ပစ္စည်းအမည်'}/>  
          <RNTextArea
            maxCharLimit={5000}
            placeholderTextColor="black"
            exceedCharCountColor="#990606"
            placeholder={'အကြောင်းအရာ'}
            onChangeText={()=>console.log('Hello')}
            style={styles.mTextArea}
            //value= {}
          />

          <TouchableOpacity onPress={pickImage} style={styles.mButton} >
            <Text style={{color: '#FAF7F0'}}>Front View Image</Text>
          </TouchableOpacity>
          {image && <Image source={{ uri: image }} style={styles.displayImage} />}

          <TouchableOpacity onPress={pickImage1} style={styles.mButton} >
            <Text style={{color: '#FAF7F0'}}>Back View Image</Text>
          </TouchableOpacity>
          {image1 && <Image source={{ uri: image1 }} style={styles.displayImage} />}

          <TouchableOpacity onPress={pickImage2} style={styles.mButton} >
            <Text style={{color: '#FAF7F0'}}>Right View Image</Text>
          </TouchableOpacity>
          {image2 && <Image source={{ uri: image2 }} style={styles.displayImage} />}

          <TouchableOpacity onPress={pickImage3} style={styles.mButton} >
            <Text style={{color: '#FAF7F0'}}>Left View Image</Text>
          </TouchableOpacity>
          {image3 && <Image source={{ uri: image3 }} style={styles.displayImage} />}
          
          <View style={{margin: 20}}></View>
          <Button title='Save' style={{marginTop: 20}} onPress={()=>Alert.alert(' Have Been Save ... !')}/>

          <View style={{margin: 40}}></View>
      </ScrollView>
      </SafeAreaView>
      

    </View> //Main Container
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    marginTop: 70
  },
  mButton:{
    borderWidth:  1,
    margin: 10,
    padding: 5,
    borderRadius: 20,
    backgroundColor: '#628E90',
    alignItems: 'center', 
    color: '#FAF7F0'
  },
  header:{
    flexDirection: 'row',
    backgroundColor: '#628E90',
    width: '100%',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    marginTop: 40,
    marginBottom: 10,
    padding: 5,
  },
  mtextHeader:{
    color: '#FAF7F0',
    fontFamily: 'Myanmarfonts', 
    fontSize: 13,
    paddingTop: 5
  },
  mcardLayout:{ 
    padding: 10,  
  },
  dropdown:{
    fontFamily: 'Myanmarfonts', 
    fontSize: 10,
    width: '100%'
  },
  Inputstyle:{
    width: '100%',
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 5,
    fontFamily: 'Myanmarfonts', 
    fontSize: 10,
    paddingTop: 5,
    paddingLeft: 5,
  },
  mTextArea:{
    borderWidth: 1,
    justifyContent:'center',
    alignItems: 'center',
    height: 300,
    width: 340,
    fontFamily: 'Myanmarfonts', 
    fontSize: 13,
  },
  textareaContainer: {
    height: 180,
    padding: 5,
    backgroundColor: '#F5FCFF',
  },
  textarea: {
    textAlignVertical: 'top',  // hack android
    height: 170,
    fontSize: 14,
    color: '#333',
  },
  displayImage: {
    alignItems: 'center',
    width: '100%', 
    height: 200,
    borderWidth: 2,
    borderColor: '#B2B2B2', 
    borderRadius: 10,
    padding: 10,
  }

});
