import { StyleSheet, Image } from "react-native";

export default function ImageComponent(props) {
    return (
        <Image style={styles.image} source={props.imageProps}></Image>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '90%',
        height: 250,
        borderRadius: 17
    },

});