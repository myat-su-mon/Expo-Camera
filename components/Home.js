import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import DropDownPicker from "react-native-dropdown-picker";
import react, { useState }from 'react';


export default function Home({ navigation }){

    const [genderOpen, setGenderOpen] = useState(false);
    const [genderValue, setGenderValue] = useState(null);
    const [gender, setGender] = useState([
      { label: "Male", value: "male" },
      { label: "Female", value: "female" },
      { label: "Prefer Not to Say", value: "neutral" },
    ]);


    return(
        <View style={styles.container}>
            <View style={styles.header}> 
                <Text style={styles.mtextHeader}>
                    ပြတိုက်ပစ္စည်းများစာရင်းသွင်းရန်
                </Text>
            </View>

            <View style={styles.buttonLayout}>
                <TouchableOpacity style={styles.buttonsize} onPress={()=> navigation.navigate('Category')}>
                    <Text style={styles.mtext}>
                        ပစ္စည်းအမျိုးအစား
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonsize}>
                    <Text style={styles.mtext} onPress={()=> navigation.navigate('Detail')}>
                        အသေးစိတ်အချက်အလက်များ
                    </Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.buttonsize} onPress={()=> navigation.navigate('ReviewAll')}>
                    <Text style={styles.mtext}>
                        ပြန်လည်ကြည့်ရှူရန်
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonsize} onPress={()=> navigation.navigate('Aboutus')}>
                    <Text style={styles.mtext}>
                    ဖတ်ရှုရန်အကြောင်းအရာ
                    </Text>
                </TouchableOpacity>


                <View style={{flexDirection: 'row', marginTop: 30}}>
                    <View style={{backgroundColor: 'black', height: 2, flex: 1, alignSelf: 'center'}} />
                    <Text style={{ alignSelf:'center', paddingHorizontal:5, fontSize: 13, fontFamily: 'Myanmarfonts', }}>အမျိုးသားပြတိုက်(ရန်ကုန်)</Text>
                    <View style={{backgroundColor: 'black', height: 2, flex: 1, alignSelf: 'center'}} />
                </View>


                <View style={{flexDirection: 'row', marginTop: 5}}>
                    <View style={{backgroundColor: 'black', height: 1, flex: 1, alignSelf: 'center'}} />
                    <Text style={{ alignSelf:'center', paddingHorizontal:5, fontSize: 13, fontStyle:'italic' }}>Post Graduate Diploma in Museology (19th Barth)</Text>
                    <View style={{backgroundColor: 'black', height: 1, flex: 1, alignSelf: 'center'}} />
                </View>

                

                <View style={styles.imageDisplay}>
                    <TouchableOpacity onPress={()=> navigation.push('Splash')}>
                        <Image
                            style={styles.imagelogo}
                            source={require('../assets/museum-icon-12890.png')}
                        />
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: 'row', marginTop: 5}}>
                    <View style={{backgroundColor: '#5F9DF7', height: 1, flex: 1, alignSelf: 'center'}} />
                    <Text style={{ alignSelf:'center', paddingHorizontal:5, fontSize: 13, fontStyle:'italic' }}>Iteam Collection Management System</Text>
                    <View style={{backgroundColor: '#5F9DF7', height: 1, flex: 1, alignSelf: 'center'}} />
                </View>

            </View>
            
           
            
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50
    },
    header:{
        width: '100%',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        borderWidth: 1,
    },
    textHeader:{
        color: '#3C4048',
        fontSize: 15,
        fontWeight: 'bold',
        //fontFamily: 'Myanmarfonts', 
        padding: 10,
    }, 
    buttonLayout:{
        flex: 1,
        flexDirection: 'row',
        flexWrap:'wrap',
        alignItems: 'flex-start', 
        marginTop: 20,        
        padding: 10
    },
    mtextHeader:{
        //color: '#FAF7F0',
        fontFamily: 'Myanmarfonts', 
        fontSize: 13,
        paddingTop: 5
    },
    mtext:{
        color: '#FAF7F0',
        fontFamily: 'Myanmarfonts', 
        fontSize: 10
    },
    buttonsize:{
        fontWeight: 'bold',
        fontFamily: 'Myanmarfonts',
        borderWidth: 1,
        borderColor: '#B2B2B2',
        padding: 5,
        width: '50%',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        //borderRadius: 10,
        marginBottom: 5,
        backgroundColor: '#628E90',
    },
    imageDisplay:{
        marginTop: 100,
        width: '100%',
        //backgroundColor: '#3C4048'
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
    },
    imagelogo:{
        // alignItems: 'center',
        // textAlign: 'center',
        // justifyContent: 'center',
        width: 150,
        height: 150
    }

  });