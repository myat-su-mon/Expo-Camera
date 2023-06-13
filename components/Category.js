import react, {useState, useEffect} from 'react';
import { FlatList, Alert, TextInput, TouchableOpacity, Text, View, StyleSheet, Touchable } from 'react-native';
import axios from 'axios';



export default function Category({ navigation }) {

  const API = "http://192.168.100.26:3000/api/v1/categories";

  const [icategory, setCategory] = useState([
    // {Name: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...', Code: '7ABLSma6F6'}, 
    // {Name: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...', Code: '7ABLSma6F6'},     
  ]);


  function generateUUID(digits) {
    let str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVXZ';
    let uuid = [];
    for (let i = 0; i < digits; i++) {
        uuid.push(str[Math.floor(Math.random() * str.length)]);
    }
    return uuid.join('');
  }

  useEffect(()=>{
    getCategories();
  }, []);

  const getCategories = async() => {
    try {
      const response = await fetch(API);
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
              ပြတိုက်ပစ္စည်းများစာရင်းသွင်းရန်
          </Text>
        </View>
        
        <View style={styles.cardStyle}>
          <Text style={styles.mText}>
            ကုတ်နံပါတ် :  {generateUUID(20)}
            
          </Text> 
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.mText}>
              ပစ္စည်းအမည်
            </Text>  
            <TextInput style={styles.Inputstyle}/>
          </View>
        
          <View style={{alignItems:'center', marginTop: 10}}>
            <TouchableOpacity style={styles.mButton} onPress={()=> Alert.alert("Already Save") }>
              <Text style={{color: '#FAF7F0', textAlign: 'center', justifyContent: 'center', fontFamily: 'Myanmarfonts', fontSize: 10}}>သိမ်းဆည်းရန်</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.mButton} onPress={()=> navigation.goBack() }>
              <Text style={{color: '#FAF7F0', textAlign: 'center', justifyContent: 'center',fontSize: 10, fontFamily: 'Myanmarfonts'}}>မူလစာမျက်နှာသို့</Text>
            </TouchableOpacity>
          </View>
        
          <View style={{flexDirection: 'row', marginTop: 30}}>
            <View style={{backgroundColor: 'black', height: 2, flex: 1, alignSelf: 'center'}} />
            <Text style={{ alignSelf:'center', paddingHorizontal:5, fontSize: 13, fontFamily: 'Myanmarfonts', }}>အသေးစိတ်စာရင်း</Text>
            <View style={{backgroundColor: 'black', height: 2, flex: 1, alignSelf: 'center'}} />
          </View>
          

          {/* Display API Data */}
          <View>
              <FlatList  
                data={icategory}  
                renderItem={({item}) => (
                      <TouchableOpacity onPress={()=> Alert.alert('Comming Soon!!!') } >
                        <View style={{flex: 1, flexDirection:'row', marginBottom: 10,  }}>
                          <Text style={{ padding: 5, marginRight: 2 , borderBottomWidth:1}}> 
                                {item.id}
                          </Text>
                          <Text style={{padding: 5, marginRight: 2, borderBottomWidth:1}}>
                              {item.mName} 
                          </Text>
                        </View>
                      </TouchableOpacity>
                    )   
                }  
                keyExtractor={(item, index) => item.id}
              />  
          </View>
        
        
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
    marginTop: 50
  },
  mButton:{
    borderWidth:  1,
    marginTop: 10,
    paddingTop: 5,
    borderRadius: 20,
    backgroundColor: '#628E90',
    width: 200 ,  
  },
  header:{
    
    width: '100%',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  mtextHeader:{
    fontFamily: 'Myanmarfonts', 
    fontSize: 13,
    paddingTop: 5
  }, 
  cardStyle:{
    margin: 10, 
    flex: 1,
    //flexDirection: 'row'
  },
  mText:{
    fontFamily: 'Myanmarfonts', 
    fontSize: 10
  },
  Inputstyle:{
    width: 250,
    borderWidth: 1,
    paddingLeft: 5,
    marginHorizontal: 10,
    fontFamily: 'Myanmarfonts', 
    fontSize: 10
  }
});
