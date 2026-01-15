import Home from "./screens/Home/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Lesson from "./screens/Home/Lesson";
import { NavigationContainer } from "@react-navigation/native";
import Register from "./screens/User/Register";
import Login from "./screens/User/Login";
import { createNativeBottomTabNavigator } from "@react-navigation/bottom-tabs/unstable";
import { MyUserContext } from "./utils/contexts/MyContext";
import { useContext, useReducer } from "react";
import MyUserReducer from "./utils/reducers/MyUserReducer";

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
  const [user,] = useContext(MyUserContext);
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={StackNavigatior} options={{ title: "Màn hình chính", tabBarIcon: () => <Icon color="blue" size={30} source="home" /> }} />
      {user === null ? <>
        <Tab.Screen name="Register" component={Register} options={{ title: "Đăng ký", tabBarIcon: () => <Icon color="blue" size={30} source="account" /> }} />
        <Tab.Screen name="Login" component={Login} options={{ title: "Đăng nhập", tabBarIcon: () => <Icon color="blue" size={30} source="login" /> }} />
      </> : <>
      <Tab.Screen name="Profile" component={User} options={{ title: "Profile", tabBarIcon: () => <Icon color="blue" size={30} source="account" /> }} />
      </>}

    </Tab.Navigator>
  )
}

const App = () => {
  const [user, dispatch] = useReducer(MyUserReducer, null);
  return (
    <MyUserContext.Provider value= { [user, dispatch]}>
      <NavigationContainer>
        <StackNavigatior />
      </NavigationContainer>
    </MyUserContext.Provider>
  );
}

export default App;