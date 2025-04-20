import { ChangeEvent, Dispatch, FormEvent, useEffect, useState } from "react";
import { categories } from "../data/categories";
import { Activity } from "../types";
import { ActivityActions, ActivityState } from '../reducers/activity-reducer';
import {v4 as uuidv4} from 'uuid';


type FormProps = {
    dispatch: Dispatch<ActivityActions>;
    state: ActivityState;
}


export default function Form({dispatch,state}: FormProps) {

    const initialState : Activity = {
        id: uuidv4(),
        category: 1,
        name: "",
        calories: 0
    }

    const [activity, setActivity] = useState<Activity>(initialState);

    useEffect(() => {
      if(state.activeId) {
        const activityToEdit = state.activities.find(activity => activity.id === state.activeId);
        if (activityToEdit) {
            setActivity(activityToEdit);
        }
      }
    }, [state.activeId, state.activities]);
    
    
    const capitalize = (text: string) =>
        text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    
    const parsedValue = (id: string, value: string) => {
        if (id === 'name') return value;
        const num = Number(value);
        return isNaN(num) ? 0 : num;
    };
    
    
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
    
        setActivity({
            ...activity,
            [id]: parsedValue(id, value)
        });
    };

    const isValidActivity = () => {
        const { name, calories } = activity;
        return name.trim() !== "" && calories > 0 && calories <= 3000;
    };


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newActivity: Activity = {
            ...activity,
            name: capitalize(activity.name.trim()),
        }
        dispatch({type: 'save-activity', payload: {newActivity}});
        setActivity({
            ...initialState,
            id: uuidv4()
        });
    }
    

    return (
        <form className="space-y-6 bg-white shadow-xl p-5 md:p-10 rounded-2xl max-w-3xl mx-auto mt-4"
            onSubmit={handleSubmit}
        >
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
                value={`${activity.category === 1 ? "Guardar Comida" : "Guardar Ejercicio"}`}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!isValidActivity()}
            />
        </form>
    );
}
