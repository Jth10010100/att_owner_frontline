import React, { useState } from 'react';
import { Animated, Text, TouchableOpacity, FlatList, StyleSheet, View, Modal, Pressable } from 'react-native';

interface CustomDropdownProps {
    label: string;
    value: string;
    placeholder: string;
    options: Array<{ label: string, value: string }>;
    onValueSelect: (value: string) => void;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ label, value, placeholder, onValueSelect, options }) => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string>(value || "");
    const [isFocused, setIsFocused] = useState(false);

    const handleSelectOption = (option: { label: string, value: string }) => {
        setSelectedOption(option.value);
        onValueSelect(option.value);
        setIsDropdownVisible(false);
        setIsFocused(false); // Reset focus when selecting an option
    };

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
        setIsFocused(!isDropdownVisible); // Set focus when opening the dropdown
    };

    return (
        <View style={styles.inputContainer}>
            <Animated.View style={[styles.dropdown, isFocused ? styles.inputControlFocused : styles.inputControl]}>
                <TouchableOpacity onPress={toggleDropdown} style={styles.touchable}>
                    <Text style={styles.inputText}>{selectedOption || placeholder}</Text>
                    <Text style={styles.arrow}>{isDropdownVisible ? '▼' : '▶'}</Text>
                </TouchableOpacity>
            </Animated.View>

            {/* Modal for overlay effect */}
            <Modal transparent visible={isDropdownVisible} animationType="fade">
                <Pressable style={styles.overlay} onPress={() => { setIsDropdownVisible(false); setIsFocused(false); }}>
                    <View style={styles.dropdownContainer}>
                        <View style={styles.dropdownOptions}>
                            <FlatList
                                data={options}
                                keyExtractor={(item) => item.value}
                                renderItem={({ item }) => (
                                    <TouchableOpacity onPress={() => handleSelectOption(item)} style={styles.optionContainer}>
                                        <View style={styles.radioContainer}>
                                            {selectedOption === item.value ? (
                                                <View style={styles.selectedRadio} />
                                            ) : (
                                                <View style={styles.radio} />
                                            )}
                                        </View>
                                        <Text style={styles.optionText}>{item.label}</Text>
                                    </TouchableOpacity>
                                )}
                                showsVerticalScrollIndicator={false}
                            />
                        </View>
                    </View>
                </Pressable>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: 15,
        // paddingHorizontal: 10,
    },
    dropdown: {
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        justifyContent: 'space-between',
    },
    inputControl: {
        borderWidth: 0.5,
        borderColor: '#C9D3DB',
    },
    inputControlFocused: {
        borderWidth: 3,
        borderColor: '#C9D3DB',
    },
    touchable: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
        width: '100%',
    },
    inputText: {
        fontSize: 15,
        fontWeight: '500',
        color: '#6b7280',
    },
    arrow: {
        fontSize: 16,
        color: '#555',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dropdownContainer: {
        width: '80%',
    },
    dropdownOptions: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        maxHeight: 150,
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    radioContainer: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#C9D3DB',
        justifyContent: 'center',
        alignItems: 'center',
    },
    radio: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#fff',
    },
    selectedRadio: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#007AFF',
    },
    optionText: {
        fontSize: 16,
        color: '#222',
    },
});

export default CustomDropdown;































// import React, { useState } from 'react';
// import { Text, TouchableOpacity, FlatList, StyleSheet, View } from 'react-native';

// interface CustomDropdownProps {
//     label: string;
//     value: string;
//     placeholder: string;
//     options: Array<{ label: string, value: string }>;
//     onValueSelect: (value: string) => void;
// }

// const CustomDropdown: React.FC<CustomDropdownProps> = ({ label, value, placeholder, onValueSelect, options }) => {
//     const [isDropdownVisible, setIsDropdownVisible] = useState(false);
//     const [selectedOption, setSelectedOption] = useState<string>(value || "");

//     const handleSelectOption = (option: { label: string, value: string }) => {
//         setSelectedOption(option.value);
//         onValueSelect(option.value);
//         setIsDropdownVisible(false);
//     };

//     const toggleDropdown = () => {
//         setIsDropdownVisible(!isDropdownVisible);
//     };

//     return (
//         <View style={styles.inputContainer}>
//             <TouchableOpacity onPress={toggleDropdown} style={[styles.dropdown, isDropdownVisible && styles.dropdownExpanded]}>
//                 <Text style={styles.inputText}>{selectedOption || placeholder}</Text>
//                 <Text style={styles.arrow}>{isDropdownVisible ? '▲' : '▼'}</Text>
//             </TouchableOpacity>

//             {isDropdownVisible && (
//                 <View style={styles.dropdownOptions}>
//                     <FlatList
//                         data={options}
//                         keyExtractor={(item) => item.value}
//                         renderItem={({ item }) => (
//                             <TouchableOpacity onPress={() => handleSelectOption(item)} style={styles.optionContainer}>
//                                 <Text style={styles.optionText}>{item.label}</Text>
//                             </TouchableOpacity>
//                         )}
//                         showsVerticalScrollIndicator={false}
//                     />
//                 </View>
//             )}
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     inputContainer: {
//         marginBottom: 15,
//         paddingHorizontal: 10,
//     },
//     dropdown: {
//         height: 50,
//         backgroundColor: '#fff',
//         borderRadius: 12,
//         flexDirection: 'row',
//         alignItems: 'center',
//         paddingHorizontal: 16,
//         justifyContent: 'space-between',
//         borderWidth: 1,
//         borderColor: '#C9D3DB',
//     },
//     dropdownExpanded: {
//         borderBottomLeftRadius: 0,
//         borderBottomRightRadius: 0,
//     },
//     inputText: {
//         fontSize: 15,
//         fontWeight: '500',
//         color: '#6b7280',
//     },
//     arrow: {
//         fontSize: 16,
//         color: '#555',
//     },
//     dropdownOptions: {
//         backgroundColor: '#fff',
//         borderBottomLeftRadius: 10,
//         borderBottomRightRadius: 10,
//         borderWidth: 1,
//         borderTopWidth: 0,
//         borderColor: '#C9D3DB',
//         padding: 10,
//         maxHeight: 100,
//         overflow:'scroll'
//     },
//     optionContainer: {
//         paddingVertical: 10,
//     },
//     optionText: {
//         fontSize: 16,
//         color: '#222',
//     },
// });

// export default CustomDropdown;
