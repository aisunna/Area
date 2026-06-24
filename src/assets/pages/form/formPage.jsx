import './formPage.css'
import './formPageAdaptive.css'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema } from '../../../schemes/register'
import { useState } from 'react'

const FormPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registerSchema)
    })

    const [info, setInfo] = useState()

    const submitRegister = (data) => {
        console.log(data);

        setInfo(data)
    }

    return (
        <>

            <div className="form__container">

                <form onSubmit={handleSubmit(submitRegister)} className="form">

                    <h4 className="form__title">Stay with us!</h4>

                    <div className="form__inputs">

                        <h5 className="inputs__title">Your email address</h5>

                        <input type="email" className="inputs__input" placeholder='Email' {...register("email")} />

                        {!!errors?.email?.message && <p className='error'>{errors?.email?.message}</p>}

                    </div>

                    <div className="form__inputs">

                        <h5 className="inputs__title">Your username</h5>

                        <input type="text" className="inputs__input" placeholder='Username' {...register("username")} />

                        {!!errors?.username?.message && <p className='error'>{errors?.username?.message}</p>}

                    </div>

                    <div className="form__inputs">

                        <h5 className="inputs__title">Your password</h5>

                        <input type="password" className="inputs__input" placeholder='Password' {...register("password")} />

                        {!!errors?.password?.message && <p className='error'>{errors?.password?.message}</p>}

                    </div>

                    <div className="form__inputs">

                        <h5 className="inputs__title">Confirm your password</h5>

                        <input type="password" className="inputs__input" placeholder='Confirm password' {...register("confirmPassword")} />

                        {!!errors?.confirmPassword?.message && <p className='error'>{errors?.confirmPassword?.message}</p>}

                    </div>

                    <button className="form__btn" type='submit'>Enter!</button>

                </form>

            </div>

        </>
    )
}

export default FormPage