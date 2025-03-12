import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native';

interface CustomInputProps extends TextInputProps {
    label: any;
    keyboardType: any;
}

const CustomInput: React.FC<CustomInputProps> = ({ label, value, placeholder, onChangeText, secureTextEntry, keyboardType }) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View style={styles.input}>
            {/* <Text style={styles.inputLabel}>{label}</Text> */}
            <TextInput
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor="#6b7280"
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                style={[styles.inputControl, isFocused && styles.inputControlFocused]}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        marginBottom: 18,
    },
    inputLabel: {
        fontSize: 12,
        fontWeight: '900',
        color: '#222',
        marginBottom: 5,
        marginLeft: 5,
        fontFamily: 'sans-serif'
    },
    inputControl: {
        height: 50,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        fontSize: 15,
        fontWeight: '500',
        color: '#222',
        borderBottomWidth: 2, // 👈 Only bottom border
        borderBottomColor: '#006a95', // 👈 Border color
        fontFamily: 'sans-serif-medium',
    },
    inputControlFocused: {
        borderWidth: 3,
        borderColor: '#C9D3DB',
    },
});

export default CustomInput;
