import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import { screenNavigationProp } from "../../navigation/types";
import { useSelector } from "react-redux";




const clinics = [

    // Near You
    { image: require("./clinic1.jpg"), address: "123 Pet Street,BSR", location: "Near You", sku: "NOI-001" },
    { image: require("./clinic2.jpg"), address: "456 Dog Avenue, BSR", location: "Near You", sku: "NOI-002" },
    { image: require("./clinic3.jpg"), address: "789 Cat Road, BSR", location: "Near You", sku: "NOI-003" },
    { image: require("./clinic4.jpg"), address: "101 Vet Lane, BSR", location: "Near You", sku: "NOI-004" },

    // Noida Clinics
    { image: require("./clinic1.jpg"), address: "123 Pet Street, Noida", location: "Noida", sku: "NOI-001" },
    { image: require("./clinic2.jpg"), address: "456 Dog Avenue, Noida", location: "Noida", sku: "NOI-002" },
    { image: require("./clinic3.jpg"), address: "789 Cat Road, Noida", location: "Noida", sku: "NOI-003" },
    { image: require("./clinic4.jpg"), address: "101 Vet Lane, Noida", location: "Noida", sku: "NOI-004" },

    // Chennai Clinics
    { image: require("./clinic1.jpg"), address: "202 Paw Plaza, Chennai", location: "Chennai", sku: "CHE-001" },
    { image: require("./clinic2.jpg"), address: "303 Tail Way, Chennai", location: "Chennai", sku: "CHE-002" },
    { image: require("./clinic3.jpg"), address: "404 Bark Street, Chennai", location: "Chennai", sku: "CHE-003" },
    { image: require("./clinic4.jpg"), address: "505 Furry Ave, Chennai", location: "Chennai", sku: "CHE-004" },

    // Ghaziabad Clinics
    { image: require("./clinic1.jpg"), address: "606 Woof Lane, Ghaziabad", location: "Ghaziabad", sku: "GHA-001" },
    { image: require("./clinic2.jpg"), address: "707 Paws Street, Ghaziabad", location: "Ghaziabad", sku: "GHA-002" },
    { image: require("./clinic3.jpg"), address: "808 Pet Avenue, Ghaziabad", location: "Ghaziabad", sku: "GHA-003" },
    { image: require("./clinic4.jpg"), address: "909 Tail Road, Ghaziabad", location: "Ghaziabad", sku: "GHA-004" },

    // Delhi Clinics
    { image: require("./clinic1.jpg"), address: "111 Furry Plaza, Delhi", location: "Delhi", sku: "DEL-001" },
    { image: require("./clinic2.jpg"), address: "222 Claw Avenue, Delhi", location: "Delhi", sku: "DEL-002" },
    { image: require("./clinic3.jpg"), address: "333 Bark Street, Delhi", location: "Delhi", sku: "DEL-003" },
    { image: require("./clinic4.jpg"), address: "444 Vet Lane, Delhi", location: "Delhi", sku: "DEL-004" },

    // Gurugram Clinics
    { image: require("./clinic1.jpg"), address: "555 Animal Care, Gurugram", location: "Gurugram", sku: "GUR-001" },
    { image: require("./clinic2.jpg"), address: "666 Pet Park, Gurugram", location: "Gurugram", sku: "GUR-002" },
    { image: require("./clinic3.jpg"), address: "777 Woof Avenue, Gurugram", location: "Gurugram", sku: "GUR-003" },
    { image: require("./clinic4.jpg"), address: "888 Furry Road, Gurugram", location: "Gurugram", sku: "GUR-004" },

    // Faridabad Clinics
    { image: require("./clinic1.jpg"), address: "999 Vet Plaza, Faridabad", location: "Faridabad", sku: "FAR-001" },
    { image: require("./clinic2.jpg"), address: "1010 Paws Street, Faridabad", location: "Faridabad", sku: "FAR-002" },
    { image: require("./clinic3.jpg"), address: "1111 Tail Avenue, Faridabad", location: "Faridabad", sku: "FAR-003" },
    { image: require("./clinic4.jpg"), address: "1212 Pet Road, Faridabad", location: "Faridabad", sku: "FAR-004" },
];


export const Footer: React.FC = () => {
    const [selected, setSelected] = useState<string | null>("home");
    const navigation = useNavigation<screenNavigationProp>();

    const selectedLocation = useSelector((state: any) => state.localization.selectedLocation);

    const filteredClinics = clinics.filter(clinic => clinic.location === selectedLocation);

    const handleNavigation = (serviceName: string) => {
        switch (serviceName) {
            case "clinic":
                navigation.navigate("ClinicsScreen", { clinics: filteredClinics });
                break;
            case "profile":
                navigation.navigate("renderprofile");
                break;
            case "shop":
                navigation.navigate("shoppingscreen");
                break;
            case "home":
                navigation.navigate("dashboard");
                break;
            default:
                console.warn("No navigation defined for this service");
        }
    };


    const footerItems = [
        { name: "home", icon: "home", screen: "dashboard" },
        { name: "clinic", icon: "clinic-medical", screen: "ClinicsScreen" },
        { name: "medical record", icon: "notes-medical", screen: "MedicalRecordScreen" },
        { name: "shop", icon: "cart-plus", screen: "shoppingscreen" },
        { name: "profile", icon: "user", screen: "renderprofile" },
    ];

    return (
        <View style={styles.footer}>
            {footerItems.map((item, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.button}
                    onPress={() => handleNavigation(item.screen)}
                >
                    <FontAwesome5
                        name={item.icon}
                        size={24}
                        color={selected === item.name ? "black" : "gray"}
                    />
                    <Text
                        style={[
                            styles.text,
                            { color: selected === item.name ? "black" : "gray" }
                        ]}
                    >
                        {item.name}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};



const styles = StyleSheet.create({
    footer: {
        width: "100%",
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingVertical: 10,
        position: "absolute",
        bottom: 0,
    },
    button: {
        alignItems: "center",
    },
    text: {
        fontSize: 12,
        textTransform: "lowercase",
        marginTop: 5,
    },
});

export default Footer;
