/**
 * @Author: jiawei.guo
 * @Date: 2022-11-20 21:59:39
 * @Description: 轮播图组件
 */
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import ReanimatedCarousel from 'react-native-reanimated-carousel';
import { heightPercent, viewportWidth, widthPercent } from '@/utils/viewport';

// 图片数据
const imgList = [
    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
    'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
    'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
    'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
    'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
    'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
];

const sliderWidth = viewportWidth;
const imgWidth = widthPercent(90);
const imgHeight = heightPercent(26);
const itemWidth = imgWidth + widthPercent(2) * 2;

const Carousel = () => {
    const carouselItem = ({ item }: { item: string }) => {
        return (
            <Image
                source={{
                    uri: item,
                }}
                style={styles.image}
            />
        );
    };

    const snapToItem = (index: number) => {
        console.log('current index:', index);
    };

    return (
        <View style={styles.container}>
            <ReanimatedCarousel
                loop
                width={itemWidth}
                height={sliderWidth / 2}
                autoPlay={true}
                data={imgList}
                scrollAnimationDuration={1000}
                mode="parallax"
                modeConfig={{
                    // parallaxScrollingScale: 0.9,
                    parallaxAdjacentItemScale: Math.pow(0.7, 1),
                }}
                onSnapToItem={snapToItem}
                renderItem={carouselItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: sliderWidth,
        height: imgHeight,
        textAlign: 'center',
        borderRadius: 6,
    },
});

export default Carousel;
