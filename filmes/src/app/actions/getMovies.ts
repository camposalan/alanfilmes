"use server"

export async function getMovies(){

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZGQ1ODc5NjFjOTk5YzY5YmYyMDViNDgwMjBiYWRmMyIsIm5iZiI6MTcxOTUzNjYyNy44NjA0NzcsInN1YiI6IjYzYzYwMDMzYTBmMWEyMDA4YWJmOTBiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6jiCYmZpCPLorG06sS_vwBrrBcsmJWFTZIv2zCp0mr0'
        }
      };
      
      const resp = await fetch('https://api.themoviedb.org/3/trending/movie/week?language=pt-BR', options)

      if(resp.ok){
        const json  = await resp.json()
        return json.results

      }
        
}