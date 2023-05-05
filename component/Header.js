import React, { memo } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

function Header() {
  return (
    <View style={styles.containerHeader}>
      <Text style={styles.header} numberOfLines={1}>
        Tree Gods
      </Text>
      <Image
        style={styles.logo}
        blurRadius={0}
        fadeDuration={1000}
        source={{
          width: 400,
          height: 300,
          uri: Image.resolveAssetSource(require("../assets/images/logo1.png"))
            .uri,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerHeader: {
    alignItems: "center",
  },
  header: {
    fontSize: 50,
    marginTop: 10,
  },
  logo: {
  },
});

export default memo(Header);