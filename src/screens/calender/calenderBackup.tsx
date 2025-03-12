import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { CalendarList } from "react-native-calendars";

interface Slot {
    doctor: string;
    time: string;
    type: string;
    pet: string;
}

const initialSlotData: Record<string, Slot[]> = {
    "2025-03-08": [
        { doctor: "Self", time: "12:00 - 12:20", type: "Eye Check-up", pet: "Buddy" },
        { doctor: "Self", time: "14:00 - 14:30", type: "Dental Cleaning", pet: "Charlie" },
    ],
    "2025-03-12": [
        { doctor: "Self", time: "10:00 - 10:30", type: "Vaccination", pet: "Max" },
        { doctor: "Self", time: "11:00 - 11:20", type: "General Check-up", pet: "Rocky" },
        { doctor: "Self", time: "15:00 - 15:20", type: "Ear Infection", pet: "Milo" },
    ],
};

const CustomCalendar: React.FC = () => {
    const [slotData, setSlotData] = useState(initialSlotData);
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [modalVisible, setModalVisible] = useState(false);

    const handleReject = (index: number) => {
        if (selectedDate) {
            const updatedSlots = slotData[selectedDate].filter((_, i) => i !== index);
            setSlotData({ ...slotData, [selectedDate]: updatedSlots });
            if (updatedSlots.length === 0) setModalVisible(false);
        }
    };

    return (
        <View style={styles.container}>
            <CalendarList
                horizontal
                pagingEnabled
                calendarWidth={350}
                onDayPress={(day) => {
                    setSelectedDate(day.dateString);
                    setModalVisible(true);
                }}
                dayComponent={({ date, state }: any) => {
                    const slotCount = slotData[date?.dateString]?.length || 0;
                    return (
                        <TouchableOpacity
                            style={[styles.dayContainer, slotCount > 0 && styles.greenBox, state === "disabled" && { opacity: 0.5 }]}
                            onPress={() => {
                                setSelectedDate(date?.dateString);
                                setModalVisible(true);
                            }}
                        >
                            <Text style={[styles.dateText, slotCount > 0 ? { color: "white" } : { color: "black" }]}>{date?.day}</Text>
                            {slotCount > 0 && <Text style={styles.slotCount}>{slotCount} Slots</Text>}
                        </TouchableOpacity>
                    );
                }}
            />

            <Modal visible={modalVisible} transparent>
                <View style={styles.modalContainer}>
                    <View style={styles.modalBox}>
                        <Text style={styles.title}>Appointments on {selectedDate}</Text>
                        <ScrollView style={styles.scrollView}>
                            {slotData[selectedDate || ""]?.map((slot, index) => (
                                <View key={index} style={styles.slotCard}>
                                    <Text style={styles.slotText}>🩺 Doctor: {slot.doctor}</Text>
                                    <Text style={styles.slotText}>⏰ Time: {slot.time}</Text>
                                    <Text style={styles.slotText}>📌 For: {slot.type}</Text>
                                    <Text style={styles.slotText}>🐶 Pet Name: {slot.pet}</Text>
                                    <View style={styles.buttonContainer}>
                                        <TouchableOpacity style={styles.rejectButton} onPress={() => handleReject(index)}>
                                            <Text style={styles.buttonText}>Reject</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.rescheduleButton}>
                                            <Text style={styles.buttonText}>Reschedule</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.approveButton}>
                                            <Text style={styles.buttonText}>Approve</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            ))}
                        </ScrollView>
                        <TouchableOpacity onPress={() => setModalVisible(false)}>
                            <Text style={styles.closeButton}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 10 },
    dayContainer: { alignItems: "center", justifyContent: "center", width: 50, height: 60, borderRadius: 10, margin: 5 },
    greenBox: { backgroundColor: "green", padding: 10, borderRadius: 10, alignItems: "center", justifyContent: "center" },
    dateText: { fontSize: 16, fontWeight: "bold" },
    slotCount: { color: "white", fontSize: 12, fontWeight: "bold", marginTop: 2 },
    modalContainer: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.5)" },
    modalBox: { padding: 20, backgroundColor: "white", borderRadius: 10, width: 320, alignItems: "center" },
    title: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
    scrollView: { maxHeight: 300 },
    slotCard: { backgroundColor: "#f9f9f9", padding: 10, borderRadius: 5, marginVertical: 5, width: "100%" },
    slotText: { fontSize: 14, fontWeight: "bold" },
    buttonContainer: { flexDirection: "row", justifyContent: "space-between", marginTop: 10 },
    rejectButton: { backgroundColor: "red", padding: 5, borderRadius: 5, marginHorizontal: 5 },
    rescheduleButton: { backgroundColor: "orange", padding: 5, borderRadius: 5, marginHorizontal: 5 },
    approveButton: { backgroundColor: "green", padding: 5, borderRadius: 5, marginHorizontal: 5 },
    buttonText: { color: "white", fontSize: 12, fontWeight: "bold" },
    closeButton: { color: "blue", marginTop: 10 },
});

export default CustomCalendar;

























// import React, { useState } from "react";
// import { View, Text, Modal, TouchableOpacity, StyleSheet, FlatList } from "react-native";
// import { CalendarList } from "react-native-calendars";

// // Dummy Doctor Data
// const doctors = [
//     { id: "1", name: "Dr. Palak Jindal" },
//     { id: "2", name: "Dr. Aman Verma" },
//     { id: "3", name: "Dr. Riya Mehta" },
//     { id: "4", name: "Dr. Sameer Gupta" },
// ];

// // Dummy Slot Data
// const slotData:any = {
//     "2025-03-08": {
//         "Dr. Palak Jindal": [
//             { time: "12:00 - 12:20", type: "Eye Check-up", pet: "Buddy" },
//             { time: "12:00 - 12:20", type: "Eye Check-up", pet: "Buddy" },
//             { time: "12:00 - 12:20", type: "Eye Check-up", pet: "Buddy" },
//             { time: "12:00 - 12:20", type: "Eye Check-up", pet: "Buddy" },
//             { time: "12:00 - 12:20", type: "Eye Check-up", pet: "Buddy" },
//         ],
//         "Dr. Aman Verma": [
//             { time: "14:00 - 14:30", type: "Dental Cleaning", pet: "Charlie" },
//             { time: "14:00 - 14:30", type: "Dental Cleaning", pet: "Charlie" },
//             { time: "14:00 - 14:30", type: "Dental Cleaning", pet: "Charlie" },
//             { time: "14:00 - 14:30", type: "Dental Cleaning", pet: "Charlie" },
//             { time: "14:00 - 14:30", type: "Dental Cleaning", pet: "Charlie" },
//             { time: "14:00 - 14:30", type: "Dental Cleaning", pet: "Charlie" },
//         ],
//     },
//     "2025-03-12": {
//         "Dr. Riya Mehta": [
//             { time: "10:00 - 10:30", type: "Vaccination", pet: "Max" },
//         ],
//         "Dr. Sameer Gupta": [
//             { time: "11:00 - 11:20", type: "General Check-up", pet: "Rocky" },
//         ],
//     },
// };

// const CustomCalendar: React.FC = () => {
//     const [selectedDate, setSelectedDate] = useState<string | null>(null);
//     const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null);
//     const [modalVisible, setModalVisible] = useState(false);
//     const [doctorListVisible, setDoctorListVisible] = useState(false);

//     return (
//         <View style={styles.container}>
//             <CalendarList
//                 horizontal
//                 pagingEnabled
//                 calendarWidth={350}
//                 onDayPress={(day) => {
//                     setSelectedDate(day.dateString);
//                     setDoctorListVisible(true);
//                 }}
//                 dayComponent={({ date, state }: any) => {
//                     const doctorsWithSlots = Object.keys(slotData[date?.dateString] || {}).length;
//                     return (
//                         <TouchableOpacity
//                             style={[
//                                 styles.dayContainer,
//                                 doctorsWithSlots > 0 && styles.greenBox,
//                                 state === "disabled" && { opacity: 0.5 },
//                             ]}
//                             onPress={() => {
//                                 setSelectedDate(date?.dateString);
//                                 setDoctorListVisible(true);
//                             }}
//                         >
//                             <Text style={[styles.dateText, doctorsWithSlots > 0 ? { color: "white" } : { color: "black" }]}>
//                                 {date?.day}
//                             </Text>
//                             {doctorsWithSlots > 0 && (
//                                 <Text style={styles.slotCount}>{doctorsWithSlots} Doctors</Text>
//                             )}
//                         </TouchableOpacity>
//                     );
//                 }}
//             />

//             {/* Doctor List Modal */}
//             <Modal visible={doctorListVisible} transparent>
//                 <View style={styles.modalContainer}>
//                     <View style={styles.modalBox}>
//                         <Text style={styles.title}>Doctors on {selectedDate}</Text>
//                         {Object.keys(slotData[selectedDate || ""] || {}).map((doctor, index) => (
//                             <TouchableOpacity
//                                 key={index}
//                                 style={styles.doctorCard}
//                                 onPress={() => {
//                                     setSelectedDoctor(doctor);
//                                     setDoctorListVisible(false);
//                                     setModalVisible(true);
//                                 }}
//                             >
//                                 <Text style={styles.slotText}>👨‍⚕️ {doctor}</Text>
//                             </TouchableOpacity>
//                         ))}
//                         <TouchableOpacity onPress={() => setDoctorListVisible(false)}>
//                             <Text style={styles.closeButton}>Close</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//             </Modal>

//             {/* Slot Details Modal */}
//             <Modal visible={modalVisible} transparent>
//                 <View style={styles.modalContainer}>
//                     <View style={styles.modalBox}>
//                         <Text style={styles.title}>Appointments for {selectedDoctor} on {selectedDate}</Text>
//                         {slotData[selectedDate || ""]?.[selectedDoctor || ""]?.map((slot:any, index:any) => (
//                             <View key={index} style={styles.slotCard}>
//                                 <Text style={styles.slotText}>⏰ Time: {slot.time}</Text>
//                                 <Text style={styles.slotText}>📌 For: {slot.type}</Text>
//                                 <Text style={styles.slotText}>🐶 Pet Name: {slot.pet}</Text>
//                             </View>
//                         ))}
//                         <TouchableOpacity onPress={() => setModalVisible(false)}>
//                             <Text style={styles.closeButton}>Close</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//             </Modal>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: { flex: 1, padding: 10 },
//     dayContainer: {
//         alignItems: "center",
//         justifyContent: "center",
//         width: 50,
//         height: 60,
//         borderRadius: 10,
//         margin: 5,
//     },
//     greenBox: {
//         backgroundColor: "green",
//         padding: 10,
//         borderRadius: 10,
//         alignItems: "center",
//         justifyContent: "center",
//     },
//     dateText: { fontSize: 16, fontWeight: "bold" },
//     slotCount: { color: "white", fontSize: 12, fontWeight: "bold", marginTop: 2 },
//     modalContainer: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "rgba(0,0,0,0.5)",
//     },
//     modalBox: {
//         padding: 20,
//         backgroundColor: "white",
//         borderRadius: 10,
//         width: 300,
//         alignItems: "center",
//     },
//     title: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
//     slotCard: {
//         backgroundColor: "#f9f9f9",
//         padding: 10,
//         borderRadius: 5,
//         marginVertical: 5,
//         width: "100%",
//     },
//     closeButton: { color: "blue", marginTop: 10 },
//     doctorCard: {
//         backgroundColor: "#f1f1f1",
//         padding: 10,
//         borderRadius: 5,
//         marginVertical: 5,
//         width: "100%",
//     },
//     slotText: { color: "green", fontSize: 14, fontWeight: "bold" },
// });

// export default CustomCalendar;


























