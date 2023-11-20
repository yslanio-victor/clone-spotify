import React from "react";
import Header from "../components/Header";
import FiltroHeader from "../components/FiltroHeader";
import { View, StyleSheet, Text, ScrollView, SafeAreaView } from "react-native";
import Gambiarra from "../components/Gambiarra";
import Descricao from "../components/FavMusic/descricao";

function Home() {
  return (
    <>

    
      <ScrollView>

        <View>
          <Header />
        </View>

        <View>
          <FiltroHeader />
        </View>

        <View
          style={{
            marginTop: -20,
          }}
        >
          <Gambiarra />
        </View>

        <Text style={Styles.text}>Your show</Text>

        <ScrollView horizontal={true} style={Styles.container}>
          <Descricao />
          <Descricao />
          <Descricao />
          <Descricao />
          <Descricao />
          <Descricao />
          <Descricao />
          <Descricao />
          <Descricao />
          <Descricao />
        </ScrollView>

        <Text style={Styles.text}>Other show</Text>
        <ScrollView horizontal={true} style={Styles.container}>
          <Descricao />
          <Descricao />
          <Descricao />
          <Descricao />
          <Descricao />
          <Descricao />
          <Descricao />
          <Descricao />
          <Descricao />
          <Descricao />
        </ScrollView>

        <Text style={Styles.text}>All show</Text>
        <ScrollView horizontal={true} style={Styles.container}>
          <Descricao />
          <Descricao />
          <Descricao />
          <Descricao />
          <Descricao />
          <Descricao />
          <Descricao />
          <Descricao />
          <Descricao />
          <Descricao />
        </ScrollView>
       

      </ScrollView>
    </>
  );
}

export default Home;

const Styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: "700",
    marginTop: "18%",
    marginLeft: "5%",
  },
  container: {
    marginTop: "5%",
    marginLeft: "1%",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  background: {
    flex: 1,
    backgroundColor:'#111111'
  },
});
