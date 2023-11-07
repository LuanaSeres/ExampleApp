import { useState, React } from "react";
import { Text, StyleSheet, View, Alert, Button, TextInput } from "react-native";

function Box(){

    const [count, setCount] = useState(0)
    const [task, setTask] = useState("")
    const [taskList, setTaskList] = useState([])
    

    return (
        <View>
            <Text style={styles.h1}>Task Manager</Text>
            <View style={styles.spam}>
                <Text>Add Tasks</Text>
                <Text>You have x tasks created!</Text>
            </View>
            <View>
                <Text>Task:</Text>
                <TextInput 
                    placeholder={"Enter task here"}
                />
                <Button 
                    title="Press me"
                    onPress={() => Alert.alert('Simple Button pressed')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    h1 : {
        fontFamily: 'Arial',
        fontSize: 24,
        fontWeight: 'bold'
    },
    spam: {
        backgroundColor: 'purple',
    }
})

export default Box