import { FunctionComponent } from "react";

import {
  DefaultTheme,
  NavigationContainer,
  Theme
} from "@react-navigation/native";
import * as Notifications from "expo-notifications";
import * as SplashScreen from "expo-splash-screen";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { RootNavigator } from "src/navigation/RootNavigator";
import {
  createNotificationTask,
  registerNotificationTask
} from "src/services/notifications";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true
  })
});

createNotificationTask();

registerNotificationTask();

const theme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
    primary: "#FF6600"
  }
};

const App: FunctionComponent = () => (
  <GestureHandlerRootView className="flex-1">
    <NavigationContainer theme={theme}>
      <RootNavigator />
    </NavigationContainer>
  </GestureHandlerRootView>
);

export default App;
