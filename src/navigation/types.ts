import { NavigationProp} from '@react-navigation/native';
 type RootStackParamList = {
    Home: undefined;
    Signup: undefined; 
    OnboardingMain: undefined;
    Login: undefined;
     Profile:undefined;
    dashboard:undefined;
    ClinicsScreen:any;
    renderprofile:any;
    productcard:any;
    productlist:any;
    shoppingscreen:any;
    clinic:any;
    slotbookingscreen:any;
    appointmentDetails:any;
    cart:any;
    address:any;
    checkout:any
    calender:any;
   //  ClinicsScreen: undefined
 
 
};

export type screenNavigationProp = NavigationProp<RootStackParamList>;