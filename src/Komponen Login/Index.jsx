import Login from "./Login";
import * as Validator from 'validatorjs';
import { useState, handleSubmit, handleChange } from "react";

const IndexKomponen = () => {
    const [input, setInput] = useState ({
        username: '',
        password: ''
    })
    handleChange = (e) => {  
        const {name, value} = e.target; 
        setInput((prev) => {
            return{...prev, [name]: value}
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(input);
        
    }
    return(
        <div className="styleBoxLogin">
            <form onSubmit={handleSubmit}>
                <Login required type="text" name="username" label="Email" email="email"
                    onChange={value => setInput(e => ({
                       ...input, username: value
                    }))} />
                <Login required type="password" name="password" label="Password" password="password"
                    onChange={value => setInput(e => ({
                       ...input, password: value
                    }))} />
                 <button type="submit">Login</button>
            </form>
        </div>
    )
}


export default IndexKomponen;