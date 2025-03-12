import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../redux/localizationSlice';
import { RootState } from '../../redux/store'; 
import { strings } from '../../utility/localization/string'; 

import Onboarding1 from './Onboarding1';

const OnboardingMain1: React.FC = ({ navigation }: any) => {
  const dispatch = useDispatch();

  const [currentScreen, setCurrentScreen] = useState('onboarding');

  
  const language = useSelector((state: RootState) => state.localization.language);

 
  useEffect(() => {
    strings.setLanguage(language);
  }, [language]);

  const onBoardOne = require('./image1.png');
  const onBoardTwo = require('./image.png');
  const onBoardThree = require('./onboard2.jpg');
  const logo = require('./attLogo.jpg');

  const onPressSignIn = () => {
    navigation.navigate('Login');
    // navigation.navigate('slotbookingscreen');
  };

  const onPressSignUp = () => {
    navigation.navigate('Signup');
  };

  return (
    <Onboarding1
      pages={[
        { backgroundColor: '#f5fffb', image: onBoardOne, title: strings.pet_clinic.comprehensiveCare, subtitle: strings.pet_clinic.comprehensiveDescription },
        { backgroundColor: '#f5fffb', image: onBoardTwo, title: strings.pet_clinic.emergencyCare, subtitle: strings.pet_clinic.emergencyDescription },
        { backgroundColor: '#f5fffb', image: onBoardThree, title: strings.pet_clinic.groomingHygiene, subtitle: strings.pet_clinic.groomingDescription },
      ]}
      logo={logo}
      onPressSignIn={onPressSignIn}
      onPressSignUp={onPressSignUp}
    />
  );
};

export default OnboardingMain1;
