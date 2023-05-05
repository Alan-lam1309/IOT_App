import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import Header from "./component/Header";
import Body from "./component/Body";
import { Navbar } from "./component/Navbar";
import { Setting } from "./component/Setting";
import * as humidityServices from "./api-services/humidityService";

export default function App() {
  const [page, setPage] = useState("info");
  const [data, setData] = useState({});
  const [time, setTime] = useState({});

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const result = await humidityServices.get();
      const time = await humidityServices.get("time/");
      setData(result);
      setTime(time);
    }
    fetchData();
  },[data]);

  const handlePage = (child) => {
    setPage(child);
  };
  return (
    <SafeAreaView style={styles.container}>
      {page == "info" ? (
        <View>
          <Header />
          <Body data={data} />
          <Navbar currentPage={handlePage} />
        </View>
      ) : (
        <View>
          <Setting data={data} time={time} />
          <Navbar currentPage={handlePage} />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#d9f1c2",
    display: "flex",
    flexDirection: "column",
  },
});
