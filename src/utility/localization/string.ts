// import LocalizedStrings from 'react-native-localization';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// // Define all translations
// export const strings = new LocalizedStrings({
//     en: {
//         login: {
//             email: "Email",
//             password: "Password",
//             loginButton: "Login",
//             forgotPassword: "Forgot Password?",
//             signUpPrompt: "Don't have an account? Sign up"
//         },
//         signup: {
//             signUp: "Sign Up",
//             name: "Name",
//             email: "Email",
//             password: "Password",
//             confirmPassword: "Confirm Password",
//             submitButton: "Submit"
//         },
//         dashboard: {
//             welcome: "Welcome to Dashboard",
//             logout: "Logout"
//         }
//     },
//     fr: {
//         login: {
//             email: "Email",
//             password: "Mot de passe",
//             loginButton: "Se connecter",
//             forgotPassword: "Mot de passe oublié?",
//             signUpPrompt: "Pas de compte ? Inscrivez-vous"
//         },
//         signup: {
//             signUp: "S'inscrire",
//             name: "Nom",
//             email: "Email",
//             password: "Mot de passe",
//             confirmPassword: "Confirmer le mot de passe",
//             submitButton: "Soumettre"
//         },
//         dashboard: {
//             welcome: "Bienvenue au tableau de bord",
//             logout: "Se déconnecter"
//         }
//     },
//     hi: {
//         login: {
//             email: "ईमेल",
//             password: "पासवर्ड",
//             loginButton: "लॉग इन करें",
//             forgotPassword: "पासवर्ड भूल गए?",
//             signUpPrompt: "खाता नहीं है? साइन अप करें"
//         },
//         signup: {
//             signUp: "साइन अप करें",
//             name: "नाम",
//             email: "ईमेल",
//             password: "पासवर्ड",
//             confirmPassword: "पासवर्ड की पुष्टि करें",
//             submitButton: "सबमिट करें"
//         },
//         dashboard: {
//             welcome: "डैशबोर्ड में आपका स्वागत है",
//             logout: "लॉग आउट"
//         }
//     }
// });

// // Function to set and persist language
// export const setAppLanguage = async (language: string) => {
//     await AsyncStorage.setItem('appLanguage', language);
//     strings.setLanguage(language);
// };

// // Function to get the stored language
// export const getAppLanguage = async () => {
//     const storedLanguage = await AsyncStorage.getItem('appLanguage');
//     if (storedLanguage) {
//         strings.setLanguage(storedLanguage);
//     } else {
//         strings.setLanguage('hi'); // Default language
//     }
// };



import LocalizedStrings from 'react-native-localization';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define all translations
export const strings = new LocalizedStrings({
    en: {
        login: {
            email: "Email",
            password: "Password",
            loginButton: "Login",
            forgotPassword: "Forgot Password?",
            signUpPrompt: "Don't have an account? Sign up"
        },
        signup: {
            signUp: "Sign Up",
            name: "Name",
            email: "Email",
            password: "Password",
            confirmPassword: "Confirm Password",
            submitButton: "Submit"
        },
        dashboard: {
            welcome: "Welcome to Dashboard",
            logout: "Logout"
        },
        pet_clinic: {
            comprehensiveCare: "Comprehensive Veterinary Care",
            comprehensiveDescription: "Offering complete health services for your pets, including vaccinations, surgeries, and wellness check-ups to ensure they stay healthy and happy.",
            emergencyCare: "Emergency and Urgent Care",
            emergencyDescription: "Providing prompt and professional emergency services for your pets, available 24/7, to address any critical health issues when they arise.",
            groomingHygiene: "Pet Grooming and Hygiene",
            groomingDescription: "Ensuring your pet looks and feels their best with our expert grooming services, from bathing and nail trimming to fur styling and dental care."
        }
    },
    fr: {
        login: {
            email: "Email",
            password: "Mot de passe",
            loginButton: "Se connecter",
            forgotPassword: "Mot de passe oublié?",
            signUpPrompt: "Pas de compte ? Inscrivez-vous"
        },
        signup: {
            signUp: "S'inscrire",
            name: "Nom",
            email: "Email",
            password: "Mot de passe",
            confirmPassword: "Confirmer le mot de passe",
            submitButton: "Soumettre"
        },
        dashboard: {
            welcome: "Bienvenue au tableau de bord",
            logout: "Se déconnecter"
        },
        pet_clinic: {
            comprehensiveCare: "Soins vétérinaires complets",
            comprehensiveDescription: "Offrant des services de santé complets pour vos animaux de compagnie, y compris les vaccinations, les interventions chirurgicales et les bilans de santé pour qu'ils restent en bonne santé et heureux.",
            emergencyCare: "Soins d'urgence et urgents",
            emergencyDescription: "Fournissant des services d'urgence rapides et professionnels pour vos animaux, disponibles 24h/24 et 7j/7, pour traiter toute urgence de santé dès qu'elle survient.",
            groomingHygiene: "Toilettage et hygiène des animaux",
            groomingDescription: "Assurant que votre animal a fière allure et se sent bien grâce à nos services de toilettage experts, allant du bain et de la coupe des ongles à la coiffure et aux soins dentaires."
        }
    },
    hi: {
        login: {
            email: "ईमेल",
            password: "पासवर्ड",
            loginButton: "लॉग इन करें",
            forgotPassword: "पासवर्ड भूल गए?",
            signUpPrompt: "खाता नहीं है? साइन अप करें"
        },
        signup: {
            signUp: "साइन अप करें",
            name: "नाम",
            email: "ईमेल",
            password: "पासवर्ड",
            confirmPassword: "पासवर्ड की पुष्टि करें",
            submitButton: "सबमिट करें"
        },
        dashboard: {
            welcome: "डैशबोर्ड में आपका स्वागत है",
            logout: "लॉग आउट"
        },
        pet_clinic: {
            comprehensiveCare: "सम्पूर्ण पशु चिकित्सा देखभाल",
            comprehensiveDescription: "आपके पालतू जानवरों के लिए पूर्ण स्वास्थ्य सेवाएँ प्रदान करना, जिसमें टीकाकरण, सर्जरी और स्वास्थ्य जांच शामिल हैं, ताकि वे स्वस्थ और खुशहाल रहें।",
            emergencyCare: "आपातकालीन और तात्कालिक देखभाल",
            emergencyDescription: "आपके पालतू जानवरों के लिए त्वरित और पेशेवर आपातकालीन सेवाएँ प्रदान करना, जो 24/7 उपलब्ध हैं, ताकि किसी भी स्वास्थ्य समस्या का समाधान किया जा सके।",
            groomingHygiene: "पालतू जानवरों की सफाई और स्वच्छता",
            groomingDescription: "हमारी विशेषज्ञ सफाई सेवाओं के साथ यह सुनिश्चित करना कि आपका पालतू बेहतर दिखे और अच्छा महसूस करे, जिसमें स्नान, नाखून काटना, फर स्टाइलिंग और दांतों की देखभाल शामिल हैं।"
        }
    }
});

// Function to set and persist language
export const setAppLanguage = async (language: string) => {
    await AsyncStorage.setItem('appLanguage', language);
    strings.setLanguage(language);
};

// Function to get the stored language
export const getAppLanguage = async () => {
    const storedLanguage = await AsyncStorage.getItem('appLanguage');
    if (storedLanguage) {
        strings.setLanguage(storedLanguage);
    } else {
        strings.setLanguage('hi'); // Default language
    }
};
