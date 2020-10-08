import React from "react";
import {Navigationcontainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import homescreen from "./src/homescreen/homescreen";
import profiel from "./src/homescreen/profiel";
import semester from "./src/homescreen/semester"
import faculty from "./src/homescreen/"
const stack = createStackNavigator();
function App()
{
  return(
    <Navigationcontainer>
      <stack.Navigator>

        <stack.homescreen name="home" component={homescreen}/>
        <stack.homescreen name="my profile" component={profiel}/>
        <stack.homescreen name="semester" component={semester}/>
          
        
      </stack.Navigator>
    </Navigationcontainer>
  );
}
export default App;
