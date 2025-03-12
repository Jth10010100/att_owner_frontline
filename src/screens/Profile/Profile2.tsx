import React, { useState } from 'react';
import { Animated, Text, TouchableOpacity, FlatList, StyleSheet, View, Modal, Image } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

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
    const [borderWidth] = useState(new Animated.Value(1)); // Default borderWidth is 1
    const [profileImage, setProfileImage] = useState<string | null>(null);
    const [modalVisible, setModalVisible] = useState(false);

    const handleSelectOption = (option: { label: string, value: string }) => {
        setSelectedOption(option.value);
        onValueSelect(option.value);
        setIsDropdownVisible(false); // Close dropdown after selecting an option
    };

    const toggleDropdown = () => {
        Animated.timing(borderWidth, {
            toValue: isDropdownVisible ? 1 : 3, // Animate border width when toggling
            duration: 200,
            useNativeDriver: false,
        }).start();
        setIsDropdownVisible(!isDropdownVisible);
    };

    // Open camera
    const handleCameraLaunch = () => {
        launchCamera(
            { mediaType: 'photo', cameraType: 'front', quality: 1 },
            (response) => {
                if (response.assets && response.assets.length > 0) {
                    setProfileImage(response.assets[0].uri ?? null);
                }
            }
        );
        setModalVisible(false);
    };

    // Open gallery
    const handleGalleryLaunch = () => {
        launchImageLibrary(
            { mediaType: 'photo', quality: 1 },
            (response) => {
                if (response.assets && response.assets.length > 0) {
                    setProfileImage(response.assets[0].uri ?? null);
                }
            }
        );
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            {/* Profile Section */}
            <View style={styles.profileContainer}>
                <Image
                    source={profileImage ? { uri: profileImage } : { uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' }}
                    style={styles.profileImage}
                />
                <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.editButton}>
                    <Text style={styles.editText}>Edit</Text>
                </TouchableOpacity>
            </View>

            {/* Dropdown */}
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>{label}</Text>
                <Animated.View style={[styles.dropdown, { borderWidth: borderWidth }]}>
                    <TouchableOpacity onPress={toggleDropdown} style={styles.touchable}>
                        <Text style={styles.inputControl}>{selectedOption || placeholder}  {isDropdownVisible ? '▼' : '▶'}</Text>
                    </TouchableOpacity>
                </Animated.View>

                {/* Dropdown options */}
                {isDropdownVisible && (
                    <View style={styles.dropdownOptions}>
                        <FlatList
                            data={options}
                            keyExtractor={(item) => item.value}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => handleSelectOption(item)} style={styles.optionContainer}>
                                    <View style={styles.radioContainer}>
                                        {selectedOption === item.value ? (
                                            <View style={styles.selectedRadio}></View>
                                        ) : (
                                            <View style={styles.radio}></View>
                                        )}
                                    </View>
                                    <Text style={styles.optionText}>{item.label}</Text>
                                </TouchableOpacity>
                            )}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                )}
            </View>

            {/* Modal for Image Upload */}
            <Modal
                transparent={true}
                animationType="slide"
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity onPress={handleCameraLaunch} style={styles.modalButton}>
                            <Text style={styles.modalText}>Take Photo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleGalleryLaunch} style={styles.modalButton}>
                            <Text style={styles.modalText}>Upload Image</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalCancel}>
                            <Text style={styles.cancelText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    editButton: {
        marginLeft: 10,
        backgroundColor: '#007AFF',
        padding: 8,
        borderRadius: 5,
    },
    editText: {
        color: '#fff',
        fontWeight: '600',
    },
    inputContainer: {
        marginBottom: 15,
        position: 'relative',
        paddingHorizontal: 10,
    },
    inputLabel: {
        fontSize: 14,
        fontWeight: '600',
        color: '#222',
        marginBottom: 8,
    },
    dropdown: {
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 12,
        justifyContent: 'center',
        paddingHorizontal: 16,
        borderColor: '#C9D3DB',
    },
    touchable: {
        justifyContent: 'center',
        height: '100%',
    },
    inputControl: {
        fontSize: 15,
        fontWeight: '500',
        color: '#222',
    },
    dropdownOptions: {
        position: 'absolute',
        top: 68,
        left: 10,
        right: 10,
        backgroundColor: '#fff',
        borderWidth: 3,
        borderColor: '#C9D3DB',
        borderBottomStartRadius: 15,
        borderBottomEndRadius: 15,
        zIndex: 100,
        maxHeight: 250,
        overflow: 'hidden',
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
        marginRight: 10,
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
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    modalButton: {
        padding: 15,
    },
    modalText: {
        fontSize: 18,
    },
    modalCancel: {
        padding: 15,
        alignItems: 'center',
    },
    cancelText: {
        color: 'red',
        fontSize: 16,
    },
});

export default CustomDropdown;
