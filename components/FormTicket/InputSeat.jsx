"use client"

import { useState } from 'react'
import { FiCheck } from 'react-icons/fi'

const people = [
    { id: 1, name: 'Economy', price: 4950000 },
    { id: 2, name: 'Premium Economy', price: 7550000 },
    { id: 3, name: 'Business', price: 29220000 },
    { id: 4, name: 'First Class', price: 87620000 },
]

export default function InputSeat() {
    const [selectedPeople, setSelectedPeople] = useState([])

    const handleCheckboxChange = (person) => {
        const updatedSelectedPeople = selectedPeople.includes(person)
            ? selectedPeople.filter((p) => p !== person)
            : [...selectedPeople, person]
        setSelectedPeople(updatedSelectedPeople)
    }

    return (
        <div className="w-full px-5 top-16">
            <div className="space-y-2">
                {people.map((person, personIdx) => (
                    <div
                        key={personIdx}
                        className="flex items-center justify-between space-x-2 border-b-2 cursor-pointer"
                        onClick={() => handleCheckboxChange(person)}
                    >
                        <input
                            type="checkbox"
                            hidden
                            checked={selectedPeople.includes(person)}
                            className="text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            onChange={() => { }}
                        />
                        <div className={selectedPeople.includes(person) ? "flex flex-col text-white bg-bnr-primary w-full py-3 relative space-y-2 hover:text-white px-3" : "flex flex-col text-gray-900 hover:bg-bnr-primary w-full py-3 relative space-y-2 hover:text-white px-3"}>
                            <span>{person.name}</span>
                            <span>IDR {person.price}</span>
                        </div>
                        <div className='absolute right-14'>
                            {selectedPeople.includes(person) && (
                                <FiCheck className="text-bnr-primary w-6 h-6 bg-[#73CA5C] rounded-full" />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}