import logic from '../../logic/index.js'
import { useContext } from 'react'
import Context from '../../Context'

import Heading from '../library/Heading'
import Form from '../library/Form'
import Container from '../library/Container'
import Span from '../library/Span'
import Label from '../library/Label'
import Input from '../library/Input'
import Button from '../library/Button'
import Image from '../library/Image'
import Paragraph from '../library/Paragraph'
import Link from '../library/Link'

export default function Register({ onRegister, onLoginClick }) {
    const { alert } = useContext(Context)

    const handleRegisterSubmit = event => {
        event.preventDefault()

        const form = event.target
        const nameInput = form['name-input']
        const surnameInput = form['surname-input']
        const usernameInput = form['username-input']
        const emailInput = form['email-input']
        const passwordInput = form['password-input']
        const passwordRepeatInput = form['password-repeat-input']

        const name = nameInput.value
        const surname = surnameInput.value
        const username = usernameInput.value
        const email = emailInput.value
        const password = passwordInput.value
        const passwordRepeat = passwordRepeatInput.value
        try {
            logic.registerUser(name, surname, username, email, password, passwordRepeat)
                .then(() => {
                    onRegister()

                    alert('user successfully registered')
                })
                .catch(error => {
                    console.error(error)
                    alert(error.message)
                })
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }

    const handleLoginClick = event => {
        event.preventDefault()

        onLoginClick()
    }
    return <main className="flex flex-col justify-center items-center bg-gradient-to-br from-green-400 to-fuchsia-500 h-screen w-screen">

        <Heading className="font-medium text-[35px] fixed top-0 p-10">Sign up</Heading>

        <Form className="flex flex-col justify-center items-center" onSubmit={handleRegisterSubmit}>
            <Container className="group">
                <Input id="name-input" name="name" type="text" required />
                <Span className="highlight"></Span>
                <Span className="bar"></Span>
                <Label htmlFor="name-input">Name</Label>
            </Container>
            <Container className="group">
                <Input id="surname-input" name="surname" type="text" required />
                <Span className="highlight"></Span>
                <Span className="bar"></Span>
                <Label htmlFor="surname-input">Surname</Label>
            </Container>
            <Container className="group">
                <Input id="username-input" name="username" type="text" required />
                <Span className="highlight"></Span>
                <Span className="bar"></Span>
                <Label htmlFor="username-input">Username</Label>
            </Container>
            <Container className="group">
                <Input id="email-input" name="email" type="text" required />
                <Span className="highlight"></Span>
                <Span className="bar"></Span>
                <Label htmlFor="email-input">Email</Label>
            </Container>
            <Container className="group">
                <Input id="password-input" name="password" type="password" required />
                <Span className="highlight"></Span>
                <Span className="bar"></Span>
                <Label htmlFor="password-input">Password</Label>
            </Container>
            <Container className="group">
                <Input id="password-repeat-input" name="password-repeat" type="password" required />
                <Span className="highlight"></Span>
                <Span className="bar"></Span>
                <Label htmlFor="password-repeat-input">Repeat Password</Label>
            </Container>
            <Button className="border-black text-[18px] border rounded w-20" type="submit">Register</Button>
        </Form><br />
        <Link onClick={handleLoginClick}>Back</Link>

        <Container className="flex flex-col items-center fixed bottom-0 p-10 gap-6">
            <Paragraph>Sign in with</Paragraph>

            <Container className="flex flex-row justify-around gap-16">
                <Image><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 10h-2v2h2v6h3v-6h1.82l.18-2h-2v-.833c0-.478.096-.667.558-.667h1.442v-2.5h-2.404c-1.798 0-2.596.792-2.596 2.308v1.692z" /></svg></Image>
                <Image><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg></Image>
                <Image><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z" /></svg></Image>
            </Container>
        </Container>
    </main>
}