import { Link } from "react-router-dom";
import Button from "../Button";
import "./style.css";
import { useEffect, useState } from "react";
import { ProfileDTO } from "../../models/profile";
import ResponseCard from "../ResponseCard";
import { BASE_URL } from "../../utils/system";
import axios from "axios";

type FormData = {
  username: string;
};

export default function SearchCard() {
  
  const [profile, setProfile] = useState<ProfileDTO>({
    avatar: "",
    followers: 0,
    locality: "",
    name: "",
    url: "",
  });

  const [formData, setFormData] = useState<FormData>({
    username: "",
  });

  const [conditions, setConditions] = useState({
    showResponse: false,
    noContent: false,
  });

  const [click, setClick] = useState(0);

  function handleUsernameChange(event: any) {
    setFormData({ ...formData, username: event.target.value });
  }

  function handleFormSubmit(event: any) {
    event.preventDefault();
    setClick(click + 1);
    formData.username === ""
      ? setConditions({ ...conditions, showResponse: false })
      : setConditions({ ...conditions, showResponse: true });
  }

  useEffect(() => {
    if (formData.username != "")
      axios
        .get(BASE_URL + formData.username)
        .then((response) => {
          console.log(response.data);
          setConditions({ ...conditions, noContent: false });
          setProfile({
            avatar: response.data.avatar_url,
            followers: Number(response.data.followers),
            locality: response.data.locality,
            name: response.data.name,
            url: response.data.url,
          });
        })
        .catch(() => setConditions({ ...conditions, noContent: true }));
  }, [click]);


  return (
    <>
      <section className="card">
        <div>
          <p className="infoSearch">Encontre um perfil Github</p>
        </div>
        <form onSubmit={handleFormSubmit}>
          <div>
            <input
              name="userGithub"
              value={formData.username}
              type="text"
              placeholder="Usuário Github"
              onChange={handleUsernameChange}
            />
          </div>
          <div className="dflex">
            <Button text="Encontrar" />
          </div>
        </form>
      </section>
      <section className="card-error">
      {
        !conditions.showResponse
        ? (<></>)
        : conditions.noContent
        ? (<h2>Erro ao buscar usuário</h2>)
        : (<ResponseCard profile={profile} />)
      }
      </section>
    </>
  );
}
