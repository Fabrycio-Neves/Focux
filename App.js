import react from "react";
import {View,StyleSheet, FlatList} from 'react-native'
import TaskManager from "./components/taskInput/TaskManager";



export default function(){

  return(
     <View style={styles.container}>
      
     <TaskManager/>

     </View>
  )
}
const styles=StyleSheet.create({

  container:{
      flex:1,
      backgroundColor:"#f1f1f1",
      
  }
})
  