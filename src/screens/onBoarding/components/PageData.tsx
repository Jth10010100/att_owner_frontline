import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { Specs } from '../../../utility/Theme';
import { StyleSheet } from 'react-native';
const { height } = Dimensions.get('window');



const styles = StyleSheet.create(
  {
    content: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      paddingBottom: 13,
      alignItems: 'center',
    },
    title: {
      ...Specs.fontSemibold,
      textAlign: 'center',
      fontSize: 25,
      color: '#3f4967',
      paddingBottom: 10,
      marginHorizontal: 25,
    },
    subtitle: {
      ...Specs.fontRegular,
      textAlign: 'center',
      fontSize: height < 680 ? 10 : 12,
      color: '#545a6b',
      marginHorizontal: 20,
      lineHeight: 20,
    },
  }
);

const Page = ({ width, children }: any) => (
  <View style={{ width }}>
    {children}
  </View>
);

const PageContent = ({ children }: any) => (
  <View style={styles.content}>
    <View style={{ flex: 0 }}>
      {children}
    </View>
  </View>
);

const PageData = ({ isLight, image, title, subtitle, titleStyles, subtitleStyles, ...rest }: any) => (
  <Page {...rest}>
    <PageContent>
      <View style={styles.image}>
        <Image style={{ objectFit: 'contain', height: 250, width: 250 }} source={image} />
      </View>
      <Text style={[styles.title, titleStyles]}>
        {title}
      </Text>
      <Text numberOfLines={3} style={[styles.subtitle, subtitleStyles]}>
        {subtitle}
      </Text>
    </PageContent>
  </Page>
);



export default PageData;
