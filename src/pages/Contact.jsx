import React, { useState, useRef } from 'react'


const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({name: "", email: "", message: ""})
  const [isLoading, setisLoaing] = useState(false);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value  })
  };
  const handleFocus = () => {};
  const handleBlur = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();
    setisLoaing
  };
  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      <div className='flex-1 min=w=[50%] flex-col'>
        <h1 className='head-text'>Get in Touch</h1>
        <form className='w-full flex flex-col gap-7 mt-14'
          onSubmit={handleSubmit}>
          <label className='text=black-500 font-semibold'>
            Name
            <input
              type='text'
              name='name'
              className='input' 
              placeholder='Pari'
              required
              value={form.name}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className='text=black-500 font-semibold'>
            Email
            <input
              type='email'
              name='email'
              className='input' 
              placeholder='pari@gmail.com'
              required
              value={form.email}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className='text=black-500 font-semibold'>
            Your Message
            <textarea              
              name='message'
              rows={4}
              className='textarea' 
              placeholder='Let me know how can I help you?'
              required
              value={form.message}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type='submit'
            className='btn'
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

    </section>
  )
}

export default Contact
