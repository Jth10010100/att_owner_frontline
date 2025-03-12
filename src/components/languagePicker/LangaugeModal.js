import {
    View,
    Text,
    Modal,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Dimensions,
    Image,
    ScrollView,
    TouchableWithoutFeedback,
} from 'react-native';
import React, { useState, useEffect } from 'react';

const { height, width } = Dimensions.get('window');

const LanguageModal = ({
    langModalVisible,
    setLangModalVisible,
    onSelectLang,
    updateCountryName
}) => {

    const [languages, setLanguages] = useState([
        { name: 'English', selected: true, locale: 'en' },
        { name: 'French', selected: false, locale: 'fr' },
        { name: 'हिन्दी', selected: false, locale: 'hi' },
        // { name: 'ਪੰਜਾਬੀ', selected: false, locale: 'pa' },
        // { name: 'اردو', selected: false, locale: 'ur' },
    ]);  // Track languages with their selection status

    // Update selected language and set the colors accordingly
    const onSelect = (item) => {
        console.log("....item.....",item)
        const updatedLanguages = languages.map((lang) =>
            lang.locale === item.locale
                ? { ...lang, selected: true }  // Set the selected language
                : { ...lang, selected: false } // Set others to false
        );
        setLanguages(updatedLanguages); 
        // Modal close karega
        onSelectLang(item.locale);
        setLangModalVisible(false);
         // Update the state to trigger re-render
        console.log("Selected Language: ", item);  // Log full value to console
    };

    return (
        <ScrollView>
            <Modal
                animationType="slide"
                transparent={true}
                visible={langModalVisible}
                onRequestClose={() => setLangModalVisible(false)}
            >
                <TouchableWithoutFeedback onPress={() => setLangModalVisible(false)}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.title}>Select Language</Text>
                            <View style={{ width: '100%' }}>
                                <FlatList
                                    data={languages}
                                    renderItem={({ item }) => (
                                        <TouchableOpacity
                                            style={[
                                                styles.languageItem,
                                                { borderColor: item.selected ? 'blue' : 'black' },
                                            ]}
                                            onPress={() => {
                                                onSelect(item);
                                                setLangModalVisible(false); // Close modal after selecting language
                                            }}
                                        >
                                            <Image
                                                source={item.selected
                                                    ? require('../../assets/images copy/selected.png')
                                                    : require('../../assets/images copy/non_selected.png')
                                                }
                                                style={[styles.icon, { tintColor: item.selected ? 'blue' : 'black' }]}
                                            />
                                            <Text
                                                style={{
                                                    marginLeft: 20,
                                                    fontSize: 18,
                                                    color: item.selected ? 'blue' : 'black',
                                                }}
                                            >
                                                {item.name}
                                            </Text>
                                        </TouchableOpacity>
                                    )}
                                />
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

        </ScrollView>
    );
};

export default LanguageModal;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,.5)',
        borderRadius: 5
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 50,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
    },
    languageItem: {
        width: '100%',
        height: 32,
        marginTop: 10,
        paddingRight: 25,
        flexDirection: 'row',
    },
    icon: {
        width: 24,
        height: 24,
    },
    btns: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 20,
    },
    btn1: {
        width: '40%',
        height: 35,
        borderWidth: 0.5,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn2: {
        width: '40%',
        height: 35,
        borderWidth: 0.5,
        borderRadius: 10,
        backgroundColor: '#4B68E9',
        justifyContent: 'center',
        alignItems: 'center',
    },
});


//buttons cancep and apply
// <View style={styles.btns}>
//     <TouchableOpacity
//         style={styles.btn1}
//         onPress={() => {
//             setLangModalVisible(false);
//         }}>
//         <Text>Cancel</Text>
//     </TouchableOpacity>
//     <TouchableOpacity
//         style={styles.btn2}
//         onPress={() => {
//             setLangModalVisible(false);
//             const selected = languages.find(lang => lang.selected);
//             if (selected) {
//                 console.log(",,,,,,,,,,,,,,selectedfinally", selected.locale)
//                 onSelectLang(selected.locale);  // Apply the selected language
//             }
//         }}>
//         <Text style={{ color: '#fff' }}>Apply</Text>
//     </TouchableOpacity>
// </View>