import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet, SafeAreaView, ScrollView, Dimensions } from 'react-native'
import React, { useState } from 'react'
import styles from './Style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { SliderBox } from "react-native-image-slider-box";


export const home = () => {
    const images = [
        "https://www.creativefabrica.com/wp-content/uploads/2021/04/26/Creative-Fashion-Sale-Banner-Graphics-11345601-1-1-580x387.jpg",
        "https://www.excelebiz.in/wp-content/uploads/2018/05/banner-1024x427.jpg",
        "https://img.freepik.com/premium-psd/running-shoes-facebook-timeline-cover-web-template_173189-49.jpg?w=1060",
        "https://img.freepik.com/free-vector/horizontal-sale-banner-template_23-2148897328.jpg?w=1060&t=st=1668492826~exp=1668493426~hmac=a44b944352c7ece2b63a21ddbd376d13a521366a4e85c941fbf35d37262ce919",
        "https://img.freepik.com/premium-vector/black-friday-fashion-facebook-cover-banner-template_58780-494.jpg?w=1060",
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a0c9b737352801.573d3df29868a.jpg",
        "https://img.freepik.com/free-psd/horizontal-banner-template-black-friday-clearance_23-2148745446.jpg?w=1060&t=st=1668493058~exp=1668493658~hmac=96080dc6f3b53df993a657f756d2b68017bce5ccc3d4975a3aea36bfdb50d2f8",        
    ]

    return (

        <View style={styles.container}>

            {/* -----------------------------------Search Icons ----------------------------------------- */}
            <View style={styles.SearchBox}>
                <View style={{ flexDirection: 'row' }}>
                    <AntDesign name='search1' style={styles.searchIcon} />
                    <TextInput
                        placeholder='Search for products'
                    />
                    <TouchableOpacity>
                        <MaterialIcons name='keyboard-voice' style={styles.Voice} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name='camera-outline' style={styles.camera} />
                    </TouchableOpacity>
                </View>
            </View>
            <ImageSlider images={images} />
        </View>
    )
}


export const ImageSlider = ({ images }) => {

    const { width } = Dimensions.get('window');
    const height = width * 0.5;

    const [active, setActive] = useState(0);

    const onScrollChange = ({ nativeEvent }) => {
        const slide = Math.ceil(
            nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
        );
        if (slide !== active) {
            setActive(slide);
        }
    };

    return (
        <View>
            <ScrollView
                pagingEnabled
                horizontal
                onScroll={onScrollChange}
                showsHorizontalScrollIndicator={false}
                style={{ width, height }}>
                {images.map((image, index) => (
                    <Image
                        key={index}
                        source={{ uri: image }}
                        style={styles.slider}
                    />
                ))}
            </ScrollView>
            <View style={styles.pagination}>
                {images.map((i, k) => (
                    <Text key={k} style={k == active ? styles.activeDot : styles.dot}>
                        •
                    </Text>
                ))}
            </View>
        </View>
    );
}



