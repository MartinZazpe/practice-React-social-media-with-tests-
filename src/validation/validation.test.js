import { SignUpValidation } from "./validation"

describe('validation tests', () => {

    describe('SignUpValidation Function', () => {

        test('valida un correo electronico invalido', () => {
            const validation = SignUpValidation("test@gmail")
            expect(Object.keys(validation.errors)).toContain('email')
        })

        test('valida un correo electronico valido', () => {
            const validation = SignUpValidation("test@gmail.com")
            expect(Object.keys(validation.errors)).not.toContain('email')
        })

        test('valida una contraseña incorrecta', () => {
            const validation = SignUpValidation("", "1234")
            expect(Object.keys(validation.errors)).toContain('password')
        })

        test('valida una contraseña correcta', () => {
            const validation = SignUpValidation("123456", "12345678")
            expect(Object.keys(validation.errors)).not.toContain('password')
        })

        test('la validacion retorna un objeto con los valores', () => {
            const validation = SignUpValidation()
            expect(Object.keys(validation.errors).length).toBe(2)
        })

        test('la validacion falla cuando el correo eletornico es incorrecto', () => {
            const validation = SignUpValidation("test@gmail", "12345678")
            expect(validation.isValid).toBe(false)
        })

        test('la validacion falla cuando la contrasela es incorrecta', () => {
            const validation = SignUpValidation("test@gmail.com", "123")
            expect(validation.isValid).toBe(false)
        })

        test('la validacion pasa cuando el correo electronico y el password son correctos', () => {
            const validation = SignUpValidation("test@gmail.com", "123456")
            expect(validation.isValid).toBe(true)
        })

    })
})