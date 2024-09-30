import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_7wvw8go',
      'template_r0dq9aa',
      {
        from_name: form.name,
        to_name: 'Arseny',
        from_email: form.email,
        to_email: 'llbnf.work@gmail.com',
        message: form.message,
      },
      'sJ4KRPIexdHoh9Q7n'
    )
      .then(() => {
        setLoading(false);
        alert('Thank you! I will get back to you as soon as possible.');
        setForm({
          name: '',
          email: '',
          message: '',
        })
      }, (error) => {
        setLoading(false);
        console.log(error);
        alert('Something went wrong.')
      })
  }

  return (
    <section id='contact' className='c-space my-20'>
      <div className='py-16 relative min-h-screen flex flex-col items-center justify-center'>
        <img
          src='/assets/terminal.png'
          alt='terminal'
          className='absolute inset-0 min-h-screen h-full w-full'
        />

        <div className='contact-container'>
          <h3 className='head-text'>Let&#39;s talk</h3>
          <p className='text-md text-white-600 mt-3'>
            Wheater you&#39;re looking to build a new website,
            improve your existing platform, or bring a unique
            project to life, I&#39;m here to help.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col space-y-7'
          >
            <label className='space-y-3'>
              <span className='field-label'>Full Name</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                required
                className='field-input'
                placeholder='John Doe'
              />
            </label>

            <label className='space-y-3'>
              <span className='field-label'>Email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                required
                className='field-input'
                placeholder='johndoe@gmail.com'
              />
            </label>

            <label className='space-y-3'>
              <span className='field-label'>Your message</span>
              <textarea
                rows={5}
                name='message'
                value={form.message}
                onChange={handleChange}
                required
                className='field-input'
                placeholder='Share your thoughts or inquiries...'
              />
            </label>

            <button className='field-btn' type='submit' disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}

              <img
                src={'/assets/arrow-up.png'}
                alt='arrow up'
                className='field-btn_arrow'
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact;