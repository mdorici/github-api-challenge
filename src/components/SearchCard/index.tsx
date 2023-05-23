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
  

  function handleInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  }

  function handleFormSubmit(event: any) {
    event.preventDefault();
    
  }

  

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
              onChange={handleInputChange}
            />
          </div>
          <div className="dflex">
            <Button text="Encontrar" />
          </div>
        </form>
      </section>
      <section>
      
      </section>
    </>
  );
}
