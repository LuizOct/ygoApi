import { NavigationContainer } from "@react-navigation/native";

import { StackRoutes } from "./stackroutes";

export function Routes(){
    return(
        <NavigationContainer>
            <StackRoutes/>
        </NavigationContainer>
    )
}