import React from "react";
import { ScrollView, Image, Text, View, StyleSheet } from 'react-native';
import AlbumData from "../json_file/AlbumData.json";

const AlbumList = () => {
    return (
        <ScrollView>
            <View style={styles.cardContainerStyle}>
                <View style={styles.thumbnailContainerStyle}>
                    <Image style={styles.thumbnailStyle} source={{ uri: AlbumData[0].thumbnail }} />
                    <View style={styles.headerContentStyle}>
                        <Text>{AlbumData[0].title}</Text>
                        <Text>{AlbumData[0].artist}</Text>
                    </View>
                </View>
                <View style={styles.cardSectionStyle}>
                    <Image style={styles.imageStyle} source={{ uri: AlbumData[0].image }}/>
                </View>
            </View>
            
            <View style={styles.cardContainerStyle}>
                <View style={styles.thumbnailContainerStyle}>
                    <Image style={styles.thumbnailStyle} source={{ uri: AlbumData[1].thumbnail }} />
                    <View style={styles.headerContentStyle}>
                        <Text>{AlbumData[1].title}</Text>
                        <Text>{AlbumData[1].artist}</Text>
                    </View>
                </View>
                <View style={styles.cardSectionStyle}>
                    <Image style={styles.imageStyle} source={{ uri: AlbumData[1].image }}/>
                </View>
            </View>

            <View style={styles.cardContainerStyle}>
                <View style={styles.thumbnailContainerStyle}>
                    <Image style={styles.thumbnailStyle} source={{ uri: AlbumData[2].thumbnail }} />
                    <View style={styles.headerContentStyle}>
                        <Text>{AlbumData[2].title}</Text>
                        <Text>{AlbumData[2].artist}</Text>
                    </View>
                </View>
                <View style={styles.cardSectionStyle}>
                    <Image style={styles.imageStyle} source={{ uri: AlbumData[2].image }}/>
                </View>
            </View>

            <View style={styles.cardContainerStyle}>
                <View style={styles.thumbnailContainerStyle}>
                    <Image style={styles.thumbnailStyle} source={{ uri: AlbumData[3].thumbnail }} />
                    <View style={styles.headerContentStyle}>
                        <Text>{AlbumData[3].title}</Text>
                        <Text>{AlbumData[3].artist}</Text>
                    </View>
                </View>
                <View style={styles.cardSectionStyle}>
                    <Image style={styles.imageStyle} source={{ uri: AlbumData[3].image }}/>
                </View>
            </View>

            <View style={styles.cardContainerStyle}>
                <View style={styles.thumbnailContainerStyle}>
                    <Image style={styles.thumbnailStyle} source={{ uri: AlbumData[4].thumbnail }} />
                    <View style={styles.headerContentStyle}>
                        <Text>{AlbumData[4].title}</Text>
                        <Text>{AlbumData[4].artist}</Text>
                    </View>
                </View>
                <View style={styles.cardSectionStyle}>
                    <Image style={styles.imageStyle} source={{ uri: AlbumData[4].image }}/>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    cardContainerStyle: {
        borderWidth: 1,
        borderRadus: 2,
        borderColor: "#ddd",
        shadowColor: "#000",
        shadowOffset: {width:0,heigh:2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    },
    thumbnailContainerStyle: {
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    thumbnailStyle: {
        height: 50,
        width: 50,
    },
    headerContentStyle: {
        flexDirection: "column",
        justifyContent: "space-around",
    },
    cardSectionStyle: {
        padding: 5,
        backgroundColor: "#fff",
        borderColor: "#ddd",
        borderBottomWidth: 1,
    },
    textStyle: {
        fontSize: 20,
    },
    imageStyle: {
        height: 300,
        width: null,
    }
});

export default AlbumList;