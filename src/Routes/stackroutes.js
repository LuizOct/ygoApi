import { createNativeStackNavigator } from "@react-navigation/native-stack";

const {Screen, Navigator } = createNativeStackNavigator();

//Screens
import Home from "../Screens/Home";
import Card from "../Screens/Card";

export function StackRoutes(){
    return(
        <Navigator>

            <Screen
                name = "Home"
                component = {Home}
            />

            <Screen
                name = "Card"
                component = {Card}
            />
        </Navigator>
        

    )

}