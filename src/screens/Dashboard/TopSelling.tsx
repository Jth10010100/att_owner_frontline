import React from "react";
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { dogfoodlist } from "../Products/Productdummydata/ProductList"
import { useNavigation } from "@react-navigation/native";
import { screenNavigationProp } from "../../navigation/types";


const TopSelling = (prop:any) => {
    const navigation = useNavigation<screenNavigationProp>();
    return (
        <View style={styles.topsellingContainer}>
            {/* Header */}
            <Text style={styles.topsellingTitle}>{prop.title}</Text>
            <Text style={styles.topsellingSubtitle}>More than 1k+ options to choose for your pet 🐶🐱</Text>

            {/* Horizontal Scroll List */}
            <FlatList
                data={dogfoodlist.result}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.productId}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate("productcard", { product: item })}
                        style={styles.topsellingCard}
                    >
                        <View style={styles.topsellingDiscountBadge}>
                            <Text style={styles.topsellingDiscountText}>16% Off</Text>
                        </View>
                        <Image source={item.imageUrls} style={styles.topsellingProductImage} />
                        <Text style={styles.topsellingProductName}>{item.itemName}</Text>
                        <Text style={styles.topsellingPrice}>
                            ₹{item.price.discounted}{" "}
                            <Text style={styles.topsellingRegularPrice}>₹{item.price.regular}</Text>
                        </Text>
                        {/* ADD Button */}
                        <TouchableOpacity style={styles.addButton} >
                            <Text style={styles.addButtonText}>ADD</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                )}
            />

        </View>
    );
};
 
const styles = StyleSheet.create({
    topsellingContainer: {
        padding: 15,
        backgroundColor: "#FFF",
        height: 365,
    },
    topsellingTitle: {
        fontSize: 20,
        fontWeight: "bold",
    },
    topsellingSubtitle: {
        fontSize: 14,
        color: "#666",
        marginBottom: 15,
    },
    topsellingCard: {
        width: 200,
        marginRight: 15,
        padding: 30,
        borderRadius: 10,
        backgroundColor: "#FFF",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        borderWidth: 2,
        borderColor: "lightgrey",
        alignItems: "center",
    },
    topsellingDiscountBadge: {
        position: "absolute",
        top: 5,
        left: 5,
        backgroundColor: "#4CAF50",
        paddingVertical: 3,
        paddingHorizontal: 8,
        borderRadius: 5,
    },
    topsellingDiscountText: {
        color: "#FFF",
        fontSize: 12,
        fontWeight: "bold",
    },
    topsellingProductImage: {
        width: "100%",
        height: 100,
        borderRadius: 8,
        resizeMode: "contain",
        borderColor: "grey",
    },
    topsellingProductName: {
        fontSize: 14,
        fontWeight: "bold",
        marginTop: 10,
        textAlign: "center",
    },
    topsellingPrice: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 5,
    },
    topsellingRegularPrice: {
        fontSize: 14,
        color: "#999",
        textDecorationLine: "line-through",
    },
    addButton: {
        marginTop: 10,
        backgroundColor: "#FF5722",
        paddingVertical: 8,
        paddingHorizontal: 25,
        borderRadius: 5,
    },
    addButtonText: {
        color: "#FFF",
        fontSize: 14,
        fontWeight: "bold",
    },
});

export default TopSelling;
