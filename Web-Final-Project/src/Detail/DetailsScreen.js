// import {useParams, useSearchParams} from "react-router-dom";
// import {useState} from "react";
// import {useEffect} from "react";
//
// const DetailsScreen = ()=>{
//
//     const params = useParams();
//     const [movieDetails, setMovieDetails] = useState({Actors:''});
//     const findMovieDetailsByImdbID = ()=>
//         fetch(`https://www.omdbapi.com/?i=${params.id}&apikey=73e6a391`)
//             .then(res=>res.json()).then(movie => setMovieDetails(movie));
//
//     useEffect(findMovieDetailsByImdbID,[]);
//     return(
//     <div>
//         <h1>
//             Details
//         </h1>
//         <h2>
//             {movieDetails.Title} ({movieDetails.Year}) {movieDetails.Rated}
//             <br/>
//             Directed by : {movieDetails.Director}
//             <br/>
//             <img src={movieDetails.Poster} height = {100}/>
//             <br/>
//             <p>
//                 {movieDetails.Plot}
//             </p>
//             <h3>
//                 Cast
//             </h3>
//             <ul>
//                 {
//                     movieDetails.Actors.split(',').map(actor =>
//                         <li key = {actor}>
//
//                             {actor}
//
//                         </li>
//                     )
//                 }
//             </ul>
//         </h2>
//         {JSON.stringify(movieDetails)}
//     </div>
//     );
// };
//
// export default DetailsScreen