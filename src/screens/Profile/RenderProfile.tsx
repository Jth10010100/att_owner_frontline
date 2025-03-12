import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const profileImageURL = "https://via.placeholder.com/100"; // Replace with actual URL

const menuItems = [
    { id: 1, icon: "user", title: "Profile Details", subtitle: "View Breed, Birthday, etc." },
    { id: 2, icon: "file-medical", title: "Medical Record", subtitle: "View Prescription & Lab Reports" },
    { id: 3, icon: "calendar-check", title: "Appointments & Orders", subtitle: "Check Invoices & Order Details" },
    { id: 4, icon: "syringe", title: "Vaccination", subtitle: "View Pet Vaccination Records" },
    { id: 5, icon: "info-circle", title: "Need Help?", subtitle: "" },
    { id: 6, icon: "flask", title: "Lab Report", subtitle: "Check Your Worries Away" },
    { id: 7, icon: "utensils", title: "Food Preferences", subtitle: "Get Personalized Offers" },
];

const RenderProfile = () => {
    return (
        <ScrollView style={styles.container}>
            {/* Profile Image */}
            <View style={styles.profileContainer}>
                <Image source={{ uri: profileImageURL }} style={styles.profileImage} />
            </View>

            {/* Profile Cards */}
            <View style={styles.cardContainer}>
                {menuItems.map((item) => (
                    <View key={item.id} style={styles.card}>
                        <FontAwesome5 name={item.icon} size={30} color="black" />
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>{item.title}</Text>
                            {item.subtitle ? <Text style={styles.subtitle}>{item.subtitle}</Text> : null}
                        </View>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 20,
    },
    profileContainer: {
        alignItems: "center",
        marginVertical: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "#ccc",
    },
    cardContainer: {
        gap: 10,
    },
    card: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
        height: 80,
        borderWidth:0.5,
        borderColor:"gray"
    },
    textContainer: {
        marginLeft: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 14,
        color: "gray",
    },
});

export default RenderProfile;