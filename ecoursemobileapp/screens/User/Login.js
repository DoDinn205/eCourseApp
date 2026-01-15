import { View, Text, ScrollView, TextInput } from "react-native";
import MyStyles from "../../styles/MyStyles";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, HelperText } from "react-native-paper";

const Login=()=>{
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


    const validate = () => {
        // if (!user.password || user.password !== user.confirm) {
        //     setErr(true)
        //     return false;
        // }
        // setErr(false)
        return true;
    }

    const register = async () => {
        if (validate() === true) {
            
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