import type { Metadata } from 'next'
import ContactForm from '@/components/contact/ContactForm'

export const metadata: Metadata = {
  title: 'Contact — Ojas Studio',
  description:
    'Get in touch with Ojas Studio. Tell us about your project and we will get back to you within 24 hours.',
}

const ContactPage = () => {
  return (
    <main className="min-h-screen w-full">
      <ContactForm />
    </main>
  )
}

export default ContactPage
