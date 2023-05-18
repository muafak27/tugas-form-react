const Login = ({label, type, name, onChange, reqired}) => {
    return( 

        <div>
            <label>
                {label} : <input required type={type} name={name} onChange={e => onChange(e.target.value)}></input>
            </label>
            <br />
            <br />
        </div>
    )
}

export default Login;