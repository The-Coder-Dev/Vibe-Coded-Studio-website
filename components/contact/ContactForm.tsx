'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Send, CheckCircle, Mail, Phone, MapPin } from 'lucide-react'

/* ── Zod schema ──────────────────────────────────────────────── */
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  service: z.enum(
    ['graphic-design', 'web', 'wordpress', 'video', 'posts', 'ads'],
    { error: 'Please select a service' }
  ),
  message: z.string().min(20, 'Message must be at least 20 characters'),
})

type ContactFormValues = z.infer<typeof contactSchema>

/* ── Helpers ─────────────────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const, delay },
})

const contactInfo = [
  {
    icon: Mail,
    label: 'Email us',
    value: 'hello.theojasstudio@gmail.com',
    href: 'mailto:hello.theojasstudio@gmail.com',
  },
  {
    icon: Phone,
    label: 'Call us',
    value: '+91 9368190018',
    href: 'tel:+919368190018',
  },
  {
    icon: MapPin,
    label: 'Find us',
    value: 'India — working globally',
    href: '#',
  },
]

const services = [
  { value: 'graphic-design', label: 'Graphic Design' },
  { value: 'web', label: 'Web Development' },
  { value: 'wordpress', label: 'WordPress Development' },
  { value: 'video', label: 'Video Editing' },
  { value: 'posts', label: 'Social Media Posts' },
  { value: 'ads', label: 'Ad Creatives' },
]



/* ── Component ───────────────────────────────────────────────── */
const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormValues) => {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    if (res.ok) {
      setSubmitted(true)
      reset()
    } else {
      alert('Something went wrong. Please try again or email us directly.')
    }
  }

  return (
    <section className="w-full min-h-screen bg-background pt-36 pb-24 px-6 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1200px]">

        {/* ── Page header ── */}
        <div className="mb-16">
          <motion.span
            {...fadeUp(0)}
            className="text-xs uppercase tracking-widest text-muted-foreground font-medium"
          >
            // GET IN TOUCH //
          </motion.span>
          <motion.h1
            {...fadeUp(0.08)}
            className="mt-3 text-5xl sm:text-6xl lg:text-[4.5rem] font-bold leading-none tracking-tight text-foreground"
          >
            Let&apos;s build<br />
            <span className="text-destructive">something great.</span>
          </motion.h1>
          <motion.p
            {...fadeUp(0.14)}
            className="mt-5 text-base text-muted-foreground max-w-md leading-relaxed"
          >
            Tell us about your project. We&apos;ll get back to you within 24 hours — no fluff, just a real conversation.
          </motion.p>
        </div>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16">

          {/* Left — contact info */}
          <motion.div
            {...fadeUp(0.18)}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-5">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="group flex items-start gap-4"
                >
                  <div className="mt-0.5 flex-shrink-0 w-9 h-9 rounded-xl bg-destructive/10 flex items-center justify-center transition-colors group-hover:bg-destructive/20">
                    <Icon size={16} className="text-destructive" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-widest text-muted-foreground font-medium mb-0.5">
                      {label}
                    </p>
                    <p className="text-sm font-medium text-foreground group-hover:text-destructive transition-colors">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Decorative accent block */}
            <div className="rounded-2xl border border-border bg-card p-6 mt-2">
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-3">
                Response time
              </p>
              <p className="text-3xl font-bold text-foreground tracking-tight">&lt; 24hrs</p>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                We review every enquiry personally and reply with a thoughtful response — not a template.
              </p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div {...fadeUp(0.24)}>
            <AnimatePresence mode="wait">
              {submitted ? (
                /* ── Success state ── */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center justify-center text-center gap-5 rounded-2xl border border-border bg-card p-16 h-full min-h-[480px]"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <CheckCircle size={32} className="text-emerald-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground tracking-tight">Message sent!</h2>
                    <p className="text-sm text-muted-foreground mt-2 max-w-xs leading-relaxed">
                      We&apos;ve received your enquiry and will be in touch within 24 hours.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-sm text-destructive underline underline-offset-4 hover:opacity-70 transition-opacity"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                /* ── Form ── */
                <motion.form
                  key="form"
                  onSubmit={handleSubmit(onSubmit)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-8 sm:p-10"
                >

                  {/* Row 1: Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field label="Your name *" error={errors.name?.message}>
                      <input
                        {...register('name')}
                        placeholder="Ashwani Sharma"
                        className={inputCls(!!errors.name)}
                      />
                    </Field>

                    <Field label="Email address *" error={errors.email?.message}>
                      <input
                        {...register('email')}
                        type="email"
                        placeholder="hello@you.com"
                        className={inputCls(!!errors.email)}
                      />
                    </Field>
                  </div>

                  {/* Row 2: Company (optional) */}
                  <Field label="Company / brand name" error={errors.company?.message}>
                    <input
                      {...register('company')}
                      placeholder="Your company (optional)"
                      className={inputCls(false)}
                    />
                  </Field>

                  {/* Row 3: Service */}
                  <Field label="Service needed *" error={errors.service?.message}>
                    <select {...register('service')} className={inputCls(!!errors.service)}>
                      <option value="">Select a service…</option>
                      {services.map((s) => (
                        <option key={s.value} value={s.value}>
                          {s.label}
                        </option>
                      ))}
                    </select>
                  </Field>

                  {/* Row 4: Message */}
                  <Field label="Tell us about your project *" error={errors.message?.message}>
                    <textarea
                      {...register('message')}
                      rows={5}
                      placeholder="Describe your project, goals, timeline — the more detail, the better."
                      className={`${inputCls(!!errors.message)} resize-none`}
                    />
                  </Field>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-1 inline-flex items-center justify-center gap-2.5 rounded-xl bg-destructive px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:opacity-90 active:scale-[0.98] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send message
                        <Send size={14} />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

/* ── Reusable field wrapper ───────────────────────────────────── */
const Field = ({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-xs font-medium text-foreground/70 uppercase tracking-widest">
      {label}
    </label>
    {children}
    <AnimatePresence>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.2 }}
          className="text-xs text-red-500 font-medium"
        >
          {error}
        </motion.p>
      )}
    </AnimatePresence>
  </div>
)

/* ── Input class helper ──────────────────────────────────────── */
const inputCls = (hasError: boolean) =>
  [
    'w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground',
    'placeholder:text-muted-foreground/50',
    'focus:outline-none focus:ring-2 transition-all duration-200',
    hasError
      ? 'border-red-500/60 focus:ring-red-500/30'
      : 'border-border focus:ring-destructive/30 focus:border-destructive/60',
  ].join(' ')

export default ContactForm
