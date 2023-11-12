import { useState, useRef, useEffect } from "react";
import styles from './ControlledForm.module.css'

const formInitialState = {
    username: '',
    password: '',
    age: '',
    gender: 'm',
    swimming: false,
    hiking: false,
    cycling: false,
}

export default function ControlledForm({
    formRef,
}) {
    const usernameInputRef = useRef();
    const isMountedRef = useRef(false);
    const [formValues, setFormValues] = useState(formInitialState);
    const [erorrs, setErrors] = useState({});

    useEffect(() => {
        usernameInputRef.current.focus();
    }, []);

    //Executes only  on update

    useEffect(() => {
        if (!isMountedRef.current) {
            isMountedRef.current = true;
            return;
        }
        console.log('Form updated')
    }, [formValues])

    const changeHandler = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const resetFormHandler = () => {
        setFormValues(formInitialState)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(formValues);
        resetFormHandler();
    }

    const onChecked = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.checked
        }))
    }

    const ageValidator = (e) => {
        if (formValues.age < 0 || formValues.age > 120) {

            setErrors(state => ({
                ...state,
                age: 'Age should be between 0 and 120',
            }));
        } else {
            if (erorrs.age) {
                setErrors(state => ({
                    ...state,
                    age: '',
                }));
            }
        }
    }

    return (
        <>
            <h1> Controlled Form </h1>

            <form ref={formRef} onSubmit={submitHandler}>
                <div>
                    <label htmlFor="username">Username :</label>
                    <input
                        ref={usernameInputRef}
                        type="text"
                        name="username"
                        id="username"
                        value={formValues.username}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password :</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={formValues.password}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="age">Age :</label>
                    <input
                        type="number"
                        name="age"
                        id="age"
                        value={formValues.age}
                        onChange={changeHandler}
                        onBlur={ageValidator}
                        className={erorrs.age && styles.inputError}
                    />
                    {erorrs.age && (
                        <p className={styles.errorMessage}>{erorrs.age}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="gender">Gender</label>
                    <select name="gender" id="gender" onChange={changeHandler} value={formValues.gender}>
                        <option value="f">F</option>
                        <option value="m">M</option>
                    </select>
                </div>
                <div>
                    <h3>Hobbies</h3>
                    <label htmlFor="swimming">Swimming</label>
                    <input type="checkbox" name="swimming" id="swimming" checked={formValues.swimming} onChange={onChecked} />
                    <label htmlFor="hiking">Hiking</label>
                    <input type="checkbox" name="hiking" id="hiking" checked={formValues.hiking} onChange={onChecked} />
                    <label htmlFor="cycling">Cycling</label>
                    <input type="checkbox" name="cycling" id="cycling" checked={formValues.cycling} onChange={onChecked} />
                </div>
                <div>
                    <button type="submit" disabled={Object.values(erorrs).some(x=>x)}>Register</button>
                    <button type="button" onClick={resetFormHandler}>Reset</button>
                </div>
            </form>
        </>
    )
}