import React from 'react'
import axios from "axios"
import "./App.css"
import SearchForm from './component/SearchForm'
import MovieList from './component/MovieList'
import Pagination from './component/Pagination'
import Spinner from './component/Spinner'
import { useState } from 'react'

const App = () => {


const[movies,setMovies] = useState([]);
const[query, setQuery] = useState("");
const[page, setPage] = useState(1);
const[totalPage, setTotalPage] = useState(1);
const[loading, setLoading] = useState(false)


const searchMovies = async (searchText,pageNum = 1)=>{
  setLoading(true)

  try{
    const {data} = await axios.get("http://localhost:5000/movies",{
      params:{
        query : searchText,
        page : pageNum
      }
    });
    console.log(data.results);
    

    setMovies(data.results || [])
    setTotalPage(data.total_pages || 0);
    setPage(pageNum);
    setQuery(searchText)
  }catch(erorr){
    console.log("Error fetching movies", erorr );
    setMovies([])
    
  }finally{
    setLoading(false)
  }

  
}




  return (
    <main>
      <SearchForm 
      searchMovies = {searchMovies}/>

      {loading ? (<Spinner/>):(

        <MovieList movies = {movies}/>
      )}
      {movies.length>0 && (
        <Pagination
        page = {page}
        totalPage = {totalPage}
        onprev = {()=> searchMovies(query,page-1)}
        onNext = {()=> searchMovies(query,page+1)}
        />
      )}
      
  
    </main>
  )
}

export default App

