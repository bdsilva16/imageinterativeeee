import { Text,StyleSheet } from "react-native";

export default function TitleComponent(props) {
    return (
        <Text style={styles.title}> {props.titleApp} </Text>
        );
}
const styles = StyleSheet.create({
    title: {
      fontSize: 40,
      color: '#fff',
      marginTop: 30,
      fontWeight:'bold'
    },
  
  
  });