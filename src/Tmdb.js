// eslint-disable-next-line no-unused-vars
const API_KEY = '3411138559484d1382c821fa9f8d5cba';

// eslint-disable-next-line no-unused-vars
const API_BASE = 'https://api.themoviedb.org/3';


/*
- Originais da Netiflix
- Recomendados
- em Alta
- Ação
- comédia
- Terror
- Romance
- Documentário
*/


const basicFetch = async (endpoint) => {
   const req = await fetch( `${API_BASE}${endpoint}` );
   const json = await req.json();
   return json;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default{
   getHomeList: async () =>{
      return [
         {
            slug: 'originais',
            title: 'originais do Netflix',
            items: await basicFetch(`/discover/tv?with_network=213&languange=pt-BR&api_key=${API_KEY}`)
         },
         {
            slug: 'trending',
            title: 'Recomendados',
            items: await basicFetch(`/trending/all/week?languange=pt-BR&api_key=${API_KEY}`)
         },
         {
            slug: 'toprated',
            title: 'Em Alta',
            items: await basicFetch(`/movie/top_rated?languange=pt-BR&api_key=${API_KEY}`)
         },
         {
            slug:'action',
            title: 'Ação',
            items: await basicFetch(`/discover/movie?with_genres=28&languange=pt-BR&api_key=${API_KEY}`)
         },
         {
            slug: 'comed',
            title: 'Comedia',
            items: await basicFetch(`/discover/movie?with_genres=35&languange=pt-BR&api_key=${API_KEY}`)
         },
         {
            slug: 'horror',
            title: 'Terror',
            items: await basicFetch(`/discover/movie?with_genres=27&languange=pt-BR&api_key=${API_KEY}`)
         },
         {
            slug: 'romance',
            title: 'Romance',
            items: await basicFetch(`/discover/movie?with_genres=10749&languange=pt-BR&api_key=${API_KEY}`)
         },
         {
            slug: 'documentario',
            title: 'Documentário',
            items: await basicFetch(`/discover/movie?with_genres=99&languange=pt-BR&api_key=${API_KEY}`)
         },
      ]
   }
}