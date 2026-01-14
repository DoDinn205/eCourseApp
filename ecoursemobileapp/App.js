import Home from "./screens/Home/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Lesson from "./screens/Home/Lesson";
import { NavigationContainer } from "@react-navigation/native";
import Register from "./screens/User/Register";
import Login from "./screens/User/Login";
import { createNativeBottomTabNavigator } from "@react-navigation/bottom-tabs/unstable";

const Stack = createNativeStackNavigator();

const StackNavigatior = () => {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Course" component={Home} options={{ title: "Khóa học" }} />
      <Stack.Screen name="Lesson" component={Lesson} options={{ title: "Bài học" }} />
      <Stack.Screen name="LessonDetails" component={LessonDetails} options={{ title: "Chi tiết bài học" }} />
    </Stack.Navigator>
  );
}

const Tab = createNativeBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={StackNavigatior} options={{ title: "Màn hình chính", tabBarIcon: () => <Icon color="blue" size={30} source="home" /> }} />
      <Tab.Screen name="Register" component={Register} options={{ title: "Đăng ký", tabBarIcon: () => <Icon color="blue" size={30} source="account" /> }} />
      <Tab.Screen name="Login" component={Login} options={{ title: "Đăng nhập", tabBarIcon: () => <Icon color="blue" size={30} source="login" /> }} />
    </Tab.Navigator>
  )
}

const App = () => {

  return (
    <NavigationContainer>
      <StackNavigatior />
    </NavigationContainer>
  );
}

export default App;