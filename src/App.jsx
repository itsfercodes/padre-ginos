import { createRoot } from "react-dom";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's - Order Now</h1>
      <Pizza
        name="Pepperoni"
        description="Pepperoni, cheese, n stuff"
        image={"/public/pizzas/pepperoni.webp"}
      />
      <Pizza
        name="Napolitana"
        description="Mozzarella n Tomato Sauce"
        image={"/public/pizzas/napolitana.webp"}
      />
      <Pizza
        name="Hawaiian"
        description="Ham n Pinapple 🤢"
        image={"/public/pizzas/hawaiian.webp"}
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
