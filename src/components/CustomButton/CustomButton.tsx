import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

interface CustomButtonProps {
    title: string;
    onPress: () => void;
    backgroundColor?: string;
    textColor?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress, backgroundColor = '#0077B6', textColor = '#fff' }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.btn, { backgroundColor }]}>
                <Text style={[styles.btnText, { color: textColor }]}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        // borderColor: '#075eec',
        borderColor: '#2872fa',
        backgroundColor:"#0077B6"
    },
    btnText: {
        fontSize: 18,
        lineHeight: 26,
        fontWeight: '600',
    },
});

export default CustomButton;
