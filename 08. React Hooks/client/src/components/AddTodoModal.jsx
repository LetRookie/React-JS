import { useState } from 'react';
import { useForm } from '../hooks/useForm';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function AddTodoModal ({
    onTodoAdd,
}) {
    const {formValues, onChangeHandler, onSubmit} = useForm({text:''}, onTodoAdd);

    return (
        <Modal show={true}>
            <Modal.Header closeButton>
                <Modal.Title>Add To-Do</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form onSubmit={onSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>ToDo</Form.Label>
                        <Form.Control type="text" name="text" placeholder="Enter todo.." value={formValues.name} onChange={onChangeHandler} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <Button variant="secondary" style={{ marginLeft: "10px" }}>Close</Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}