import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning 🌅";
    else if (hour < 17) return "Good Afternoon ☀️";
    else return "Good Evening 🌙";
};

const OwnerInfo = () => {
    const ownerName = "John Doe"; // Change this as needed

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>{getGreeting()}</Text>
                <Text style={styles.ownerName}>{ownerName}</Text>
            </View>
            <Image
                source={require("../ClinicScreen/DoctorPics/doctor1.jpeg")} // Dummy Profile Image
                style={styles.profileImage}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#088F8F',
        padding: 8,
        // borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        // margin: 10,
        width:"100%",
        // marginTop:60
    },
    greeting: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
    },
    ownerName: {
        fontSize: 20,
        color: 'white',
        fontWeight: '600',
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: 'white',
    },
});

export default OwnerInfo;
