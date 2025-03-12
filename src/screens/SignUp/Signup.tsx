// import React, { useState } from 'react';
// import {
//     StyleSheet,
//     SafeAreaView,
//     View,
//     Text,
//     Alert,
//     Image,
// } from 'react-native';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import CustomInput from '../../components/CustomInput/CustomInput';
// import CustomButton from '../../components/CustomButton/CustomButton';
// import { KeyboardTypeOptions } from 'react-native';

// interface FormState {
//     name: string;
//     email: string;
//     password: string;
//     confirmPassword: string;
// }

// const inputLabels: Array<{ key: keyof FormState; label: string; placeholder: string; keyboardType?: KeyboardTypeOptions; secureTextEntry?: boolean }> = [
//     { key: 'name', label: 'Name', placeholder: 'Enter Your Name...' },
//     { key: 'email', label: 'Email', placeholder: 'email@example.com', keyboardType: 'email-address' },
//     { key: 'password', label: 'Password', placeholder: '********', secureTextEntry: true },
//     { key: 'confirmPassword', label: 'Confirm Password', placeholder: '********', secureTextEntry: true },
// ];

// export default function Signup() {
//     const [form, setForm] = useState<FormState>({
//         name: '',
//         email: '',
//         password: '',
//         confirmPassword: '',
//     });

//     const [errors, setErrors] = useState<Record<string, string>>({});

//     const validate = () => {
//         let isValid = true;
//         let validationErrors: Record<string, string> = {};

//         if (!form.name) {
//             validationErrors.name = 'Name is required';
//             isValid = false;
//         }

//         const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!form.email || !emailPattern.test(form.email)) {
//             validationErrors.email = 'Valid email is required';
//             isValid = false;
//         }

//         if (!form?.password || form.password?.length < 8) {
//             validationErrors.password = 'Password must be at least 8 characters long';
//             isValid = false;
//         }

//         if (form.password !== form.confirmPassword) {
//             validationErrors.confirmPassword = 'Passwords do not match';
//             isValid = false;
//         }

//         setErrors(validationErrors);
//         return isValid;
//     };

//     const handleSignup = () => {
//         if (validate()) {
//             // Perform signup action
//             Alert.alert('Signup Successful', `Welcome, ${form.name}`);
//             // Reset the form
//             setForm({
//                 name: '',
//                 email: '',
//                 password: '',
//                 confirmPassword: '',
//             });
//             setErrors({});
//         }
//     };

//     const logo = require("../onBoarding/attLogo.jpg")

//     return (
//         <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
//             <View style={styles.container}>
//                 <KeyboardAwareScrollView>
//                     <View style={styles.header}>
//                         <View >
//                             <Image
//                                 alt="App Logo"
//                                 resizeMode="contain"
//                                 style={styles.headerImg}
//                                 source={logo}
//                             />
//                             {/* <Text style={styles.title}>
//                             Sign in to <Text style={{ color: '#075eec' }}>ATT</Text>
//                         </Text> */}
//                         </View>
//                         <Text style={styles.title}>
//                             Create your account
//                         </Text>
//                     </View>

//                     <View style={styles.form}>
//                         {inputLabels.map(({ key, label, placeholder, keyboardType, secureTextEntry }) => (
//                             <View key={key}>
//                                 <CustomInput
//                                     label={label}
//                                     value={form[key]}
//                                     placeholder={placeholder}
//                                     onChangeText={text => setForm({ ...form, [key]: text })}
//                                     keyboardType={keyboardType}
//                                     secureTextEntry={secureTextEntry}
//                                 />
//                                 {errors[key] && <Text style={styles.errorText}>{errors[key]}</Text>}
//                             </View>
//                         ))}

//                         <View style={styles.formAction}>
//                             <CustomButton title="Sign Up" onPress={handleSignup} />
//                         </View>
//                     </View>
//                 </KeyboardAwareScrollView>
//             </View>
//         </SafeAreaView>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         paddingVertical: 24,
//         paddingHorizontal: 0,
//         flexGrow: 1,
//         flexShrink: 1,
//         flexBasis: 0,
//     },
//     title: {
//         fontSize: 31,
//         fontWeight: '700',
//         color: '#1D2A32',
//         // marginBottom: 6,
//     },
//     subtitle: {
//         fontSize: 15,
//         fontWeight: '500',
//         color: '#929292',
//     },
//     header: {
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginVertical: 36,
//     },
//     form: {
//         marginBottom: 24,
//         paddingHorizontal: 24,
//         flexGrow: 1,
//         flexShrink: 1,
//         flexBasis: 0,
//     },
//     formAction: {
//         marginTop: 4,
//         marginBottom: 16,
//     },
//     errorText: {
//         color: 'red',
//         marginTop: 4,
//         fontSize: 12,
//     },
//     headerImg: {
//         width: 100,
//         height: 100,
//         alignSelf: 'center',
//         marginBottom: 1,
//     }
// });



import React, { useState } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    Alert,
    Image,
    TouchableOpacity,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { KeyboardTypeOptions } from 'react-native';

interface FormState {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const inputLabels: Array<{ key: keyof FormState; label: string; placeholder: string; keyboardType?: KeyboardTypeOptions; secureTextEntry?: boolean }> = [
    { key: 'firstName', label: 'First Name', placeholder: 'Enter Your First Name...' },
    { key: 'lastName', label: 'Last Name', placeholder: 'Enter Your Last Name...' },
    { key: 'email', label: 'Email', placeholder: 'email@example.com', keyboardType: 'email-address' },
    { key: 'password', label: 'Password', placeholder: 'Password', secureTextEntry: true },
    { key: 'confirmPassword', label: 'Confirm Password', placeholder: 'ConfirmPassword', secureTextEntry: true },
];

export default function Signup() {
    const [form, setForm] = useState<FormState>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const validate = () => {
        let isValid = true;
        let validationErrors: Record<string, string> = {};

        if (!form.firstName.trim()) {
            validationErrors.firstName = 'First name is required';
            isValid = false;
        }

        if (!form.lastName.trim()) {
            validationErrors.lastName = 'Last name is required';
            isValid = false;
        }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!form.email || !emailPattern.test(form.email)) {
            validationErrors.email = 'Enter a valid email';
            isValid = false;
        }

        const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!form.password || !passwordPattern.test(form.password)) {
            validationErrors.password = 'Password must be 8+ characters, include 1 uppercase, 1 number & 1 special character';
            isValid = false;
        }

        if (form.password !== form.confirmPassword) {
            validationErrors.confirmPassword = 'Passwords do not match';
            isValid = false;
        }

        setErrors(validationErrors);
        return isValid;
    };

    const handleSignup = () => {
        if (validate()) {
            Alert.alert('Signup Successful', `Welcome, ${form.firstName} ${form.lastName}`);
            setForm({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: '',
            });
            setErrors({});
        }
    };

    // const logo = require("../../onBoarding/attLogo.jpg");

    const logo = require("../onBoarding/attLogo.jpg")

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.container}>
                <KeyboardAwareScrollView>
                    <View style={styles.header}>
                        <Image
                            alt="App Logo"
                            resizeMode="contain"
                            style={styles.headerImg}
                            source={logo}
                        />
                        {/* <Text style={styles.title}>Create your account</Text> */}
                    </View>

                    <View style={styles.form}>
                        {inputLabels.map(({ key, label, placeholder, keyboardType, secureTextEntry }) => (
                            <View key={key} style={[styles.inputContainer, errors[key] ? styles.errorBorder : {}]}>
                                <CustomInput
                                    label={label}
                                    value={form[key]}
                                    placeholder={placeholder}
                                    onChangeText={text => setForm({ ...form, [key]: text })}
                                    keyboardType={keyboardType}
                                    secureTextEntry={secureTextEntry}
                                />
                                {errors[key] && <Text style={styles.errorText}>{errors[key]}</Text>}
                            </View>
                        ))}

                        <View style={styles.formAction}>
                            <CustomButton title="Sign Up" onPress={handleSignup} />
                        </View>


                        <TouchableOpacity onPress={() => { }} style={{ marginTop: 10, alignSelf:"flex-end" }}>
                            <Text style={{ fontSize: 14, color: '#075EEC', fontWeight: 'bold' }}>Already have an account?</Text>
                        </TouchableOpacity>








                        <View style={styles.orContainer}>
                            <View style={styles.line} />
                            <Text style={styles.orText}>OR</Text>
                            <View style={styles.line} />
                        </View>

                        <View style={styles.socialButtonsContainer}>
                            {/* Facebook Button */}
                            <TouchableOpacity style={styles.socialButton}
                                onPress={()=>{}}
                            >
                                <Image
                                    source={{
                                        uri: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png',
                                    }}
                                    style={styles.icon}
                                />
                            </TouchableOpacity>

                            {/* Google Button */}
                            <TouchableOpacity style={styles.socialButton}
                                onPress={()=>{}}
                            >
                                <Image
                                    source={{
                                        uri: 'https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png',
                                    }}
                                    style={styles.icon}
                                />
                            </TouchableOpacity>

                            {/* Apple Button */}
                            <TouchableOpacity style={styles.socialButton}>
                                <Image
                                    source={{
                                        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1024px-Apple_logo_black.png',
                                    }}
                                    style={styles.icon}
                                />
                            </TouchableOpacity>








                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 24,
        flexGrow: 1,
    },
    title: {
        fontSize: 31,
        fontWeight: '700',
        color: '#1D2A32',
        fontFamily:'Montserrat'
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 36,
    },
    form: {
        marginBottom: 24,
        paddingHorizontal: 24,
        flexGrow: 1,
    },
    formAction: {
        marginTop: 4,
        marginBottom: 16,
    },
    inputContainer: {
        marginBottom: 10,
    },
    errorBorder: {
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
    },
    errorText: {
        color: 'red',
        marginTop: 4,
        fontSize: 12,
    },
    headerImg: {
        width: 120,
        height: 120,
        alignSelf: 'center',
        marginBottom: 1,
    },














   
    orContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    orText: { marginHorizontal: 8, color: '#888' },
    line: { flex: 1, height: 1, backgroundColor: '#ddd' },
    socialButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 16,
        marginTop: 20
    },
    socialButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    }, icon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    }
});

