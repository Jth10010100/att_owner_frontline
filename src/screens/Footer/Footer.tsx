import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import { screenNavigationProp } from "../../navigation/types";
import { useSelector } from "react-redux";




const clinics = [

    // Near You Clinics
    { image: require("./ClinicsImages/clinnic9.jpg"), address: "Kwai Hing Veterinary Clinic", location: "Near You", sku: "NOI-001" },
    { image: require("./ClinicsImages/clinic2.jpeg"), address: "City Veteneray Center", location: "Near You", sku: "NOI-002" },
    { image: require("./ClinicsImages/clinic5.jpeg"), address: "Paws and Tails Vet Center", location: "Near You", sku: "NOI-003" },
    { image: require("./ClinicsImages/clinic6.jpeg"), address: "CityU Veterinary Medical Center", location: "Near You", sku: "NOI-004" },


    // Kwai Chung clinics

    { image: require("./ClinicsImages/clinnic9.jpg"), address: "Kwai Hing Veterinary Clinic,Kwai Chung", location: "Kwai Chung", sku: "NOI-001" },
    { image: require("./ClinicsImages/clinic11.jpg"), address: "Wellness Clinic | Pets On Tapp,Kwai Chung", location: "Kwai Chung", sku: "NOI-002" },
    { image: require("./ClinicsImages/clinic5.jpeg"), address: "Paws and Tails Vet Center,Kwai Chung", location: "Kwai Chung", sku: "NOI-003" },
    { image: require("./ClinicsImages/clinic1.jpeg"), address: "Petcare Animal Hospital,Kwai Chung", location: "Kwai Chung", sku: "NOI-004" },

    // Sha Tin Clinics
    { image: require("./ClinicsImages/clinic12.jpg"), address: "Shatin Animal Hospital,Sha Tin", location: "Sha Tin", sku: "CHE-001" },
    { image: require("./ClinicsImages/clinic13.jpeg"), address: "Sha Tin Wai Pet Clinic , Sha Tin", location: "Sha Tin", sku: "CHE-002" },
    { image: require("./ClinicsImages/clinic14.jpeg"), address: "Oriental veterinary hot sale clinic, Sha Tin", location: "Sha Tin", sku: "CHE-003" },
    { image: require("./ClinicsImages/clinic15.jpg"), address: "Mid Level Vet Clinic, Sha Tin", location: "Sha Tin", sku: "CHE-004" },

    // tsuen wan Clinics
    { image: require("./ClinicsImages/clinnic9.jpg"), address: "Kwai Hing Veterinary Clinic,tsuen wan", location: "tsuen wan", sku: "NOI-001" },
    { image: require("./ClinicsImages/clinic2.jpeg"), address: "City Veteneray Center,tsuen wan", location: "tsuen wan", sku: "NOI-002" },
    { image: require("./ClinicsImages/clinic5.jpeg"), address: "Paws and Tails Vet Center,tsuen wan", location: "tsuen wan", sku: "NOI-003" },
    { image: require("./ClinicsImages/clinic6.jpeg"), address: "CityU Veterinary Medical Center", location: "tsuen wan", sku: "NOI-004" },


];


export const Footer: React.FC = () => {
    const [selected, setSelected] = useState<string | null>("home");
    const navigation = useNavigation<screenNavigationProp>();

    const selectedLocation = useSelector((state: any) => state.localization.selectedLocation);

    const filteredClinics = clinics.filter(clinic => clinic.location === selectedLocation);

    const handleNavigation = (serviceName: string) => {
        switch (serviceName) {
            case "clinic":
                navigation.navigate("ClinicsScreen", { clinics  });
                break;
            case "profile":
                navigation.navigate("Profile");
                // navigation.navigate("cart");
                // navigation.navigate("address");
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
        { name: "All Services", icon: "user-cog", screen: "MedicalRecordScreen" },
        { name: "clinic", icon: "clinic-medical", screen: "ClinicsScreen" },
        { name: "shop", icon: "cart-plus", screen: "shoppingscreen" },
        { name: "more", icon: "ellipsis-h", screen: "renderprofile" },
    ];

    return (
        <View style={styles.footer}>
            {footerItems.map((item, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.button}
                    onPress={() => handleNavigation(item.name)}
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
