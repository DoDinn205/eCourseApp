import { useEffect, useState } from "react";
import { Touchable, View } from "react-native";
import MyStyles from "../styles/MyStyles";
import { Chip } from "react-native-paper";

const categories = ({ setCate }) => {
    const [categories, setCategories] = useState([]);

    const loadCategories = async () => {
        let res = await Apis.get(endpoints['categories']);
        setCategories(res.data);
    }

    useEffect(() => {
        loadCategories();
    }, [])

    return (
        <View style={MyStyles.row}>
            <Touchable key={c.id} onPress={()=>setCate(null)}> 
                <Chip icon='label' key={c.id} style={MyStyles.margin}>Tất cả </Chip>
            </Touchable>

            {categories.map(c => <Touchable key={c.id} onPress={()=>setCate(c.id)}> 
                <Chip icon='label' key={c.id} style={MyStyles.margin}>{c.name} </Chip>
            </Touchable>)}
        </View>
    );
}

export default categories;