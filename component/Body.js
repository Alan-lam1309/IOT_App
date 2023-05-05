import { async } from "@firebase/util";
import React, { memo, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Button,
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import Repeat from "react-native-vector-icons/Feather";
import * as humidityServices from "../api-services/humidityService";

function Body({ data }) {
  const check = (i) => {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  };

  useEffect(() => {
    const setTime = async () => {
      if (data.water == "ON") {
        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();
        var h = check(date.getHours());
        var mi = check(date.getMinutes());
        var s = check(date.getSeconds());
        var today = d + "/" + m + "/" + y;
        var time = h + ":" + mi + ":" + s;
        await humidityServices.update({
          lastwatering: today + " " + time,
          watertimes: parseInt(data.watertimes) + 1,
        });
      }
    };
    setTime();
  }, [data.water]);

  const handleBtn = async () => {
    await humidityServices.update({ water: "ON" });
  };

  return (
    <View>
      <View style={styles.containerHeader}>
        <Icon name="drop" color="#00CCFF" size="35" />
        <Text style={styles.text} numberOfLines={1}>
          Current humidity: {data.humidity} g/m³
        </Text>
      </View>
      <View style={styles.containerHeader}>
        <Icon name="drop" color="#00CCFF" size="35" />
        <Text style={styles.text} numberOfLines={1}>
          Air temperature: {data.temperature} °C
        </Text>
      </View>
      <View style={styles.containerHeader}>
        <Repeat name="repeat" color="#00CCFF" size="35" />
        <Text style={styles.text} numberOfLines={1}>
          Watering times: {data.watertimes}
        </Text>
      </View>
      <View style={styles.containerHeader}>
        <Icon name="time-slot" color="#00CCFF" size="35" />
        <Text style={styles.text} numberOfLines={1}>
          Last watering:
        </Text>
      </View>
      <Text style={{ marginLeft: "auto", marginRight: "auto", fontSize: 25 }}>
        {data.lastwatering}
      </Text>
      <View style={styles.button}>
        <Text
          style={{ fontSize: 30, color: "white" }}
          onPress={() => handleBtn()}
        >
          WATER NOW
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: "row",
    paddingLeft: 10,
    padding: 10,
  },
  text: {
    fontSize: 28,
    paddingLeft: 10,
    paddingTop: 4,
  },
  button: {
    margin: 20,
    marginBottom: 30,
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "#108248",
    width: "50%",
    height: 70,
  },
});

export default Body;
