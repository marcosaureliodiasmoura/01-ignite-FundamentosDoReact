import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";

import '../../styles/repositories.scss';

interface Repository{ //Tipagem para Estado e não para Função
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]); //Repository[] armazenando uma lista

  useEffect(() => {
    fetch('http://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, []);

  console.log(repositories);

  return (
    <section className="repository-list">
      <h1>lista de repositorios</h1>

      <ul>
        {repositories.map(repository => {
          return <RepositoryItem key={repository.name} repository={repository} />
        })}



      </ul>
    </section>
  );
}