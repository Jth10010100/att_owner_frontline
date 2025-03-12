import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const AddressComponent = () => {
    return (
        <View style={styles.container}>
            {/* Address Detail Header */}
            <Text style={styles.header}>Address Detail</Text>

            {/* Use Current Address Button */}
            <TouchableOpacity style={styles.currentAddressButton}>
                <FontAwesome5 name="map-marker-alt" size={20} color="green" />
                <Text style={styles.currentAddressText}>Use Your Current Address</Text>
            </TouchableOpacity>

            {/* Input Fields */}
            {[
                { label: "Country", placeholder: "Select Country", icon: "globe" },
                { label: "Pincode", placeholder: "Enter Pincode", icon: "map-marker-alt" },
                { label: "State", placeholder: "Select State", icon: "map-marker-alt" },
                { label: "City", placeholder: "Select City", icon: "city" },
                { label: "Address House No Street Name Locality", placeholder: "Enter Address (House No, Street Name, Local)", icon: "home" },
                { label: "Alternate Mobile Number", placeholder: "Enter Alternate Mobile Number", icon: "phone" }
            ].map((field, index) => (
                <View key={index} style={styles.inputContainer}>
                    <FontAwesome5 name={field.icon} size={18} color="#666" style={styles.icon} />
                    <TextInput placeholder={field.placeholder} style={styles.input} placeholderTextColor="#666" />
                    {["Country", "State", "City"].includes(field.label) && (
                        <FontAwesome5 name="chevron-down" size={14} color="#666" style={styles.dropdownIcon} />
                    )}
                </View>
            ))}

            {/* Save Button */}
            <TouchableOpacity style={styles.saveButton}>
                <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#fff",
        flex: 1
    },
    header: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#000"
    },
    currentAddressButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 12,
        backgroundColor: "rgba(0, 128, 0, 0.1)",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "green",
        marginBottom: 20
    },
    currentAddressText: {
        color: "green",
        fontWeight: "bold",
        marginLeft: 8
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f0f5f5",
        padding: 10,
        borderRadius: 10,
        marginBottom: 15
    },
    icon: {
        marginRight: 10
    },
    input: {
        flex: 1,
        fontSize: 14,
        color: "#000"
    },
    dropdownIcon: {
        marginLeft: 10
    },
    saveButton: {
        backgroundColor: "green",
        padding: 10,
        alignItems: "center",
        borderRadius: 10
    },
    saveButtonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16
    }
});

export default AddressComponent;
