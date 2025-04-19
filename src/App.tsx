import Form from "./components/Form"

function App() {

  return (
    <>
      <header className="bg-lime-500 py-3">
        <div className="container mx-auto flex justify-between">
          <h1 className="text-4xl font-bold text-center text-white uppercase">Contador de Calorias</h1>

        </div>

      </header>


      <section className="bg-lime-400  py-4 md:py-20 px-5">
        <div className="max-w-3xl mx-auto">
          <Form />
        </div>

      </section>


    </>
  )
}

export default App
