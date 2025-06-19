'use client'

import { useState, useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { add } from '../../axios/account'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
export default function AddNewForm() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [name, setName] = useState('')
  const navigate = useNavigate();

  // Tự động cập nhật tên đầy đủ
  useEffect(() => {
    setName(`${lastName} ${firstName}`.trim())
  }, [firstName, lastName])
  

const handleSubmit = async (e) => {
  e.preventDefault()
  const form = e.target

  const username = form.username.value.trim()
  const email = form.email.value.trim()

  if (!username || !firstName || !lastName || !email) {
    toast.error('Please fill in empty input!')
    return
  }

  try {
  await add(username, `${lastName} ${firstName}`, email)
  toast.success('Successful')
  form.reset()
  navigate('/manager/list') // ⬅️ CHUYỂN HƯỚNG SAU KHI ADD
} catch (error) {
  console.error(error)
  toast.error('Failed')
}

}

  return (
    
    <form onSubmit={handleSubmit} className="px-[10%]">
      <h1 className="text-2xl font-bold mb-3">Add New Employee</h1> 
      <input type="hidden" name="name" value={name} />

      <div className="space-y-12 p-3 border shadow-lg rounded-md">
        {/* Profile Section */}
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base/7 font-semibold text-gray-900">Profile</h2>
          <p className="mt-1 text-sm/6 text-gray-600">
            This information will be displayed publicly so be careful what you share.
          </p>

          <div className="mt-10 w-full">
            <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
              Username
            </label>
            <div className="mt-2">
              <div className="flex w-full items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/4">
                  becabigo.com/
                </div>
                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="janesmith"
                  required
                  className="block w-full py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base/7 font-semibold text-gray-900">Personal Information</h2>
          <p className="mt-1 text-sm/6 text-gray-600">Use a permanent address where you can receive mail.</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Submit */}
      <div className="mt-6 flex flex-col gap-y-3 sm:flex-row sm:gap-x-6">
        <button
          type="button"
          className="w-full text-red-700 hover:text-white border border-red-300 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="w-full rounded-lg bg-green-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:border-green-500 hover:border hover:bg-green-100 hover:text-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        >
          Add
        </button>
      </div>

      </div>

      
    </form>
  )
}
