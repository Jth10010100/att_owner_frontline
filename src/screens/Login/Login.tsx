import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Image, Text, TouchableOpacity, Button, Alert, GestureResponderEvent, ImageBackground } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import styles from '../../styles/Login.styles';
import { KeyboardTypeOptions } from 'react-native'; // Import KeyboardTypeOptions type
import { StyleSheet } from 'react-native';
import { GoogleSignin, SignInResponse, statusCodes, User } from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import AnimatedLottieView from 'lottie-react-native';
import logo from '../../screens/onBoarding/OnboardingMain1'

import { strings } from '../../utility/localization/string';

import {
    createStaticNavigation,
    useNavigation
} from '@react-navigation/native';

import { screenNavigationProp } from '../../navigation/types';




interface FormState {
    email: string;
    password: string;
}

interface ErrorState {
    email: any;
    password:any
}



const Login: React.FC = () => {

    // const logo = require("./attLogo.jpg")
    const logo = require("../onBoarding/attLogo.jpg")

    // const LOADERFILE = require('../../assets/animations/loginAnim.json')
    const LOADERFILE = require('../../assets/animations/loginAnim.json')

    const navigation = useNavigation<screenNavigationProp>();


    const [form, setForm] = useState<FormState>({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState<ErrorState>({
        email: '',
        password:''
    });


    useEffect(() => {
        // Initialize Google Sign-In
        GoogleSignin.configure({
            webClientId: '987467801506-21c8ruf6r9ebnu3ne4napet4ch4meo7g.apps.googleusercontent.com', // Replace with your actual client ID
            offlineAccess: false, // If you need server-side access
        });
    }, []);

    const GoogleLogin = async () => {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        console.log('u', userInfo);
        return userInfo;
    };


    const handleGoogleLogin = async () => {
        // setLoading(true);
        try {
            const response = await GoogleLogin(); // Google sign-in
            // const { idToken } = response; // Check if idToken is directly available

            console.log('idToken:', response); // Log idToken to check if it's retrieved

            // If idToken is not directly available, get it from response.data.idToken
            // const extractedIdToken = idToken || response.data.idToken;
            // console.log('Extracted idToken from data:', extractedIdToken); // Log the extracted idToken

            // if (extractedIdToken) {
            //     // Send idToken to the backend using axios
            //     const backendResponse = await axios.post(
            //         'http://localhost:8000/google-login',
            //         {
            //             idToken: extractedIdToken, // Sending the idToken
            //         },
            //     );

            //     const data = backendResponse.data;
            //     console.log('Backend Response:', backendResponse.data);

            //     // await AsyncStorage.setItem('authToken', data.token);

            //     // setToken(data.token);

            //     // Update auth state (if using context or state)
            //     // setIsAuthenticated(true); // Navigate to the main screen
            //     // Handle JWT token and user data here
            // }
        } catch (error) {
            console.log('Login Error:', error);
        } finally {
            // setLoading(false);
        }
    };


    const signInWithGoogle = async () => {
        console.log("Prashant")
        try {
            await GoogleSignin.hasPlayServices(); // Ensure Google Play Services are available
            const response: SignInResponse = await GoogleSignin.signIn(); // Sign in and get the response
            console.log('Google Sign-In Response:', response);
            console.log('Google Sign-In Response:', );
            // Extract user details from the response
            // const user = response.user;
            // Alert.alert('Success', `Welcome ${user.name}`);
            // console.log('User Info:', user);
        } catch (error: any) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                Alert.alert('Cancelled', 'User cancelled the login.');
            } else if (error.code === statusCodes.IN_PROGRESS) {
                Alert.alert('In Progress', 'Sign-in is already in progress.');
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                Alert.alert('Error', 'Google Play Services not available or outdated.');
            } else {
                console.error('Sign-In Error:', error);
                Alert.alert('Error', 'An unexpected error occurred during Google Sign-In.');
            }
        }
    };

    


    const signInWithFacebook = async () => {
        try {
            console.log("Welcome to facebook")
            const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
            if (result.isCancelled) {
                Alert.alert('Cancelled', 'User cancelled the login.');
            } else {
                const data = await AccessToken.getCurrentAccessToken();
                if (!data) {
                    Alert.alert('Error', 'Something went wrong obtaining the access token.');
                    return;
                }

                console.log('Facebook Access Token:', data.accessToken.toString());
                // You can now send this token to AWS Cognito or handle it as needed
                Alert.alert('Success', 'Logged in with Facebook!');
            }
        } catch (error) {
            console.error('Facebook Sign-In Error:', error);
            Alert.alert('Error', 'An error occurred while signing in with Facebook.');
        }
    };

    
    const validateEmail = (email: string): string => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            return 'Email address is required';
        } else if (!emailRegex.test(email)) {
            return 'Please enter a valid email address';
        }
        return '';
    };


    const validatePassword = (password: string): string => {
        if (!password) {
            return 'Password is required';
        }
        return '';
    };

    const handleSignIn = () => {
        const emailError = validateEmail(form.email);
        const passwordError = validatePassword(form.password);

        if (emailError) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: emailError
            }));
            return;
        }

        if (passwordError) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                password: passwordError
            }));
            return;
        }

        setErrors({ email: '', password: '' });
        // Proceed with form submission
        navigation.navigate('dashboard');
        console.log('Form submitted:', form);
    };

    // Array of input configurations
    const inputs = [
        {
            label: 'Email address',
            value: form.email,
            placeholder: 'Enter Your Email....',
            keyboardType: 'email-address' as KeyboardTypeOptions, // Explicitly define keyboardType
            onChangeText: (email: string) => {
                setForm({ ...form, email });
                setErrors({ ...errors, email: validateEmail(email) });
            },
            error: errors.email,
        },
        {
            label: 'Password',
            value: form.password,
            placeholder: 'Password',
            secureTextEntry: true,
            onChangeText: (password: string) => {
                setForm({ ...form, password });
                setErrors({ ...errors, password: validatePassword(password) });
            },
            error: errors.password,
        },
    ];


    const backgroundImage = require('../../assets/images/login_bg.png');

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.container}>
                <KeyboardAwareScrollView>
                    {/* <ImageBackground
                        source={require('../../styles/loginBackground.jpg')} // Replace with your image path
                        style={{ flex: 1 ,height:800,width:"auto" }}
                        resizeMode="cover"
                    > */}
                        {/* Your content here */}
                   
                    <View style={styles.header}>
                        <Image
                            alt="App Logo"
                            resizeMode="contain"
                            style={styles.headerImg}
                            source={logo}
                        />
                        {/* <Text style={styles.title}>
                            Sign in to <Text style={{ color: '#075eec' }}>ATT</Text>
                        </Text> */}
                    </View>


                    {/* <ImageBackground
                        source={backgroundImage} // Adjust the path as needed
                        style={{ height: '50%', width: '100%' }}
                    >
                        <View style={{ flex: 1 }}>
                            <AnimatedLottieView
                                source={LOADERFILE}
                                autoPlay
                                style={{ flex: 1 }}
                                loop
                            />
                        </View>
                    </ImageBackground> */}

                    <View style={styles.form}>
                        {/* Dynamically render inputs */}
                        {inputs?.map((input, index) => (
                            <View key={index}>
                                <CustomInput
                                    label={input.label}
                                    value={input.value}
                                    placeholder={input.placeholder}
                                    keyboardType={input.keyboardType}
                                    secureTextEntry={input.secureTextEntry}
                                    onChangeText={input.onChangeText}
                                />
                                {input.error ? <Text style={styles.errorText}>{input.error}</Text> : null}
                            </View>
                        ))}

                        {/* <CustomButton title={strings.signup.signUp} onPress={handleSignIn} /> */}
                        <CustomButton title={strings.signup.signUp} onPress={() => {
                            navigation.navigate("calender", { role: "manager" })
                            
                            }} />

                        <View style={styles.orContainer}>
                            <View style={styles.line} />
                            <Text style={styles.orText}>OR</Text>
                            <View style={styles.line} />
                        </View>

                        <View style={styles.socialButtonsContainer}>
                            {/* Facebook Button */}
                            <TouchableOpacity style={styles.socialButton}
                                onPress={handleGoogleLogin}
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
                                onPress={signInWithGoogle}
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

                        {/* <View >
                            <Button
                                title="Sign in with Google"
                                color="#db4437" 
                                onPress={signInWithGoogle}
                            />
                        </View> */}

                        <Text style={styles.formLink}>Forgot password?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                            <Text style={styles.formFooter}>
                                Don't have an account?{' '}
                                <Text style={{ textDecorationLine: 'underline', color: '#58cdb4' }}>
                                    Sign up
                                </Text>
                            </Text>
                        </TouchableOpacity>
                    </View>
                    {/* </ImageBackground> */}
                </KeyboardAwareScrollView>

                {/* <TouchableOpacity
                   onPress={() => navigation.navigate('Signup')}
                    style={{ marginTop: 'auto' }}
                >
                    <Text style={styles.formFooter}>
                        Don't have an account?{' '}
                        <Text style={{ textDecorationLine: 'underline', color: '#58cdb4' }}>
                            Sign up
                        </Text>
                    </Text>
                </TouchableOpacity> */}
                
            </View>
        </SafeAreaView>
    );
};

export default Login;






// function GoogleLogin() {
//     throw new Error('Function not implemented.');
// }




// import {
//     StyleSheet,
//     Text,
//     View,
//     SafeAreaView,
//     Pressable,
//     Image,
// } from 'react-native';
// import React, { useEffect, useState, useContext } from 'react';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';
// import axios from 'axios';


// GoogleSignin.configure({
//     webClientId:
//         "987467801506-21c8ruf6r9ebnu3ne4napet4ch4meo7g.apps.googleusercontent.com",
   
//     scopes: ['profile', 'email'],
// });

// const Login = () => {
//     // const { token, setToken } = useContext(AuthContext);

//     const GoogleLogin = async () => {
//         await GoogleSignin.hasPlayServices();
//         const userInfo = await GoogleSignin.signIn();
//         console.log('u', userInfo);
//         return userInfo;
//     };

//     const [loading, setLoading] = useState(false);

//     const handleGoogleLogin = async () => {
//         setLoading(true);
//         try {
//             const response = await GoogleLogin(); // Google sign-in
//             // const { idToken } = response; // Check if idToken is directly available

//             console.log('idToken:', response); // Log idToken to check if it's retrieved

//             // If idToken is not directly available, get it from response.data.idToken
//             // const extractedIdToken = idToken || response.data.idToken;
//             // console.log('Extracted idToken from data:', extractedIdToken); // Log the extracted idToken

//             // if (extractedIdToken) {
//             //     // Send idToken to the backend using axios
//             //     const backendResponse = await axios.post(
//             //         'http://localhost:8000/google-login',
//             //         {
//             //             idToken: extractedIdToken, // Sending the idToken
//             //         },
//             //     );

//             //     const data = backendResponse.data;
//             //     console.log('Backend Response:', backendResponse.data);

//             //     await AsyncStorage.setItem('authToken', data.token);

//             //     setToken(data.token);

//             //     // Update auth state (if using context or state)
//             //     // setIsAuthenticated(true); // Navigate to the main screen
//             //     // Handle JWT token and user data here
//             // }
//         } catch (error) {
//             console.log('Login Error:', error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <SafeAreaView>
           

//             <View style={{ marginTop: 70 }}>
//                 <Pressable
//                     onPress={handleGoogleLogin}
//                     style={{
//                         flexDirection: 'row',
//                         alignItems: 'center',
//                         padding: 10,
//                         justifyContent: 'center',
//                         borderColor: '#E0E0E0',
//                         margin: 12,
//                         borderWidth: 1,
//                         gap: 30,
//                         borderRadius: 25,
//                         position: 'relative',
//                         marginTop: 20,
//                     }}>
//                     <Text style={{ textAlign: 'center', fontSize: 15, fontWeight: '500' }}>
//                         Sign Up With Google
//                     </Text>
//                 </Pressable>

              
//             </View>
//         </SafeAreaView>
//     );
// };

// export default Login;

// const styles = StyleSheet.create({});
