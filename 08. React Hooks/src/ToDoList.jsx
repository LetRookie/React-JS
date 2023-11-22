import ListGroup from 'react-bootstrap/ListGroup';


export default function ToDoList() {

    return (
        <div style={{ width: '30%', margin: '15px auto' }}>
            <h1 style={{textAlign:'center'}}>TODO list</h1>
            <ListGroup>
                <ListGroup.Item action>
                    Link 1
                </ListGroup.Item>
                <ListGroup.Item action>
                    Link 2
                </ListGroup.Item>
                <ListGroup.Item action>
                    This one is a button
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
}
