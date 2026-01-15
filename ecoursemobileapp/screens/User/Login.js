import { View, Text, ScrollView, TextInput } from "react-native";
import MyStyles from "../../styles/MyStyles";
import { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, HelperText } from "react-native-paper";
import Apis, { authApis, endpoints } from "../../utils/Apis";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MyUserContext } from "../../utils/contexts/MyContext";

const Login = () => {
    const info = [{
        title: "Tên đăng nhập",
        field: "username",
        icon: "account"
    }, {
        title: "Mật khẩu",
        field: "password",
        icon: "eye",
        secureTextEntry: true
    }];

    const [user, setUser] = useState({});
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(false);
    const nav = useNavigation();
    const[,dispatch]=useContext(MyUserContext);

    const validate = () => {
        // if (!user.password || user.password !== user.confirm) {
        //     setErr(true)
        //     return false;
        // }
        // setErr(false)
        return true;
    }

    const login = async () => {
        if (validate() === true) {
            try {
                setLoading(true);
                let res = await Apis.post(endpoints['login'], {
                    ...user,
                    'client_id': '', //Lưu vào biến môi trường của react
                    'client_secret': '', //Lưu vào biến môi trường của react
                    'grant_type': 'password'
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                console.info(res.data);
                AsyncStorage.setItem('token', res.data.access_token);

                setTimeout(async() => {

                    let user = await authApis(res.data.access_token).get(endpoints['current-user']);
                    console.info(user.data);

                    dispatch({
                        "type":"login",
                        "payload":user.data
                    });
                }, 500);

                

            } catch (ex) {
                console.error(ex);
            } finally {
                setLoading(false);
            }
        }
    }

    return (
        <View style={MyStyles.padding}>
            <Text style={MyStyles.title}>ĐĂNG NHẬP NGƯỜI DÙNG</Text>
            <ScrollView>

                <HelperText type="error" visible={err}>
                    Mật khẩu không khớp!
                </HelperText>

                {info.map(i => <TextInput key={i.field} style={MyStyles.margin} value={user[i.field]} onChangeText={(t) => setUser({ ...user, [i.field]: t })}
                    label={i.title}
                    secureTextEntry={i.secureTextEntry}
                    right={<TextInput.Icon icon={i.icon} />}
                />)}

                <Button loading={loading} disabled={loading} icon="login" mode="contained" onPress={register}>
                    Đăng nhập
                </Button>
            </ScrollView>
        </View>
    );

}

export default Login;