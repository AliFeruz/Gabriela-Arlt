import { useForm } from 'react-hook-form';
import { FormEvent, useEffect, useState } from 'react';
import triangle from '../assets/icons/triangle.png';

const Contact = () => {
  const { trigger, register, formState: { errors } } = useForm();
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prevRotation) => prevRotation + 90);
    }, 3000); // Rotate every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const onSubmit = async (e: FormEvent) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section className='relative w-full min-h-screen flex items-center justify-center
      md:-mt-20 px-8 sm:px-16 md:px-32 lg:px-64'>
      <div className='relative z-10 w-full flex flex-col items-center justify-center h-full'>
        <p className='text-5xl tracking-widest lowercase text-white'>
          Contact Me
        </p>
        <form 
          className='flex flex-col md:w-5/6 sm:w-full mt-10 items-center justify-center'
          target='_blank'
          onSubmit={onSubmit}
          method='POST'
          action='https://formsubmit.co/gabriela.arlt.mail@gmail.com'>
          <input type="text"
            className='input'
            placeholder='NAME'
            {...register('name', {
              required: true,
              maxLength: 100,
            })} />
          {errors.name && (
            <p className='mt-1 text-white'>
              {errors.name.type === 'required' && 'This field is required.'}
              {errors.name.type === 'maxLength' && 'Max length is 100 char.'}
            </p>
          )}
          <input type="text"
            className='input'
            placeholder='EMAIL'
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })} />
          {errors.email && (
            <p className='mt-1 text-white'>
              {errors.email.type === 'required' && 'This field is required.'}
              {errors.email.type === 'pattern' && 'Invalid email address.'}
            </p>
          )}
          <textarea
            rows={4}
            cols={50}
            className='input'
            placeholder='MESSAGE'
            {...register('message', {
              required: true,
              maxLength: 2000,
            })} />
          {errors.message && (
            <p className='mt-1 text-white'>
              {errors.message.type === 'required' && 'This field is required.'}
              {errors.message.type === 'maxLength' && 'Max length is 2000 char.'}
            </p>
          )}
          <button type='submit' className='inset-0 flex items-center justify-center w-5/6 z-0'>
            <img
              src={triangle}
              alt="triangle"
              className='md:h-[11rem] md:w-[11rem] h-20 w-20 opacity-75 transition-transform duration-500'
              style={{ transform: `rotate(${rotation}deg)` }}
            />
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
