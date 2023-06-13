import react, {useEffect, useState, useCallback} from 'react';
import { TouchableOpacity, FlatList, Text, View, StyleSheet } from 'react-native';

export default function QrScan(){
    return(
        <View style={styles.container}>
            <Text>I'M QR Scanner</Text>
            <TouchableOpacity style={styles.mButton}>
                <Text style={{color: '#FAF7F0', textAlign: 'center', paddingTop: 5,  fontFamily: 'Myanmarfonts', fontSize: 14}}>Scan me</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
      },
      mButton:{
        borderWidth:  1,
        margin: 5,
        //marginLeft: 10,
        padding: 5,
        borderRadius: 10,
        backgroundColor: '#628E90',
        alignItems: 'center', 
        color: '#FAF7F0'
      },
})