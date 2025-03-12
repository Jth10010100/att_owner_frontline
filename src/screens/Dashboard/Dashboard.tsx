import React, { useState, useRef, useEffect } from "react";
import { View, TextInput, Image, StyleSheet, Text, TouchableOpacity, ScrollView, FlatList, Dimensions, SafeAreaView, ImageBackground } from "react-native";
import { Footer } from "../Footer/Footer";
import Header from "../Header/Header";
import {
    createStaticNavigation,
    useNavigation
} from '@react-navigation/native';
import { screenNavigationProp } from "../../navigation/types";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";


import Icon from 'react-native-vector-icons/FontAwesome';
import TopSelling from "./TopSelling";
import ServiceCards from "./ServiceCards";
import OwnerInfo from "./OwnerInfo";


const serviceItems = [
    { name: "Consultation", image: require("./consultation.jpg") },
    { name: "Grooming", image: require("./grooming.jpg") },
    { name: "Vaccination", image: require("./vaccination.jpg") },
    { name: "Dog Food", image: require("./dogfood.jpg") },
    { name: "Cat Food", image: require("./catfood.jpg") },
    { name: "Pet Shop", image: require("./petshop.jpg") },
];


const services = [
    { name: 'Consultation', image: require("./consultation.jpg") },
    { name: 'Grooming', image: require("./grooming.jpg") },
    { name: 'Vaccination', image: require("./vaccination.jpg") },
    // Add more services here
];

const petStoreItems = [
    { name: 'Dog Food', image: require("./dogfood.jpg") },
    { name: 'Cat Food', image: require("./catfood.jpg") },
    { name: 'Pet Shop', image: require("./petshop.jpg") },
    // Add more store items here
];


const carouselImages = [
    require("./banner2.jpg"),
    require("./banner5.jpg"),
    require("./banner3.jpg"),
    require("./banner4.jpg"),
];


// const clinics = [
//     { image: require("./clinic1.jpg"), address: "123 Pet Street,Noida" },
//     { image: require("./clinic2.jpg"), address: "456 Dog Avenue,Chennai" },
//     { image: require("./clinic3.jpg"), address: "789 Cat Road,Gaziabaad" },
//     { image: require("./clinic4.jpg"), address: "789 Cat Road, Delhi" },
// ];



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




const blogs = [
    {
        image: require("./Blogimages/blog1.jpg"),
    },
    {
        image: require("./Blogimages/blog2.jpg"),
    },
    {
        image: require("./Blogimages/blog3.jpg"),
    }, {
        image: require("./Blogimages/blog4.jpg"),
    }, {
        image: require("./Blogimages/blog5.jpg"),
    }, {
        image: require("./Blogimages/blog6.jpg"),
    }, {
        image: require("./Blogimages/blog7.jpg"),
    }, {
        image: require("./Blogimages/blog8.jpg"),
    }, {
        image: require("./Blogimages/blog9.jpg"),
    },
];






const { width } = Dimensions.get("window");



const Dashboard: React.FC = () => {



    const navigation = useNavigation<screenNavigationProp>();

    const [activeIndex, setActiveIndex] = useState(0);
    const flatListRef = useRef<FlatList>(null);

    const [bookedSlots, setBookedSlots] = useState<any>([]);

    useEffect(() => {
        console.log("useEffect run on Dashboard");

        const getBookedSlots = async () => {
            try {
                const slots = await AsyncStorage.getItem("bookedSlots");
                if (slots) {
                    console.log("Retrieved Slots:", slots);
                    const parsedSlots = JSON.parse(slots);  // ✅ Parse JSON data
                    setBookedSlots([parsedSlots]);  // ✅ Store it as an array
                }
            } catch (error) {
                setBookedSlots([])
                console.error("Error fetching booked slots:", error);

            }
        };

        getBookedSlots();
    }, []);




    const selectedLocation = useSelector((state: any) => state.localization.selectedLocation);


    const categories = [
        { name: "Last Orders", image: require("./consultation.jpg") },
        // { name: "Grooming", image: require("./grooming.jpg") },
        { name: "Dog Treats", image: require("./vaccination.jpg") },
        { name: "Dog Food", image: require("./dogfood.jpg") },
        { name: "Cat Food", image: require("./catfood.jpg") },
        { name: "Cat Treats", image: require("./petshop.jpg") },
        // { name: "Toys", image: require("./petshop.jpg") },
        { name: "Veterinary Diet", image: require("./petshop.jpg") },
        // { name: "Upto 50% off", image: require("./petshop.jpg") },
    ];



    const filteredClinics = clinics.filter(clinic => clinic.location === selectedLocation);

    // console.log(selectedLocation)

    const onViewRef = useRef(({ viewableItems }: any) => {
        if (viewableItems.length > 0) {
            setActiveIndex(viewableItems[0].index);
        }
    });
    const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });


    // useEffect(() => {
    //     const fetchSlots = async () => {
    //         console.log("This data is from Dashboard")
    //         try {
    //             const savedSlots = await AsyncStorage.getItem("bookedSlots");
    //             if (savedSlots) {
    //                 console.log("This data is from Dashboard")
    //             }
    //         } catch (error) {
    //             console.error("Error loading booked slots:", error);
    //         }
    //     };

    //     fetchSlots(); // Call the async function
    // }, []);


    const handleNavigation = (serviceName: string) => {
        switch (serviceName) {
            case "Consultation":
                navigation.navigate("ClinicsScreen", { clinics });
                break;
            case "Lab Tests":
                // navigation.navigate();
                break;
            case "Pharmacy":
                // navigation.navigate();
                break;
            default:
                console.warn("No navigation defined for this service");
        }
    };

                                                      

    const placeholderTexts = [
        "Search Clinics...",
        "Search Services...",
        "Search Food..."
    ];

    const [placeholder, setPlaceholder] = useState(placeholderTexts[0]);
    let index = 0;

    useEffect(() => {
        const interval = setInterval(() => {
            index = (index + 1) % placeholderTexts.length;
            setPlaceholder(placeholderTexts[index]);
        }, 2000); // Change every 2 seconds

        return () => clearInterval(interval);
    }, []);



    // const dummyBookedSlots = [
    //     { slot: "10:00 AM", doctorname: "Dr. Chan" },
    //     { slot: "02:30 PM", doctorname: "Dr. Wong" }
    // ];

    const dummyBookedSlots = [
        { slot: "10:00 AM", doctorname: "Dr. Chan", status: "confirmed" },
        { slot: "02:30 PM", doctorname: "Dr. Wong", status: "pending" }
    ];


    const [currentIndex, setCurrentIndex] = useState(0);

    const handleScroll = (event:any) => {
        const index = Math.round(event.nativeEvent.contentOffset.x / (width * 0.8));
        setCurrentIndex(index);
    };

    const allSlots = [...dummyBookedSlots, ...bookedSlots];

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>

                <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                    <Header title={""} />
                    {/* <OwnerInfo /> */}

                    <View style={styles.searchContainer}>
                        <TextInput placeholder={placeholder} style={styles.input} placeholderTextColor="#FF5722" />

                        <FontAwesome
                            name="search"
                            size={20}
                        />
                    </View>



                    <View style={styles.bannerContainer}>
                        {/* Title */}
                        <Text style={styles.bannerTitle}>Stay At Home!</Text>

                        {/* Product Card Inside */}
                        <View style={styles.productCard}>
                            <Image source={require('./consultation.jpg')} style={styles.productImage} />
                            <View style={styles.productDetails}>
                                <Text style={styles.productName}>Take Care of Your Mental Health</Text>
                                <Text style={styles.productDescription}>Healthy & Nutritious</Text>
                            </View>
                        </View>

                        {/* Claim Now Button */}
                        <TouchableOpacity style={styles.claimButton}>
                            <Text style={styles.claimButtonText}>Meet Online</Text>
                        </TouchableOpacity>
                    </View>

                    {/* <View style={styles.bookedContainer}>
                        <Text style={styles.bookedTitle}>Booked Slots</Text>

                        {bookedSlots.length > 0 ? (
                            bookedSlots.map((slot: any, index: number) => (
                                <View>
                                    <View style={styles.header}>
                                        <Text style={styles.headerText}>Bosco's upcoming consultation</Text>
                                        <View style={styles.statusBadge}>
                                            <Text style={styles.statusText}>Confirmed</Text>
                                        </View>
                                    </View>
                                    <View key={index} style={styles.slotCard}>
                                        <Text style={styles.slotText}>{slot.slot} - {slot.doctorname}</Text>
                                    </View>
                                    <Text style={{ fontWeight: "900", color: "grey", marginLeft: 4 }}>Kwai Hing Veterinary Clinic,Kwai Chung</Text>
                                    <View style={{ display: "flex", flexDirection: "row-reverse" }}>
                                        <TouchableOpacity style={styles.detailsButton} onPress={() => { navigation.navigate("appointmentDetails") }}>
                                            <Text style={styles.detailsButtonText}>View details</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            ))
                        ) : (
                            <Text style={styles.noSlotsText}>No booked slots available</Text>
                        )}
                    </View> */}



                    <View style={styles.bookedContainer}>
                        <Text style={styles.bookedTitle}>Next Appointments</Text>

                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
                            onScroll={handleScroll}
                        >
                            {[...dummyBookedSlots, ...bookedSlots].map((slot: any, index: number) => (
                                <View key={index} style={styles.slotWrapper}>
                                    <View style={styles.header}>
                                        {/* <Text style={styles.headerText}>Bosco's upcoming consultation</Text> */}
                                        <View
                                            style={[
                                                styles.statusBadge,
                                                { backgroundColor: slot.status === "confirmed" ? "#E7FAE7" : "#FFF4E5" } // Green for Confirmed, Orange for Pending
                                            ]}
                                        >
                                            <Text
                                                style={[
                                                    styles.statusText,
                                                    { color: slot.status === "confirmed" ? "#2E7D32" : "#FF9800" } // Green text for Confirmed, Orange for Pending
                                                ]}
                                            >
                                                {slot.status === "confirmed" ? "Confirmed" : "Pending"}
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.slotCard}>
                                        <Text style={styles.slotText}>{slot.slot} - {slot.doctorname}</Text>
                                    </View>
                                    <Text style={{ fontWeight: "900", color: "grey", marginLeft: 4 }}>
                                        Kwai Hing Veterinary Clinic, Kwai Chung
                                    </Text>
                                    <View style={{ display: "flex", flexDirection: "row-reverse" }}>
                                        <TouchableOpacity
                                            style={styles.detailsButton}
                                            onPress={() => { navigation.navigate("appointmentDetails") }}
                                        >
                                            <Text style={styles.detailsButtonText}>View details</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            ))}
                        </ScrollView>
                        <View style={styles.paginationContainer}>
                            {allSlots.map((_, index:any) => (
                                <View
                                    key={index}
                                    style={[
                                        styles.dot,
                                        { backgroundColor: currentIndex === index ? "#003366" : "#ccc" },
                                    ]}
                                />
                            ))}
                        </View>
                    </View>

                    {/* <View style={styles.serviceContainer}>
                        {serviceItems.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.serviceButton}
                                onPress={() => handleNavigation(item.name)}
                            >
                                <Image source={item.image} style={styles.serviceIcon} />
                                <Text style={styles.serviceText}>{item.name}</Text>
                            </TouchableOpacity>
                        ))}
                    </View> */}

                    <ServiceCards />









                    <View style={styles.clinicContainer}>
                        <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }}>
                            <Text style={styles.clinicHeading}>Clinics Near You</Text>
                            {/* <Text>View All</Text> */}
                            <TouchableOpacity onPress={() => navigation.navigate("ClinicsScreen", { clinics })}>
                                <Text>View All</Text>
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            data={filteredClinics}
                            horizontal
                            pagingEnabled
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(_, index) => index.toString()}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => navigation.navigate("clinic", { item })}>
                                    <View style={styles.clinicCard}>
                                        <Text style={styles.addressText}>{item.address}</Text>
                                        <Image source={item.image} style={styles.clinicImage} />
                                    </View>
                                </TouchableOpacity>
                            )}
                        />

                        {/* <View style={styles.dotsContainer}>
                        {clinics.map((_, index) => (
                            <View key={index} style={[styles.dot, activeIndex === index && styles.activeDot]} />
                        ))}
                    </View> */}


                    </View>

                    <FlatList
                        ref={flatListRef}
                        data={carouselImages}
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(_, index) => index.toString()}
                        renderItem={({ item }) => <Image source={item} style={styles.carouselImage} />}
                        onViewableItemsChanged={onViewRef.current}
                        viewabilityConfig={viewConfigRef.current}
                    />

                    <View style={styles.dotsContainer}>
                        {carouselImages.map((_, index) => (
                            <View key={index} style={[styles.dot, activeIndex === index && styles.activeDot]} />
                        ))}
                    </View>

                  
                   

                    {/* <TopSelling /> */}

                    <View style={styles.blogContainer}>
                        <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }}>
                            <Text style={styles.blogHeading}>Blogs</Text>
                            <TouchableOpacity onPress={() => navigation.navigate("slotbookingscreen")}>
                                <Text>View All</Text>
                            </TouchableOpacity>

                        </View>

                        <FlatList
                            data={blogs}
                            horizontal
                            pagingEnabled
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(_, index) => index.toString()}
                            renderItem={({ item }) => (
                                <View style={styles.blogCard}>
                                    <Image source={item.image} style={styles.blogImage} />
                                    {/* <Text style={styles.blogDescription}>{item.description}</Text> */}
                                </View>
                            )}
                        />
                    </View>



                </ScrollView>
                <Footer />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        // paddingTop: 60,
    },
    scrollContainer: {
        alignItems: "center",
        paddingBottom: 20, // To prevent overlap with footer
        backgroundColor: "#F0FFFF"
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        padding: 7,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 10,
        width: "90%",
        marginVertical: 10,
        backgroundColor:"#fff"
    },
    input: {
        flex: 1,
        padding: 8,
        color: "#FFF",
        fontWeight:900
    },
    banner: {
        width: "90%",
        height: 200,
        resizeMode: "contain",
        marginVertical: 20,
    },
    serviceContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        width: "100%",
    },
    serviceButton: {
        alignItems: "center",
        width: "30%",
        marginVertical: 10,
    },
    serviceIcon: {
        width: 80,
        height: 80,
        marginBottom: 5,
        borderRadius: 5
    },
    serviceText: {
        fontSize: 12,
        color: "black",
        textAlign: "center",
    },
    carouselImage1: {
        width: width * 0.9,
        height: 150,
        marginTop: 20,
        borderRadius: 10,
    },
    carouselImage: {
        width: width - 10, // Adjusting width to fit within margin
        height: 150,
        marginTop: 20,
        marginHorizontal: 5, // Add margin between images
        borderRadius: 10,
        borderColor:"grey",
        borderWidth:1
    },

    slotWrapper: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 10,
        marginRight: 10, // Space between slots
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        borderWidth:1,
        borderColor:"grey",
        
        // elevation: 3, // Android shadow
        width: 300, // Adjust width for horizontal scroll
    },


    BackgroundImagecontainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)', // Optional: Add transparency
        padding: 20,
        borderRadius: 10,
    },


    headerContainer: {
        padding: 15,
        // backgroundColor: "#5E3B76", // Purple gradient background
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#FFF",
    },
    headerSubtitle: {
        fontSize: 14,
        color: "#FFF",
        marginTop: 5,
    },


    paginationContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 10,
    },

    dotsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 10,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: "gray",
        marginHorizontal: 5,
    },
    activeDot: {
        backgroundColor: "black",
    },


    clinicContainer: {
        width: "100%",
        // marginVertical: 20,
        borderWidth: 0.5,
        borderColor: "grey",
        padding: 10,
        backgroundColor:"lightblue"
    },
    clinicHeading: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },



    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // Cover the entire View
        justifyContent: 'center', // Align content in center
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },


    categoryContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        padding: 10,
        // backgroundColor: "#5E3B76", // Purple gradient background
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
        borderRadius: 20,
        marginInline: 10,
        marginTop: 20,
        marginBottom: 20
    },
    categoryButton: {
        width: "30%",  // Adjusted for 3 items per row
        backgroundColor: "#FFF",
        borderRadius: 15,
        padding: 10,
        alignItems: "center",
        marginBottom: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,  // Android shadow
    },
    categoryIcon: {
        width: 70, // Adjust based on image size
        height: 70,
        resizeMode: "contain",
        marginBottom: 5,
    },
    categoryText: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#000",
        textAlign: "center",
    },


    clinicCard: {
        // width: "90%",
        width: 350,
        borderRadius: 10,
        overflow: "hidden",
        marginHorizontal: 10,
        backgroundColor: "#fff",
        elevation: 5, // Shadow for Android
        shadowColor: "#000", // Shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        // borderWidth:5,
        // borderColor:"red"
    },
    addressText: {
        fontSize: 14,
        fontWeight: "bold",
        textAlign: "center",
        padding: 10,
        backgroundColor: "#003366",
        color:"#fff"
    },
    clinicImage: {
        width: "100%",
        height: 150,
        resizeMode: "cover",
    },










    blogContainer: {
        marginTop: 20,
        paddingHorizontal: 10,
        // borderWidth:5,
        height: 350
    },
    blogHeading: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    blogCard: {
        width: 260,
        backgroundColor: "#fff",
        borderRadius: 10,
        // overflow: "hidden",
        marginRight: 10,
        alignItems: "center",
        borderColor: "grey",
        borderWidth: 0.5,
        height: 250,
        padding: 0
    },
    blogImage: {
        width: "80%",
        height: "100%",
        resizeMode: "cover", // Change to "contain" if you don't want cropping
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },

    blogDescription: {
        padding: 10,
        textAlign: "center",
        fontSize: 14,
        fontWeight: "bold"
    },



    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
    },
    headerText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#000",
    },
    statusBadge: {
        backgroundColor: "#E7FAE7",
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 5,
    },
    statusText: {
        color: "#2E7D32",
        fontSize: 14,
        fontWeight: "bold",
    },





    bannerContainer: {
        width: "90%",
        height: 130,
        borderWidth: 0.5,
        borderColor: "grey",
        borderRadius: 10,
        padding: 10,
        backgroundColor: "#fff",
        marginVertical: 5,
        alignSelf: "center",
        position: "relative",
    },
    bannerTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10,
    },
    productCard: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 8,
        marginBottom: 10,
    },
    productImage: {
        width: 50,
        height: 50,
        borderRadius: 5,
        marginRight: 10,
    },
    productDetails: {
        flex: 1,
    },
    productName: {
        fontSize: 14,
        fontWeight: "bold",
    },
    productDescription: {
        fontSize: 12,
        color: "grey",
    },
    claimButton: {
        position: "absolute",
        right: 10,
        bottom: 10,
        backgroundColor: "#003366", // Blue Navy
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 5,
    },
    claimButtonText: {
        color: "#FF5722",
        fontSize: 14,
        fontWeight: "bold",
    },


    detailsButton: {
        backgroundColor: "#003366",
        paddingVertical: 7,
        alignItems: "center",
        borderRadius: 8,
        width: "35%",
        marginTop:5,
        
    },
    detailsButtonText: {
        color: "#FF5722",
        fontSize: 14,
        fontWeight: "bold",
       
    },





    bookedContainer: {
        width: "90%",
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 10,
        padding: 10,
        backgroundColor: "#ADD8E6",
        marginVertical: 5,
        alignSelf: "center",
        position: "relative",
        
        
    
        // marginRight:20,
        
    },
    bookedTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10,
    },
    
    slotCard: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f8f8f8",
        padding: 10,
        borderRadius: 8,
        marginBottom: 5,
    },
    slotText: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#333",
    },
    noSlotsText: {
        fontSize: 14,
        color: "grey",
        textAlign: "center",
        marginTop: 5,
    },






























    servicecardContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        // backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 15,
        margin: 10,
        alignItems: 'center',
    },
    servicecardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 10,
    },
    servicecardSubtitle: {
        fontSize: 14,
        color: '#666',
        marginBottom: 10,
    },
    servicecardRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    servicecardItem: {
        alignItems: 'center',
        width: '30%',
        borderWidth: 3,
        borderColor: "#fff",
        borderRadius: 20,
        padding: 2
    },
    servicecardImage: {
        width: 80,
        height: 80,
        borderRadius: 10,
        marginBottom: 5,
    },
    servicecardText: {
        fontSize: 14,
        fontWeight: '500',
    },
});

export default Dashboard;



















// <ImageBackground
//     source={{ uri: 'https://img.freepik.com/premium-vector/hand-painted-watercolor-sky-clouds-abstract-watercolor-background-blue-fluid-painting_101553-1706.jpg?semt=ais_hybrid' }} // Background Image
//     style={styles.backgroundImage}
// >
//     <View style={styles.servicecardContainer}>
//         {/* Best Services Section */}
//         <Text style={styles.servicecardTitle}>Best Services</Text>
//         <Text style={styles.servicecardSubtitle}>Only for your pet</Text>
//         <View style={styles.servicecardRow}>
//             {services.map((service, index) => (
//                 <View key={index} style={styles.servicecardItem}>
//                     <Image source={service.image} style={styles.servicecardImage} />
//                     <Text style={styles.servicecardText}>{service.name}</Text>
//                 </View>
//             ))}
//         </View>

//         {/* Pet Store Section */}
//         <Text style={styles.servicecardTitle}>Pet Store</Text>
//         <Text style={styles.servicecardSubtitle}>Get your order delivered in just 90 mins</Text>
//         <View style={styles.servicecardRow}>
//             {petStoreItems.map((item, index) => (
//                 <View key={index} style={styles.servicecardItem}>
//                     <Image source={item.image} style={styles.servicecardImage} />
//                     <Text style={styles.servicecardText}>{item.name}</Text>
//                 </View>
//             ))}
//         </View>
//     </View>
// </ImageBackground>






{/* <Image source={require("./Dogbanner.jpg")} style={styles.banner} /> */}
























// <ImageBackground
//     source={{ uri: 'https://img.freepik.com/free-vector/purple-watercolor-galaxy-background_23-2149248308.jpg' }} // Background Image
//     style={styles.backgroundImage}
// >
//     <View style={styles.categoryContainer}>
//         <View style={styles.headerContainer}>
//             <Text style={styles.headerTitle}>Shop by Category</Text>
//             <Text style={styles.headerSubtitle}>10K+ options to explore for your pet 🐶🐱</Text>
//         </View>
//         {categories.map((item: any, index: any) => (
//             <TouchableOpacity
//                 key={index}
//                 style={styles.categoryButton}
//                 onPress={() => handleNavigation(item.name)}
//             >
//                 <Image source={item.image} style={styles.categoryIcon} />
//                 <Text style={styles.categoryText}>{item.name}</Text>
//             </TouchableOpacity>
//         ))}
//     </View>
// </ImageBackground>