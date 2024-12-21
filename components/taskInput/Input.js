import React, { useState } from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import FloatingButton from "../Button/ButtonAr";
import Icon from 'react-native-vector-icons/MaterialIcons';




export default function Input({addTask}){

  const[inputVisible,setInputVisible]=useState(false)
  const[task,setTask]=useState('')

  const HandleTogleInput=()=>{
    setInputVisible((prev)=>!prev)

  }
  const handleCloseInput=()=>{
    setInputVisible(false)
    Keyboard.dismiss()
  }

  const HandleSendTask=()=>{
    if(task.trim()){
      addTask(task);
      setTask("")
    }
  }

  return(
    
    
    <TouchableWithoutFeedback onPress={handleCloseInput}>
      <KeyboardAvoidingView
        style={styles.container}
      behavior={Platform.OS=== "ios"? "padding": "height"}>
      <View style={styles.container}>   
       {!inputVisible && (
        <FloatingButton onPress={HandleTogleInput} name='add' size={32}/>
       )}

     {inputVisible &&(
       <View style={styles.InputContainer}>
        <TextInput style={styles.TextContainer} 
        placeholder="digite algo" autoFocus={true} value ={task}onChangeText={setTask}
        />
        <View style={styles.iconContainer}>
                <Icon
                  name="send"
                  size={32}
                  color="#FF0000"
                  onPress={HandleSendTask}
              />
             
        </View>
       </View>)}
       
     
      </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
 
   
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#f12f12f12',
    justifyContent:'flex-end',
    
   
  },
  InputContainer:{ 
    left:0,
    right:0,
    position:'relative',
    height:"40%",
    width:'100%',
    backgroundColor:'#0000FF',
    padding:16,
    borderTopLeftRadius:16,
    borderTopRightRadius:16,
    bottom:0,
   zIndex:1,
    
    
  },
  TextContainer:{
  height:60,
  width:'100%',
  backgroundColor:'#008000',
  textAlignVertical:'top'

  },
  

})



