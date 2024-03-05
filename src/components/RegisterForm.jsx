import React, { useState } from 'react'
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline'
import { useForm } from 'react-hook-form'
import { post_create_user } from '../helpers/createUser'
import { formInputValidations } from '../constants/validations'

function RequiredSign() {
    return (
        <span className='text-md text-red-500'>*</span>
    )
}


function ErrorMessage({ error }) {
    console.log(error)
    return (
        <p className="mt-2 ml-1 text-xs text-red-600" id="email-error">
            {error.message}
        </p>
    )
}

export default function RegisterForm() {
    const [dob, setDob] = useState({
        date: null,
        month: null,
        year: null
    })
    const [password, setPassword] = useState();
    const [rePassword, setRepassword] = useState();
    const [statusCode, setStatusCode] = useState();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const months = [
        { value: 1, label: 'Jan' }, { value: 2, label: 'Feb' }, { value: 3, label: 'Mar' },
        { value: 4, label: 'Apr' }, { value: 5, label: 'May' }, { value: 6, label: 'Jun' },
        { value: 7, label: 'Jul' }, { value: 8, label: 'Aug' }, { value: 9, label: 'Sep' },
        { value: 10, label: 'Oct' }, { value: 11, label: 'Nov' }, { value: 12, label: 'Dec' }
    ];
    const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);


    const onSubmit = async (data) => {
        const { date, month, year,confirm_password, ...rest } = data;
        const date_of_birth = `${date}${month}${year}`;

        const requestData = {
            ...rest, 
            date_of_birth
        };
        if(password === rePassword){
        const resposne = await post_create_user(requestData)
        setStatusCode(resposne.title)
        }
    }


    return (
        <>
            <div className="min-h-full justify-start py-1 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-4 text-start text-2xl font-bold text-gray-700">
                        Create User Account
                    </h2>
                </div>

                <div className="mt-2 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-1">
                    <div></div>
                    <div className="bg-white px-8 py-8 shadow-md sm:px-8 sm:mx-auto sm:w-full sm:max-w-md md:max-w-md">
                        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                            <div className="sm:col-span-4">
                                <label htmlFor="full_name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Full name <RequiredSign />
                                </label>
                                <div className="mt-2">
                                    <input
                                        {...register('full_name', formInputValidations.fullName)}
                                        type="text"
                                        name="full_name"
                                        id="full_name"
                                        placeholder='Full Name'
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg font-light"
                                    />
                                </div>
                                {errors.full_name && <ErrorMessage error={errors.full_name} />}
                            </div>


                            <div className="sm:col-span-4">
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Contact Number <RequiredSign />
                                </label>
                                <div className="mt-4 relative">
                                    <label
                                        htmlFor="contact_number"
                                        className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-light text-gray-600"
                                    >
                                        Contact Number 
                                    </label>
                                    <input
                                        {...register('contact_number', formInputValidations.contactNumber)}
                                        type="text"
                                        name="contact_number"
                                        id="contact_number"
                                        className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg font-light"
                                        placeholder="Contact Number"
                                    />
                                    {errors.contact_number && <ErrorMessage error={errors.contact_number} />}
                                </div>
                            </div>

                            <div className="sm:col-span-2 sm:col-start-1">
                                <label htmlFor="day" className="block text-sm font-medium leading-6 text-gray-900">
                                    Birth Date <RequiredSign />
                                </label>
                                <div className="mt-2 flex gap-x-4">
                                    <select
                                        {...register('date', formInputValidations.birthDate.day)}
                                        id="date"
                                        name="date"
                                        className={`mt-2 block w-full rounded-md border-0 py-2 pl-3 pr-10 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-lg sm:font-light ${dob.date === null ? 'text-gray-500' : 'text-gray-900'}`}
                                    >
                                        <option value={""}>Day</option>
                                        {days.map(day => (
                                            <option key={day} value={day}>{day}</option>
                                        ))}
                                    </select>
                                    <select
                                        {...register('month', formInputValidations.birthDate.month)}
                                        id="month"
                                        name="month"
                                        className={`mt-2 block w-full rounded-md border-0 py-2 pl-3 pr-10 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-lg sm:font-light ${dob.month === null ? 'text-gray-500' : 'text-gray-900'}`}
                                    >
                                        <option value={""}>Month</option>
                                        {months.map(month => (
                                            <option key={month.value} value={month.label}>{month.label}</option>
                                        ))}
                                    </select>
                                    <select
                                        {...register('year', formInputValidations.birthDate.year)}
                                        id="year"
                                        name="year"
                                        className={`mt-2 block w-full rounded-md border-0 py-2 pl-3 pr-10 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-lg sm:font-light ${dob.year === null ? 'text-gray-500' : 'text-gray-900'}`}
                                    >
                                        <option value={""}>Year</option>
                                        {years.map(year => (
                                            <option key={year} value={year}>{year}</option>
                                        ))}
                                    </select>
                                </div>
                                {errors.date && <ErrorMessage error={errors.date} />}
                                {errors.month && <ErrorMessage error={errors.month} />}
                                {errors.year && <ErrorMessage error={errors.year} />}
                            </div>

                            <div className="sm:col-span-4">
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email Address <RequiredSign />
                                </label>
                                <div className="mt-4 relative">
                                    <label
                                        htmlFor="email"
                                        className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-light text-gray-600"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        {...register('email', formInputValidations.emailAddress)}
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg font-light"
                                        placeholder="Email Address"
                                    />
                                    {errors.email && <ErrorMessage error={errors.email} />}
                                </div>
                            </div>

                            <div className="sm:col-span-4">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password <RequiredSign />
                                </label>
                                <div className="mt-2">
                                    <input
                                        {...register('password', formInputValidations.password)}
                                        type="password"
                                        name="password"
                                        id="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg font-light"
                                        placeholder="Create Password"
                                    />
                                    {errors.password && <ErrorMessage error={errors.password} />}
                                </div>
                            </div>

                            <div className="sm:col-span-4">
                                <label htmlFor="confirm_password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Confirm Password <RequiredSign />
                                </label>
                                <div className="mt-2">
                                    <input
                                        {...register('confirm_password', formInputValidations.confirmPassword)}
                                        type="password"
                                        name="confirm_password"
                                        id="confirm_password"
                                        onChange={(e) => setRepassword(e.target.value)}
                                        className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg font-light"
                                        placeholder="Confirm Password"
                                    />
                                    {errors.confirm_password && <ErrorMessage error={errors.confirm_password} />}
                                    {password !== rePassword && <p className="mt-2 ml-1 text-xs text-red-600" id="email-error">Password doesn't match</p>}
                                </div>
                            </div>
                            <div className="mt-6 flex items-center justify-center gap-x-6">
                                <button type="button" className="text-sm font-semibold px-12 py-3 text-cyan-600 ring-1 ring-cyan-600 rounded-md">
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="text-sm font-semibold px-12 py-3 text-white ring-1 ring-cyan-600 rounded-md bg-cyan-600"
                                >
                                    Save
                                </button>
                            </div>

                        </form>

                    </div>
                    <div className={`flex flex-1 w-3/4 md:-ml-6 sm:ml-1 h-fit py-4 px-4 rounded-md ${statusCode === 'Success' && "bg-green-100"}  ${statusCode === 'Failed' && "bg-red-100"}`}>
                        {statusCode === 'Success' &&
                            <>
                                <CheckCircleIcon className='w-8 h-8 text-green-900' />
                                <h3 className='mt-1 text-green-900'>User account successfully created.</h3>
                            </> 
                        }
                        {statusCode === 'Failed' &&   
                            <>
                                <XCircleIcon className='w-8 h-8 text-red-900' />
                                <h3 className='mt-1 text-red-900'>There was error creating the account.</h3>
                            </>
                        }
                    </div>
                </div>

            </div>
        </>
    )
}

