interface RepositoryItemProps { //Isso aqui é uma tipagem para função
  repository: {  //O que eu quero receber dentro da propriedade props?
    name: string;
    description: string;
    html_url: string;
    // repository?: //Colocar a propriedade como não obrigátoria, use ?
  }
}

export function RepositoryItem(props: RepositoryItemProps){
  return(
    <li>
    {/* <strong>{props.repository?.name ?? 'Default '}</strong> */}
    <strong>{props.repository.name}</strong>
    <p>{props.repository.description}</p>

    <a href={props.repository.html_url}>
      Acessar repositório
    </a>
  </li>
  );
}