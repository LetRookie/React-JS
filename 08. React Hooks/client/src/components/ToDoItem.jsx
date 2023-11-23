import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { TodoContext } from '../contexts/todoContext';



export default function ToDoItem({
    _id,
    text,
    isCompleted
}) {
    const { onTodoDeleteClick } = useContext(TodoContext);
    return (
        <ListGroup.Item action>
            {text}
            <Button variant='dark' style={{ float: 'right' }} onClick={() => onTodoDeleteClick(_id)}>x</Button>
        </ListGroup.Item>
    )
}