import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, Modal, FlatList } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import { useDispatch, useSelector } from 'react-redux';
import { setLocation } from '../../redux/localizationSlice';
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { screenNavigationProp } from "../../navigation/types";


const dropdownData = ["Near You", "Kwai Chung", "Sha Tin", "tsuen wan"]; // Dummy data


type MyComponentProps = {
    title: string;
};



const locations = [
    { name: "Near You", icon: "location-outline" },
    { name: "Kwai Chung", image: require("./Kawai.png") },
    { name: "Sha Tin", image: require("./Shatin.jpg") },
    { name: "tsuen wan", image: require("./Tsuen.jpeg") },
];

const Header: React.FC<MyComponentProps> = (props: any) => {



    const dispatch = useDispatch();

    const selectedLocation = useSelector((state: any) => state.localization.selectedLocation);
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const [selected, setSelected] = useState<string | null>(selectedLocation);

    const navigation = useNavigation<screenNavigationProp>();
    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return "Good Morning 🌅";
        else if (hour < 17) return "Good Afternoon ☀️";
        else return "Good Evening 🌙";
    };

    const handleSelection = (item: string) => {
        dispatch(setLocation(item));
        setSelected(item);
        setDropdownVisible(false);
    };

    const ownerName = "Ryan Wong";

    return (
        <>
            <View style={styles.header}>



                <View >
                    <View>
                        <Text style={styles.greeting}>{getGreeting()}</Text>
                        <Text style={styles.ownerName}>{ownerName}</Text>
                    </View>
                </View>
                {/* Left Image */}
                {/* <Image source={require('../onBoarding/attLogo.jpg')} style={styles.logo} /> */}

                {/* Dropdown */}
                {props.title != "shop" ? <TouchableOpacity style={styles.dropdownContainer} onPress={() => setDropdownVisible(!dropdownVisible)}>
                    <Text style={styles.dropdownText}>{selected}</Text>
                    <FontAwesome5
                        name="chevron-down"
                        size={15}
                        color="white"
                    />
                </TouchableOpacity> : <TouchableOpacity style={styles.dropdownContainer} onPress={() => { navigation.navigate("address"); }}>
                    <FontAwesome5
                        name="plus-circle"
                        size={15}
                        color="white"
                    />
                    <Text style={styles.dropdownText}>Add Address</Text>

                </TouchableOpacity>}

                {/* Cart Icon */}
                {/* <Image source={{ uri: "data:image/png;base64,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" }} style={styles.icon} /> */}
                <View style={{ flexDirection: "row", gap: 20 }}>
                    <TouchableOpacity onPress={() => { navigation.navigate("cart"); }}>
                        <Image
                            source={{ uri:"data:image/jpeg;base64,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"}} // Dummy Profile Image
                            style={styles.profileImage}
                        />
                    </TouchableOpacity>

                    {/* <TouchableOpacity onPress={() => setSelected("user")}>
                        <FontAwesome5
                            name="user"
                            size={24}
                            color={selected === "user" ? "white" : "white"}
                        />
                    </TouchableOpacity> */}
                </View>
                {/* Profile Icon */}
                {/* <Image source={require('../Footer/Profile.png')} style={styles.icon1} /> */}
            </View>



            {/* Dropdown Modal */}
            {/* <Modal transparent={true} visible={dropdownVisible} animationType="fade">
                <TouchableOpacity style={styles.modalOverlay} onPress={() => setDropdownVisible(false)}>
                    <View style={styles.dropdownMenu}>
                        <FlatList
                            data={dropdownData}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={styles.dropdownItem}
                                    onPress={() => handleSelection(item)}
                                >
                                    <Text style={styles.dropdownItemText}>{item}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </TouchableOpacity>
            </Modal> */}


            <Modal visible={dropdownVisible} animationType="slide" transparent={true}>
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        {/* Close Button */}
                        <TouchableOpacity onPress={() => setDropdownVisible(false)} style={styles.closeButton}>
                            <Ionicons name="close" size={27} color="black" />
                            {/* <Text>Close</Text> */}
                        </TouchableOpacity>

                        <Text style={styles.modalTitle}>Select Location</Text>

                        {/* Locations Grid */}
                        <FlatList
                            data={locations}
                            numColumns={3}
                            keyExtractor={(item) => item.name}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={styles.locationItem}
                                    onPress={() => {
                                        // setSelectedLocation(item.name);
                                        // setModalVisible(false);
                                        handleSelection(item.name)
                                        setDropdownVisible(false)
                                    }}
                                >
                                    {item.icon ? (
                                        <View style={styles.nearYouIcon}>
                                            <Ionicons name={item.icon} size={30} color="white" />
                                        </View>
                                    ) : (
                                        <Image source={item.image} style={styles.locationImage} />
                                    )}
                                    <Text style={styles.locationText}>{item.name}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </View>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    header: {
        // position: "absolute",
        top: 0,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#003366",
        paddingHorizontal: 15,
        paddingVertical: 10,
        elevation: 5,
        zIndex: 10,

    },
    logo: {
        width: 45,
        height: 45,
        borderRadius: 10
        // resizeMode: "contain",
    },
    dropdownContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    dropdownText: {
        marginRight: 5,
        fontSize: 16,
        color: "white",
        fontWeight: "900",
        marginLeft: 3
    },
    icon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        resizeMode: "contain",
    },
    icon1: {
        width: 30,
        height: 30,
        marginLeft: -30,
        resizeMode: "contain",
    },
    modalOverlay1: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    dropdownMenu: {
        backgroundColor: "#fff",
        width: 200,
        borderRadius: 10,
        padding: 10,
    },
    dropdownItem: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
    dropdownItemText: {
        fontSize: 16,
        textAlign: "center",
    },







    header1: { flexDirection: "row", alignItems: "center", padding: 10 },
    headerText: { fontSize: 18, fontWeight: "bold", marginRight: 5 },
    modalOverlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.5)", justifyContent: "flex-end" },
    modalContainer: { backgroundColor: "white", padding: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20, width: "100%" },
    closeButton: { alignSelf: "flex-end", padding: 10 },
    modalTitle: { fontSize: 20, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
    locationItem: { alignItems: "center", flex: 1, marginBottom: 20 },
    locationImage: { width: 60, height: 60, borderRadius: 30 },
    locationText: { marginTop: 5, fontSize: 14 },
    nearYouIcon: { width: 60, height: 60, borderRadius: 30, backgroundColor: "#e29547", justifyContent: "center", alignItems: "center" },











    container: {
        flexDirection: 'row',
        backgroundColor: '#088F8F',
        padding: 8,
        // borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        // margin: 10,
        width: "100%",
        // marginTop:60
    },
    greeting: {
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold',
    },
    ownerName: {
        fontSize: 20,
        color: 'white',
        fontWeight: '600',
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: 'white',
    },
});

export default Header;
