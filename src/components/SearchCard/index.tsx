import { Link } from "react-router-dom";
import Button from "../Button";
import "./style.css"

export default function SearchCard() {
  return (
    <section className="card">
      <div>
        <p className="infoSearch">Encontre um perfil Github</p>
      </div>
      <div>
      <input
            name="userGithub"
            type="text"
            placeholder="Usuário Github"
          />
      </div>
      <div className="dflex">
        <Link to="/search-profile">
          <Button text="Encontrar" />
        </Link>
      </div>
    </section>
  );
}
