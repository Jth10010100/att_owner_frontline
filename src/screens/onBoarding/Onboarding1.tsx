import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  Platform,
  SafeAreaView,
} from 'react-native';
import tinycolor from 'tinycolor2';
import { Specs } from '../../utility/Theme';
import { useLocalization } from '../../utility/context/LocalizationContext';  // Importing the custom hook for context
import AsyncStorage from '@react-native-async-storage/async-storage';
import PageData from './components/PageData';
import Paginator from './components/Paginator';
import LanguageModal from '../../components/languagePicker/LangaugeModal';
import { strings } from '../../utility/localization/string';




import { useSelector, useDispatch } from 'react-redux';
import { setLanguage } from '../../redux/localizationSlice';
import { RootState } from '../../redux/store';

const styles = StyleSheet.create({
  containerLang: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#191266',
  },
  languageButton: {
    padding: 10,
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
  },
  buttonContainer: {
    paddingVertical: 11,
    paddingHorizontal: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  buttonText: {
    ...Specs.fontMedium,
    color: 'white',
    fontSize: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: 'red',
    marginLeft: 70,
  },
  btn: {
    backgroundColor: 'purple',
    height: 50,
    width: '90%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  btnText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  selectLangaugeBtn: {
    height: 'auto',
    borderRadius: 10,
    padding: 5,
    paddingRight: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"none"
    // marginTop: 20,
  },
});

interface Props {
  pages: any;
  logo: any;
  onPressSignUp: any;
  onPressSignIn: any;
}

const Onboarding1: React.FC<Props> = (props) => {
  const [currentPage1, setCurrentPage1] = useState(0);
  const { width } = Dimensions.get('window');
  const { pages } = props;
  const currentPage = pages[currentPage1] || 0;
  const { backgroundColor } = currentPage;
  const marginTop = Platform.OS === 'ios' ? 33 : 25;
  const isLight = tinycolor(backgroundColor).getBrightness() > 180;
  const [langModalVisible, setLangModalVisible] = useState(false);

  // Using the custom useLocalization hook
  // const { language, setLanguage } = useLocalization();




  const dispatch = useDispatch();
  const language = useSelector((state: RootState) => state.localization.language);

  const updatePosition = (event: any) => {
    const { contentOffset, layoutMeasurement } = event.nativeEvent;
    const pageFraction = contentOffset.x / layoutMeasurement.width;
    const page = Math.round(pageFraction);
    const isLastPage = props?.pages?.length === page + 1;
    if (isLastPage && pageFraction - page > 0.3) {
      props.onPressSignIn();
    } else {
      setCurrentPage1(page);
    }
  };

  // Change language function to update both the context and AsyncStorage
  const handleLanguageChange = (lang: string) => {
    dispatch(setLanguage(lang))
    
    console.log(".................selected Language...........")
    // setLanguage(lang);  // Set language in context
    AsyncStorage.setItem('appLanguage', lang);  // Persist language setting in AsyncStorage
  };

  return (
    <ScrollView>
      <View style={{ paddingTop: 1, backgroundColor: '#f5fffb' }}>
        <View style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'row-reverse'}}>
          <TouchableOpacity
            style={styles.selectLangaugeBtn}
            onPress={() => setLangModalVisible(!langModalVisible)}>
            <Image
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlwnFZEhM07a58kj0FarD_gg9qEs3kOQyEi2TkRNFSsefo3OYr-WSHU7w&s' }}
              style={{ height: 40, width: 40, marginLeft: 10 }}
            />
          </TouchableOpacity>
        </View>
        <SafeAreaView style={{ flex: 1, backgroundColor: backgroundColor }}>
          <View style={{ flex: 2, backgroundColor: 'white', justifyContent: 'center', height: 600 }}>
            {props?.logo && (
              <Image
                style={{
                  alignSelf: 'center',
                  marginTop: marginTop,
                  marginBottom: 20,
                  height: 120,
                  width: 120,
                  objectFit: 'contain'
                }}
                source={props.logo}
              />
            )}
            <ScrollView
              pagingEnabled
              horizontal
              showsHorizontalScrollIndicator={false}
              onScroll={updatePosition}
              scrollEventThrottle={100}>
              {props?.pages.map(({ image, title, subtitle, titleStyles, subtitleStyles }: any, index: any) => (
                <PageData key={index.toString()} isLight={isLight} image={image} title={title} subtitle={subtitle} titleStyles={titleStyles} subtitleStyles={subtitleStyles} width={width} />
              ))}
            </ScrollView>
            <Paginator
              isLight={isLight}
              pages={pages?.length}
              currentPage={currentPage} />
          </View>

          <LanguageModal langModalVisible={langModalVisible}
            setLangModalVisible={setLangModalVisible}
            onSelectLang={(e: any) => { handleLanguageChange(e) }}  // Use the function to handle language change
            updateCountryName={undefined} />

          <View style={{ paddingVertical: 27, flexDirection: 'row', backgroundColor: '#fff', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <TouchableOpacity style={[styles.buttonContainer, { backgroundColor: '#6598d3' }]} onPress={props.onPressSignIn}>
              <Text style={styles.buttonText}>{strings.login.loginButton}</Text>
            </TouchableOpacity>
            {Platform.OS === 'android' && (
              <TouchableOpacity style={[styles.buttonContainer, { backgroundColor: '#006A95' }]} onPress={props.onPressSignUp}>
                <Text style={styles.buttonText}>{strings.signup.signUp}</Text>
              </TouchableOpacity>
            )}
          </View>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};

export default Onboarding1;
