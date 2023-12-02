import { Component } from 'react';
import { Card, Button } from 'antd';

export default class TodoListItem extends Component {
    componentDidUpdate() {
        console.log(`${this.props.text} - Did Update`);
    }

    componentWillUnmount() {
        console.log(`${this.props.text} - Will unmount`);
    }
    
    render() {
        return ( 
            <Card
                title={this.props.text}
                style={{
                    width: 300,
                    backgroundColor: this.props.isCompleted ? 'grey' : 'green'
                }}
            >
                <Button type='primary' onClick={() => this.props.toggleTodo(this.props._id)}>{this.props.isCompleted ? 'Undo' : 'Done'}</Button>
                <Button type='primary' danger onClick={() => this.props.deleteTodo(this.props._id)}>Remove</Button>
            </Card>
        );
    }
}
