import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image, Modal, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
    createStaticNavigation,
    useNavigation,
    useRoute
} from '@react-navigation/native';
import { screenNavigationProp } from "../../navigation/types";
const dates = ["Thu 13", "Fri 14", "Sat 15", "Sun 16"];

const doctorsDataLatest: any = {
    "13": [
        {
            id: 1,
            name: "Dr.Chengwen",
            image: require("./DoctorPics/doctor6.jpeg"),
            morningSlots: ["10:00 AM", "10:20 AM", "10:40 AM"],
            afternoonSlots: ["2:20 PM", "2:40 PM", "3:00 PM"],
            eveningSlots: ["5:00 PM", "5:40 PM"],
            bookedSlots: ["10:40 AM", "3:00 PM"] // Example booked slot 
        },
        {
            id: 2,
            name: "Dr.Chiching",
            image: require("./DoctorPics/doctor9.jpeg"),
            morningSlots: ["11:00 AM", "11:20 AM", "11:40 AM"],
            afternoonSlots: ["3:20 PM", "3:40 PM", "4:00 PM"],
            eveningSlots: ["6:00 PM", "6:30 PM"],
            bookedSlots: ["11:20 AM", "4:00 PM"]
        }
    ],
    "14": [
        {
            id: 1,
            name: "Dr.Jung Hoseok",
            image: require("./DoctorPics/doctor4.jpeg"),
            morningSlots: ["9:00 AM", "9:30 AM", "10:00 AM"],
            afternoonSlots: ["2:00 PM", "2:30 PM", "3:00 PM"],
            eveningSlots: ["5:20 PM", "6:00 PM"],
            bookedSlots: ["9:30 AM", "3:00 PM"]
        },
        {
            id: 2,
            name: "Dr.Kim Namjoon",
            image: require("./DoctorPics/doctor3.jpeg"),
            morningSlots: ["10:30 AM", "11:00 AM", "11:30 AM"],
            afternoonSlots: ["3:30 PM", "4:00 PM", "4:30 PM"],
            eveningSlots: ["6:20 PM", "6:50 PM"],
            bookedSlots: []
        }
    ],
    "15": [
        {
            id: 1,
            name: "Dr.Park Jimin",
            image: require("./DoctorPics/doctor2.jpeg"),
            morningSlots: ["8:00 AM", "8:30 AM", "9:00 AM"],
            afternoonSlots: ["1:40 PM", "2:10 PM", "2:40 PM"],
            eveningSlots: ["5:30 PM", "6:10 PM"],
            bookedSlots: ["9:00 AM", "2:40 PM"]
        },
        {
            id: 2,
            name: "Dr.Kim Taehyung",
            image: require("./DoctorPics/doctor7.jpeg"),
            morningSlots: ["9:30 AM", "10:00 AM", "10:30 AM"],
            afternoonSlots: ["3:10 PM", "3:40 PM", "4:10 PM"],
            eveningSlots: ["6:20 PM", "6:50 PM"],
            bookedSlots: ["3:40 PM"]
        }
    ],
    "16": [
        {
            id: 1,
            name: "Dr. Jeon Jungkook",
            image: require("./DoctorPics/doctor5.jpeg"),
            morningSlots: ["9:30 AM", "10:00 AM", "10:30 AM"],
            afternoonSlots: ["12:50 PM", "1:20 PM", "1:50 PM"],
            eveningSlots: ["6:20 PM", "6:50 PM"],
            bookedSlots: ["10:00 AM", "1:50 PM"]
        }
    ]
};

const SlotBookingScreen = () => {

    const route = useRoute();
    const navigation = useNavigation<screenNavigationProp>();
    // const { item }: any = route?.params;

    const [selectedDate, setSelectedDate] = useState<string>("13");
    const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
    const [bookedSlots, setBookedSlots] = useState<{ [key: string]: string[] }>({});
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [selectedDoctor, setSelectedDoctor] = useState<any>(null);
    const [selectedDoctorName, setSelectedDoctorName] = useState<any>(null);
    const [selectedDoctorId, setSelectedDoctorId] = useState<number | null>(1);

    useEffect(() => {
        // Initialize booked slots
        const initialSlots: { [key: string]: string[] } = {};
        Object.keys(doctorsDataLatest).forEach((date) => {
            initialSlots[date] = doctorsDataLatest[date]
                .flatMap((doctor: any) => doctor.bookedSlots);
        });
        setBookedSlots(initialSlots);
    }, []);

    const handleSlotSelection = (slot: string, doctor: any) => {
        const doctorName = doctorsDataLatest[selectedDate]?.find((doc: any) => doc.id === doctor);
        setSelectedDoctorName(doctorName)
        console.log("Selected Slot:", doctorName);
        setSelectedSlot(slot);
        setSelectedDoctor(doctor);
    };

    const bookSlot = () => {
        console.log(".................................................................", selectedDoctorName.name, ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,")
        // console.log("selectedSlotselectedSlotselectedSlotselectedSlo........", selectedDoctor)
        if (selectedSlot && selectedDoctor) {
            setBookedSlots((prev) => ({
                ...prev,
                [selectedDate]: [...(prev[selectedDate] || []), selectedSlot],
            }));
            console.log("Updated Booked Slots:", bookedSlots);
            const bookSlotData = {
                doctorname: selectedDoctorName?.name,
                petname: "Bosco",
                slot: selectedSlot
            }

            AsyncStorage.setItem("bookedSlots", JSON.stringify(bookSlotData));
            setModalVisible(true);
            // setSelectedSlot(null);
            // setSelectedDoctor(null);
        }
    };


    const closemodal = () => {
        setModalVisible(false)
        navigation.navigate('dashboard')

    }

    return (
        <ScrollView>
            <View>
                <Image
                    source={require("../Dashboard/ClinicsImages/clinnic9.jpg")}
                    style={styles.headerImage}
                />
            </View>
            <View style={styles.container}>
                {/* <Text style={styles.header}>Vetic, Indirapuram</Text> */}

                {/* Doctor Selection */}
                <View style={styles.doctorContainer}>
                    {doctorsDataLatest[selectedDate]?.map((doctor: any) => (
                        <TouchableOpacity
                            key={doctor.id}
                            onPress={() => setSelectedDoctorId(doctor.id)}
                            style={[
                                styles.doctorButton,
                                selectedDoctorId === doctor.id && styles.selectedDoctor
                            ]}
                        >
                            <Text style={styles.doctorName}>{doctor.name}</Text>
                            <Image source={doctor.image} style={styles.doctorImage} />
                        </TouchableOpacity>
                    ))}
                </View>


                {/* Date Selection */}
                <View style={styles.dateContainer}>
                    {dates.map((date) => (
                        <TouchableOpacity
                            key={date}
                            style={[styles.dateButton, selectedDate === date.split(" ")[1] && styles.selectedDate]}
                            onPress={() => setSelectedDate(date.split(" ")[1])}
                        >
                            <Text style={[styles.dateText, selectedDate === date.split(" ")[1] && styles.selectedDateText]}>{date}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Slots Display */}
                {["morningSlots", "afternoonSlots", "eveningSlots"].map((slotType) => (
                    <View key={slotType}>
                        <Text style={styles.timeTitle}>
                            {slotType === "morningSlots" ? "🌞 Morning" :
                                slotType === "afternoonSlots" ? "🌤️ Afternoon" :
                                    "🌙 Evening"}
                        </Text>
                        <FlatList
                            data={doctorsDataLatest[selectedDate]
                                ?.find((doctor: any) => doctor.id === selectedDoctorId) // ✅ Sirf selected doctor ka data le raha hai
                                ?.[slotType]?.map((slot: string) => ({ slot })) || []}
                            numColumns={3}
                            keyExtractor={(item) => item.slot}
                            renderItem={({ item }) => {
                                const isBooked = bookedSlots[selectedDate]?.includes(item.slot);
                                return (
                                    <TouchableOpacity
                                        style={[
                                            styles.slotButton,
                                            selectedSlot === item.slot && styles.selectedSlot,
                                            isBooked && styles.bookedSlot
                                        ]}
                                        onPress={() => handleSlotSelection(item.slot, selectedDoctorId)}
                                        disabled={isBooked}
                                    >
                                        <Text style={[styles.slotText, isBooked && styles.bookedSlotText]}>{item.slot}</Text>
                                    </TouchableOpacity>
                                );
                            }}
                        />
                    </View>
                ))}









                {/* Book Button */}
                <TouchableOpacity
                    style={[styles.bookButton, !selectedSlot && styles.disabledButton]}
                    onPress={bookSlot}
                    disabled={!selectedSlot}
                >
                    <Text style={styles.bookText}>Book OPD Consultation</Text>
                </TouchableOpacity>

                {/* Booking Confirmation Modal */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.slotModalContainer}>
                        <View style={styles.slotModalContent}>
                            <Text style={styles.slotModalTitle}>Booking Confirmation</Text>
                            <Text style={styles.slotModalText}>Doctor:{selectedDoctorName?.name}</Text>
                            <Text style={styles.slotModalText}>Slot Time: {selectedSlot}</Text>
                            <Text style={styles.slotModalText}>Pet Name: Bosco</Text>
                            <TouchableOpacity
                                style={styles.slotCloseButton}
                                onPress={closemodal}
                            >
                                <Text style={styles.slotCloseButtonText}>Continue</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: "#fff" },
    header: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
    doctorName: { fontSize: 18, fontWeight: "bold", marginBottom: 10, color: "#007AFF" },
    dateContainer: { flexDirection: "row", justifyContent: "space-around", marginBottom: 15 },
    dateButton: { padding: 10, borderWidth: 1, borderRadius: 10, borderColor: "#ccc" },
    selectedDate: { backgroundColor: "#000", borderColor: "#000" },
    dateText: { fontSize: 14 },
    selectedDateText: { color: "#fff", fontWeight: "bold", backgroundColor: "black" },
    timeTitle: { fontSize: 16, fontWeight: "bold", marginVertical: 10 },
    slotButton: { flex: 1, padding: 10, borderWidth: 1, borderColor: "#ccc", margin: 5, alignItems: "center", borderRadius: 10 },
    selectedSlot: { backgroundColor: "#E3F2FD", borderColor: "#007AFF" },
    bookedSlot: { backgroundColor: "#FFCDD2", borderColor: "#D32F2F" },
    slotText: { fontSize: 14 },
    bookedSlotText: { color: "#D32F2F", fontWeight: "bold" },
    bookButton: { backgroundColor: "#002A5E", padding: 15, borderRadius: 10, marginTop: 20, alignItems: "center" },
    bookText: { color: "#fff", fontSize: 16, fontWeight: "bold" },


    headerImage: { width: "100%", height: 200 },

    doctorContainer: { flexDirection: "row", marginBottom: 10 },
    doctorBox: { alignItems: "center", marginRight: 15 },
    doctorImage: { width: 80, height: 80, borderRadius: 20 },


    doctorContainer1: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 10,
    },
    doctorButton: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: "#fff",  // Light gray background
        borderRadius: 10,
        marginHorizontal: 5,
    },
    selectedDoctor: {
        backgroundColor: "#F0FFFF",  // Blue background for selected doctor
        // borderWidth:1,
        // borderRadius:"50%",
        // borderColor:"blue"
    },
    doctorName1: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
    },

    disabledButton: {
        backgroundColor: "#d3d3d3",  // Light gray background for disabled state
        opacity: 0.6,  // Reduce opacity to show it's inactive
    },




    slotModalContainer: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.5)" },
    slotModalContent: { width: "80%", backgroundColor: "#fff", padding: 20, borderRadius: 10, alignItems: "center" },
    slotModalTitle: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
    slotModalText: { fontSize: 16, marginBottom: 5 },
    slotCloseButton: { marginTop: 10, backgroundColor: "green", padding: 10, borderRadius: 5 },
    slotCloseButtonText: { color: "#fff", fontWeight: "bold" },
    // doctorName: { fontSize: 16, fontWeight: "bold", color: "#007AFF" },
});

export default SlotBookingScreen;
