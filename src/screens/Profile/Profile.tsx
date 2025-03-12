import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, ScrollView, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { screenNavigationProp } from '../../navigation/types';
import CustomInput from '../../components/CustomInput/CustomInput';  // assuming you have this component in your project
import CustomButton from '../../components/CustomButton/CustomButton';  // assuming you have this component as well
import { launchImageLibrary, launchCamera, ImagePickerResponse } from 'react-native-image-picker';
import CustomDropdown from '../../components/CustomDropdown/CustomDropdown';
import RNFS from 'react-native-fs';
import CustomDatePicker from '../../components/Datepicker/CustomDatePicker';

const Profile = () => {
    const navigation = useNavigation<screenNavigationProp>();
    const [form, setForm] = useState<{ [key: string]: string }>({
        petName: '',
        petType: '',
        petBreed: '',
        petGender: '',
        petWeight: '',
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({
        petName: '',
        petType: '',
        petBreed: '',
        petGender: '',
        petWeight: '',
    });

    const [image, setImage] = useState<string | null>(null);


    const [selectedDate, setSelectedDate] = useState(new Date());
    const [petBreedsdata, setPetBreedsdata] = useState<any>([]);

    // Handle image picking from gallery
    const pickImage = () => {
        launchImageLibrary(
            {
                mediaType: 'photo',  // Ensures only photos are selected
                quality: 1,  // Highest quality
                maxWidth: 800,  // Resize max width to 800px (optional)
                maxHeight: 800,  // Resize max height to 800px (optional)
            },
            (response: any) => {
                console.log("response....", JSON.stringify(response))
                if (response.didCancel) {
                    console.log('User cancelled image picker');
                } else if (response.errorCode) {
                    console.log('ImagePicker Error: ', response.errorCode);
                } else if (response.assets) {
                    setImage(response.assets[0].uri);  // Set image uri from gallery
                }
            }
        );
    };

    // Handle image capturing from camera
    const takePhoto = () => {



        console.log("Opening camera...");
        launchCamera(
            {
                mediaType: 'photo',  // Capture photo
                quality: 1,  // Highest quality
                maxWidth: 800,  // Resize max width to 800px (optional)
                maxHeight: 800,  // Resize max height to 800px (optional)
            },
            (response: any) => {
                console.log("response....", JSON.stringify(response))


                const imageUri = response.assets[0].uri;

                console.log(".................", imageUri)


                // return

                RNFS.readFile(imageUri, 'base64')
                    .then((base64Image) => {
                        // Prepare the API request/

                        console.log("............................dataconverted", base64Image)
                        const apiData = {
                            base64_image_data: base64Image
                        };

                        // You can then send this data in the API request
                        fetch('https://kyc-api.noosyn.ai/api/v1/predictions', {
                            method: 'POST',
                            headers: {
                                'Authorization': 'Bearer V4wJQzk2mw46gHPFLWPlZ6wCKWE24wIZ44fUPsKT',
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(apiData),
                        })
                            .then(response => response.json())
                            .then(data => console.log(data))
                            .catch(error => console.error('Error:', error));
                    })
                    .catch((error) => {
                        console.error('Error converting image to base64:', error);
                    });



                if (response.didCancel) {
                    console.log('User cancelled camera picker');
                } else if (response.errorCode) {
                    console.log('ImagePicker Error: ', response.errorCode);
                } else if (response.assets) {
                    setImage(response.assets[0].uri);  // Set captured image uri from camera
                }
            }
        );
    };

    // Handle form submission
    const handleSubmit = () => {

        
        let formErrors = { ...errors };

        // Validate the form fields
        fields.forEach((field) => {
            if (!form[field.key]) formErrors[field.key] = `${field.label} is required`;
        });

        setErrors(formErrors);

        // If no errors, log the form data
        if (!Object.values(formErrors).some((error) => error)) {
            console.log(form);
        }
    };

    const fields = [
        {
            label: 'Pet Name',
            key: 'petName',
            placeholder: 'Enter pet name',
            keyboardType: 'default',
        },
        {
            label: 'Pet Weight',
            key: 'petWeight',
            placeholder: 'Enter pet weight',
            keyboardType: 'numeric',
        },
    ];

    const [modalVisible, setModalVisible] = useState(false);
    const [profileImage, setProfileImage] = useState<string | null>(null);

    const handleCameraLaunch = () => {
        launchCamera(
            { mediaType: 'photo', cameraType: 'front', quality: 1 },
            (response) => {
                if (response.assets && response.assets.length > 0) {
                    setProfileImage(response.assets[0].uri ?? null);
                }
            }
        );
        setModalVisible(false);
    };


    const handleGalleryLaunch = () => {
        launchImageLibrary(
            { mediaType: 'photo', quality: 1 },
            (response) => {
                if (response.assets && response.assets.length > 0) {
                    setProfileImage(response.assets[0].uri ?? null);
                }
            }
        );
        setModalVisible(false);
    };



    const petBreeds = {
        Dog: [
            { label: 'Labrador Retriever', value: 'Labrador Retriever' },
            { label: 'German Shepherd', value: 'German Shepherd' },
            { label: 'Golden Retriever', value: 'Golden Retriever' },
            { label: 'Bulldog', value: 'Bulldog' },
            { label: 'Poodle', value: 'Poodle' },
            { label: 'Beagle', value: 'Beagle' },
            { label: 'Rottweiler', value: 'Rottweiler' },
            { label: 'Siberian Husky', value: 'Siberian Husky' },
            { label: 'Doberman', value: 'Doberman' },
            { label: 'Dachshund', value: 'Dachshund' }],
        Cat:
             [{ label: 'Persian Cat', value: 'Persian Cat' },
            { label: 'Maine Coon', value: 'Maine Coon' },
            { label: 'Siamese', value: 'Siamese' },
            { label: 'Bengal Cat', value: 'Bengal Cat' },
            { label: 'Ragdoll', value: 'Ragdoll' },
            { label: 'Sphynx Cat', value: 'Sphynx Cat' },
            { label: 'British Shorthair', value: 'British Shorthair' },
            { label: 'Scottish Fold', value: 'Scottish Fold' },
            { label: 'Russian Blue', value: 'Russian Blue' },
            { label: 'Abyssinian', value: 'Abyssinian' }
            ]
    };





    return (
        <ScrollView>
            <View style={styles.container}>
                {/* Profile Image Section */}
                <View style={styles.profileImageContainer}>
                    {/* <Text style={styles.profileImageText}>Profile Image</Text> */}
                    {/* <TouchableOpacity onPress={pickImage}>
                        {image ? (
                            <Image source={{ uri: image }} style={styles.profileImage} />
                        ) : (
                            <View style={styles.profileImagePlaceholder}></View>
                        )}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.editButton}>
                        <Text style={styles.editText}>✏️</Text>
                    </TouchableOpacity> */}

                    <View style={styles.profileContainer}>
                        <Image
                            source={profileImage ? { uri: profileImage } : { uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' }}
                            style={styles.profileImage}
                        />
                        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.editButton}>
                            {/* <Text style={styles.editText}>✏️</Text> */}
                            <Image
                                source={{ uri: 'data:image/png;base64,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' }}
                                style={styles.profileImage1}
                            />
                        </TouchableOpacity>
                    </View>
                    {/* <Button title="Take Photo" onPress={takePhoto} />
                 */}
                    {/* <TouchableOpacity onPress={takePhoto}>
                        <Image
                            source={require('./camera.png')}  // Replace with the actual URL of your camera image
                            style={styles.cameraImage}
                        />
                    </TouchableOpacity> */}

                </View>


                {/* Pet Information Form */}
                <View style={styles.formContainer}>
                    {fields.map((field) => (
                        <View key={field.key}>
                            <CustomInput
                                label={field.label}
                                value={form[field.key]}
                                placeholder={field.placeholder}
                                onChangeText={(text: any) => setForm({ ...form, [field.key]: text })}
                                keyboardType={field.keyboardType}
                            />
                            {errors[field.key] && <Text style={styles.errorText}>{errors[field.key]}</Text>}
                        </View>
                    ))}

                <CustomDropdown label={"Select"} value={''} options={[
                    { label: 'Dog', value: 'Dog' },
                    { label: 'Cat', value: 'Cat' },

                ]} onValueSelect={(e: any) => { e == "Cat" ? setPetBreedsdata(petBreeds.Cat) : setPetBreedsdata(petBreeds.Dog) }} placeholder={'Choose Pet Type'} />

                <CustomDropdown label={"Select"} value={''} options={[
                    { label: 'Male', value: 'Male' },
                    { label: 'Female', value: 'Female' },
                ]} onValueSelect={(e) => {console.log(e)}} placeholder={'Choose Pet Gender'} />


                <CustomDropdown label={"Select"} value={''} options={petBreedsdata} onValueSelect={() => { }} placeholder={'Choose Pet Breed'} />


              
                    <CustomDatePicker onDateSelect={(date: any) => setSelectedDate(date)} placeholder="Add Pet Birthday" label={''} />

                    <Modal
                        transparent={true}
                        animationType="slide"
                        visible={modalVisible}
                        onRequestClose={() => setModalVisible(false)}
                    >
                        <View style={styles.modalContainer}>
                            <View style={styles.modalContent}>
                                <TouchableOpacity onPress={handleCameraLaunch} style={styles.modalButton}>
                                    <Text style={styles.modalText}>Take Photo</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={handleGalleryLaunch} style={styles.modalButton}>
                                    <Text style={styles.modalText}>Upload Image</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalCancel}>
                                    <Text style={styles.cancelText}>Cancel</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>


                    <View style={{ marginTop: 40 }}>
                        {/* <CustomButton title="Save Profile" onPress={handleSubmit} /> */}
                        <CustomButton title="Save Profile" onPress={() => navigation.navigate('dashboard')} />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "white",
    },
    profileImageContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    editButton: {
        // marginLeft: 10,
        // backgroundColor: '#007AFF',
        marginTop: 25,
        // padding: 5,
        // borderRadius: 20,
        borderColor: "black",
        // borderWidth:1
    },
    editText: {
        fontSize: 12,
        color: '#fff',
    },
    profileImageText: {
        fontSize: 18,
        marginBottom: 10,
    },
    profileImage1: {
        width: 20,
        height: 20,
        // borderRadius: 50,
        marginTop: 40
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginLeft: 35
    },
    profileImagePlaceholder: {
        width: 100,
        height: 100,
        backgroundColor: '#ccc',
        borderRadius: 50,
    },
    formContainer: {
        paddingHorizontal: 10,
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginBottom: 10,
    },
    cameraImage: {
        width: 30,
        height: 30,
        resizeMode: 'contain',

    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    modalButton: {
        padding: 15,
    },
    modalText: {
        fontSize: 18,
    },
    modalCancel: {
        padding: 15,
        alignItems: 'center',
    },
    cancelText: {
        color: 'red',
        fontSize: 16,
    },
});

export default Profile;

