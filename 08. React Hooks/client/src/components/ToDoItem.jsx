import ListGroup from 'react-bootstrap/ListGroup';


export default function ToDoItem(
    text,
    isComplited
) {
    return (
        <ListGroup.Item action>
            {text}
        </ListGroup.Item>
    )
}