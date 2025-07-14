import { Link } from "react-router-dom";
import { useRecipe } from "../../hooks/useRecipes";
import { Button, Spinner } from "react-bootstrap";
import { Trash } from "lucide-react";

const Saved = () => {
  const { recipes, loading, deleteLoading, deleteRecipeById } = useRecipe();

  return (
    <div className="mt-5 d-flex flex-column align-items-center">
      {loading ? (
        <Spinner animation="border" variant="secondary" />
      ) : (
        recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="mt-3 w-75 bg-light rounded p-4 d-flex justify-content-between align-items-center"
          >
            <Link
              to={`/saved/${recipe.id}`}
              className="text-decoration-none text-dark"
            >
              <h3>{recipe.title}</h3>
            </Link>
            <Button
              variant="outline-danger"
              disabled={deleteLoading}
              onClick={() => deleteRecipeById(recipe.id)}
            >
              <Trash />
            </Button>
          </div>
        ))
      )}
    </div>
  );
};

export default Saved;
