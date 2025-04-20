import { useMemo } from "react";
import { Activity } from "../types";
import { CaloriesDisplay } from "./CaloriesDisplay";

type CalorieTrackerProps = {
    activities: Activity[];
};


export const CalorieTracker = ({activities}:CalorieTrackerProps) => {

    //* Contadores
    const caloriesConsumed = useMemo(() => {
        return activities.reduce((acc, activity) => activity.category === 1 
        ? acc + activity.calories 
        : acc, 0);
    }
    , [activities]);

    const caloriesBurned = useMemo(() => {
        return activities.reduce((acc, activity) => activity.category === 2 
        ? acc + activity.calories 
        : acc, 0);
    }
    , [activities]);

    //* Calorias Totales
    const totalCalories = useMemo(() => {
        return caloriesConsumed - caloriesBurned;
    }, [caloriesConsumed, caloriesBurned]);


  return (
    <>
        <h2 className="text-4xl font-black text-white text-center">Resumen de Calorias</h2>

        <div className="flex flex-col items-center md:flex-row md:justify-between gap-4 mt-6 mb-10">

            <CaloriesDisplay
                calories={caloriesConsumed}
                texto="Consumidas"
            />

            <CaloriesDisplay
                calories={totalCalories}
                texto="Totales"
            />

<CaloriesDisplay
                calories={caloriesBurned}
                texto="Gastadas"
            />

            
        </div>

    
    </>
  )
}
