import React, {useEffect, useState} from 'react';
import { View, TextInput, TouchableOpacity, Text, FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {styles} from "./styles";
import { Feather } from '@expo/vector-icons';



export function ToDoList() {
    const [task, setTask] = useState('');
    const [taskList, setTaskList] = useState([]);
    // vamos conseguir o efeito de armazenar os itens da lista de afazeres
    // criada pelo usuario utilizando hooks
    useEffect(()=>{
        async function loadTasks() {
            const tasks = await AsyncStorage.getItem('tasks');

            if (tasks){
                setTaskList(JSON.parse(tasks));

            }
        }
        loadTasks();
    },[]);

    // acima criamos uma função assíncrona que carrega as tarefas armazenadas
    // a lista começa vazia, mas quando o aplicativo é aberto o asyncStorage é
    // verificado. Se houver tarefas armazenadas nele, atualiza o estado da lista
    // mostrando as tarefas armazenadas

    async function handleAddTaks(){
        const newTaskList = [...taskList, task];
        await AsyncStorage.setItem('tasks', JSON.stringify(newTaskList));

        setTaskList(newTaskList);
        setTask('');
    }

    // acima a função assincrona handleAddTasks adiciona uma tarefa à lista

    async function handleDeleteTask(item) {
        const newTaskList = taskList.filter((task) => task !== item);
        await AsyncStorage.setItem('tasks', JSON.stringify(newTaskList));
        setTaskList(newTaskList);
      }

    return(
        <View style = {styles.container}>
            <View style = {styles.titleView}>
                <Text style = {styles.title}>
                    To-Do List
                </Text>
            </View>
            <View style = {styles.inputView}>
                <TextInput
                    style = {styles.input}
                    placeholder = "Adicione uma tarefa"
                    value = {task}
                    onChangeText = {text => setTask(text)}
                />
                <TouchableOpacity style = {styles.button} onPress = {handleAddTaks}>
                    <Text>Adicionar</Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.textView}>
                <Text style  = {styles.text}>Suas Tarefas: </Text>
            </View>
            <View style = {styles.listView}>
                <FlatList
                    data = {taskList}
                    keyExtractor = {item => item.toString()}
                    renderItem = {({item}) => 
                        <View style = {{width: "100%", height: 55}}>
                            <View style  ={styles.listItem}>
                                <Text>{item}</Text>
                                <TouchableOpacity onPress = {handleDeleteTask}>
                                    <Feather name="check" size={22} color="black" />
                                </TouchableOpacity>
                            </View>
                            <View style = {{height: "1%", backgroundColor: "grey", width: "100%"}}/>                          
                            
                        </View>
                    }
                />
            </View>
            
        </View>
    );
}





    // reminder: funções assincronas permitem que outras funções sejam executadas
    // simultaneamente e em paralelo no app. Ela aguarda algo ser concluído antes
    // de ser executada. Sintaxe: adicionar "async" na frente do nome da função
    // "await" é usado para indicar que a função está esperando uma Promise ser 
    // resolvida para ser executada. Podemos usar os metodos ".then()" e ".catch()"
    // para tratar a resolução e rejeição da primise retornada pela função assincrona.
