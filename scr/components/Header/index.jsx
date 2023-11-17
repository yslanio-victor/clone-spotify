import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SimpleLineIcons, AntDesign, Octicons } from "@expo/vector-icons";

import React from "react";

function Header() {
  const onPressHandler = () => {
    console.log("Botão Pressionado!");
  };
  {
    return (
      <View style={Styles.container}>
        <Text style={{ fontSize: 25, fontWeight: 700, marginLeft: 15 }}>Good afternoon</Text>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={onPressHandler}>
            <SimpleLineIcons
              name="bell"
              size={24}
              color="black"
              style={{ marginRight: 10 }}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={onPressHandler}>
            <AntDesign
              name="clockcircleo"
              size={24}
              color="black"
              style={{ marginRight: 10 }}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={onPressHandler}>
            <Octicons
              name="gear"
              size={24}
              color="black"
              style={{ marginRight: 15 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Header;

const Styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    marginTop: "18%",
    flexDirection: "row",
  },
});
