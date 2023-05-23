import { Link } from "react-router-dom";
import Button from "../../../components/Button";

export default function HomeBody() {
  return (
    <main>
      <section className="container">
        <div>
          <h1>Desafio Github API</h1>
        </div>
        <div>
          <h2>DevSuperior - Escola de programação</h2>
        </div>
        <div className="dflex">
          <Link to="/search-profile">
            <Button text="Começar" />
          </Link>
        </div>
      </section>
    </main>
  );
}
