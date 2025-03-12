import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image, Modal } from "react-native";

const dates = ["Thu 13", "Fri 14", "Sat 15", "Sun 16"];

const doctorsData: any = {
    "13": { name: "Dr. Anshul Sandhaan", image: "data:image/jpeg;base64,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" },
    "14": [
        { name: "Dr. Ramesh Kumar", image: "https://via.placeholder.com/80" },
    ],
    "15": { name: "Dr. Priya Sharma", image: "https://via.placeholder.com/80" },
    "16": { name: "Dr. Neha Verma", image: "https://via.placeholder.com/80" }
};
const slotsData: any = {
    "13": ["2:20 PM", "2:40 PM", "3:00 PM", "3:20 PM", "3:40 PM", "4:00 PM", "4:20 PM"],
    "14": ["2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM"],
    "15": ["1:40 PM", "2:10 PM", "2:40 PM", "3:10 PM", "3:40 PM"],
    "16": ["12:50 PM", "1:20 PM", "1:50 PM", "2:20 PM", "2:50 PM"],
};
const eveningSlotsData: any = {
    "13": ["5:00 PM", "5:40 PM"],
    "14": ["5:20 PM", "6:00 PM"],
    "15": ["5:30 PM", "6:10 PM"],
    "16": ["6:20 PM", "6:50 PM"],
};
const initialPreBookedSlots: any = {
    "13": ["2:40 PM", "3:40 PM"],
    "14": ["3:00 PM"],
    "15": ["2:40 PM"],
    "16": ["2:50 PM"],
};


//neeed this


const doctorsDataLatest: any = {
    "13": [
        {
            id: 1,
            name: "Dr. A",
            image: "url1",
            morningSlots: ["10:00 AM", "10:20 AM", "10:40 AM"],
            afternoonSlots: ["2:20 PM", "2:40 PM", "3:00 PM"],
            eveningSlots: ["5:00 PM", "5:40 PM"],
            bookedSlots: ["10:40 AM", "3:00 PM"] // Example booked slot 
        },
        {
            id: 2,
            name: "Dr. B",
            image: "url2",
            morningSlots: ["11:00 AM", "11:20 AM", "11:40 AM"],
            afternoonSlots: ["3:20 PM", "3:40 PM", "4:00 PM"],
            eveningSlots: ["6:00 PM", "6:30 PM"],
            bookedSlots: ["11:20 AM", "4:00 PM"]
        }
    ],
    "14": [
        {
            id: 3,
            name: "Dr. C",
            image: "url3",
            morningSlots: ["9:00 AM", "9:30 AM", "10:00 AM"],
            afternoonSlots: ["2:00 PM", "2:30 PM", "3:00 PM"],
            eveningSlots: ["5:20 PM", "6:00 PM"],
            bookedSlots: ["9:30 AM", "3:00 PM"]
        },
        {
            id: 4,
            name: "Dr. D",
            image: "url4",
            morningSlots: ["10:30 AM", "11:00 AM", "11:30 AM"],
            afternoonSlots: ["3:30 PM", "4:00 PM", "4:30 PM"],
            eveningSlots: ["6:20 PM", "6:50 PM"],
            bookedSlots: []
        }
    ],
    "15": [
        {
            id: 5,
            name: "Dr. E",
            image: "url5",
            morningSlots: ["8:00 AM", "8:30 AM", "9:00 AM"],
            afternoonSlots: ["1:40 PM", "2:10 PM", "2:40 PM"],
            eveningSlots: ["5:30 PM", "6:10 PM"],
            bookedSlots: ["9:00 AM", "2:40 PM"]
        },
        {
            id: 6,
            name: "Dr. F",
            image: "url6",
            morningSlots: ["9:30 AM", "10:00 AM", "10:30 AM"],
            afternoonSlots: ["3:10 PM", "3:40 PM", "4:10 PM"],
            eveningSlots: ["6:20 PM", "6:50 PM"],
            bookedSlots: ["3:40 PM"]
        }
    ],
    "16": [
        {
            id: 7,
            name: "Dr. G",
            image: "url7",
            morningSlots: ["9:30 AM", "10:00 AM", "10:30 AM"],
            afternoonSlots: ["12:50 PM", "1:20 PM", "1:50 PM"],
            eveningSlots: ["6:20 PM", "6:50 PM"],
            bookedSlots: ["10:00 AM", "1:50 PM"]
        }
    ]
};



const SlotBookingScreen = () => {
    const [selectedDate, setSelectedDate] = useState<any>("13");
    const [selectedSlot, setSelectedSlot] = useState<any>("");
    const [bookedSlots, setBookedSlots] = useState<any>(initialPreBookedSlots);
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    const handleSlotSelection = (slot: any) => {
        console.log("slectedslot", slot)
        setSelectedSlot(slot);
    };

    const bookSlot = () => {
        console.log("Prashant", selectedSlot, ",,,,")
        if (selectedSlot) {
            setBookedSlots((prev: any) => ({
                ...prev,
                [selectedDate]: [...(prev[selectedDate] || []), selectedSlot],
            }));
            console.log(bookedSlots)
            setModalVisible(true)
            setSelectedSlot("");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Vetic, Indirapuram</Text>


            <View style={styles.doctorContainer}>
                {Array.isArray(doctorsDataLatest[selectedDate]) ? (
                    doctorsDataLatest[selectedDate].map((doctor, index) => (
                        <View key={doctor.id} style={styles.doctorBox}>
                            <Image source={{ uri: doctor.image }} style={styles.doctorImage} />
                            <Text style={styles.doctorName}>{doctor.name}</Text>
                        </View>
                    ))
                ) : (
                    <Text >No doctors available for this date</Text>
                )}
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

            {/* Afternoon Slots */}
            <Text style={styles.timeTitle}>🌞 Afternoon</Text>
            <FlatList
                data={doctorsDataLatest[selectedDate]?.flatMap((doctor: any) => doctor.afternoonSlots) || []}
                numColumns={3}
                keyExtractor={(item) => item}
                renderItem={({ item }) => {
                    const isBooked = doctorsDataLatest[selectedDate]?.some((doctor: any) => doctor.bookedSlots.includes(item));

                    return (
                        <TouchableOpacity
                            style={[
                                styles.slotButton,
                                selectedSlot === item && styles.selectedSlot,
                                isBooked && styles.bookedSlot
                            ]}
                            onPress={() => handleSlotSelection(item)}
                            disabled={isBooked}
                        >
                            <Text style={[styles.slotText, isBooked && styles.bookedSlotText]}>{item}</Text>
                        </TouchableOpacity>
                    );
                }}
            />


            {/* Evening Slots */}
            <Text style={styles.timeTitle}>🌙 Evening</Text>
            <FlatList
                data={eveningSlotsData[selectedDate] || []}
                numColumns={3}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={[styles.slotButton, selectedSlot === item && styles.selectedSlot, bookedSlots[selectedDate]?.includes(item) && styles.bookedSlot]}
                        onPress={() => handleSlotSelection(item)}
                        disabled={bookedSlots[selectedDate]?.includes(item)}
                    >
                        <Text style={[styles.slotText, bookedSlots[selectedDate]?.includes(item) && styles.bookedSlotText]}>{item}</Text>
                    </TouchableOpacity>
                )}
            />

            {/* Book Button */}
            <TouchableOpacity style={styles.bookButton} onPress={bookSlot}>
                <Text style={styles.bookText}>Book OPD Consultation</Text>
            </TouchableOpacity>







            {/* Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.slotModalContainer}>
                    <View style={styles.slotModalContent}>
                        <Text style={styles.slotModalTitle}>Booking Confirmation</Text>
                        <Text style={styles.slotModalText}>Doctor: {doctorsData[selectedDate]?.name}</Text>
                        <Text style={styles.slotModalText}>Slot Time: {doctorsData[selectedDate]?.slotTime}</Text>
                        <Text style={styles.slotModalText}>Pet Name: Bosco</Text>
                        <TouchableOpacity
                            style={styles.slotCloseButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.slotCloseButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
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
    selectedDateText: { color: "#fff", fontWeight: "bold" },
    timeTitle: { fontSize: 16, fontWeight: "bold", marginVertical: 10 },
    slotButton: { flex: 1, padding: 10, borderWidth: 1, borderColor: "#ccc", margin: 5, alignItems: "center", borderRadius: 10 },
    selectedSlot: { backgroundColor: "#E3F2FD", borderColor: "#007AFF" },
    bookedSlot: { backgroundColor: "#FFCDD2", borderColor: "#D32F2F" },
    slotText: { fontSize: 14 },
    bookedSlotText: { color: "#D32F2F", fontWeight: "bold" },
    bookButton: { backgroundColor: "#002A5E", padding: 15, borderRadius: 10, marginTop: 20, alignItems: "center" },
    bookText: { color: "#fff", fontSize: 16, fontWeight: "bold" },




    doctorContainer: { flexDirection: "row", marginBottom: 10 },
    doctorBox: { alignItems: "center", marginRight: 15 },
    doctorImage: { width: 80, height: 80, borderRadius: 40 },







    slotModalContainer: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.5)" },
    slotModalContent: { width: "80%", backgroundColor: "#fff", padding: 20, borderRadius: 10, alignItems: "center" },
    slotModalTitle: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
    slotModalText: { fontSize: 16, marginBottom: 5 },
    slotCloseButton: { marginTop: 10, backgroundColor: "#dc3545", padding: 10, borderRadius: 5 },
    slotCloseButtonText: { color: "#fff", fontWeight: "bold" },
    // doctorName: { fontSize: 16, fontWeight: "bold", color: "#007AFF" },
});

export default SlotBookingScreen;
