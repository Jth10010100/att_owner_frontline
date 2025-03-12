import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import DatePicker from 'react-native-date-picker';

interface CustomDatePickerProps {
    label: string;
    placeholder: string; // Placeholder as a prop
    onDateSelect: (date: string) => void;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({ label, placeholder, onDateSelect }) => {
    const [date, setDate] = useState<Date | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [borderWidth] = useState(new Animated.Value(1));

    const handleConfirm = (selectedDate: Date) => {
        setDate(selectedDate);
        onDateSelect(selectedDate.toLocaleDateString('en-GB')); // Format: DD/MM/YYYY
        setIsOpen(false);
    };

    const toggleDatePicker = () => {
        Animated.timing(borderWidth, {
            toValue: isOpen ? 1 : 3, // Animate border width when toggling
            duration: 200,
            useNativeDriver: false,
        }).start();
        setIsOpen(!isOpen);
    };

    return (
        <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>{label}</Text>
            <Animated.View style={[styles.dateInput, { borderWidth }]}>
                <TouchableOpacity onPress={toggleDatePicker} style={styles.touchable}>
                    <Text style={styles.inputControl}>
                        {date ? date.toLocaleDateString('en-GB') : placeholder}
                    </Text>
                    <Text style={styles.arrow}>📅</Text>
                </TouchableOpacity>
            </Animated.View>

            {/* Date Picker Modal */}
            <DatePicker
                modal
                open={isOpen}
                date={date || new Date()}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={() => setIsOpen(false)}
                maximumDate={new Date()} // Restrict future dates
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: 5,
        // paddingHorizontal: 10,
        marginTop:-27
    },
    inputLabel: {
        fontSize: 12,
        fontWeight: '900',
        color: '#222',
        marginBottom: 5,
        marginLeft: 5,
    },
    dateInput: {
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        borderColor: '#C9D3DB',
        justifyContent: 'space-between',
        borderWidth:0
    },
    touchable: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
        width: '100%',
    },
    inputControl: {
        fontSize: 15,
        fontWeight: '500',
        color: '#6b7280',
    },
    arrow: {
        fontSize: 16,
        color: '#555',
    },
});

export default CustomDatePicker;
