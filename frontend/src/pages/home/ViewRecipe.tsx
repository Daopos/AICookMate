import { useParams } from "react-router-dom";
import { useRecipeById } from "../../hooks/useRecipeById";

const ViewRecipe = () => {
  const { id } = useParams();
  const { recipe } = useRecipeById(id!);

  console.log(recipe);

  return (
    <div className="mt-5 d-flex flex-column align-items-center">
      <div className="mt-3 w-75 bg-light rounded p-5">
        <div className="d-flex justify-content-between">
          <h1>Recipe:</h1>
        </div>
        <hr className="mt-4" />
        <div>
          <pre style={{ wordBreak: "break-all", whiteSpace: "pre-wrap" }}>
            {recipe?.AIGenerated}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default ViewRecipe;
