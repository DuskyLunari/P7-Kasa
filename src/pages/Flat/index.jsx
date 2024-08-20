import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Caroussel } from "../../components/Caroussel";
import { Collapse } from "../../components/Collapse";
import { Tag } from "../../components/Tag";
import { Score } from "../../components/Score";
import { Layout } from "../../components/Layout";
import "./Flat.scss";

export function Logement() {
  const { logementId } = useParams();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    async function fetchLogements() {
      const res = await fetch("/logements.json");
      const datas = await res.json();

      const foundLogement = datas.find((log) => log.id === logementId);

      if (foundLogement) {
        setLogement(foundLogement);
      } else {
        console.error("Logement non trouvé");
      }
    }

    fetchLogements();
  }, [logementId]);

  if (!logement) return <p>Chargement en cours...</p>;

  return (
    <Layout>
      <main>
        <div className="flat-container">
          <Caroussel images={logement.pictures} />
          
          <div className="logement-additional-container">
            <div className="logement-info">
              <h1 className="logement-info__title">{logement.title}</h1>
              <p className="logement-info__location">{logement.location}</p>
              <div className="tags">
                {logement.tags.map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </div>
            </div>
            
            <div className="additional-info">
              <div className="host-info">
                <div className="host-name-container">
                  <p>{logement.host.name.split(' ')[0]}</p>
                  <p>{logement.host.name.split(' ')[1]}</p>
                </div>
                <img src={logement.host.picture} alt={logement.host.name} className="host-picture" />
              </div>
              <Score score={parseInt(logement.rating, 10)} />
            </div>
          </div>
          
          <div className="collapses-container">
            <Collapse title="Description" className="collapse">
              <p>{logement.description}</p>
            </Collapse>
            <Collapse title="Equipements" className="collapse">
              <ul>
                {logement.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            </Collapse>
          </div>
        </div>
      </main>
    </Layout>
  );  
}