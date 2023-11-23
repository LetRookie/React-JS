import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';



export default function ToDoItem({
    _id,
    text,
    onTodoDeleteClick,
    isCompleted
}) {
    return (
        <ListGroup.Item action>
            {text}
            <Button size='sm' variant='dark' style={{float: 'right'}} onClick={() => onTodoDeleteClick(_id)}>&#10005;</Button>
        </ListGroup.Item>
    )
}