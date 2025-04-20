import Form from "./components/Form"
import { useReducer } from 'react';
import { activityReducer, initialState } from "./reducers/activity-reducer";
import { ActivityList } from "./components/ActivityList";

function App() {

  const [state, dispatch] = useReducer(activityReducer,initialState);

  return (
    <>
      <header className="bg-lime-500 py-3">
        <div className="max-w-3xl mx-auto flex justify-between">
          <h1 className="text-4xl font-bold text-center text-white uppercase">Contador de Calorias</h1>

        </div>

      </header>


      <section className="bg-lime-400  py-4 md:py-20 px-5">
        <div className="max-w-3xl mx-auto">
          <Form
            dispatch={dispatch}
            state = {state ?? initialState}
          />
        </div>

      </section>

      <section className="max-w-3xl mx-auto p-10">
      <ActivityList
        activities={state?.activities ?? []}
        dispatch = {dispatch}
      />

      </section>


    </>
  )
}

export default App
