import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { RootState } from "../../redux/store";

const CheckoutScreen = ({ navigation }: any) => {
    const cart = useSelector((state: RootState) => state.cart.cart);

    const calculateTotal = () => {
        return cart.reduce((total: number, item: any) => total + item.price.discounted * item.quantity, 0);
    };

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={{ uri: 'https://img.freepik.com/premium-vector/hand-painted-watercolor-sky-clouds-abstract-watercolor-background-blue-fluid-painting_101553-1706.jpg?semt=ais_hybrid' }}
                style={styles.backgroundImage}
            >
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <View style={styles.container}>
                        <Text style={styles.title}>Order Summary</Text>

                        <View style={styles.section}>
                            <Text style={styles.text}>DP ({cart.length} items)</Text>
                            <Text style={styles.price}>₹ {calculateTotal()}</Text>
                        </View>

                        <View style={styles.section}>
                            <Text style={styles.text}>Total PV</Text>
                            <Text style={styles.pv}>0.97</Text>
                        </View>

                        <TouchableOpacity style={styles.voucherButton}>
                            <Text style={styles.voucherText}>Add Vouchers / Promotions</Text>
                            <FontAwesome5 name="chevron-right" size={14} color="#3498db" />
                        </TouchableOpacity>

                        <View style={styles.paymentSection}>
                            <Text style={styles.paymentText}>Payment Method :</Text>
                            <Text style={styles.paymentMethod}>Online</Text>
                        </View>

                        <View style={styles.totalContainer}>
                            <Text style={styles.totalLabel}>Total Amount to be paid</Text>
                            <Text style={styles.totalPrice}>₹ {calculateTotal()}</Text>
                        </View>

                        <View style={styles.totalContainer}>
                            <Text style={styles.totalLabel}>Total Earned PV</Text>
                            <Text style={styles.pv}>0.97</Text>
                        </View>

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.editCartButton} onPress={() => navigation.navigate("CartScreen")}>
                                <Text style={styles.buttonText}>Edit Cart</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.proceedButton}>
                                <Text style={styles.buttonText}>Proceed</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
    },
    container: {
        width:350,
        padding: 20,
        backgroundColor: "rgba(255,255,255,0.9)",
        borderRadius: 10,
        // borderWidth:5
    },
    title: { fontSize: 18, fontWeight: "bold", marginBottom: 15, color: "#555", textAlign: "center" },
    section: { flexDirection: "row", justifyContent: "space-between", marginBottom: 10 },
    text: { fontSize: 16, color: "#333" },
    price: { fontSize: 16, fontWeight: "bold", color: "green" },
    pv: { fontSize: 16, fontWeight: "bold", color: "#27ae60" },
    voucherButton: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 10, borderBottomWidth: 1, borderColor: "#eee" },
    voucherText: { fontSize: 16, color: "#3498db" },
    paymentSection: { flexDirection: "row", justifyContent: "space-between", marginTop: 10 },
    paymentText: { fontSize: 16, color: "#777" },
    paymentMethod: { fontSize: 16, fontWeight: "bold", color: "#333" },
    totalContainer: { flexDirection: "row", justifyContent: "space-between", marginTop: 15 },
    totalLabel: { fontSize: 16, fontWeight: "bold", color: "#333" },
    totalPrice: { fontSize: 16, fontWeight: "bold", color: "black" },
    buttonContainer: { flexDirection: "row", marginTop: 30 },
    editCartButton: { flex: 1, backgroundColor: "#003366", padding: 12, alignItems: "center", borderRadius: 5 },
    proceedButton: { flex: 1, backgroundColor: "#2980b9", padding: 12, alignItems: "center", borderRadius: 5, marginLeft: 10 },
    buttonText: { fontSize: 16, fontWeight: "bold", color: "#fff" },
    backgroundImage: {
        flex: 1,
        width: "100%",
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
    },
});

export default CheckoutScreen;
