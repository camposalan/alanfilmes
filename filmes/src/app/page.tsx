
import { getMovies } from "./actions/getMovies";
import Card from "./components/card";
import NavBar from "./components/navbar";
import Title from "./components/title";


export default async function Home() {

  const filmes: Array<Filme> = await getMovies()
   
  return (
    <main className="flex min-h-screen flex-col ">
      <NavBar/>
      <Title>Filmes em Alta</Title>
      <section className="flex flex-wrap gap-6 m-4">
        { filmes.map( filme => <Card key={filme.id} filme={filme} />)}
      
      </section>
    
      <Title>Séries em Alta</Title>
      <Title>Lançamentos</Title>
      
      
    </main>
  );
}
