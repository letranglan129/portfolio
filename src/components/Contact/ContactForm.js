import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import Button from '../Button/Button'
import Input from '../FieldInput/Input'
import Textarea from '../FieldInput/Textarea'
import Toast from '../Toast/Toast'

export default function ContactForm() {
    const [toast, setToast] = useState({
        type: null,
        message: null,
        isOpen: false,
    })
    const { register, handleSubmit, control } = useForm()
    const formRef = useRef(null)

    const onSubmit = data => {
        emailjs
            .sendForm(
                process.env.REACT_APP_EMAILJS_SERVICEID,
                process.env.REACT_APP_EMAILJS_TEMPLATEID,
                formRef.current,
                process.env.REACT_APP_EMAILJS_PUBLICKEY
            )
            .then(
                result => {
                    setToast({
                        type: 'success',
                        message: 'I received a message from you',
                        isOpen: true,
                    })
                },
                error => {
                    setToast({
                        type: 'error',
                        message: 'There was an error sending your message.',
                        isOpen: true,
                    })
                }
            )
    }

    return (
        <>
            <form
                ref={formRef}
                className=""
                onSubmit={handleSubmit(onSubmit)}
                id="contact-form"
            >
                <div className="mb-6">
                    <Input
                        type="text"
                        name="user_name"
                        placeholder="Name"
                        register={{
                            ...register('user_name', { required: true }),
                        }}
                    >
                        <i className="fas fa-user-alt"></i>
                    </Input>
                </div>
                <div className="mb-6">
                    <Input
                        type="email"
                        name="user_email"
                        placeholder="Email"
                        register={{
                            ...register('user_email', {
                                required: true,
                                pattern:
                                    /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gim,
                            }),
                        }}
                    >
                        <i className="fas fa-paper-plane"></i>
                    </Input>
                </div>
                <div className="mb-6">
                    <Input
                        type="text"
                        name="problem"
                        placeholder="Problem"
                        register={{
                            ...register('problem', {
                                required: true,
                            }),
                        }}
                    >
                        <i className="fas fa-exclamation"></i>
                    </Input>
                </div>
                <div className="mb-6">
                    <Controller
                        name="message"
                        render={({ field }) => {
                            const { ref, ...nonRefField } = field
                            return (
                                <Textarea
                                    {...nonRefField}
                                    placeholder="Message"
                                    name="message"
                                >
                                    <i className="fas fa-comment-alt-lines"></i>
                                </Textarea>
                            )
                        }}
                        control={control}
                    />
                </div>
                <Button>Let's Talk!</Button>
            </form>
            <Toast
                isOpen={toast.isOpen}
                onClose={() =>
                    setToast({ type: null, message: null, isOpen: false })
                }
                autoHide="5000"
                type="success"
                message={toast.message}
            />
        </>
    )
}
