import React, { useState, useRef, useEffect } from "react";
import { View, TextInput, Image, StyleSheet, Text, TouchableOpacity, ScrollView, FlatList, Dimensions, ImageBackground } from "react-native";
import { Footer } from "../Footer/Footer";
import Header from "../Header/Header";
import {
    createStaticNavigation,
    useNavigation
} from '@react-navigation/native';
import { screenNavigationProp } from "../../navigation/types";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useSelector } from "react-redux";


import Icon from 'react-native-vector-icons/FontAwesome';
import BrandGrid from "./BrandGrid";
import TopSelling from "../Dashboard/TopSelling";


const services = [
    { name: "Last Orders", image: require("./consultation.jpg") },
    { name: "Grooming", image: require("./grooming.jpg") },
    { name: "Dog Treats", image: require("./vaccination.jpg") },
    { name: "Dog Food", image: require("./dogfood.jpg") },
    { name: "Cat Food", image: require("./catfood.jpg") },
    { name: "Cat Treats", image: require("./petshop.jpg") },
    { name: "Toys", image: require("./petshop.jpg") },
    { name: "Vet Diet", image: require("./petshop.jpg") },
    { name: "Upto 50% off", image: require("./petshop.jpg") },
];


const Brands = [
    { name: "Last Orders", image: require("./consultation.jpg") },
    { name: "Grooming", image: require("./grooming.jpg") },
    { name: "Dog Treats", image: require("./vaccination.jpg") },
    { name: "Dog Food", image: require("./dogfood.jpg") },
    { name: "Cat Food", image: require("./catfood.jpg") },
    { name: "Cat Treats", image: require("./petshop.jpg") },
    { name: "Toys", image: require("./petshop.jpg") },
    { name: "Veterinary Diet", image: require("./petshop.jpg") },
    { name: "Upto 50% off", image: require("./petshop.jpg") },
]

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

    // Near You
    { image: require("./clinic1.jpg"), address: "123 Pet Street,BSR", location: "Near You", sku: "NOI-001" },
    { image: require("./clinic2.jpg"), address: "456 Dog Avenue, BSR", location: "Near You", sku: "NOI-002" },
    { image: require("./clinic3.jpg"), address: "789 Cat Road, BSR", location: "Near You", sku: "NOI-003" },
    { image: require("./clinic4.jpg"), address: "101 Vet Lane, BSR", location: "Near You", sku: "NOI-004" },

    // Noida Clinics
    { image: require("./clinic1.jpg"), address: "123 Pet Street, Noida", location: "Noida", sku: "NOI-001" },
    { image: require("./clinic2.jpg"), address: "456 Dog Avenue, Noida", location: "Noida", sku: "NOI-002" },
    { image: require("./clinic3.jpg"), address: "789 Cat Road, Noida", location: "Noida", sku: "NOI-003" },
    { image: require("./clinic4.jpg"), address: "101 Vet Lane, Noida", location: "Noida", sku: "NOI-004" },

    // Chennai Clinics
    { image: require("./clinic1.jpg"), address: "202 Paw Plaza, Chennai", location: "Chennai", sku: "CHE-001" },
    { image: require("./clinic2.jpg"), address: "303 Tail Way, Chennai", location: "Chennai", sku: "CHE-002" },
    { image: require("./clinic3.jpg"), address: "404 Bark Street, Chennai", location: "Chennai", sku: "CHE-003" },
    { image: require("./clinic4.jpg"), address: "505 Furry Ave, Chennai", location: "Chennai", sku: "CHE-004" },

    // Ghaziabad Clinics
    { image: require("./clinic1.jpg"), address: "606 Woof Lane, Ghaziabad", location: "Ghaziabad", sku: "GHA-001" },
    { image: require("./clinic2.jpg"), address: "707 Paws Street, Ghaziabad", location: "Ghaziabad", sku: "GHA-002" },
    { image: require("./clinic3.jpg"), address: "808 Pet Avenue, Ghaziabad", location: "Ghaziabad", sku: "GHA-003" },
    { image: require("./clinic4.jpg"), address: "909 Tail Road, Ghaziabad", location: "Ghaziabad", sku: "GHA-004" },

    // Delhi Clinics
    { image: require("./clinic1.jpg"), address: "111 Furry Plaza, Delhi", location: "Delhi", sku: "DEL-001" },
    { image: require("./clinic2.jpg"), address: "222 Claw Avenue, Delhi", location: "Delhi", sku: "DEL-002" },
    { image: require("./clinic3.jpg"), address: "333 Bark Street, Delhi", location: "Delhi", sku: "DEL-003" },
    { image: require("./clinic4.jpg"), address: "444 Vet Lane, Delhi", location: "Delhi", sku: "DEL-004" },

    // Gurugram Clinics
    { image: require("./clinic1.jpg"), address: "555 Animal Care, Gurugram", location: "Gurugram", sku: "GUR-001" },
    { image: require("./clinic2.jpg"), address: "666 Pet Park, Gurugram", location: "Gurugram", sku: "GUR-002" },
    { image: require("./clinic3.jpg"), address: "777 Woof Avenue, Gurugram", location: "Gurugram", sku: "GUR-003" },
    { image: require("./clinic4.jpg"), address: "888 Furry Road, Gurugram", location: "Gurugram", sku: "GUR-004" },

    // Faridabad Clinics
    { image: require("./clinic1.jpg"), address: "999 Vet Plaza, Faridabad", location: "Faridabad", sku: "FAR-001" },
    { image: require("./clinic2.jpg"), address: "1010 Paws Street, Faridabad", location: "Faridabad", sku: "FAR-002" },
    { image: require("./clinic3.jpg"), address: "1111 Tail Avenue, Faridabad", location: "Faridabad", sku: "FAR-003" },
    { image: require("./clinic4.jpg"), address: "1212 Pet Road, Faridabad", location: "Faridabad", sku: "FAR-004" },
];




const blogs = [
    {
        image: require("./labrador.jpg"),
        description: "Labradors are friendly, outgoing, and high-spiri...."
    },
    {
        image: require("./germanshepherd.jpg"),
        description: "German Shepherds are courageous,intelli...."
    },
    {
        image: require("./bulldog.jpg"),
        description: "Bulldogs are loyal, docile, and affectionate compa...."
    },
];






const { width } = Dimensions.get("window");



const Dashboard: React.FC = () => {



    const navigation = useNavigation<screenNavigationProp>();

    const [activeIndex, setActiveIndex] = useState(0);
    const flatListRef = useRef<FlatList>(null);


    const selectedLocation = useSelector((state: any) => state.localization.selectedLocation);





    const filteredClinics = clinics.filter(clinic => clinic.location === selectedLocation);

    console.log(selectedLocation)

    const onViewRef = useRef(({ viewableItems }: any) => {
        if (viewableItems.length > 0) {
            setActiveIndex(viewableItems[0].index);
        }
    });
    const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });



    const handleNavigation = (serviceName: string) => {
        switch (serviceName) {
            case "Consultation":
                navigation.navigate("ClinicsScreen", { clinics });
                break;
            case "Dog Food":
                navigation.navigate("productlist", { products: "dogfoodlist" });
                break;
            case "Cat Food":
                navigation.navigate("productlist")
                break;
            default:
                console.warn("No navigation defined for this service");
        }
    };



    const servicesOLD = [
        { name: 'Consultation', image: require("./consultation.jpg") },
        { name: 'Grooming', image: require("./grooming.jpg") },
        { name: 'Vaccination', image: require("./vaccination.jpg") },
        // Add more services here
    ];

    return (
        <View style={styles.container}>
            <Header  title={"shop"} />
            <View style={styles.searchContainer}>
                <TextInput placeholder="Search Clinics, Services and Food" style={styles.input} />

                <FontAwesome
                    name="search"
                    size={20}
                />
            </View>
            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>

                <View style={styles.bannerContainer}>
                    {/* Title */}
                    <Text style={styles.bannerTitle}>Free Gift, Only for your Dog</Text>

                    {/* Product Card Inside */}
                    <View style={styles.productCard}>
                        <Image source={require('./dogfood.jpg')} style={styles.productImage} />
                        <View style={styles.productDetails}>
                            <Text style={styles.productName}>Premium Dog Food</Text>
                            <Text style={styles.productDescription}>Healthy & Nutritious</Text>
                        </View>
                    </View>

                    {/* Claim Now Button */}
                    <TouchableOpacity style={styles.claimButton}>
                        <Text style={styles.claimButtonText}>Claim Now</Text>
                    </TouchableOpacity>
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


                {/* <Image source={require("./Dogbanner.jpg")} style={styles.banner} /> */}
                {/* <View style={{display:"flex",flexDirection:"row",alignItems:"flex-start",marginVertical:15,width:"90%"}}>
                    <Text style={{fontSize:20 ,fontWeight:"bold"}}>Food and Accesories</Text>
              </View>
                <View style={styles.serviceContainer}>
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


                <ImageBackground
                    source={{ uri: 'https://img.freepik.com/premium-vector/hand-painted-watercolor-sky-clouds-abstract-watercolor-background-blue-fluid-painting_101553-1706.jpg?semt=ais_hybrid' }} // Background Image
                    style={styles.backgroundImage}
                >
                    <View style={styles.servicecardContainer}>
                        {/* Best Services Section */}
                        <Text style={styles.servicecardTitle}>Best Services</Text>
                        <Text style={styles.servicecardSubtitle}>Only for your pet</Text>
                        <View style={styles.servicecardRow}>
                            {services.map((service, index) => (
                                <View key={index} style={styles.servicecardItem}>
                                  <TouchableOpacity
                                        onPress={() => handleNavigation(service.name)}
                                  >
                                        <Image source={service.image} style={styles.servicecardImage} />
                                        <Text style={styles.servicecardText}>{service.name}</Text>
                                  </TouchableOpacity>
                                </View>
                            ))}
                        </View>



                    </View>
                </ImageBackground>



                <TopSelling title={"Top Selling"} />


                <BrandGrid />


                <TopSelling title={"Dog Dry Food"} />
                <TopSelling title={"Cat Dry Food"} />
                <TopSelling title={"Veterinary Diet"} />
                <TopSelling title={"Treats For Cat"} />
                <TopSelling title={"Treats For Dog"} />




                <View style={{ width: "70%", backgroundColor: "lightgray" ,padding:10,borderRadius:30,display:"flex",alignItems:"center"}}>
                    <Text style={{fontSize:15,fontWeight:"900"}}>Looking For Something Else?</Text>
                </View>


            </ScrollView>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F0FFFF"
        // backgroundColor: "#fff",
        // paddingTop: 60,
    },
    scrollContainer: {
        alignItems: "center",
        paddingBottom: 20, // To prevent overlap with footer
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
        marginHorizontal: 20
    },
    input: {
        flex: 1,
        padding: 8,
        backgroundColor: "#fff"
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
        marginVertical: 20,
        borderWidth: 0.5,
        borderColor: "grey",
        padding: 10
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
        backgroundColor: "#f8f8f8",
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
        // height: 350
        // display:"none"
    },
    blogHeading: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    blogCard: {
        width: 200,
        backgroundColor: "#fff",
        borderRadius: 10,
        overflow: "hidden",
        marginRight: 10,
        alignItems: "center",
        borderColor: "grey",
        borderWidth: 0.5,
        height: 250
    },
    blogImage: {
        width: "100%",
        height: 170,
        // borderTopLeftRadius: 10,
        // borderTopRightRadius: 10,
        marginTop: 10
    },
    blogDescription: {
        padding: 10,
        textAlign: "center",
        fontSize: 14,
        fontWeight: "bold"
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
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold",
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
    servicecardRow1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    servicecardItem1: {
        alignItems: 'center',
        width: '40%',
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
        marginLeft:3
    },


    servicecardRow: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between", // Ensures 3 items per row
        width: "100%",
    },
    servicecardItem: {
        alignItems: "center",
        width: "30%",  // Fixes 3 items in one row
        borderWidth: 3,
        borderColor: "#fff",
        borderRadius: 20,
        padding: 5,
        marginBottom: 10, // Adds spacing between rows
    },

});

export default Dashboard;

























// <View style={styles.blogContainer}>
//     <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", width: "90%", marginLeft: 15 }}>
//         <Text style={styles.blogHeading}>Brands</Text>
//         <TouchableOpacity>
//             <Text>View All</Text>
//         </TouchableOpacity>

//     </View>
//     <View style={styles.serviceContainer}>
//         {Brands.map((item, index) => (
//             <TouchableOpacity
//                 key={index}
//                 style={styles.serviceButton}
//                 onPress={() => handleNavigation(item.name)}
//             >
//                 <Image source={item.image} style={styles.serviceIcon} />
//                 {/* <Text style={styles.serviceText}>{item.name}</Text> */}
//             </TouchableOpacity>
//         ))}
//     </View>

// </View>