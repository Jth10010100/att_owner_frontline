import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider, useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import store, { RootState } from './src/redux/store';
import { loadLanguage } from './src/redux/localizationSlice';
import { strings } from './src/utility/localization/string';
import Login from './src/screens/Login/Login';
import Signup from './src/screens/SignUp/Signup';
import OnboardingMain1 from './src/screens/onBoarding/OnboardingMain1';
import Profile from './src/screens/Profile/Profile';
import Dashboard from './src/screens/Dashboard/Dashboard';
import ClinicsScreen from './src/screens/ClinicScreen/ClinicScreen';
import RenderProfile from './src/screens/Profile/RenderProfile';
import ProductCard from './src/screens/Products/ProductCard';
import ProductList from './src/screens/Products/ProductList';
import ShoppingScreen from './src/screens/Shopping.tsx/ShoppingScreen';
import Clinic from './src/screens/ClinicScreen/Clinic';
import SlotBookingScreen from './src/screens/ClinicScreen/SlotBookingScreen';
import AppointmentDetails from './src/screens/Appointment/AppointmentDetails';
import CartScreen from './src/screens/cart/CartScreen';
import AddressComponent from './src/screens/Address/AddressComponent';
import CheckoutScreen from './src/screens/cart/CheckoutScreen';
import CustomCalendar from './src/screens/calender/CustomCalendar';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const dispatch = useDispatch();
  const language = useSelector((state: RootState) => state.localization.language);

  // Load language from AsyncStorage on app start
  useEffect(() => {
    const fetchLanguage = async () => {
      const storedLang = await AsyncStorage.getItem('appLanguage');
      if (storedLang) {
        dispatch(loadLanguage(storedLang));
      }
    };
    fetchLanguage();
  }, [dispatch]);

  // Ensure strings library updates language when Redux state changes
  strings.setLanguage(language);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OnboardingMain" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="OnboardingMain" component={OnboardingMain1} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="calender" component={CustomCalendar} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="dashboard" component={Dashboard} />
        <Stack.Screen name="ClinicsScreen" component={ClinicsScreen} />
        <Stack.Screen name="renderprofile" component={RenderProfile} />
        <Stack.Screen name="productcard" component={ProductCard} />
        <Stack.Screen name="productlist" component={ProductList} />
        <Stack.Screen name="shoppingscreen" component={ShoppingScreen} />
        <Stack.Screen name="clinic" component={Clinic} />
        <Stack.Screen name="slotbookingscreen" component={SlotBookingScreen} />
        <Stack.Screen name="appointmentDetails" component={AppointmentDetails} />
        <Stack.Screen name="cart" component={CartScreen} />
        <Stack.Screen name="address" component={AddressComponent} />
        <Stack.Screen name="checkout" component={CheckoutScreen} />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: true, title: "Profile" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
