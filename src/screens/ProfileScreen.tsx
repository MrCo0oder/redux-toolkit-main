import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { RootState } from "../store/Store";
import { useDispatch, useSelector } from "react-redux";
import { isLoggedIn, login, logout } from "../store/loginReducer";

const ProfileScreen = () => {
  const user = useSelector((state: RootState) => state.login);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  return (
    <View style={styles.cont}>
      {isLoggedIn({ login: user }) ? (
        <View>
          <Text style={styles.text}>Hello {user.userName}</Text>
          <Button title="log out" onPress={() => dispatch(logout())} />
        </View>
      ) : (
        <View>
          <Text style={styles.text}>Please Sign In</Text>
          {!isLoading ? (
            <Button
              title="log in"
              onPress={async () => {
                setIsLoading(true);
                await delay(1000);
                dispatch(
                  login({
                    userName: "Ahmed",
                    password: "1235467",
                  })
                );
                setIsLoading(false);
              }}
            />
          ) : (
            <ActivityIndicator size="small" color="#0000ff" />
          )}
        </View>
      )}
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  cont: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: "black",
    marginBottom: 10,
  },
});
