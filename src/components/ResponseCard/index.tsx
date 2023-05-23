import { ProfileDTO } from "../../models/profile";
import "./style.css";

type Props = {
  profile: ProfileDTO;
};

export default function ResponseCard({ profile }: Props) {
  return (
    <section className="sub-card">
      <div sub-container>
        <img src={profile.avatar} />
      </div>
      <div className="sub-container">
        <div>
          <h3 className="title-info">Informações</h3>
        </div>
        <div className="mini-card">
          <span className="title-output">Perfil: </span>
          <span className="output">{profile.url}</span>
        </div>
        <div className="mini-card">
          <span className="title-output">Seguidores: </span>
          <span>{profile.followers}</span>
        </div>
        <div className="mini-card">
          <span className="title-output">Localidade: </span>
          <span>{profile.locality}</span>
        </div>
        <div className="mini-card">
          <span className="title-output">Nome: </span>
          <span>{profile.name}</span>
        </div>
      </div>
    </section>
  );
}
