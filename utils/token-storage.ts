import * as SecureStore from "expo-secure-store";

// Store the JWT token securely
async function storeToken(jwtToken: string) {
  try {
    await SecureStore.setItemAsync("jwtToken", jwtToken);
    console.log("JWT token stored securely :" + jwtToken);
  } catch (error) {
    console.error("Failed to store JWT token:", error);
  }
}

async function getToken() {
  try {
    const token = await SecureStore.getItemAsync("jwtToken");
    console.log("JWT token retrieved securely :" + token);
    return token;
  } catch (error) {
    console.error("Failed to retrieve JWT token:", error);
  }
}

async function removeToken() {
  try {
    await SecureStore.deleteItemAsync("jwtToken");
    console.log("JWT token removed securely");
  } catch (error) {
    console.error("Failed to remove JWT token:", error);
  }
}

export { storeToken, getToken, removeToken };
