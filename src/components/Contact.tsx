import { useForm } from 'react-hook-form';
import { FormEvent } from 'react';



const Contact = () => {
    const { trigger, register, formState: {errors} } = useForm();


      const onSubmit = async (e: FormEvent) => {
        const isValid = await trigger();
        if(!isValid) {
            e.preventDefault();
        }
        }



  return (
    <section  className='w-full md:flex mt-16 md:-mt-32 items-center justify-center mx-auto p-4 sm:pb-6 min-h-screen'>
      <div className='mx-auto w-full flex flex-col items-center justify-center h-full'>
        <p className='text-5xl tracking-widest lowercase text-white'>
        Contact Me
        </p>
        <form 
        className='flex flex-col md:w-5/6 sm:w-full mt-10 items-center justify-center'
        target='_blank'
        onSubmit={onSubmit}
        method='POST'
        action='https://formsubmit.co/aliferuzcode@gmail.com'>
        <input type="text"
        className='input'
        placeholder='NAME'
        {...register('name', {
        required: true,
        maxLength: 100,
        })}/>
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
        })}/>
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
        })}/>
        {errors.message && (
        <p className='mt-1 text-white'>
        {errors.message.type === 'required' && 'This field is required.'}
        {errors.message.type === 'maxLength' && 'Max length is 2000 char.'}
        </p>
        )}
        <button type='submit' className='w-60 border border-ribbon-500 bg-gradient-to-bl from-ribbon-800 to-ribbon-950'>
        SUBMIT
        </button>
        </form>
    </div>
    </section>
  )
}

export default Contact

