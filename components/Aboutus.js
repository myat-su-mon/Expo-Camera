import react, { useState } from 'react';
import {ScrollView, TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native';




export default function Aboutus({ navigation }) {

  const [studentlst, setStudentlst] = useState([
      {id:1 , imagelink: ""}, 
      {id:2 , imagelink: ""}, 
  ]); 
  return (
    <View style={styles.container}>
        <Text style={{fontFamily:'Myanmarfonts', fontSize:12, }}>ကျွန်တော်/ကျွန်မတို့သည်</Text>
        <Text style={{fontFamily:'Myanmarfonts', fontSize:12, margin:5, marginBottom: 20, textAlign:'justify' , justifyContent:'flex-start'}}>Museology and Conservation in ပြတိုက်၏ ဘွဲ့လွန်ဒီပလိုမာသင်တန်းသည် 2009 ခုနှစ်ကတည်းက စတင်ခဲ့ပြီး၊ ပြတိုက်များ၏ အခြေခံနားလည်မှုကို တည်ဆောက်ကာ ကျောင်းသားများအား ပြတိုက်အလေ့အကျင့်ကောင်းများနှင့် ပတ်သက်သည့် အရည်အချင်းများနှင့် ကျွမ်းကျင်မှုများဖြင့် ပြတိုက်ဆိုင်ရာ ကျွမ်းကျင်ပညာရှင်များကို ဝေဖန်ပိုင်းခြား၍ တီထွင်ဖန်တီးနိုင်စေရန် ရည်ရွယ်ပါသည်။</Text>
        <Text style={{fontFamily:'Myanmarfonts', fontSize:12, }}>ရည်ရွယ်ချက်</Text>
        <Text style={{fontFamily:'Myanmarfonts', fontSize:12, margin:5, textAlign:'justify' , justifyContent:'flex-start'}}>ကျွန်တော်/ကျွန်မတို့သည် PGDM-19 Barth အတန်းမှ သင်တန်းသူ/သင်တန်းသားများဖြစ်ကြပါသည်။ ကျွန်တော်/ကျွန်မတို့၏ ကြိုးစားမှုသည် မြန်မာ့ယဉ်ကျေးမှုနှင့် မြန်မာ့နိုင်ငံ၏ သမိုင်းကြောင်းအဆင့်အတန်းကို ေခတ်မှီ နည်းပညာများ အသုံးပြုပြီး ကမ္ဘာ့အလည် ဂုဏ်၀ံ့ထည်စွာတည်ရှိကြောင်း သက်သေပြနိုင်ရန်ဖြစ်ပါသည်။</Text>
        <Text style={{fontFamily:'Myanmarfonts', fontSize:12, }}>ကျောင်းသားများစာရင်း</Text>
        <ScrollView>
          <View style={ styles.lstLayout}>
          <Text style={styles.lstSize} >ဉီးမင်းမင်းထိုက်</Text>
          <Text style={styles.lstSize} >ဒေါ်နန္ဒာလင်း</Text>
          <Text style={styles.lstSize} >ဉီးမင်းမင်းထိုက်</Text>
          <Text style={styles.lstSize} >ဒေါ်နန္ဒာလင်း</Text>
          <Text style={styles.lstSize} >ဉီးမင်းမင်းထိုက်</Text>
          <Text style={styles.lstSize} >ဒေါ်နန္ဒာလင်း</Text>
          <Text style={styles.lstSize} >ဉီးမင်းမင်းထိုက်</Text>
          <Text style={styles.lstSize} >ဒေါ်နန္ဒာလင်း</Text>
          <Text style={styles.lstSize} >ဉီးမင်းမင်းထိုက်</Text>
          <Text style={styles.lstSize} >ဒေါ်နန္ဒာလင်း</Text>
          <Text style={styles.lstSize} >ဉီးမင်းမင်းထိုက်</Text>
          <Text style={styles.lstSize} >ဒေါ်နန္ဒာလင်း</Text>
          <Text style={styles.lstSize} >ဉီးမင်းမင်းထိုက်</Text>
          <Text style={styles.lstSize} >ဒေါ်နန္ဒာလင်း</Text>
          </View>
        </ScrollView>

        <TouchableOpacity style={styles.mButton} onPress={()=> navigation.goBack() }>
            <Text style={{color: '#FAF7F0'}}> Back Home</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50
  },
  mButton:{
    borderWidth:  1,
    margin: 5,
    padding: 5,
    borderRadius: 20,
    backgroundColor: '#628E90',
    
  }, 
  lstLayout:{
    flex: 1,
    flexDirection: 'row',
    flexWrap:'wrap',
    alignItems: 'flex-start', 
    marginTop: 5,        
    padding: 5, 
  },
  lstSize: {
    fontFamily: 'Myanmarfonts',
    fontSize: 12,
    borderWidth: 1,
    borderColor: '#5F9DF7',
    paddingTop: 7,
    width: '50%',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    marginBottom: 5,
    backgroundColor: '#EEEEEE',
  }
});
