import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const imageURL = require("../../../assets/bg_pic.png");

export default function Contacts({ navigation }) {
  return (
    <ScrollView>
      <Text style={styles.titleMain}>Lista de contatos</Text>
      <ImageBackground
        source={imageURL}
        resizeMode="cover"
        borderRadius={30}
        style={styles.boxView}
      >
        <View style={styles.box}>
          <Text style={styles.title}>Francisco Dias</Text>
          <Text style={styles.title}>(75) 91111-2222</Text>
          <TouchableOpacity
            style={styles.btnInfo}
            onPress={() =>
              navigation.navigate("Information", {
                nome: "Francisco Dias Junior",
                idade: "20",
                cidade: "Cruz das Almas",
                telefone: "(75) 91111-2222",
                email: "franxx123@gmail.com",
                naturalidade: "Bahia",
              })
            }
          >
            <AntDesign name="pluscircle" size={24} color="#333" />
            <Text style={styles.textInfo}>Mais informações</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <ImageBackground
        source={imageURL}
        resizeMode="cover"
        borderRadius={30}
        style={styles.boxView}
      >
        <View style={styles.box}>
          <Text style={styles.title}>Nara Ribeiro Sampaio</Text>
          <Text style={styles.title}>(71) 93421-9088</Text>
          <TouchableOpacity
            style={styles.btnInfo}
            onPress={() =>
              navigation.navigate("Information", {
                nome: "Nara Ribeiro Sampaio",
                idade: "30",
                cidade: "Salvador",
                telefone: "(71) 93421-9088",
                email: "nararsf@gmail.com",
                naturalidade: "Bahia",
              })
            }
          >
            <AntDesign name="pluscircle" size={24} color="#333" />
            <Text style={styles.textInfo}>Mais informações</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <ImageBackground
        source={imageURL}
        resizeMode="cover"
        borderRadius={30}
        style={styles.boxView}
      >
        <View style={styles.box}>
          <Text style={styles.title}>Jonatas Araujo de Souza</Text>
          <Text style={styles.title}>(11) 93621-9048</Text>
          <TouchableOpacity
            style={styles.btnInfo}
            onPress={() =>
              navigation.navigate("Information", {
                nome: "Jonatas Araujo de Souza",
                idade: "36",
                cidade: "Camaçari",
                telefone: "(11) 93621-9048",
                email: "joaraujo@gmail.com",
                naturalidade: "Bahia",
              })
            }
          >
            <AntDesign name="pluscircle" size={24} color="#333" />
            <Text style={styles.textInfo}>Mais informações</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  box: {
    justifyContent: "center",
    backgroundColor: "rgba(3,3,3,0.6)",
    padding: 20,
    paddingTop: 40,
    paddingBottom: 40,
    borderRadius: 30,
  },

  titleMain: {
    fontSize: 26,
    color: "#333",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },

  title: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "500",
    textAlign: "center",
    margin: 5,
  },

  boxView: {
    margin: 20,
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3.84,
  },
  btnInfo: {
    alignSelf: "center",
    backgroundColor: "#fff",
    width: "80%",
    padding: 10,
    flexDirection: "row",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    marginTop: 20,
  },
  textInfo: {
    color: "#333",
    fontWeight: "600",
    fontSize: 16,
  },
});
