// import React from 'react';
// import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';

// const services = [
//     { name: 'Appointments', image: require("./consultation.jpg") },
//     { name: 'My Family', image: require("./grooming.jpg") },
//     { name: 'Records', image: require("./vaccination.jpg") },
//     { name: 'Medication', image: require("./consultation.jpg") },
//     { name: 'Payment', image: require("./consultation.jpg") },
//     { name: 'Queue', image: require("./consultation.jpg") },
//     { name: 'vaccination', image: require("./consultation.jpg") },
//     { name: 'Grooming', image: require("./consultation.jpg") },
//     // { name: 'My Measurement', image: require("./consultation.jpg") },
//     // { name: 'Book GOPC', image: require("./consultation.jpg") },
//     // { name: 'TeleHealth', image: require("./consultation.jpg") },
// ];

// const backgroundColors = ["#D1E8E2", "#FFDDC1", "#FFD3E0", "#C1E1FF", "#FFCF99", "#E2C1FF"];

// const ServiceCards = () => {
//     return (
//         <ImageBackground
//             source={{ uri: 'https://img.freepik.com/premium-vector/hand-painted-watercolor-sky-clouds-abstract-watercolor-background-blue-fluid-painting_101553-1706.jpg?semt=ais_hybrid' }}
//             style={styles.backgroundImage}
//         >
//             <View style={styles.servicecardContainer}>
//                 <Text style={styles.servicecardTitle}>Services</Text>
//                 {/* <Text style={styles.servicecardSubtitle}>Only for your pet</Text> */}

//                 <View style={styles.serviceGrid}>
//                     {services.map((service, index) => (
//                         <View key={index} style={[styles.servicecardItem, { backgroundColor: backgroundColors[index % backgroundColors.length] }]}>
//                             <Image source={service.image} style={styles.servicecardImage} />
//                             <Text style={styles.servicecardText}>{service.name}</Text>
//                         </View>
//                     ))}
//                 </View>
//             </View>
//         </ImageBackground>
//     );
// };

// const styles = StyleSheet.create({
//     backgroundImage: {
//         flex: 1,
//         resizeMode: 'cover',
//         padding: 15,
//     },
//     servicecardContainer: {
//         padding: 2,
//     },
//     servicecardTitle: {
//         fontSize: 22,
//         fontWeight: 'bold',
//         textAlign: 'center',
//         marginBottom: 5,
//     },
//     servicecardSubtitle: {
//         fontSize: 16,
//         textAlign: 'center',
//         marginBottom: 15,
//         color: '#555',
//     },
//     serviceGrid: {
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//         justifyContent: 'space-between',
//     },
//     servicecardItem: {
//         width: '49%',
//         borderRadius: 5,
//         padding: 5,
//         alignItems: 'center',
//         marginBottom: 10,
//         // elevation: 3,
//         // shadowColor: '#000',
//         // shadowOpacity: 0.2,
//         // shadowRadius: 5,
//     },
//     servicecardImage: {
//         width: 60,
//         height: 60,
//         marginBottom: 10,
//     },
//     servicecardText: {
//         fontSize: 14,
//         fontWeight: '600',
//         textAlign: 'center',
//     },
// });

// export default ServiceCards;














// import React from "react";
// import { View, Text, Image, StyleSheet, ImageBackground, ScrollView } from "react-native";

// const services = [
//     { name: "Appointments", image: require("./consultation.jpg") },
//     { name: "My Family", image: require("./grooming.jpg") },
//     { name: "Records", image: require("./vaccination.jpg") },
//     { name: "Medication", image: require("./consultation.jpg") },
//     { name: "Payment", image: require("./consultation.jpg") },
//     { name: "Queue", image: require("./consultation.jpg") },
//     { name: "Vaccination", image: require("./consultation.jpg") },
//     { name: "Grooming", image: require("./consultation.jpg") },
// ];

// const backgroundColors = ["#D1E8E2", "#FFDDC1", "#FFD3E0", "#C1E1FF", "#FFCF99", "#E2C1FF"];

// const ServiceCards = () => {
//     return (
//         <ImageBackground
//             source={{
//                 uri: "https://img.freepik.com/premium-vector/hand-painted-watercolor-sky-clouds-abstract-watercolor-background-blue-fluid-painting_101553-1706.jpg?semt=ais_hybrid",
//             }}
//             style={styles.backgroundImage}
//         >
//             <View style={styles.serviceContainer}>
//                 <Text style={styles.serviceTitle}>Our Services</Text>

//                 <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//                     {services.map((service, index) => (
//                         <View key={index} style={[styles.serviceCard, { backgroundColor: backgroundColors[index % backgroundColors.length] }]}>
//                             <Image source={service.image} style={styles.serviceImage} />
//                             <Text style={styles.serviceText}>{service.name}</Text>
//                         </View>
//                     ))}
//                 </ScrollView>
//             </View>
//         </ImageBackground>
//     );
// };

// const styles = StyleSheet.create({
//     backgroundImage: {
//         flex: 1,
//         // resizeMode: "cover",
//         padding: 20,
//         // borderWidth:2
//     },
//     serviceContainer: {
//         padding: 5,
//     },
//     serviceTitle: {
//         fontSize: 22,
//         fontWeight: "900",
//         textAlign: "center",
//         marginBottom: 10,
//     },
//     serviceCard: {
//         width: 100, // Smaller width
//         height: 120, // Smaller height
//         borderRadius: 10,
//         padding: 8,
//         alignItems: "center",
//         justifyContent: "center",
//         marginRight: 10, // Space between cards
//     },
//     serviceImage: {
//         width: 50,
//         height: 50,
//         marginBottom: 5,
//     },
//     serviceText: {
//         fontSize: 12,
//         fontWeight: "600",
//         textAlign: "center",
//     },
// });

// export default ServiceCards;






import React, { useRef } from "react";
import { View, Text, Image, StyleSheet, ImageBackground, ScrollView, Animated, Dimensions } from "react-native";

const services = [
    { name: "Appointments", image: require("./consultation.jpg") },
    { name: "My Family", image: require("./grooming.jpg") },
    { name: "Records", image: require("./vaccination.jpg") },
    { name: "Medication", image: require("./consultation.jpg") },
    { name: "Payment", image: require("./consultation.jpg") },
    { name: "Queue", image: require("./consultation.jpg") },
    { name: "Vaccination", image: require("./consultation.jpg") },
    { name: "Grooming", image: require("./consultation.jpg") },
];

const backgroundColors = ["#D1E8E2", "#FFDDC1", "#FFD3E0", "#C1E1FF", "#FFCF99", "#E2C1FF"];
const { width } = Dimensions.get("window");
const CARD_WIDTH = 100;
const CARD_HEIGHT = 120;
const ENLARGED_CARD_WIDTH = 130;
const ENLARGED_CARD_HEIGHT = 150;

const ServiceCards = () => {
    const scrollX = useRef(new Animated.Value(0)).current;

    return (
        <ImageBackground
            source={{
                uri: "https://img.freepik.com/premium-vector/hand-painted-watercolor-sky-clouds-abstract-watercolor-background-blue-fluid-painting_101553-1706.jpg?semt=ais_hybrid",
            }}
            style={styles.backgroundImage}
        >
            <View style={styles.serviceContainer}>
                <Text style={styles.serviceTitle}>Our Services</Text>

                <Animated.ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: false }
                    )}
                    scrollEventThrottle={16}
                    contentContainerStyle={{ paddingHorizontal: 10 }}
                >
                    {services.map((service, index) => {
                        const inputRange = [
                            (index - 1) * CARD_WIDTH,
                            index * CARD_WIDTH,
                            (index + 1) * CARD_WIDTH,
                        ];

                        const cardWidth = scrollX.interpolate({
                            inputRange,
                            outputRange: [CARD_WIDTH, ENLARGED_CARD_WIDTH, CARD_WIDTH],
                            extrapolate: "clamp",
                        });

                        const cardHeight = scrollX.interpolate({
                            inputRange,
                            outputRange: [CARD_HEIGHT, ENLARGED_CARD_HEIGHT, CARD_HEIGHT],
                            extrapolate: "clamp",
                        });

                        return (
                            <Animated.View
                                key={index}
                                style={[
                                    styles.serviceCard,
                                    {
                                        backgroundColor: backgroundColors[index % backgroundColors.length],
                                        width: cardWidth,
                                        height: cardHeight,
                                    },
                                ]}
                            >
                                <Image source={service.image} style={styles.serviceImage} />
                                <Text style={styles.serviceText}>{service.name}</Text>
                            </Animated.View>
                        );
                    })}
                </Animated.ScrollView>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        padding: 20,
        height: 250
    },
    serviceContainer: {
        padding: 5,
    },
    serviceTitle: {
        fontSize: 22,
        fontWeight: "900",
        textAlign: "center",
        marginBottom: 10,
    },
    serviceCard: {
        borderRadius: 10,
        padding: 8,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 5,
    },
    serviceImage: {
        width: 50,
        height: 50,
        marginBottom: 5,
    },
    serviceText: {
        fontSize: 12,
        fontWeight: "600",
        textAlign: "center",
    },
});

export default ServiceCards;
