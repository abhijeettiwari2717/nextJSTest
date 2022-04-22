import React, { ReactChild } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
} from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { addTodo, deleteTodo } from 'redux/actions/todoAction'
import { useDispatch, useSelector } from 'react-redux'


const AddToDo = () => {
  const [title, setTitle] = React.useState<string>('')
  const [task, setTask] = React.useState<string>('')
  const dispatch = useDispatch()
  const handleSubmit = () => {
    const data = {
      title: title,
      task: task,
      id: new Date().getTime(),
    }
    dispatch(addTodo(data))
  }
  const getToDo = useSelector(state => state)
  const todoData = getToDo.todo.todos;

  const handleDeleteBtn: any = (id: number) => {
    dispatch(deleteTodo(id));
  }
  return (
    <React.Fragment>
      <FormControl>
        <FormLabel htmlFor='text'>Title</FormLabel>
        <Input id='text' type='text' onChange={(e) => setTitle(e.target.value)} />

        <FormLabel htmlFor='text'>Task</FormLabel>
        <Input id='text' type='text' onChange={(e) => setTask(e.target.value)} />
        <Button colorScheme='blue' onClick={handleSubmit}>Button</Button>
      </FormControl>
      <TableContainer className='max-w-none'>
        <Table variant='simple'>
          <Tbody>
            {todoData && todoData.map((data: any, i: number) =>

              <Tr key={i}>
                <Td>{data.title}</Td>
                <Td>{data.task}</Td>
                <Td> <Button colorScheme='blue' onClick={() => handleDeleteBtn(data.id)}>Delete</Button></Td>
              </Tr>
            )}

          </Tbody>
        </Table>
      </TableContainer>
    </React.Fragment>
  )
}

export default AddToDo