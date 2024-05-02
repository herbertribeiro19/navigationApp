import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
export default function Information({ route, navigation }) {
  const imageBG = require("../../../assets/bg2.jpg");

  return (
    <View>
      <Text style={styles.TitleStyle}>Informações do Contato</Text>
      <ImageBackground
        source={imageBG}
        resizeMode="cover"
        borderRadius={30}
        style={styles.boxStyle}
      >
        <View style={styles.box}>
          <Text style={styles.TextStyle}>Nome Completo</Text>
          <Text style={styles.TextStyleContent}>{route.params?.nome}</Text>
          <Text style={styles.TextStyle}>Idade</Text>
          <Text style={styles.TextStyleContent}>{route.params?.idade}</Text>
          <Text style={styles.TextStyle}>Telefone</Text>
          <Text style={styles.TextStyleContent}>{route.params?.telefone}</Text>
          <Text style={styles.TextStyle}>Cidade</Text>
          <Text style={styles.TextStyleContent}>{route.params?.cidade}</Text>
          <Text style={styles.TextStyle}>Email</Text>
          <Text style={styles.TextStyleContent}>{route.params?.email}</Text>
          <Text style={styles.TextStyle}>Natural</Text>
          <Text style={styles.TextStyleContent}>
            {route.params?.naturalidade}
          </Text>
          <TouchableOpacity
            style={styles.btnBack}
            onPress={() => navigation.navigate("Contacts")}
          >
            <AntDesign name="leftcircle" size={24} color="#333" />
            <Text style={styles.backText}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  TitleStyle: {
    fontSize: 26,
    color: "#333",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  boxStyle: {
    margin: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3.84,
  },
  box: {
    justifyContent: "center",
    backgroundColor: "rgba(3,3,3,0.6)",
    padding: 20,
    paddingTop: 40,
    paddingBottom: 40,
    borderRadius: 30,
  },
  TextStyle: {
    color: "#fff",
    alignSelf: "center",
    fontSize: "20",
    fontWeight: "bold",
    marginBottom: 4,
  },

  TextStyleContent: {
    color: "#fff",
    alignSelf: "center",
    fontSize: "18",
    fontWeight: "300",
    marginBottom: 20,
  },
  backText: {
    color: "#333",
    fontWeight: "600",
    fontSize: 16,
  },
  btnBack: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    backgroundColor: "#fff",
    padding: 10,
    alignSelf: "center",
    borderRadius: 20,
    marginTop: 30,
    width: "50%",
  },
});
