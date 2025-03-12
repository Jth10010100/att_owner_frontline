import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const placeholders = [
    'Search for toys',
    'Search for dry fruits',
    'Search for bones',
    'Search for accessories'
];

const ShoppingScreen = () => {
    const [searchPlaceholder, setSearchPlaceholder] = useState(placeholders[0]);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            index = (index + 1) % placeholders.length;
            setSearchPlaceholder(placeholders[index]);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            {/* Header */}
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: '#f8f8f8' }}>
                <FontAwesome5 name="shopping-cart" size={24} color="black" style={{ marginRight: 10 }} />
                <TextInput
                    style={{ flex: 1, padding: 8, borderWidth: 1, borderRadius: 10, borderColor: '#ddd' }}
                    placeholder={searchPlaceholder}
                />
            </View>

            <ScrollView>
                {/* Claim Card */}
                <View style={{ padding: 10, backgroundColor: '#ffc107', margin: 10, borderRadius: 10 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Claim Your Offers Now!</Text>
                </View>

                {/* Image Carousel (Reuse existing component) */}
                <View>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', margin: 10 }}>Special Offers</Text>
                    {/* Your Carousel Component Goes Here */}
                </View>

                {/* Category Buttons */}
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', margin: 10 }}>
                    {['Last Orders', 'Dog Food', 'Cat Food', 'Dog Treats', 'Cat Treats', 'Veterinary Diet', 'Litter', 'Toys', 'Up to 50% Off'].map((item, index) => (
                        <TouchableOpacity key={index} style={{ backgroundColor: '#eee', padding: 10, margin: 5, borderRadius: 10 }}>
                            <Text>{item}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Brands Section (6 buttons, no images) */}
                <View>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', margin: 10 }}>Top Brands</Text>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {['Brand 1', 'Brand 2', 'Brand 3', 'Brand 4', 'Brand 5', 'Brand 6'].map((brand, index) => (
                            <TouchableOpacity key={index} style={{ backgroundColor: '#ddd', padding: 10, margin: 5, borderRadius: 10 }}>
                                <Text>{brand}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* Replace Blogs Section (Let me know what you want here) */}
            </ScrollView>
        </View>
    );
};

export default ShoppingScreen;
