import { render, fireEvent } from "@testing-library/react"
import SignUp from "./SignUp"

describe('Sign up page tests', () => {

    describe('Layout', () => {
        test('La pagina de registro tiene un input para el correo electronico', () => {
            const { container } = render(<SignUp></SignUp>)
            const emailInput = container.querySelector('#email')
            expect(emailInput).toBeInTheDocument()
        })

        test('La pagina de registro tiene un input para la contraseña', () => {
            const { container } = render(<SignUp></SignUp>)
            const passwordInput = container.querySelector('#password')
            expect(passwordInput).toBeInTheDocument()
        })

        test('La pagina de registro tiene un boton para enviar el formulario', () => {
            const { container } = render(<SignUp></SignUp>)
            const button = container.querySelector('#btn-register')
            expect(button).toBeInTheDocument()
        })

        test('La pagina de registro tiene un label para el correo electronico', () => {
            const { queryByText } = render(<SignUp></SignUp>)
            const labelEmail = queryByText("Correo electronico")
            expect(labelEmail).toBeInTheDocument()
        })

        test('La pagina de registro tiene un label para la contraseña', () => {
            const { queryByText } = render(<SignUp></SignUp>)
            const labelPassword = queryByText("Contraseña")
            expect(labelPassword).toBeInTheDocument()
        })

        test('La pagina de registro tiene un titulo de crear cuenta', () => {
            const { container } = render(<SignUp></SignUp>)
            const title = container.querySelector("h3")
            expect(title.textContent).toBe("Crear cuenta")
        })
    })



    describe('Functionality', () => {

        const changeEvent = (value) => {
            return {
                target: {
                    value
                }
            }
        }

        test('el input del email tiene el valor del state', () => {
            const { container } = render(<SignUp></SignUp>)
            const emailInput = container.querySelector('#email')
            fireEvent.change(emailInput, changeEvent("prueba"))
            expect(emailInput).toHaveValue("prueba")
        })

        test('el input del password tiene el valor del state', () => {
            const { container } = render(<SignUp></SignUp>)
            const passwordInput = container.querySelector('#password')
            fireEvent.change(passwordInput, changeEvent("p4ssword"))
            expect(passwordInput).toHaveValue("p4ssword")
        })

    })

})