"use client"
import { useEffect, useState } from "react";
import Image from 'next/image';

const MealsSearch = () => {
    const [search, setSearch] = useState("b")
    const [meals, setMeals] = useState([])
    console.log(search)

    const loadData = async () => {
        try{
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
            const data = await res.json()
            setMeals(data.meals || []);

        }
        catch (error){
             console.log(error.message)
        }
    }
    
    useEffect (() => {
        loadData()
    }, [search])

    const handleSearch = (e) => {
      e.preventDefault()
      const searchValue = e.target.search.value.trim();
      console.log(searchValue)
        if (searchValue) {
            setSearch(searchValue);
        }
    }
    return (
        <div className="my-4">
        <form onSubmit={handleSearch} className=" flex justify-center items-start">
        <input type="text" 
        placeholder="Search here" 
        name='search'
        className="input input-bordered w-full max-w-xs" />
        <button className="btn" type="submit">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
            </button>
        </form>

        <div className="grid grid-cols-3 gap-6 py-24">
            {meals.map((meals, index) => <div className="border p-7 rounded-xl" key={index}>
                  <Image className="rounded-xl mb-3" width={500} height={300} src={meals.strMealThumb} alt='img'></Image>
                  <p className="text-xl font-bold mb-2">{meals.strMeal}</p>
                  <p className="text-gray-400 mb-3">{meals.strInstructions.slice(0, 100) + "...."}</p>
                </div>)}
        </div>
        
    </div>
    );
};

export default MealsSearch;