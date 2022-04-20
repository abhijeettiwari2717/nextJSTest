import React, { ReactChild } from 'react'
import {
  FormControl,
  FormLabel,
  Input
} from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { addTodo } from 'redux/actions/todoAction'
import { useDispatch, useSelector } from 'react-redux'


const AddToDo = () => {
  const [title, setTitle] = React.useState<string>('')
  const [task, setTask] = React.useState<string>('')
  const dispatch = useDispatch()
  const handleSubmit = () => {
    const data = {
      title: title,
      task: task
    }
    dispatch(addTodo(data))
  }
  const getToDo = useSelector(state => state)
  const todoData = getToDo.todo.todos 
  return (
    <React.Fragment>
      <FormControl>
        <FormLabel htmlFor='text'>Title</FormLabel>
        <Input id='text' type='text' onChange={(e) => setTitle(e.target.value)} />

        <FormLabel htmlFor='text'>Task</FormLabel>
        <Input id='text' type='text' onChange={(e) => setTask(e.target.value)} />
        <Button colorScheme='blue' onClick={handleSubmit}>Button</Button>
      </FormControl>
      <ul>
        {todoData ? todoData.map((data: any) => 
          <li><p>Title: {data.title}</p><p>Task: {data.task}</p></li>
        ):""}
    </ul>
    </React.Fragment>
  )
}

export default AddToDo