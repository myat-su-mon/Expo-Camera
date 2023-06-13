import react, {useEffect, useState, useCallback} from 'react';
import { TouchableOpacity, FlatList, Text, View, StyleSheet, Touchable } from 'react-native';
import DropDownPicker from "react-native-dropdown-picker";
import {useForm, Controller} from 'react-hook-form';

export default function ReviewAll({ navigation }) {
  const categories_API = "http://192.168.100.26:3000/api/v1/categories";
  const [icategory, setCategory] = useState([]);

  const [genderOpen, setGenderOpen] = useState(false);
  const [genderValue, setGenderValue] = useState(null);
  const [gender, setGender] = useState([
    { label: "ယောက်ကျား", value: "male" },
    { label: "မိန်းမ", value: "female" },
    { label: "အခြောက်", value: "neutral" },
    { label: "ေဘာျပား", value: "super" },
  ]);
  const onGenderOpen = useCallback(() => {
    //setCompanyOpen(false);
  }, []);
  const { handleSubmit, control } = useForm();
  const [value, onChangeText] = useState('');


  const [CardData, setCardData] = useState([
    { id: 1, category: "စမ်းသပ်-၁", item_name: "ပစ္စည်းအမျိုးအမည်", detail: "အသေးစိတ်များ" },
    { id: 2, category: "စမ်းသပ်-၂", item_name: "ပစ္စည်းအမျိုးအမည်", detail: "အသေးစိတ်များ" },
    { id: 3, category: "စမ်းသပ်-၃", item_name: "ပစ္စည်းအမျိုးအမည်", detail: "အသေးစိတ်များ" },
    { id: 4, category: "စမ်းသပ်-၄", item_name: "ပစ္စည်းအမျိုးအမည်", detail: "အသေးစိတ်များ" },
    { id: 5, category: "စမ်းသပ်-၅", item_name: "ပစ္စည်းအမျိုးအမည်", detail: "အသေးစိတ်များ" },
    { id: 6, category: "စမ်းသပ်-၆", item_name: "ပစ္စည်းအမျိုးအမည်", detail: "အသေးစိတ်များ" },
    { id: 7, category: "စမ်းသပ်-၇", item_name: "ပစ္စည်းအမျိုးအမည်", detail: "အသေးစိတ်များ" }
  ]);


  useEffect(()=>{
    getCategories();
  }, []);

  const getCategories = async() => {
    try {
      const response = await fetch(categories_API);
      const json = await response.json();
      setCategory(json);
    } catch (error) {
      console.error(error);
    } finally {
      
    }
  } 

  return (
    <View style={styles.container}>
        <View style={styles.header}> 
          <Text style={styles.mtextHeader}>
              ပြတိုက်ပစ္စည်းများစာရင်းများပြန်ကြည့်ရှုရန်
          </Text>
        </View>
        <TouchableOpacity style={styles.mButton} onPress={()=> navigation.goBack() }>
          <Text style={{color: '#FAF7F0', textAlign: 'center', paddingTop: 5,  fontFamily: 'Myanmarfonts', fontSize: 10}}>မူလစာမျက်နှာသို့</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mButton} onPress={()=> navigation.navigate('QR Scanner')}>
          <Text style={{color: '#FAF7F0', textAlign: 'center', paddingTop: 5,  fontFamily: 'Myanmarfonts', fontSize: 10}}>QR ဖြင့်ရှာဖွေရန်</Text>
        </TouchableOpacity>

        <View style={{marginTop: 5}}>
            <DropDownPicker
                style={{marginBottom: 10, fontFamily: 'Myanmarfonts', fontSize:10}}
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
        </View>

        <View style={styles.cardStyle}>
            <FlatList  
             keyExtractor={(item, index) => {return item.id}}
              data={CardData}  
              renderItem={({item}) => (
                <View style={{borderWidth: 1, margin: 5, padding: 5, borderTopLeftRadius: 20, 
                  borderBottomEndRadius:20, borderColor:'#628E90'}}>
                  <Text style={styles.itemHederText}>အမျိုးအစားအမည်</Text>
                  <Text style={styles.itemText} >{item.category}</Text>
                  <Text style={styles.itemHederText}>ပစ္စည်းအမည်</Text>
                  <Text style={styles.itemText}>{item.item_name}</Text>
                  <Text style={styles.itemHederText}>အကြောင်းအရာ</Text>
                  <Text style={styles.itemText}>{item.detail}</Text>
                </View>
              )}    
              />  
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
    marginTop: 50
  },
  header:{    
    width: '100%',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    flexDirection: 'row'
  },
  mtextHeader:{
    //color: '#FAF7F0',
    fontFamily: 'Myanmarfonts', 
    fontSize: 13,
    paddingTop: 5
  },
  mButton:{
    borderWidth:  1,
    margin: 5,
    marginLeft: 10,
    padding: 5,
    borderRadius: 20,
    backgroundColor: '#628E90',
    alignItems: 'center', 
    color: '#FAF7F0'
  },
  itemHederText: {
    color: '#000000',
    borderEndWidth: 1,
    fontFamily: 'Myanmarfonts', 
    fontSize: 12,
  }, 
  itemText:{
    marginLeft: 20,
    color: '#B2B2B2',
    fontFamily: 'Myanmarfonts', 
    fontSize: 10,
  }, 
  cardStyle:{
    marginBottom: 250,
  }
});
