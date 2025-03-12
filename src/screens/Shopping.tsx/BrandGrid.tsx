import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

const brands = [
    { id: "1", name: "Farmina", image: require("./brandimages/brand1.jpg") },
    { id: "2", name: "Royal Can", image: require("./brandimages/brand2.jpg") },
    { id: "3", name: "Pet Strong", image: require("./brandimages/brand3.jpg") },
    { id: "4", name: "Whiskas", image: require("./brandimages/brand4.jpg") },
    { id: "5", name: "Sheba", image: require("./brandimages/brand5.jpg") },
    { id: "6", name: "Pedigree", image: require("./brandimages/brand6.jpg") },
    { id: "7", name: "Basil", image: require("./brandimages/brand7.jpg") },
    { id: "8", name: "JerHigh", image: require("./brandimages/brand8.jpg") },
    { id: "9", name: "Drools", image: require("./brandimages/brand8.jpg") },
];

const numColumns = 3;
const screenWidth = Dimensions.get("window").width;
const cardSize = (screenWidth - 50) / numColumns-20; // Adjusted for spacing

const BrandGrid = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Brands</Text>

            {/* Mapping Brands into Rows */}
            <View style={styles.gridContainer}>
                {brands.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        style={styles.card}
                        onPress={() => navigation.navigate("BrandDetails", { brand: item })}
                    >
                        <Image source={item.image} style={styles.logo} resizeMode="contain" />
                        <Text style={styles.brandName}>{item.name}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <TouchableOpacity style={styles.viewAllButton}>
                <Text style={styles.viewAllText}>View all →</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: "#542B76",
        borderRadius: 20,
        margin: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 10,
    },
    gridContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    card: {
        width: cardSize,
        backgroundColor: "#fff",
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
        marginHorizontal: 5, // Added margin to prevent overlap
        padding: 10,
    },
    logo: {
        width: "70%",
        height: 40,
    },
    brandName: {
        marginTop: 5,
        fontSize: 14,
        fontWeight: "bold",
        textAlign: "center",
        color: "#333",
    },
    viewAllButton: {
        marginTop: 10,
        alignItems: "center",
    },
    viewAllText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default BrandGrid;
