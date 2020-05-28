
import React, { useEffect, useState } from 'react';
import {View, Text, Image, TextInput, KeyboardAvoidingView, TouchableOpacity} from "react-native";
import Style from "./style";
import SearchController from '../../controller/SearchController';

export default function Home({ navigation }){

    const [welcome, setWelcome] = useState('\t'+'Seja Bem vindo !! '+ '\n' +'Sistema de consulta (SC)' + '\n\t'+ '  SENAI-IBGE');
    
    const [name, setName] = useState('');
    const [year, setYear] = useState(0);

    
    return  (
        
        <KeyboardAvoidingView style={Style.container}>
            <View style={Style.body}>
                <Text style={Style.textHeader}>{welcome}</Text>
            <TextInput placeholder='Digite seu nome (Sem espaço)' onChangeText={(name) => { setName(name); }} placeholderTextColor='#fff' style={Style.input} />
            <TextInput keyboardType='numeric' placeholder='Qual o seu ano de nascimento?' onChangeText={(year) => { setYear(year); }} placeholderTextColor='#fff' style={Style.input} />
            <TouchableOpacity style={Style.button} onPress={() => { SearchController(name, year, navigation); }}><Text style={Style.buttonText}>Exibir</Text></TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );

}
 