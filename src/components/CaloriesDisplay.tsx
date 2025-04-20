

type CaloriesDisplayProps = {
    calories: number;
    texto : string;
}


export const CaloriesDisplay = ({calories,texto}:CaloriesDisplayProps) => {
  return (
    <p className="text-white font-bold rounded-full grid  grid-cols-1 gap-3 text-center"> 
                <span className="text-4xl">{calories}</span>
                <span className="text-2xl">{texto}</span>
    </p>

  )
}
