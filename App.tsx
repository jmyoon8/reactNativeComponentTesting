import React from "react";
import {StyleSheet, View} from "react-native";
import Profile from "./src/Profile";

const App = () => {
  return (
    <View style={styles.container}>
      <Profile userName={"jammie"} name={"윤재진"} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
