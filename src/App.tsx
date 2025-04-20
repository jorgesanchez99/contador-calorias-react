import Form from "./components/Form"
import { useEffect, useMemo, useReducer } from 'react';
import { activityReducer, initialState } from "./reducers/activity-reducer";
import { ActivityList } from "./components/ActivityList";
import { RotateCcw } from "lucide-react";
import { CalorieTracker } from "./components/CalorieTracker";

function App() {

  const [state, dispatch] = useReducer(activityReducer, initialState);

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(state.activities));
  }, [state.activities])

  const canRestartApp = useMemo(() => state.activities.length > 0, [state.activities]);


  return (
    <>
      <header className="bg-lime-500 py-3">
        <div className="max-w-3xl mx-auto flex justify-between items-center px-5">
          <h1 className="text-xl md:text-4xl font-bold text-white uppercase w-full text-center sm:text-left">
            Contador de Calorías
          </h1>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-300 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => dispatch({ type: "restart-app" })}
            disabled={!canRestartApp}
            title="Reiniciar aplicación"
            aria-label="Reiniciar aplicación"
          >
            Restart
            <RotateCcw size={18} />
          </button>
        </div>
      </header>

      <main className="bg-lime-100 py-6 md:py-10 px-5">
        <div className="max-w-3xl mx-auto">
          <Form dispatch={dispatch} state={state ?? initialState} />
        </div>
      </main>


      <section className="bg-gray-800 py-10">
        <div className="max-w-3xl mx-auto">
          <CalorieTracker
          activities={state?.activities ?? []}
           />
        </div>
      </section>

      <section className="max-w-3xl mx-auto p-10">
        <ActivityList
          activities={state?.activities ?? []}
          dispatch={dispatch}
        />
      </section>



    </>
  )
}

export default App
