const API = "https://api.themoviedb.org/3"

export function get(path){
    return fetch(API + path, {
        headers:{
          Authorization: 
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzkwYjg2NTVmMDAyNDQ2NDkxNGI3YjRlZGM3ZGU5YiIsInN1YiI6IjYxYmZkYjliZjI4ODM4MDA0MjRhODIxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b7faY0rW6SPMCstwyiPjJeju8YwozFYdUO1pYkdmowU",
          "Content-Type": "application/json;charset=utf-8",
        },
      })
      .then((result)=> result.json())
}