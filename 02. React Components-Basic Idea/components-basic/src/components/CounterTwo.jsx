export default function CounterTwo(props) {
    
    const [clicks, setClicks] = useState(0);
        const clickHandler = (e) => {
            setClicks(c => c + 1)
        }
        const Button = (props) => (
            <button className="counter" onClick={props.clickHandler}>
                Click me! I'm a counter [{props.clicks}]
            </button>
        );
    return (
        <Button
            clickHandler={clickHandler}
            clicks={clicks}
        />
);
}