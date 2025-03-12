import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native';
import { screenNavigationProp } from "../../navigation/types";

const AppointmentDetails = () => {
    const navigation = useNavigation<screenNavigationProp>();

    const [modalVisible, setModalVisible] = useState(false);
    const [actionType, setActionType] = useState("cancel"); // Tracks whether it's cancel or reschedule

    const handleAction = async () => {
        // Perform action based on actionType (cancel or reschedule)
        if (actionType === "cancel") {
            // await AsyncStorage.removeItem("bookedSlots");
            AsyncStorage.removeItem("bookedSlots")
            console.log("Appointment canceled, local storage cleared.");
            navigation.navigate('dashboard') 
            // navigation.goBack()
        } else if (actionType === "reschedule") {
            console.log("Appointment rescheduled.");
            navigation.navigate('slotbookingscreen')
            // You can handle the reschedule logic here
        }
        setModalVisible(false); // Close modal after action
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bosco’s Appointment</Text>

            <View style={styles.header}>
                <Text style={styles.location}>Kwai Hing Veterinary Clinic</Text>
                <View style={styles.confirmedBadge}>
                    <Text style={styles.confirmedText}>Confirmed</Text>
                </View>
            </View>

            <Text style={styles.address}>
                27號 Kwong Fai Circuit, Kwai Chung, Hong Kong
            </Text>

            <View style={styles.providerContainer}>
                <Image
                    source={require("../ClinicScreen/DoctorPics/doctor3.jpeg")}
                    style={styles.providerImage}
                />
                <View>
                    <Text style={styles.consultationType}>OPD Consultation</Text>
                    <Text style={styles.providerName}>Provider - Dr.Jung Hoseok</Text>
                </View>
            </View>

            <Text style={styles.sectionTitle}>Time</Text>
            <Text style={styles.sectionContent}>Sat, 15 Feb 25, 4:00 PM</Text>

            <Text style={styles.sectionTitle}>Medical Records</Text>
            <TouchableOpacity>
                <Text style={styles.viewRecords}>View All Records</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.helpContainer}>
                <Ionicons name="call-outline" size={20} color="black" />
                <Text style={styles.helpText}>Need Help</Text>
            </TouchableOpacity>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.cancelButton}
                    onPress={() => {
                        setActionType("cancel"); // Set action to cancel
                        setModalVisible(true);  // Show the modal
                    }}
                >
                    <Text>Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.rescheduleButton}
                    onPress={() => {
                        setActionType("reschedule"); // Set action to reschedule
                        setModalVisible(true);  // Show the modal
                    }}
                >
                    <Text style={styles.rescheduleText}>Reschedule</Text>
                </TouchableOpacity>
            </View>

            {/* Modal for Cancel or Reschedule confirmation */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>
                            {actionType === "cancel" ? "Cancel Appointment?" : "Reschedule Appointment?"}
                        </Text>
                        <Text style={styles.modalText}>
                            Are you sure you want to {actionType} this appointment?
                        </Text>
                        <View style={styles.modalActions}>
                            <TouchableOpacity
                                style={styles.modalButton}
                                onPress={handleAction}
                            >
                                <Text style={styles.modalButtonText}>{actionType === "cancel" ? "Yes, Cancel" : "Yes, Reschedule"}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.modalButton}
                                onPress={() => setModalVisible(false)} // Close modal
                            >
                                <Text style={styles.modalButtonText}>No, Keep Appointment</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
    },
    location: {
        fontSize: 16,
        fontWeight: "600",
    },
    confirmedBadge: {
        backgroundColor: "green",
        padding: 5,
        borderRadius: 5,
    },
    confirmedText: {
        color: "white",
    },
    address: {
        color: "gray",
        marginBottom: 10,
    },
    providerContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15,
    },
    providerImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    consultationType: {
        fontSize: 16,
        fontWeight: "bold",
    },
    providerName: {
        color: "gray",
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
    },
    sectionContent: {
        color: "gray",
        marginBottom: 15,
    },
    viewRecords: {
        color: "blue",
        marginBottom: 15,
    },
    helpContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15,
    },
    helpText: {
        marginLeft: 5,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    cancelButton: {
        flex: 1,
        padding: 15,
        borderWidth: 1,
        borderColor: "black",
        alignItems: "center",
        marginRight: 10,
        borderRadius: 5,
    },
    rescheduleButton: {
        flex: 1,
        padding: 15,
        backgroundColor: "#002855",
        alignItems: "center",
        borderRadius: 5,
    },
    rescheduleText: {
        color: "white",
    },

    // Modal Styles
    modalContainer: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.5)" },
    modalContent: { width: "80%", backgroundColor: "#fff", padding: 20, borderRadius: 10, alignItems: "center" },
    modalTitle: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
    modalText: { fontSize: 16, marginBottom: 15 },
    modalActions: { flexDirection: "column", alignItems: "center" },
    modalButton: {
        backgroundColor: "#002855",
        padding: 5,
        borderRadius: 5,
        marginVertical: 5,
        width: "80%",
        alignItems: "center",
    },
    modalButtonText: {
        color: "white",
        fontSize: 16,
    },
});

export default AppointmentDetails;
