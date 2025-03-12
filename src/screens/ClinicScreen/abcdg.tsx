

import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Modal, FlatList } from "react-native";

interface Doctor {
    id: number;
    name: string;
    slots: string[];
    bookedSlots: string[];
}

const doctors: Doctor[] = [
    { id: 1, name: "Dr. Sharma", slots: ["10:00 AM", "11:00 AM", "12:00 PM"], bookedSlots: ["11:00 AM"] },
    { id: 2, name: "Dr. Verma", slots: ["2:00 PM", "3:00 PM", "4:00 PM"], bookedSlots: ["3:00 PM"] },
];

const SlotBooking: React.FC = () => {
    const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
    const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [petName, setPetName] = useState("Tommy");

    useEffect(() => {
        setSelectedSlot(null);
    }, [selectedDoctor]);

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Select Doctor:</Text>
            {doctors.map((doctor) => (
                <TouchableOpacity
                    key={doctor.id}
                    onPress={() => setSelectedDoctor(doctor)}
                    style={{
                        padding: 10,
                        backgroundColor: selectedDoctor?.id === doctor.id ? "blue" : "gray",
                        marginVertical: 5,
                    }}
                >
                    <Text style={{ color: "white" }}>{doctor.name}</Text>
                </TouchableOpacity>
            ))}

            {selectedDoctor && (
                <View>
                    <Text style={{ fontSize: 18, marginTop: 10 }}>Select Slot:</Text>
                    <FlatList
                        data={selectedDoctor.slots}
                        keyExtractor={(item) => item}
                        numColumns={3}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() =>
                                    !selectedDoctor.bookedSlots.includes(item) && setSelectedSlot(item)
                                }
                                style={{
                                    padding: 10,
                                    margin: 5,
                                    backgroundColor: selectedDoctor.bookedSlots.includes(item)
                                        ? "red"
                                        : selectedSlot === item
                                            ? "green"
                                            : "lightgray",
                                }}
                            >
                                <Text style={{ color: "white" }}>{item}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            )}

            {selectedSlot && (
                <TouchableOpacity
                    onPress={() => setModalVisible(true)}
                    style={{ padding: 10, backgroundColor: "orange", marginTop: 20 }}
                >
                    <Text style={{ color: "white" }}>Confirm Slot</Text>
                </TouchableOpacity>
            )}

            <Modal visible={modalVisible} transparent animationType="slide">
                <View
                    style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.5)" }}
                >
                    <View style={{ padding: 20, backgroundColor: "white", borderRadius: 10 }}>
                        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Booking Details</Text>
                        <Text>Pet Name: {petName}</Text>
                        <Text>Doctor: {selectedDoctor?.name}</Text>
                        <Text>Slot: {selectedSlot}</Text>
                        <TouchableOpacity onPress={() => setModalVisible(false)} style={{ marginTop: 10 }}>
                            <Text style={{ color: "blue" }}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default SlotBooking;
