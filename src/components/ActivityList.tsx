import { Pencil, Trash2 } from "lucide-react";
import { Activity } from "../types";
import { categoryColors, categoryNames } from "../utils";
import { Dispatch } from "react";
import { ActivityActions } from "../reducers/activity-reducer";

type ActivityListProps = {
  activities: Activity[];
  dispatch : Dispatch< ActivityActions>;
};

export const ActivityList = ({ activities, dispatch }: ActivityListProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-4xl font-bold text-slate-700 text-center mb-6">
        Comida y Actividades
      </h2>

      {activities.length === 0 ? (
        <p className="text-center text-xl sm:text-2xl md:text-3xl font-semibold text-slate-500 mt-8">
          No hay actividades registradas
        </p>
      ) : (
        activities.map((activity) => (
          <div
            key={activity.id}
            className="bg-white border border-slate-200 rounded-2xl shadow-md px-6 py-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 transition hover:shadow-lg hover:bg-slate-50"
          >
            <div className="space-y-1 w-full">
              <span
                className={`inline-block text-sm font-semibold px-3 py-1 rounded-full text-white tracking-wide ${
                  categoryColors[activity.category] ?? "bg-gray-400"
                }`}
              >
                {categoryNames[activity.category] ?? "Categoría Desconocida"}
              </span>

              <p className="text-2xl sm:text-3xl font-bold text-slate-800 leading-snug">
                {activity.name}
              </p>

              <p className="text-lg sm:text-xl font-medium text-lime-600">
                Calorías: {activity.calories}
              </p>
            </div>

            <div className="flex justify-between items-center gap-4 mt-4 sm:mt-0">
              <button
                className="text-amber-500 hover:text-slate-700 transition duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-300 rounded"
                aria-label="Editar actividad"
                onClick={()=> dispatch({type: 'set-active-activity', payload: {id: activity.id}})}
              >
                <Pencil size={20} />
              </button>

              <button
                className="text-red-500 hover:text-slate-700 transition duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-300 rounded"
                aria-label="Eliminar actividad"
                onClick={() =>
                  dispatch({ type: "delete-activity", payload: { id: activity.id } })
                }
              >
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
