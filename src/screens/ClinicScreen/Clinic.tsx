import React from "react";
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { Icon, Button } from "react-native-elements";
import { useRoute } from "@react-navigation/native";
import { screenNavigationProp } from "../../navigation/types";
import {
    createStaticNavigation,
    useNavigation
} from '@react-navigation/native';





const services = [
    {
        id: '1',
        title: 'OPD Appointments',
        description: 'Compassionate Care, Expert Advice. ,Compassionate Care, Expert Advice.',
        price: 'HK$599',
        oldPrice: 'HK$749',
        discount: '20% Off | Only for first time...',
        image: require("./opd.jpg")
    },
    // {
    //     id: '2',
    //     title: 'Bath',
    //     description: 'Spa Bath by Certified Groomers & Free Vet Consult | Hygiene Cut C...',
    //     price: 'HK$824',
    //     oldPrice: 'HK$1099',
    //     discount: '25% Off | Only for first time...',
    //     image: require("./download.jpg"),
    // },
    // {
    //     id: '3',
    //     title: 'Full Body Hair Cut',
    //     description: 'Full Body Haircuts by Certified Groomers & Free Vet Consult',
    //     price: 'HK$1359',
    //     oldPrice: 'HK$1699',
    //     discount: '20% Off | Only for first time...',
    //     image: require("./haircut.jpg"),
    // },
    // {
    //     id: '4',
    //     title: 'Full Body Haircut & Bath',
    //     description: 'Professional Bathing and Full Body Haircuts & Free Vet Consult',
    //     price: 'HK$1724',
    //     oldPrice: 'HK$2299',
    //     discount: '25% Off | Only for first time...',
    //     image: require("./bathandcut.jpg"),
    // },
];


const ServiceItem = ({ item, navigation }: any) => {
    const handlePress = () => {
        if (true) {
            // If the title is "OPD Consultation", navigate to a specific screen
            navigation.navigate("slotbookingscreen", { item });  // Replace with the actual screen name
        } else {
            // Default navigation behavior
            // navigation.navigate("slotbookingscreen");
        }
    };

    return (
        <View style={styles.serviceCard}>
            <View style={styles.serviceTextContainer}>
                <Text style={styles.serviceTitle}>{item.title}</Text>
                <Text style={styles.serviceDescription}>{item.description}</Text>
                <Text style={styles.servicePrice}>
                    Starts at <Text style={styles.serviceNewPrice}>{item.price}</Text>{' '}
                    <Text style={styles.serviceOldPrice}>{item.oldPrice}</Text>
                </Text>
                <View style={styles.serviceDiscountContainer}>
                    <Text style={styles.serviceDiscountText}>🎉 {item.discount}</Text>
                </View>
            </View>
            <Image source={item.image} style={styles.serviceImage} />
            <TouchableOpacity
                style={styles.serviceBookNowButton}
                onPress={handlePress}
            >
                <Text style={styles.serviceBookNowText}>Book Now</Text>
            </TouchableOpacity>
        </View>
    );
};



const reviews = [
    {
        id: "1",
        name: "Louis Chengwen",
        image: require("./placeholder.jpeg"), // Replace with actual URL
        rating: 5,
        review: "Amazing staff. Everyone from groomers, doctors, and receptionists is so polite and helpful. My dog ...",
    },
    {
        id: "2",
        name: "Kim Namjoon",
        image: require("./placeholder.jpeg"), // Replace with actual URL
        rating: 5,
        review: "Amazing services. Love how my cat looked after grooming. They took care of everything I ...",
    },
    {
        id: "3",
        name: "Jung Hoseok",
        image: require("./placeholder.jpeg"), // Replace with actual URL
        rating: 5,
        review: "Very friendly staff and doctor. Took my vet for the first visit a month back and Dr. Gourav answered ...",
    },
];


const GoogleReviews = () => {
    return (
        <View style={styles.prefixserviceContainer}>
            <Text style={styles.prefixserviceTitle}>Google Reviews <Text style={styles.prefixserviceRating}>4.7 ★★★★★</Text></Text>
            <Text style={styles.prefixserviceSubtext}>917+ reviews</Text>

            <View style={styles.prefixserviceRatings}>
                {['Excellent', 'Good', 'Average', 'Below Average', 'Poor'].map((label, index) => (
                    <View key={index} style={styles.prefixserviceRatingRow}>
                        <Text style={styles.prefixserviceLabel}>{label}</Text>
                        <View style={styles.prefixserviceProgressBarBackground}>
                            <View style={[styles.prefixserviceProgressBar, { width: `${(5 - index) * 20}%` }]} />
                        </View>
                    </View>
                ))}
            </View>

            <FlatList
                data={reviews}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.prefixserviceReviewCard}>
                        <Image source={item.image} style={styles.prefixserviceAvatar} />
                        <View style={styles.prefixserviceReviewContent}>
                            <Text style={styles.prefixserviceName}>{item.name}</Text>
                            <Text style={styles.prefixserviceStars}>★★★★★</Text>
                            <Text style={styles.prefixserviceReview}>{item.review}</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};



const ServicesSection = () => {

    const route = useRoute();
    const navigation = useNavigation<screenNavigationProp>();

    

    return (
        <View>
            <Text style={styles.serviceHeading}>Services</Text>
            <FlatList
                data={services}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <ServiceItem item={item} navigation={navigation} />}
            />
            <TouchableOpacity style={styles.serviceBottomBookNow}
                onPress={() => navigation.navigate("slotbookingscreen")}
            >
                <Text style={styles.serviceBottomBookNowText}>Book Now.</Text>
            </TouchableOpacity>
        </View>
    );
};

const Clinic = () => {
    const route = useRoute();
    let { item }: any = route.params;

    console.log(item, "data from clnic screen")
    return (
        <ScrollView style={styles.container}>
            {/* Header Image and Name */}
            <Image
                source={item.image}
                style={styles.headerImage}
            />
            <Text style={styles.clinicName}>{item.address}</Text>

            {/* Timing and Location */}
            <View style={styles.infoRow}>
                <Icon name="schedule" type="material" size={20} />
                <Text style={styles.infoText}>Open 9:30 AM - 9:00 PM</Text>
                <Icon name="location-pin" type="material" size={20} />
                <Text style={styles.infoText}>2.4 Km</Text>
            </View>

            {/* Doctors Section */}
            <View style={styles.doctorsSection}>
                <View style={styles.doctorCard}>
                    <Image
                        source={require("./DoctorPics/doctor2.jpeg")}
                        style={styles.doctorImage}
                    />
                    <Text style={styles.doctorName}>Dr. Lee Chiching</Text>
                    <Text style={styles.doctorDetails}>BVSc. & AH, M.V.SC - 5+ Years</Text>
                </View>
                <View style={styles.doctorCard}>
                    <Image
                        source={require("./DoctorPics/doctor3.jpeg")}
                        style={styles.doctorImage}
                    />
                    <Text style={styles.doctorName}>Dr. Louis Chengwen</Text>
                    <Text style={styles.doctorDetails}>BVSc. & AH - 3+ Years</Text>
                </View>
            </View>

            {/* Services Section */}
            <View style={styles.servicesSection}>
                <ServicesSection />
            </View>

            <View>
                <GoogleReviews />
            </View>

            {/* Bottom Book Now Button */}
            {/* <Button title="Book Now" buttonStyle={styles.bottomButton} /> */}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff" },
    headerImage: { width: "100%", height: 200 },
    clinicName: { fontSize: 20, fontWeight: "bold", padding: 10 },
    infoRow: { flexDirection: "row", alignItems: "center", padding: 10 },
    infoText: { marginLeft: 5, marginRight: 10 },
    doctorsSection: { flexDirection: "row", justifyContent: "space-around", padding: 10 },
    doctorCard: { alignItems: "center", width: "45%" },
    doctorImage: { width: 80, height: 80, borderRadius: 40 },
    doctorName: { fontWeight: "bold", marginTop: 5 },
    doctorDetails: { fontSize: 12, textAlign: "center" },
    servicesSection: { padding: 10 },
    sectionTitle: { fontSize: 18, fontWeight: "bold" },
    viewRateCard: { color: "blue", textAlign: "right" },
    serviceCard: { backgroundColor: "#f8f8f8", padding: 10, borderRadius: 8, marginTop: 10, display: "flex", flexDirection: "row" },
    serviceTitle: { fontWeight: "bold",fontSize:18 ,color:"red" },
    serviceDesc: { fontSize: 12, color: "gray" },
    price: { fontSize: 16, fontWeight: "bold" },
    strikethrough: { textDecorationLine: "line-through", color: "gray" },
    discount: { color: "green", fontSize: 12 },
    bookNowButton: { backgroundColor: "#007BFF", marginTop: 10 },
    bottomButton: { backgroundColor: "#007BFF", margin: 20 },



    serviceHeading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginVertical: 10,
    },
    serviceCard1: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginHorizontal: 15,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    serviceTextContainer: {
        flex: 1,
        marginRight: 10,
    },
    serviceTitle1: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    serviceDescription: {
        fontSize: 15,
        color: '#666',
        marginVertical: 5,
    },
    servicePrice: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    serviceNewPrice: {
        color: '#000',
    },
    serviceOldPrice: {
        textDecorationLine: 'line-through',
        color: 'gray',
    },
    serviceDiscountContainer: {
        backgroundColor: '#E6F4EA',
        padding: 5,
        borderRadius: 5,
        marginTop: 5,
    },
    serviceDiscountText: {
        color: '#2E7D32',
        fontSize: 12,
    },
    serviceImage: {
        width: 80,
        height: 80,
        borderRadius: 10,
    },
    serviceBookNowButton: {
        backgroundColor: '#0A3875',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 5,
        position: 'absolute',
        bottom: 5,
        right: 10,
    },
    serviceBookNowText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
    serviceBottomBookNow: {
        backgroundColor: '#0A3875',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginHorizontal: 15,
        marginVertical: 10,
    },
    serviceBottomBookNowText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },






















    prefixserviceContainer: { padding: 20, backgroundColor: "#fff" },
    prefixserviceTitle: { fontSize: 22, fontWeight: "bold" },
    prefixserviceRating: { fontSize: 22, color: "#FFD700" },
    prefixserviceSubtext: { fontSize: 14, color: "gray" },
    prefixserviceRatings: { marginVertical: 10 },
    prefixserviceRatingRow: { flexDirection: "row", alignItems: "center", marginBottom: 5 },
    prefixserviceLabel: { width: 100, fontSize: 14 },
    prefixserviceProgressBarBackground: { flex: 1, height: 8, backgroundColor: "#E0E0E0", borderRadius: 5 },
    prefixserviceProgressBar: { height: "100%", backgroundColor: "#4CAF50", borderRadius: 5 },
    prefixserviceReviewCard: { flexDirection: "row", padding: 10, borderBottomWidth: 1, borderBottomColor: "#ddd" },
    prefixserviceAvatar: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
    prefixserviceReviewContent: { flex: 1 },
    prefixserviceName: { fontWeight: "bold", fontSize: 16 },
    prefixserviceStars: { color: "#FFD700" },
    prefixserviceReview: { fontSize: 14, color: "#555" },
    prefixserviceButton: { backgroundColor: "#0033cc", padding: 15, borderRadius: 5, alignItems: "center", marginTop: 20 },
    prefixserviceButtonText: { color: "white", fontSize: 16, fontWeight: "bold" }














});

export default Clinic;
