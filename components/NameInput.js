import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

function NameInput(props) {
  const [enteredNameText, setEnteredNameText] = useState("");

  function nameInputHandler(enteredText) {
    setEnteredNameText(enteredText);
  }

  function addNameHandler() {
    props.onAddName(enteredNameText);
    setEnteredNameText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/target.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Happy Birthday To"
          onChangeText={nameInputHandler}
          value={enteredNameText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button title="submit" onPress={addNameHandler} color="#b180f0" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default NameInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
