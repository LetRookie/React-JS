import ListGroup from 'react-bootstrap/ListGroup';


export default function ToDoItem({
    text,
    isCompleted
}) {
    return (
        <ListGroup.Item action>
            {text}
        </ListGroup.Item>
    )
}