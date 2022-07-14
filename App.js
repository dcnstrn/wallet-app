import * as React from "react";
import { LogBox } from "react-native";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import Register from "./app/screens/auth/Register";
import Services from "./app/screens/statistics/StatisticsScreen";
import Footer from "./app/components/layout/footer/Footer";
import SplashScreen from "./app/screens/splash/SplashScreen";
import SignInScreen from "./app/screens/auth/SignInScreen";
import HomeScreen from "./app/screens/homeScreen/HomeScreen";
import StatisticsScreen from "./app/screens/statistics/StatisticsScreen";
import AddScreen from "./app/screens/addScreen/AddScreen";
import NotificationsScreen from "./app/screens/notifications/NotificationsScreen";
import ProfileScreen from "./app/screens/profileScreen/ProfileScreen";

export const AuthContext = React.createContext();

const Stack = createStackNavigator();

export default function App({ navigation }) {
  let [fontsLoaded] = useFonts({
    SansProReg: require("./assets/fonts/SourceSansPro-Regular.ttf"),
    SansProBold: require("./assets/fonts/SourceSansPro-SemiBold.ttf"),
  });
  const ref = useNavigationContainerRef(null);
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        // Restore token stored in `SecureStore` or any other encrypted storage
        // userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: "RESTORE_TOKEN", token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token

        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
      signOut: () => dispatch({ type: "SIGN_OUT" }),
      signUp: async (data) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token

        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
    }),
    []
  );

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer ref={ref}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {state.isLoading ? (
            <Stack.Screen name="Splash" component={SplashScreen} />
          ) : state.userToken == null ? (
            <>
              <Stack.Screen name="Splash" component={SplashScreen} />
              <Stack.Screen
                name="SignIn"
                component={SignInScreen}
                options={{
                  title: "Sign in",

                  animationTypeForReplace: state.isSignout ? "pop" : "push",
                }}
              />
              <Stack.Screen name="Register" component={Register} />
            </>
          ) : (
            <>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Statistics" component={StatisticsScreen} />
              <Stack.Screen name="AddScreen" component={AddScreen} />
              <Stack.Screen
                name="Notifications"
                component={NotificationsScreen}
              />
              <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
      {state.userToken && <Footer navigate={ref.navigate} />}
    </AuthContext.Provider>
  );
}

LogBox.ignoreAllLogs();
