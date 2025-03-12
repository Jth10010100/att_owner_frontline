import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { removeFromCart } from "../../redux/cartSlice"; // Import Redux action
import { useNavigation } from "@react-navigation/native";
import { screenNavigationProp } from "../../navigation/types";

const CartScreen = ({ props }: any) => {
    const dispatch = useDispatch();
    const cart = useSelector((state: RootState) => state.cart.cart);

    const navigation = useNavigation<screenNavigationProp>();

    console.log("data from cart", cart)

    const calculateTotal = () => {
        return cart.reduce((total: number, item: any) => total + item.price.discounted * item.quantity, 0);
    };

    const handleRemoveItem = (productId: string) => {
        dispatch(removeFromCart(productId)); // Dispatch remove action
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>🛒 Your Cart</Text>

            {cart.length === 0 ? (
                <Text style={styles.emptyCart}>Cart is Empty!</Text>
            ) : (
                // <FlatList
                //     data={cart}
                //     keyExtractor={(item) => item.productId.toString()}
                //     renderItem={({ item }) => (
                //         <View style={styles.cartItem}>
                //             {/* <Image source={{ uri: item.imageUrl }} style={styles.image} /> */}
                //             <Image source={require("./noimage.jpg")} style={styles.image} />
                //             <View style={styles.details}>
                //                 <Text style={styles.name}>{item.itemName}</Text>
                //                 <Text style={styles.price}>₹{item.price.discounted} x {item.quantity}</Text>
                //             </View>
                //             {/* 🚀 DELETE BUTTON */}
                //             <TouchableOpacity style={styles.deleteButton} onPress={() => handleRemoveItem(item.productId)}>
                //                 <Text style={styles.deleteText}>🗑</Text>
                //             </TouchableOpacity>
                //         </View>
                //     )}
                // />
                <FlatList
                    data={cart}
                    keyExtractor={(item) => item.productId}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate("productcard", { product: item })}
                            style={styles.card}
                        >
                            {/* <Image source={} style={styles.image} /> */}
                            <Image source={require("./product1.jpg")} style={styles.image} />
                            <View style={styles.details}>
                                <Text style={styles.name}>{item.itemName}</Text>
                                <Text style={styles.price}>
                                    ₹{item.price.discounted}{" "}
                                    <Text style={styles.regularPrice}>₹{item.price.regular}</Text>
                                </Text>
                                <Text style={styles.availability}>{""}</Text>

                            </View>
                        </TouchableOpacity>
                    )}
                />
            )}

            {/* 🛍 Total Price */}
            <View style={styles.totalContainer}>
                <Text style={styles.totalText}>Total: ₹{calculateTotal()}</Text>
                <TouchableOpacity style={styles.checkoutButton}
                    onPress={() => { navigation.navigate("checkout"); }}
                >
                    <Text style={styles.checkoutText}>Proceed to Checkout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 10, backgroundColor: "#fff" },
    title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
    emptyCart: { fontSize: 16, textAlign: "center", marginTop: 50 },
    // cartItem: { flexDirection: "row", alignItems: "center", padding: 10, backgroundColor: "#fff", marginBottom: 10, borderRadius: 10, shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 5 },
    cartItem: {
        flexDirection: "row",
        backgroundColor: "#fff",
        padding: 10,
        marginVertical: 5,
        borderRadius: 8,
        elevation: 2,
        alignItems: "center",
    },
    image: { width: 80, height: 80, borderRadius: 10 },
    details: { flex: 1, marginLeft: 10 },
    name: { fontSize: 16, fontWeight: "bold" },
    price: { fontSize: 14, color: "green" },
    deleteButton: { backgroundColor: "#fff", padding: 8, borderRadius: 5 },
    deleteText: { color: "#fff", fontSize: 14, fontWeight: "bold" },
    totalContainer: { marginTop: 20, padding: 10, backgroundColor: "#F0FFFF", borderRadius: 5, alignItems: "center" ,elevation:2},
    totalText: { fontSize: 18, fontWeight: "bold" },
    checkoutButton: { marginTop: 10, backgroundColor: "#003366", padding: 10, borderRadius: 5 },
    checkoutText: {  fontWeight: "bold",color:"#fff" },






    availability: {
        fontSize: 12,
        color: "#555",
        marginTop: 5
    },


    productContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    productImage: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
        marginRight: 10,
    },
    productDetails: {
        flex: 1,
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    productPrice: {
        fontSize: 14,
        color: '#666',
    },


    regularPrice: {
        textDecorationLine: "line-through",
        color: "red",
        fontSize: 12
    },

    card: {
        flexDirection: "row",
        backgroundColor: "#fff",
        padding: 10,
        marginVertical: 5,
        borderRadius: 8,
        elevation: 2,
        alignItems: "center",
    },




});

export default CartScreen;
