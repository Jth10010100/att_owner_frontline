import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, FlatList, StyleSheet, Dimensions, ScrollView } from "react-native";

const { width } = Dimensions.get("window");



const Footer = () => {
    return (
        <View style={styles.footerContainer}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buyNowButton}>
                <Text style={styles.buyNowText}>Buy Now</Text>
            </TouchableOpacity>
        </View>
    );
};

const ProductCard = ({ route }:any) => {

    const { product } = route.params;
    console.log("data from click card",product)

    const [selectedSize, setSelectedSize] = useState("800gm");
    const [pinCode, setPinCode] = useState("");

    const packSizes = [
        { size: "800gm", discount: "11% Off" },
        { size: "4kg", discount: "11% Off" },
        { size: "8kg", discount: "7% Off" },
    ];

    const productImages = [
        require("./product1.jpg"),
        require("./product2.jpg"),
        require("./product3.jpg"),
        require("./product4.jpg"),
        require("./product5.jpg"),
    ];


    const products = [
        {
            id: "1",
            name: "Whiskas (2-12 Months) Junior Ocean Fish 1.1kg",
            weight: "1.1kg",
            image: require("./product1.jpg"), // Replace with actual images
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
            id: "1",
            name: "Whiskas (2-12 Months) Junior Ocean Fish 1.1kg",
            weight: "1.1kg",
            image: require("./product1.jpg"), // Replace with actual images
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
    ];

    return (
        <View style={styles.container}>
      <ScrollView>
                {/* Image Carousel */}
                <FlatList
                    data={productImages}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <Image source={item} style={styles.image} />
                    )}
                />

                {/* Product Details */}
                <Text style={styles.title}>Royal Canin (2-12 Months) Mini Puppy 800GM</Text>
                <View style={styles.priceRow}>
                    <Text style={styles.strikeThrough}>₹950</Text>
                    <Text style={styles.discountedPrice}>₹845</Text>
                </View>
                <Text style={styles.pricePerGram}>Price per 100 gm: 105.6</Text>
                <Text style={styles.discount}>11% off</Text>
                <Text style={styles.extraDiscount}>Get extra 5% off</Text>

                {/* Pack Size Selection */}
                <Text style={styles.sectionTitle}>Pack Size</Text>
                <View style={styles.packSizeContainer}>
                    {packSizes.map((item) => (
                        <TouchableOpacity
                            key={item.size}
                            style={[
                                styles.packSizeButton,
                                selectedSize === item.size && styles.selectedPackSize,
                            ]}
                            onPress={() => setSelectedSize(item.size)}
                        >
                            <Text style={styles.packSizeText}>{item.size}</Text>
                            <Text style={styles.discountText}>{item.discount}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Pin Code Input */}
                <Text style={styles.sectionTitle}>Deliver to:</Text>
                <View style={styles.pinCodeContainer}>
                    <TextInput
                        style={styles.pinCodeInput}
                        placeholder="Enter Pin code"
                        value={pinCode}
                        onChangeText={setPinCode}
                    />
                    <TouchableOpacity style={styles.checkButton}>
                        <Text style={styles.checkButtonText}>Check</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.nonServiceable}>Non Serviceable Pincode</Text>
                <View style={{borderWidth:1,marginTop:10}}></View>

                <View style={{display:"flex",alignContent:"center",alignItems:"center"}}>
                    <Text style={{marginVertical:15 }}>Details</Text>

                    <Text style={styles.heading}>About this item</Text>
                 
                    <View style={styles.listContainer}>
                        <Text style={styles.listItem}>
                            • <Text style={styles.boldText}>COMPLETE AND BALANCED DOG FOOD:</Text> Pedigree Dry Dog Food provides complete & balanced nutrition for puppies.
                        </Text>
                        <Text style={styles.listItem}>
                            • <Text style={styles.boldText}>DELICIOUS FLAVOR:</Text> Pedigree Puppy Dry Dog Food, Chicken & Milk, is packed with mouth-watering kibbles to delight your puppy.
                        </Text>
                        <Text style={styles.listItem}>
                            • <Text style={styles.boldText}>QUALITY INGREDIENTS:</Text> This tasty & healthy food is made with high-quality ingredients, including chicken & milk to support proper nutrition.
                        </Text>
                        <Text style={styles.listItem}>
                            • <Text style={styles.boldText}>NOURISHING FOOD:</Text> Developed with experts, it contains 37 essential nutrients.
                        </Text>
                        <Text style={styles.listItem}>
                            • <Text style={styles.boldText}>HEALTH BENEFITS:</Text> When fed as recommended, this dry dog food supports strong muscles & bones (High Quality Protein & Calcium), brain & vision development (DHA), and healthy natural defense (Vitamin E & Selenium).
                        </Text>
                        <Text style={styles.listItem}>
                            • <Text style={styles.boldText}>Target Audience:</Text> Dogs
                        </Text>
                        <Text style={styles.listItem}>
                            • <Text style={styles.boldText}>Container Type:</Text> Bag
                        </Text>
                    </View>


                    <View style={styles.productContainer}>
                        <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }}>
                            <Text style={styles.productHeading}>Similar Products</Text>
                            <TouchableOpacity>
                                <Text>View All</Text>
                            </TouchableOpacity>
                        </View>

                        <FlatList
                            data={products}
                            horizontal
                            pagingEnabled
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(_, index) => index.toString()}
                            renderItem={({ item }) => (
                                <View style={styles.productCard}>
                                    <Image source={item.image} style={styles.productImage} />
                                    <Text style={styles.productName}>{item.name} {item.weight}</Text>
                                    <Text style={styles.productWeight}>{item.weight}</Text>
                                    <Text style={styles.productOldPrice}>₹{item.originalPrice}</Text>
                                    <Text style={styles.productNewPrice}>₹{item.discountedPrice}</Text>
                                    <Text style={styles.productDiscount}>Get extra 5% off 💰</Text>
                                </View>
                            )}
                        />
                    </View>

                   
                </View>
      </ScrollView>
            <Footer />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: "#fff",
        paddingVertical:70
    },
    image: {
        width: width - 32,
        height: 250,
        resizeMode: "contain",
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        marginVertical: 8,
    },
    priceRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    strikeThrough: {
        textDecorationLine: "line-through",
        color: "gray",
        fontSize: 14,
    },
    discountedPrice: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000",
        marginLeft: 8,
    },
    pricePerGram: {
        fontSize: 14,
        color: "gray",
    },
    discount: {
        fontSize: 14,
        color: "green",
        marginVertical: 4,
    },
    extraDiscount: {
        fontSize: 14,
        backgroundColor: "#ffcc00",
        padding: 4,
        borderRadius: 4,
        alignSelf: "flex-start",
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginVertical: 8,
    },
    packSizeContainer: {
        flexDirection: "row",
        gap: 8,
    },
    packSizeButton: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        borderRadius: 8,
        alignItems: "center",
        width: 80,
    },
    selectedPackSize: {
        backgroundColor: "#e0f7fa",
        borderColor: "#00bcd4",
    },
    packSizeText: {
        fontSize: 14,
        fontWeight: "bold",
    },
    discountText: {
        fontSize: 12,
        color: "blue",
    },
    pinCodeContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 8,
    },
    pinCodeInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 8,
        borderRadius: 4,
    },
    checkButton: {
        backgroundColor: "#007BFF",
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 4,
        marginLeft: 8,
    },
    checkButtonText: {
        color: "#fff",
        fontWeight: "bold",
    },
    nonServiceable: {
        color: "red",
        marginTop: 4,
    },

    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    listContainer: {
        marginLeft: 8,
    },
    listItem: {
        fontSize: 14,
        marginBottom: 6,
    },
    boldText: {
        fontWeight: 'bold',
    },














    productContainer: {
        marginTop: 10,
        padding: 10,
        // borderWidth:5,
        height:350
    },
    productHeading: {
        fontSize: 18,
        fontWeight: "bold",
    },
    productCard: {
        width: 150,
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 10,
        marginRight: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        borderWidth:0.5
    },
    productImage: {
        width: "100%",
        height: 120,
        borderRadius: 10,
    },
    productName: {
        fontSize: 14,
        fontWeight: "bold",
        marginTop: 5,
    },
    productWeight: {
        fontSize: 12,
        color: "#777",
    },
    productOldPrice: {
        fontSize: 12,
        color: "#777",
        textDecorationLine: "line-through",
    },
    productNewPrice: {
        fontSize: 16,
        fontWeight: "bold",
    },
    productDiscount: {
        fontSize: 12,
        color: "orange",
        fontWeight: "bold",
        marginTop: 5,
    },




















      footerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingHorizontal: 20,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        borderTopWidth: 1,
        borderColor: "#ddd",
    },
    button: {
        backgroundColor: "#ffcc00",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        flex: 1,
        alignItems: "center",
        marginRight: 10,
    },
    buyNowButton: {
        backgroundColor: "#ff5722",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        flex: 1,
        alignItems: "center",
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
    },
    buyNowText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
    },
});

export default ProductCard;