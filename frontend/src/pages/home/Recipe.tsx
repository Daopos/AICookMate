import { Button, Form } from "react-bootstrap";

const Recipe = () => {
  return (
    <div className="mt-5 d-flex flex-column align-items-center">
      <Form className="w-75 d-flex">
        <Form.Control
          size="lg"
          type="text"
          placeholder="Ex. Avocado, Seaweed, Beef"
        />
        <Button className="w-25">Submit</Button>
      </Form>

      <div className="mt-3 w-75 bg-light rounded p-5">
        <div className="d-flex justify-content-between">
          <h1>Recipe:</h1>
          <Button>Saved</Button>
        </div>
        <hr className="mt-4" />
        <div></div>
      </div>
    </div>
  );
};
export default Recipe;
