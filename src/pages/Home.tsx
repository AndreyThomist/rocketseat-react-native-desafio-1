import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';



export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
      if(newTaskTitle == ''){
        return;
      }else{
        const newTasksArray = [...tasks]
        if (tasks.length > 0) {
          newTasksArray.push({
            id: newTasksArray[newTasksArray.length - 1].id + 1,
            title: newTaskTitle,
            done: false
          })
          setTasks(newTasksArray);
        } else {
          newTasksArray.push({
            id: 1,
            title: newTaskTitle,
            done: false
          })
          setTasks(newTasksArray);
        }
      }
      
  }

  function handleToggleTaskDone(id: number) {
    const newArrayTasks = [...tasks];
    let indexTask = tasks.findIndex(task => task.id === id);
    newArrayTasks[indexTask].done = !newArrayTasks[indexTask].done;
    setTasks(newArrayTasks);
  }

  function handleRemoveTask(id: number) {
    let newArrayTasks = [...tasks];
    newArrayTasks = newArrayTasks.filter(task => task.id !== id)
    setTasks(newArrayTasks);
  }


  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList
        tasks={tasks}
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask}
      />
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})