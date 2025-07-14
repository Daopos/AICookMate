import { Link } from "react-router-dom";
import { useRecipe } from "../../hooks/useRecipes";

const Saved = () => {
  const { recipes, loading } = useRecipe();

  return (
    <div className="mt-5 d-flex flex-column align-items-center">
      {loading ? (
        <div>Hello</div>
      ) : recipes.length > 0 ? (
        <>
          {recipes.map((recipe) => (
            <Link
              to={`/saved/${recipe.id}`}
              key={recipe.id}
              className="mt-3 w-75 bg-light rounded p-4"
            >
              <h3>{recipe.title}</h3>
            </Link>
          ))}
        </>
      ) : (
        <div>No recipes found.</div>
      )}
    </div>
  );
};

export default Saved;
