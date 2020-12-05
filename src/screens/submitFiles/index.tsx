import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image, Alert } from "react-native";

import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import Axios from "axios";

export default function Upload() {
  const [avatar, setAvatar] = useState();
  console.log(avatar)

  async function imagePickerCall() {
    if (Constants?.platform?.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

      if (status !== "granted") {
        alert("Nós precisamos dessa permissão.");
        return;
      }
    }
    ImagePicker.getPendingResultAsync
    const data:any = await ImagePicker.launchImageLibraryAsync({
      base64:false,  
      mediaTypes: ImagePicker.MediaTypeOptions.Images
    });

    if (data.cancelled) {
      return;
    }

    if (!data.uri) {
      return;
    }

    setAvatar(data);
  }

  async function uploadImage(): Promise<void> {
     const data = new FormData();

     data.append('file', avatar.uri)

    alert("Submetido ao banco")
    await Axios.post("http://localhost:5000/enviaimg", data, 
    {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    } );
  }

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: avatar
            ? avatar.uri
            : "https://moh.gov.ss/images/running/document.jpg"
        }}
        style={styles.avatar}
      />
      <TouchableOpacity style={styles.button} onPress={imagePickerCall}>
        <Text style={styles.buttonText}>Escolher imagem</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={uploadImage}>
        <Text style={styles.buttonText}>Enviar imagem</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    width: 150,
    height: 50,
    borderRadius: 3,
    backgroundColor: "royalblue",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },
  buttonText: {
    color: "#fff"
  },
  avatar: {
    width: 300,
    height: 300,
  }
});