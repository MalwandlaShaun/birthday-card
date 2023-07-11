import { useState } from "react";
import { StyleSheet, View, Text, Button, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";

import NameInput from "./components/NameInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [birthdayNames, setBirthdayNames] = useState("");

  function startAddNameHandler() {
    setModalIsVisible(true);
  }

  function endAddNameHandler() {
    setModalIsVisible(false);
  }

  function addNameHandler(enteredNameText) {
    setBirthdayNames(
      (currentBirthdayNames) => (currentBirthdayNames = enteredNameText)
    );
    endAddNameHandler();
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <ImageBackground
          source={require("./assets/images/birthday_Image.jpg")}
          resizeMode="cover"
          style={{ flex: 1 }}
        >
          <Button
            title="wish to"
            color="#a065ec"
            onPress={startAddNameHandler}
          />
          <NameInput
            visible={modalIsVisible}
            onAddName={addNameHandler}
            onCancel={endAddNameHandler}
          />
          <View style={styles.namesContainer}>
            <View style={styles.nameItem}>
              <Text style={styles.nameText}>{birthdayNames}</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  namesContainer: {
    flex: 5,
  },
  nameItem: {
    textAlign: "center",
  },
  pressedItem: {
    opacity: 0.5,
  },
  nameText: {
    color: "#cba7cd",
    padding: 400,
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
    fontFamily: "Courgette",
  },
});
