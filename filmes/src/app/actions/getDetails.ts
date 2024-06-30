"use server"

import { headers } from "next/headers";

export async  function getDetails(id: number){

    const options = {
        method: 'GET', 
        headers: {
            accept:  'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZGQ1ODc5NjFjOTk5YzY5YmYyMDViNDgwMjBiYWRmMyIsIm5iZiI6MTcxOTcwNjMwOS4yOTg0LCJzdWIiOiI2M2M2MDAzM2EwZjFhMjAwOGFiZjkwYjYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.K-GEZwCrvkpNo0B3Q-h0aj5J0JEGzhucp3RNakf_3rM'

        }
    };



    const resp = await fetch('https://api.themoviedb.org/3/movie/'+id+'?language=pt-BR', options)
    const json = await resp.json()
    return json
      
}