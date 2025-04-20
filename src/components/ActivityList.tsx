import { Activity } from "../types";
import { categoryColors, categoryNames } from "../utils";

type ActivityListProps = {
    activities: Activity[];
}

export const ActivityList = ({ activities }: ActivityListProps) => {
    return (
      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-slate-700 text-center mb-6">Comida y Actividades</h2>
  
        {activities.length === 0 ? (
          <p className="text-center text-3xl font-semibold text-slate-500">No hay actividades registradas</p>
        ) : (
          activities.map((activity) => (
            <div
              key={activity.id}
              className="bg-white border border-slate-200 rounded-2xl shadow-md px-6 py-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 transition hover:shadow-lg"
            >
              <div className="space-y-1 w-full">
                <span
                  className={`inline-block text-sm font-semibold px-3 py-1 rounded-full text-white ${categoryColors[activity.category] ?? "bg-gray-400"}`}
                >
                  {categoryNames[activity.category] ?? "Categoría Desconocida"}
                </span>
  
                <p className="text-2xl sm:text-3xl font-bold text-slate-800">{activity.name}</p>
  
                <p className="text-lg sm:text-xl font-medium text-lime-600">
                  Calorías: {activity.calories}
                </p>
              </div>
  
              <div className="hidden sm:block">
                {/* Aquí puedes añadir un botón, ícono o acción futura */}
              </div>
            </div>
          ))
        )}
      </div>
    );
  };
  