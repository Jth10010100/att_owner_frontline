import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const NextAppointments = () => {
    const navigation = useNavigation();
    const [bookedSlots, setBookedSlots] = useState<any[]>([]);

    const dummyBookedSlots = [
        { slot: "10:00 AM", doctorname: "Dr. Chan", status: "confirmed" },
        { slot: "02:30 PM", doctorname: "Dr. Wong", status: "pending" },
        { slot: "10:00 AM", doctorname: "Dr. Chan", status: "confirmed" },
        { slot: "02:30 PM", doctorname: "Dr. Wong", status: "pending" }
    ];

    useEffect(() => {
        console.log("useEffect run on NextAppointments");

        const getBookedSlots = async () => {
            try {
                const slots = await AsyncStorage.getItem("bookedSlots");
                if (slots) {
                    console.log("Retrieved Slots:", slots);
                    const parsedSlots = JSON.parse(slots);
                    setBookedSlots(parsedSlots.length ? parsedSlots : dummyBookedSlots); // ✅ Use dummy data if empty
                } else {
                    setBookedSlots(dummyBookedSlots); // ✅ Set dummy data if nothing in storage
                }
            } catch (error) {
                console.error("Error fetching booked slots:", error);
                setBookedSlots(dummyBookedSlots); // ✅ Set dummy data on error
            }
        };

        getBookedSlots();
    }, []);

    return (
        <View style={{ flex: 1 }}> {/* Parent should take full screen height */}
            <View style={styles.container}>
                <Text style={styles.title}>Next Appointments</Text>
                <FlatList
                    data={dummyBookedSlots}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.slotWrapper}>
                            <View
                                style={[
                                    styles.statusBadge,
                                    { backgroundColor: item.status === "confirmed" ? "#E7FAE7" : "#FFF4E5" },
                                ]}
                            >
                                <Text
                                    style={[
                                        styles.statusText,
                                        { color: item.status === "confirmed" ? "#2E7D32" : "#FF9800" },
                                    ]}
                                >
                                    {item.status === "confirmed" ? "Confirmed" : "Pending"}
                                </Text>
                            </View>

                            <View style={styles.slotCard}>
                                <Text style={styles.slotText}>{item.slot} - {item.doctorname}</Text>
                            </View>

                            <Text style={styles.locationText}>Kwai Hing Veterinary Clinic, Kwai Chung</Text>

                            <TouchableOpacity style={styles.detailsButton}>
                                <Text style={styles.detailsButtonText}>View details</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    inverted={true}
                    showsVerticalScrollIndicator={true} // Enable scroll indicator
                    contentContainerStyle={{ paddingBottom: 20 }} // Avoid cutting off last item
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 10,
        elevation: 3,
        height:300
        // flex:1
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    slotWrapper: {
        backgroundColor: "#f9f9f9",
        padding: 10,
        borderRadius: 8,
        marginBottom: 10,
    },
    statusBadge: {
        alignSelf: "flex-start",
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 5,
    },
    statusText: {
        fontSize: 12,
        fontWeight: "bold",
    },
    slotCard: {
        marginTop: 5,
    },
    slotText: {
        fontSize: 16,
        fontWeight: "bold",
    },
    locationText: {
        fontWeight: "900",
        color: "grey",
        marginLeft: 4,
        marginTop: 5,
    },
    detailsButton: {
        backgroundColor: "#003366",
        padding: 8,
        borderRadius: 5,
        alignSelf: "flex-end",
        marginTop: 5,
    },
    detailsButtonText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold",
    },
});

export default NextAppointments;
















// <View style={styles.bookedContainer}>
//     <Text style={styles.bookedTitle}>Next Appointments</Text>

//     <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
//         onScroll={handleScroll}
//     >
//         {[...dummyBookedSlots, ...bookedSlots].map((slot: any, index: number) => (
//             <View key={index} style={styles.slotWrapper}>
//                 <View style={styles.header}>
//                     {/* <Text style={styles.headerText}>Bosco's upcoming consultation</Text> */}
//                     <View
//                         style={[
//                             styles.statusBadge,
//                             { backgroundColor: slot.status === "confirmed" ? "#E7FAE7" : "#FFF4E5" } // Green for Confirmed, Orange for Pending
//                         ]}
//                     >
//                         <Text
//                             style={[
//                                 styles.statusText,
//                                 { color: slot.status === "confirmed" ? "#2E7D32" : "#FF9800" } // Green text for Confirmed, Orange for Pending
//                             ]}
//                         >
//                             {slot.status === "confirmed" ? "Confirmed" : "Pending"}
//                         </Text>
//                     </View>
//                 </View>
//                 <View style={styles.slotCard}>
//                     <Text style={styles.slotText}>{slot.slot} - {slot.doctorname}</Text>
//                 </View>
//                 <Text style={{ fontWeight: "900", color: "grey", marginLeft: 4 }}>
//                     Kwai Hing Veterinary Clinic, Kwai Chung
//                 </Text>
//                 <View style={{ display: "flex", flexDirection: "row-reverse" }}>
//                     <TouchableOpacity
//                         style={styles.detailsButton}
//                         onPress={() => { navigation.navigate("appointmentDetails") }}
//                     >
//                         <Text style={styles.detailsButtonText}>View details</Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         ))}
//     </ScrollView>
//     <View style={styles.paginationContainer}>
//         {allSlots.map((_, index: any) => (
//             <View
//                 key={index}
//                 style={[
//                     styles.dot,
//                     { backgroundColor: currentIndex === index ? "#003366" : "#ccc" },
//                 ]}
//             />
//         ))}
//     </View>
// </View>