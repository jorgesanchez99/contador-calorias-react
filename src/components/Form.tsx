import { ChangeEvent, useState } from "react";
import { categories } from "../data/categories";

export default function Form() {

    const [activity, setActivity] = useState({
        category: '',
        name: "",
        calories: 0
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
        setActivity({
            ...activity,
            [e.target.id]: e.target.value
        })
    }

    return (
        <form className="space-y-6 bg-white shadow-xl p-5 md:p-10 rounded-2xl max-w-lg mx-auto mt-4">
            <div>
                <label htmlFor="category" className="block text-sm font-semibold text-gray-600 mb-2">Categoría</label>
                <select
                    id="category"
                    className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={activity.category}
                    onChange={handleChange}
                >
                    <option disabled value="">Seleccione una categoría</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                </select>
            </div>

            <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-600 mb-2">Actividad</label>
                <input
                    type="text"
                    id="name"
                    placeholder="Ej: Comida, Jugo de Naranja, Ejercicio, Pesas"
                    className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={activity.name}
                    onChange={handleChange}

                />
            </div>

            <div>
                <label htmlFor="calories" className="block text-sm font-semibold text-gray-600 mb-2">Calorías</label>
                <input
                    type="number"
                    min="0"
                    max="3000"
                    id="calories"
                    placeholder="Ej: 100, 200, 500"
                    className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={activity.calories}
                    onChange={handleChange}

                />
            </div>

            <input
                type="submit"
                value="Agregar Actividad"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors cursor-pointer"
            />
        </form>
    );
}
