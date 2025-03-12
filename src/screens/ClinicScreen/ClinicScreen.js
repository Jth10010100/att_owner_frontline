import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";
import {
    createStaticNavigation,
    useNavigation
} from '@react-navigation/native';

import { screenNavigationProp } from "../../navigation/types";


const ClinicsScreen = () => {
    const route = useRoute();


    const navigation = useNavigation();

    const { clinics } = route.params; // Get clinics data from navigation

    const selectedLocationData = useSelector((state) => state.localization.selectedLocation);

    // Set the initial selected location from Redux state
    const [selectedLocation, setSelectedLocation] = useState(selectedLocationData);

    useEffect(() => {
        setSelectedLocation(selectedLocationData);
    }, [selectedLocationData]);

    const allLocations = ["Near You", "Kwai Chung", "Sha Tin", "tsuen wan"];

    // Move the selected location to the first position
    const locations = [
        selectedLocation,
        ...allLocations.filter(loc => loc !== selectedLocation)
    ];

    // Handle location selection
    const handleLocationSelect = (location) => {
        setSelectedLocation(location);
    };

    // Filter clinics based on the selected location
    const filteredClinics = clinics.filter(clinic => clinic.location === selectedLocation);

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>All Clinics</Text>

            {/* Scrollable Button List */}
            <View style={styles.buttonWrapper}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.buttonContainer}>
                    {locations.map((location, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[
                                styles.filterButton,
                                selectedLocation === location && styles.selectedButton
                            ]}
                            onPress={() => handleLocationSelect(location)}
                        >
                            <Text style={[
                                styles.buttonText,
                                selectedLocation === location && styles.selectedButtonText
                            ]}>
                                {location}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            {/* Clinics List */}
            <FlatList
                data={filteredClinics}
                keyExtractor={(_, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyText}>No clinics available for this location.</Text>
                    </View>
                )}
                renderItem={({ item }) => (
                    <View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("clinic", { item })}
                        >
                            <View style={styles.clinicCard}>
                                <Image source={item.image} style={styles.clinicImage} />
                                <Text style={styles.addressText}>{item.address}</Text>
                            </View>
                            <View style={styles.separator}></View>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#F0FFFF"
    },
    heading: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10
    },
    buttonWrapper: {
        height: 50,
        marginBottom: 10,
        justifyContent: "center",
    },
    buttonContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    filterButton: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        backgroundColor: "#e0e0e0",
        borderRadius: 15,
        marginRight: 8,
    },
    selectedButton: {
        backgroundColor: "#003366",
    },
    buttonText: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#333",
    },
    selectedButtonText: {
        color: "#fff",
    },
    clinicCard: {
        marginBottom: 16,
        borderRadius: 10,
        overflow: "hidden",
    },
    clinicImage: {
        width: "100%",
        height: 150,
        resizeMode: "cover"
    },
    addressText: {
        padding: 8,
        fontSize: 16,
        fontWeight: "bold",
        color:"#003366"
    },
    separator: {
        height: 0.5,
        borderWidth: 0.5,
        width: "100%",
        marginVertical: 20,
        backgroundColor:"black"

    },
    emptyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20
    },
    emptyText: {
        fontSize: 16,
        color: "#888"
    }
});

export default ClinicsScreen;
