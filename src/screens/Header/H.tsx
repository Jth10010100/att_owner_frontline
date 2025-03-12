import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useDispatch } from 'react-redux';
import { setLocation } from '../redux/localizationSlice';

const locations = ['Delhi', 'Mumbai', 'Bangalore']; // Example locations

const Header = () => {
    const dispatch = useDispatch();

    const handleSelect = (location: string) => {
        dispatch(setLocation(location)); // Save selected location in Redux
    };

    return (
        <View>
            <Text>Near You</Text>
            <FlatList
                data={locations}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleSelect(item)}>
                        <Text>{item}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item}
            />
        </View>
    );
};

export default Header;
