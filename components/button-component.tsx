import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function ButtonComponent(props) {
    return (
        <TouchableOpacity style={styles.button} onPress={props.handlePress}>
            <Text style={styles.buttonText}>VAMOS!!!</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button: {
      marginBottom: 30,
      backgroundColor:'#e57702',
      width:100,
      height:100,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:50,
      borderColor:'#fba346',
      borderWidth:5,
    },
    buttonText:{
      fontSize:15,
      color:'#fff'
    }
  });