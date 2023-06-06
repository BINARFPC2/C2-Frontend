"use client"

import { useState } from "react"
import { FiEye, FiEyeOff } from "react-icons/fi"

const InputAuth = ({ children, type, placeholder, name, value, handleChange, handleBlur, touched, errors }) => {
    const [show, setShow] = useState(false);

    const handelShow = () => {
        setShow(!show)
    }
    return (
        <div className="relative">
            <label htmlFor={name} className="text-xs">{children}</label>
            <input
                type={show ? "password" : "text"}
                name={name}
                id={name}
                className={
                    errors && touched ?
                        "w-full h-12 px-4 text-xs border outline-none border-red-600 rounded-2xl text-red-600" : "w-full h-12 px-4 text-xs border outline-none border-bnr-secondary rounded-2xl"
                }
                placeholder={placeholder}
                onChange={handleChange}
                onBlur={handleBlur}
                value={value}
                autoComplete="off"
            />
            {type !== "password" ? null :
                show ?
                    <FiEyeOff onClick={handelShow} className="absolute text-2xl text-bnr-secondary right-5 top-1/2" />
                    :
                    <FiEye onClick={handelShow} className="absolute text-2xl text-bnr-secondary right-5 top-1/2" />
            }
        </div>
    )
}

export default InputAuth