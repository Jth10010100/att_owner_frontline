import React, { useEffect, useState } from "react";
import {
    View, Text, Image, FlatList, TextInput, ScrollView, StyleSheet, TouchableOpacity
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {dogfoodlist} from "../Products/Productdummydata/ProductList"
import { catfood } from "../Products/Productdummydata/ProductList"
import { screenNavigationProp } from "../../navigation/types";


import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/cartSlice";
import { RootState } from "../../redux/store";

const ProductList = ({ route }:any) => {
    const navigation = useNavigation<screenNavigationProp>();



    const dispatch = useDispatch();
    // const cartItems = useSelector((state: RootState) => state.cart.items);

    const handleAddToCart = (product: any) => {
        dispatch(addToCart(product));
    };

    // const dogfoodlist: any = 
    //     [
    //         {
    //             "productId": "P001",
    //             "itemName": "Pedigree Chicken & Vegetables Adult Dry Dog Food",
    //             "sku": "DOG001",
    //             "price": {
    //                 "regular": 750,
    //                 "discounted": 650,
    //                 "currency": "INR"
    //             },
    //             "description": "A complete and balanced meal with chicken and vegetables for adult dogs.",
    //             "inventory": 100,
    //             "imageUrls": require("./Productdummydata/Productimages/product1.jpeg"),
    //             "clinicId": "67aaea88518065c7570bd455",
    //             "clinicName": "Happy Paws Clinic",
    //             "clinicDescription": "A full-service pet clinic offering a wide range of medical services.",
    //             "clinicAddress": {
    //                 "address": "123 Pet Street",
    //                 "city": "New York",
    //                 "state": "NY",
    //                 "postal_code": "10001",
    //                 "latitude": 40.7128,
    //                 "longitude": -74.006
    //             },
    //             "brand": "Canine Creek",
    //             "category": "dog-food",
    //             "availability": "In stock"
    //         },
    //         {
    //             "productId": "P002",
    //             "itemName": "Carniwel Dry Dog Food with Superfoods Premium Nutrition for Small Dogs, Puppy, 3 kg",
    //             "sku": "DOG002",
    //             "price": {
    //                 "regular": 900,
    //                 "discounted": 820,
    //                 "currency": "INR"
    //             },
    //             "description": "Superfood-infused dog food for small breed puppies.",
    //             "inventory": 80,
    //             "imageUrls": require("./Productdummydata/Productimages/product1.jpeg"),
    //             "clinicId": "67aaea88518065c7570bd455",
    //             "clinicName": "Happy Paws Clinic",
    //             "clinicDescription": "A full-service pet clinic offering a wide range of medical services.",
    //             "clinicAddress": {
    //                 "address": "123 Pet Street",
    //                 "city": "New York",
    //                 "state": "NY",
    //                 "postal_code": "10001",
    //                 "latitude": 40.7128,
    //                 "longitude": -74.006
    //             },
    //             "brand": "Canine Creek",
    //             "category": "dog-food",
    //             "availability": "In stock"
    //         },
    //         {
    //             "productId": "P003",
    //             "itemName": "Himalaya Puppy Healthy Pet Food Chicken & Milk / 3 kg",
    //             "sku": "DOG003",
    //             "price": {
    //                 "regular": 1100,
    //                 "discounted": 990,
    //                 "currency": "INR"
    //             },
    //             "description": "Nutrient-rich food with chicken and milk for growing puppies.",
    //             "inventory": 70,
    //             "imageUrls": require("./Productdummydata/Productimages/product1.jpeg"),
    //             "clinicId": "67aaea88518065c7570bd455",
    //             "clinicName": "Happy Paws Clinic",
    //             "clinicDescription": "A full-service pet clinic offering a wide range of medical services.",
    //             "clinicAddress": {
    //                 "address": "123 Pet Street",
    //                 "city": "New York",
    //                 "state": "NY",
    //                 "postal_code": "10001",
    //                 "latitude": 40.7128,
    //                 "longitude": -74.006
    //             },
    //             "brand": "Canine Creek",
    //             "category": "dog-food",
    //             "availability": "In stock"
    //         },
    //         {
    //             "productId": "P004",
    //             "itemName": "Canine Creek - Ultra Premium Adult Dry Dog Food",
    //             "sku": "DOG004",
    //             "price": {
    //                 "regular": 800,
    //                 "discounted": 650,
    //                 "currency": "INR"
    //             },
    //             "description": "Ultra-premium dog food for adult dogs, enriched with essential nutrients.",
    //             "inventory": 50,
    //             "imageUrls": require("./Productdummydata/Productimages/product1.jpeg"),
    //             "clinicId": "67aaea88518065c7570bd455",
    //             "clinicName": "Happy Paws Clinic",
    //             "clinicDescription": "A full-service pet clinic offering a wide range of medical services.",
    //             "clinicAddress": {
    //                 "address": "123 Pet Street",
    //                 "city": "New York",
    //                 "state": "NY",
    //                 "postal_code": "10001",
    //                 "latitude": 40.7128,
    //                 "longitude": -74.006
    //             },
    //             "brand": "Canine Creek",
    //             "category": "dog-food",
    //             "availability": "In stock"
    //         },
    //         {
    //             "productId": "P005",
    //             "itemName": "Fidele+ Large Breed Puppies Dry Dog Food 1kg",
    //             "sku": "DOG005",
    //             "price": {
    //                 "regular": 900,
    //                 "discounted": 775,
    //                 "currency": "INR"
    //             },
    //             "description": "Premium nutrition for large breed puppies.",
    //             "inventory": 60,
    //             "imageUrls": require("./Productdummydata/Productimages/product1.jpeg"),
    //             "clinicId": "67aaea88518065c7570bd455",
    //             "clinicName": "Happy Paws Clinic",
    //             "clinicDescription": "A full-service pet clinic offering a wide range of medical services.",
    //             "clinicAddress": {
    //                 "address": "123 Pet Street",
    //                 "city": "New York",
    //                 "state": "NY",
    //                 "postal_code": "10001",
    //                 "latitude": 40.7128,
    //                 "longitude": -74.006
    //             },
    //             "brand": "Canine Creek",
    //             "category": "dog-food",
    //             "availability": "In stock"
    //         }
    //     ]

    const Dogcategories = [
        { id: "1", name: "Dog Dry", image: require("./product1.jpg") },
        { id: "2", name: "Dog Treats", image: require("./product2.jpg") },
        { id: "3", name: "Dog Wet", image: require("./product3.jpg") },
        { id: "4", name: "Pedigree", image: require("./product4.jpg") },
        { id: "5", name: "Faminine", image: require("./product1.jpg") },
        { id: "6", name: "Vetlite", image: require("./product2.jpg") },
    ];

    const catCategories = [
        { id: "1", name: "Cat Dry", image: require("./Productdummydata/Productimages/product6.webp") },
        { id: "2", name: "Cat Treats", image: require("./Productdummydata/Productimages/product7.jpeg") },
        { id: "3", name: "Cat Wet", image: require("./Productdummydata/Productimages/product8.jpg") },
        { id: "4", name: "Whiskas", image: require("./Productdummydata/Productimages/product9.jpg") },
        { id: "5", name: "Me-O", image: require("./Productdummydata/Productimages/product2.jpg") },
    ];


    const products = [
        {
            id: "1",
            name: "Whiskas (2-12 Months) Junior Ocean Fish 1.1kg",
            weight: "1.1kg",
            image: require("./product1.jpg"),
            originalPrice: "₹425",
            discountedPrice: "₹378",
            discount: "11% Off",
            nonServiceable: true,
        },
        {
            id: "2",
            name: "ME-O (2-12 Months) Persian Kitten Dry Cat Food 1.1kg",
            weight: "1.1kg",
            image: require("./product2.jpg"),
            originalPrice: "₹270.13",
            discountedPrice: "₹248",
            discount: "8% Off",
            nonServiceable: true,
        },
        {
            id: "3",
            name: "Royal Canin Persian Kitten Food 2kg",
            weight: "2kg",
            image: require("./product3.jpg"),
            originalPrice: "₹240",
            discountedPrice: "₹217",
            discount: "12% Off",
            nonServiceable: true,
        },
        {
            id: "4",
            name: "Whiskas (2-12 Months) Junior Ocean Fish 1.1kg",
            weight: "1.1kg",
            image: require("./product1.jpg"),
            originalPrice: "₹425",
            discountedPrice: "₹378",
            discount: "11% Off",
            nonServiceable: true,
        },
        {
            id: "5",
            name: "ME-O (2-12 Months) Persian Kitten Dry Cat Food 1.1kg",
            weight: "1.1kg",
            image: require("./product2.jpg"),
            originalPrice: "₹270.13",
            discountedPrice: "₹248",
            discount: "8% Off",
            nonServiceable: true,
        },
        {
            id: "6",
            name: "Royal Canin Persian Kitten Food 2kg",
            weight: "2kg",
            image: require("./product3.jpg"),
            originalPrice: "₹240",
            discountedPrice: "₹217",
            discount: "12% Off",
            nonServiceable: true,
        },
    ];

    const abc = ""

    const [productList, setProductList] = useState<any>([]);
    const [categories, setCategories] = useState<any>([]);

    useEffect(() => {
        if (route.params?.products == "dogfoodlist") {
            setProductList(dogfoodlist.result);
            setCategories(Dogcategories)
        }else{
            setProductList(catfood.result);
            setCategories(catCategories)
        }
    }, [route.params?.products]);

    return (
        <View style={styles.container}>
            {/* 🛒 Fixed Header with Search Bar & Cart Icon */}
            <View style={styles.header}>
                <TextInput placeholder="Search..." style={styles.searchBar} />
                <TouchableOpacity style={styles.cartIcon}
                    onPress={() => { navigation.navigate("cart") }}
                >
                    <FontAwesome5
                        name="cart-plus"
                        size={24}
                        color="black"
                    />
                </TouchableOpacity>
            </View>

            <View>
                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.categoryCard}>
                            <Image source={item.image} style={styles.categoryImage} />
                            <Text style={styles.categoryText}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
            <ScrollView>
                {/* 🔄 Horizontal Scroll Section */}
                {/* <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
                {categories.map((item: any) => (
                    <Image key={item} source={item.image} style={styles.scrollImage} />
                ))}
            </ScrollView> */}

                {/* 📌 Category Cards */}
             

                {/* 📦 Product List */}
                {/* <FlatList
                    data={products}
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <Image source={item.image} style={styles.image} />
                            <View style={styles.details}>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.weight}>{item.weight}</Text>
                                <Text style={styles.price}>
                                    <Text style={styles.discountedPrice}>{item.discountedPrice}</Text>
                                    {"  "}
                                    <Text style={styles.originalPrice}>{item.originalPrice}</Text>
                                </Text>
                                <Text style={styles.discount}>{item.discount}</Text>
                                {item.nonServiceable && <Text style={styles.nonServiceable}>Not Serviceable</Text>}
                                <View style={{ display: "flex", flexDirection: "row-reverse" }}>
                                    <TouchableOpacity style={styles.addButton}>
                                        <Text style={styles.addButtonText}>Add</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                /> */}

                <FlatList
                    data={productList}
                    keyExtractor={(item) => item.productId}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate("productcard", { product: item })}
                            style={styles.card}
                        >
                            <Image source={item.imageUrls} style={styles.image} />
                            <View style={styles.details}>
                                <Text style={styles.name}>{item.itemName}</Text>
                                <Text style={styles.price}>
                                    ₹{item.price.discounted}{" "}
                                    <Text style={styles.regularPrice}>₹{item.price.regular}</Text>
                                </Text>
                                <Text style={styles.availability}>{item.availability}</Text>
                                <TouchableOpacity
                                    style={styles.addButton}
                                    onPress={() => handleAddToCart(item)}
                                >
                                    <Text style={styles.addButtonText}>Add to Cart</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 10,
        justifyContent: "space-between",
    },
    searchBar: {
        flex: 1,
        backgroundColor: "#fff",
        borderRadius: 8,
        paddingHorizontal: 10,
        height: 35,
        borderWidth: 0.5
    },
    cartIcon: {
        marginLeft: 10,
        padding: 8,
    },
    scrollContainer: {
        marginVertical: 10,
    },
    scrollImage: {
        width: 120,
        height: 80,
        marginHorizontal: 5,
        borderRadius: 8,
    },
    categoryCard: {
        backgroundColor: "#fff",
        margin: 5,
        padding: 10,
        borderRadius: 8,
        alignItems: "center",
        // marginVertical:10
    },
    categoryImage: {
        width: 50,
        height: 50,
        borderRadius: 8,
    },
    categoryText: {
        fontSize: 12,
        marginTop: 5,
        fontWeight: "bold",
    },
    card: {
        flexDirection: "row",
        backgroundColor: "#fff",
        padding: 10,
        marginVertical: 5,
        borderRadius: 8,
        elevation: 2,
        alignItems: "center",
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 8,
    },
    details: {
        flex: 1,
        marginLeft: 10,
    },
    name: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#333",
    },
    weight: {
        fontSize: 12,
        color: "#777",
    },
    price: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 5,
    },
    discountedPrice: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#000",
    },
    originalPrice: {
        fontSize: 12,
        color: "#777",
        textDecorationLine: "line-through",
    },
    discount: {
        fontSize: 12,
        color: "green",
    },
    nonServiceable: {
        fontSize: 12,
        color: "red",
    },
    addButton: {
        marginTop: 5,
        backgroundColor: "#003366",
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 4,
        alignSelf:"flex-end",
    },
    addButtonText: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "bold",
    },



    regularPrice: {
        textDecorationLine: "line-through",
        color: "red",
        fontSize: 12
    },
    availability: {
        fontSize: 12,
        color: "#555",
        marginTop: 5
    }
});

export default ProductList;
