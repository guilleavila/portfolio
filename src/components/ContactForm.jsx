import emailjs from "@emailjs/browser"
import { motion } from "framer-motion"
import { useRef, useState } from "react"
import { styles } from "../styles"
import Button from "./Button"

const ContactForm = () => {

    const formRef = useRef()

    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)

        emailjs.send(
            'service_roqgjzb',
            'template_j39pmds',
            {
                from_name: form.name,
                to_name: 'Guille',
                from_email: form.email,
                to_email: 'contact@jsmastery.pro',
                message: form.message,
            },
            '3waAZaLERSx7u9Sjq'
        )
            .then(() => {
                setLoading(false)
                setForm({
                    name: '',
                    email: '',
                    message: ''
                }, (error) => {
                    setLoading(false)
                    console.log(error)
                    alert('Something went wrong')
                })
            })
    }

    return (
        <form ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-8 w-full"
        >

            <label className="flex flex-col">
                <span className="text-secondary">Your Name</span>
                <input type="text" name="name" value={form.name} onChange={handleChange}
                    placeholder="What's your name?"
                    className="placeholder:text-tertiary text-secondary bg-transparent mt-3"
                />
            </label>

            <label className="flex flex-col">
                <span className="text-secondary">Your Email</span>
                <input type="email" name="email" value={form.email} onChange={handleChange}
                    placeholder="What's your email?"
                    className="placeholder:text-tertiary text-secondary bg-transparent mt-3"
                />
            </label>

            <label className="flex flex-col">
                <span className="text-secondary">Your Message</span>
                <textarea name="message" rows="7" value={form.message} onChange={handleChange}
                    placeholder="What do you want to say?"
                    className="placeholder:text-tertiary text-secondary bg-transparent mt-3"
                />
            </label>

            <div>
                <motion.button type='submit'
                    whileHover={{ opacity: 1, scale: 1.05 }}
                    className={`${styles.linkButton} relative z-20`}
                >
                    {loading ? 'Sending...' : 'Send'}
                </motion.button>
            </div>

        </form>
    )
}

export default ContactForm