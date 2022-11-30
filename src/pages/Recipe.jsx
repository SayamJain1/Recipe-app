import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Recipe() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="flex items-center justify-center gap-5 flex-wrap">
      {data && (
        <div className="w-[1000px] min-h-[280px] bg-slate-100 p-8">
          <h1 className="font-medium text-xl mb-2">{data.title}</h1>
          <p className="text-gray-700 font-medium mb-5">
            {data.cookingTime} to cook
          </p>
          <p className="mb-8 text-gray-700 font-medium ">
            Ingredients:{" "}
            {data.ingredients &&
              data.ingredients.map((ing) => <span key={ing}>{ing}, </span>)}
          </p>
          <p className="mb-8">{data.method}</p>
        </div>
      )}
    </div>
  );
}

export default Recipe;
