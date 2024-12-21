import React,{useState} from 'react'
import{FlatList, View,StyleSheet} from'react-native'
import Input from './Input'
import FlatListAr from '../FlatList/FlatListAr'

export default function TaskManager (){
    const[tasks,setTasks]=useState([])

   const HandleAddTask=(task)=>{
    if(task.trim()){
        setTasks((prevTasks)=> [
            ...prevTasks,
            { id: Date.now().toString(),text:task},

        ]);
    }


   }

    return(

        <View style={styles.container}>
          
             <FlatListAr tasks={tasks}/>
           <Input addTask={HandleAddTask}/>


        </View>
    )
}
const styles=StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:"#f1f1f1",
        marginBottom:40,
        borderWidth:1,
        
       
    
    }
})