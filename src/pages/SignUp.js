import { useState } from "react"
import InputComponent from "../components/InputComponent"
import { SignUpValidation } from "../validation/validation"

const SignUp = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState({})

    const createAccount = (e) => {
        e.preventDefault()

        setErrors({})

        try {
            const validation = SignUpValidation(email, password)
            if (!validation.isValid) {
                setErrors(validation.errors)
                return

            }
            //enviar la petición para el registro
        } catch (error) {

        }
    }



    return <div className="container pt-5">
        <div className="col-md-6 col-sm-10 mx-auto">
            <div className="card"><div className="card-body">
                <h3>Crear cuenta</h3><hr></hr>
                <form onSubmit={createAccount}>

                    <InputComponent
                        id="email"
                        labelText="Correo electronico"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={errors.email}
                    />
                    <InputComponent
                        id="password"
                        labelText="Contraseña"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        error={errors.password}
                    />
                    <div className="mb-3">
                        <button className="btn btn-primary" id="btn-register" type="submit">Crear cuenta</button>
                    </div>
                </form>
            </div>
            </div>
        </div>
    </div>
}

export default SignUp