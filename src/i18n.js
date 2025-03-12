import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import AsyncStorage from '@react-native-async-storage/async-storage';
import detector from "i18next-browser-languagedetector";
import { NativeModules, Platform } from "react-native";

// const locale = NativeModules.I18nManager.localeIdentifier;
// console.log('hihihihih', locale)
// i18n.locale = locale;
// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: {
        translation: {
            "Haha": "Welcome to India",
            "Login": "Login",
            "Signin": "Sign In",
            "Signup": "Sign Up",
            "Login as a Guest": "Login as a Guest",
            "onBoardimage1": "Global Presence",
            "onBoardimage1data": "Now enjoy double advantage. Shop your favourite Vestige products and remain updated with news and offers of Vestige at a single place.",
            "onBoardimage2": "Wish you Wellth",
            "onBoardimage2data": "Your Vestige business offers you multiple benefits such as Travel Fund, Car Fund, House Fund and more. Get ahead in Vestige business and avail the benefits.",
            "onBoardimage3": "Think Global",
            "onBoardimage3data": "Connectivity is vital for us. Vestige keeps you digitally connected with your business, network and success graph 24x7.",





            "distributorIdPlaceholder": "Distributor ID",
            "distributorPasswordPlaceholder": "Enter Password",
            "forgotPassword": "forgotPassword",
            "ButtonSignIn": "Sign In With",



            "Password": "Password",
            "Verification code": "Verification code",


            //Dashboard

            "Welcome to Your Dashboard": "Welcome to Your Dashboard",
            " Aman Bansal": " Aman Bansal",
            "   Distributor-98765432": "   Distributor-98765432",
            " Last Month Level": " Last Month Level",
            "   Non Qualified Director": "   Non Qualified Director",
            " Next Level": " Next Level",
            " Senior Distributor": " Senior Distributor",
            " MY PV": " MY PV",
            "RECOMMENDATION | REFER A FRIEND": "RECOMMENDATION | REFER A FRIEND",
            " REPEAT ORDER": " REPEAT ORDER",
            "MY SHOP": "MY SHOP",
            "MY Voucher": "MY Voucher",
            "MY Bonus": "MY Bonus",
            "MY Orders": "MY Orders",
            "Make Payment": "Make Payment",
            "My Training": "My Training",


            //


            "Sort": "Sort",
            "Filter": "Filter",




        }
    },
    fr: {
        translation: {
            "Haha": "Bienvenue en Inde",
            "Login": "Se connecter",
            "onBoardimage1": "Présence globale",
            "onBoardimage1data": "Profitez désormais d’un double avantage. Achetez vos produits Vestige préférés et restez informé des actualités et des offres de Vestige en un seul endroit.",
            "onBoardimage2": "Je te souhaite du bien",
            "onBoardimage2data": "Votre entreprise Vestige vous offre de multiples avantages tels que le fonds de voyage, le fonds automobile, le fonds maison et plus encore. Prenez de l’avance dans les affaires Vestige et profitez des avantages.",
            "onBoardimage3": "Pensez mondial",
            "onBoardimage3data": "La connectivité est vitale pour nous. Vestige vous permet de rester connecté numériquement à votre entreprise, à votre réseau et à votre graphique de réussite 24h/24 et 7j/7."
        }
    },
    ur: {
        translation: {
            "Haha": "انڈیا میں خوش آمدید",
            "Login": "لاگ ان کریں",
        }
    },
    ne: {
        translation: {
            "Haha": "भारतमा स्वागत छ",
            "Login": "लग - इन",
            "Signin": "साइन इन गर्नुहोस्",
            "Login as a Guest": "अतिथिको रूपमा लगइन गर्नुहोस्",
            "Signup": "साइन अप",
            "onBoardimage1": "विश्वास प्राप्ति",
            "onBoardimage1data": "अब तपाईंको पसँदिदा Vestige उत्पादहरू किन्दै एक मात्र स्थानमा Vestige को समाचार र अफरहरूसम्म अपडेट रहनुहोस्।",
            "onBoardimage2": "शुभकामना दिन्छु",
            "onBoardimage2data": "तपाईंको Vestige व्यवसायले यात्रा को कोष, गाडीको कोष, घरको कोष, र अन्य बिर्सनुहोस्। Vestige व्यवसायमा अग्रगामी बन्दा बन्दै लाभ उठाउनुहोस्।",
            "onBoardimage3": "विश्वमा सोच्नुहोस्",
            "onBoardimage3data": "हाम्रो लागि कनेक्टिभिटी महत्त्वपूर्ण छ। Vestige तपाईंलाई आफ्नो व्यवसाय, संजाल र सफलता चार्टसँग डिजिटल रूपमा २४ घण्टा ७ दिन जडान रहन मौका प्रदान गर्दछ।",



            "distributorIdPlaceholder": "वितरक आईडी",
            "distributorPasswordPlaceholder": "पासवर्ड प्रवेश गर्नुहोस्",
            "forgotPassword": "पासवर्ड बिर्सनु भएको",
            "ButtonSignIn": "साइन इन गर्नुहोस्",


            "Password": "पासवर्ड",
            "Verification code": "प्रमाणिकरण कोड",




            "Welcome to Your Dashboard": "तपाईंको ड्यासबोर्डमा स्वागत छ",
            "Aman Bansal": "अमन बंसल",
            "Distributor-98765432": "वितरक-98765432",
            "Last Month Level": "गत महिना को स्तर",
            "Non Qualified Director": "अयोग्य निर्देशक",
            "Next Level": "अर्को स्तर",
            "Senior Distributor": "वरिष्ठ वितरक",
            "MY PV": "मेरो पीभी",
            "RECOMMENDATION | REFER A FRIEND": "सिफारिस | मित्रलाई सिफारिस गर्नुहोस्",
            "REPEAT ORDER": "पुनराबृत्ति गर्नुहोस्",
            "MY SHOP": "मेरो सरोकार",
            "MY Voucher": "मेरो भाउचर",
            "MY Bonus": "मेरो बोनस",
            "MY Orders": "मेरो आदेशहरू",
            "Make Payment": "भुक्तान गर्नुहोस्",
            "My Training": "मेरो प्रशिक्षण",


            "Sort": "क्रमबद्ध गर्नुहोस्",
            "Filter": "फिल्टर गर्नुहोस्",



            "Selected Products": "Selected Products",
            "Products Price to Pay": "Products Price to Pay",
            "Total Prices": "Total Prices",
            "Total Item": "Total Item",
            "Checkout": "Checkout",


            "Selected Products": "चयन गरिएका प्रोडक्टहरू",
            "Products Price to Pay": "चुक्नका लागि प्रोडक्टको मूल्य",
            "Total Prices": "कुल मूल्यहरू",
            "Total Item": "कुल वस्त्र",
            "Checkout": "चेकआउट"









        }
    },
    ar: {
        translation: {
            "Haha": "مرحبا في الهند",
            "Signin": "تسجيل الدخول",
            "Signup": "اشتراك",
            "Login": "تسجيل الدخول",
            "Login as a Guest": "تسجيل الدخول كضيف",
            "onBoardimage1": "حضور عالمي",
            "onBoardimage1data": "استمتع الآن بميزة مزدوجة. تسوق منتجات Vestige المفضلة لديك وابق على اطلاع دائم بأخبار وعروض Vestige في مكان واحد.",
            "onBoardimage2": "أتمنى لك ويلث",
            "onBoardimage2data": "يقدم لك مشروع Vestige الخاص بك مزايا متعددة مثل صندوق السفر وصندوق السيارة وصندوق المنزل والمزيد. تقدم في أعمال  واستفد من المزايا.",
            "onBoardimage3": "فكر عالميًا",
            "onBoardimage3data": "الاتصال أمر حيوي بالنسبة لنا. يبقيك Vestige على اتصال رقميًا بعملك وشبكتك ورسم بياني للنجاح على مدار الساعة طوال أيام الأسبوع.",




            "distributorIdPlaceholder": "معرف الموزع",
            "distributorPasswordPlaceholder": "أدخل كلمة المرور",
            "forgotPassword": "نسيت كلمة المرور",
            "ButtonSignIn": "تسجيل الدخول باستخدام",


            "Password": "كلمة المرور",
            "Verification code": "رمز التحقق",




            "Welcome to Your Dashboard": "مرحبًا بك في لوحة التحكم الخاصة بك",
            "Aman Bansal": "أمان بانسال",
            "Distributor-98765432": "موزع-98765432",
            "Last Month Level": "المستوى في الشهر الماضي",
            "Non Qualified Director": "مدير غير مؤهل",
            "Next Level": "المستوى التالي",
            "Senior Distributor": "موزع كبير",
            "MY PV": "نقاط القيمة الشخصية",
            "RECOMMENDATION | REFER A FRIEND": "التوصية | أشر إلى صديق",
            "REPEAT ORDER": "تكرار الطلب",
            "MY SHOP": "متجري",
            "MY Voucher": "قسيمتي",
            "MY Bonus": "مكافأتي",
            "MY Orders": "طلباتي",
            "Make Payment": "قم بالدفع",
            "My Training": "تدريبي",


            "Sort": "فرز",
            "Filter": "تصفية",



            "Selected Products": "المنتجات المختارة",
            "Products Price to Pay": "سعر المنتجات المطلوب دفعه",
            "Total Prices": "الأسعار الإجمالية",
            "Total Item": "العناصر الإجمالية",
            "Checkout": "الدفع"






        }
    },
    bn: {
        translation: {
            "Haha": "ভারতে স্বাগতম",
            "Login": "প্রবেশ করুন",
            "Signin": "সাইন ইন করুন",
            "Signup": "নিবন্ধন করুন",
            "Login as a Guest": "অতিথি হিসেবে লগইন করুন",
            "onBoardimage1": "গ্লোবাল উপস্থিতি",
            "onBoardimage1data": "এখন আপনি আপনার প্রিয় Vestige পণ্য কিনতে এবং Vestige সংবাদ এবং অফার সম্পর্কে একই স্থানে সংবাদ দেখতে পাচ্ছেন।",
            "onBoardimage2": "আপনাকে ভালো কামনা করি",
            "onBoardimage2data": "আপনার Vestige প্রতিষ্ঠান আপনাকে ভ্রমণ ফান্ড, গাড়ি ফান্ড, বাড়ি ফান্ড এবং আরও অনেক সুযোগ প্রদান করে। Vestige ব্যবসায়ে এগিয়ে যাওয়া এবং সুযোগ নিন।",
            "onBoardimage3": "বিশ্বজুড়ে চিন্তা করুন",
            "onBoardimage3data": "সংযোগ আমাদের জন্য গুরুত্বপূর্ণ। Vestige আপনাকে আপনার প্রতিষ্ঠান, নেটওয়ার্ক, এবং সাফল্য চার্টে ডিজিটালভাবে 24/7 যোগাযোগ করার সুযোগ দেয়।",



            "distributorIdPlaceholder": "বিতরক আইডি",
            "distributorPasswordPlaceholder": "পাসওয়ার্ড দিন",
            "forgotPassword": "পাসওয়ার্ড ভুলে গেছেন",
            "ButtonSignIn": "সাইন ইন করুন",


            "Password": "পাসওয়ার্ড",
            "Verification code": "যাচাইকরণ কোড",



            "Welcome to Your Dashboard": "আপনার ড্যাশবোর্ডে স্বাগতম",
            "Aman Bansal": "আমান বাংসল",
            "Distributor-98765432": "বিতরক-98765432",
            "Last Month Level": "গত মাসের স্তর",
            "Non Qualified Director": "যোগ্যতা নেই নির্দেশক",
            "Next Level": "পরবর্তী স্তর",
            "Senior Distributor": "বরিষ্ঠ বিতরক",
            "MY PV": "আমার পি.ভি.",
            "RECOMMENDATION | REFER A FRIEND": "সুপারিশ | একটি বন্ধুকে পরিচিত করুন",
            "REPEAT ORDER": "পুনরাবৃত্তি করুন",
            "MY SHOP": "আমার দোকান",
            "MY Voucher": "আমার ভাউচার",
            "MY Bonus": "আমার বোনাস",
            "MY Orders": "আমার অর্ডার",
            "Make Payment": "পেমেন্ট করুন",
            "My Training": "আমার প্রশিক্ষণ",



            "Sort": "সাজানো",
            "Filter": "ফিল্টার",




            "Selected Products": "নির্বাচিত পণ্য",
            "Products Price to Pay": "দিতে প্রোডাক্ট দাম",
            "Total Prices": "মোট মূল্য",
            "Total Item": "মোট আইটেম",
            "Checkout": "চেকআউট"
        }
    }
};




export const updateFallbackLanguage = (newFallbackLng) => {
    i18n.changeLanguage(newFallbackLng);
    i18n.options.fallbackLng = newFallbackLng;
};



i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        compatibilityJSON: 'v3',
        lng: "en",
        // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option
        fallbackLng: "en",
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;