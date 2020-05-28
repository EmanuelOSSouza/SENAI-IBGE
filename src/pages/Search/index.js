import React, { useEffect, useState } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import Style from './style';


export default function Search() {
    const [description, setDescription] = useState('');
    useEffect(() => {
        async function getDescription() {
            setDescription(await AsyncStorage.getItem('description'));
        }

        getDescription();
    }, []);
    return (
        <View style={Style.container}>
            <Text style={Style.text}>{description}</Text>
        </View>
    );
}
