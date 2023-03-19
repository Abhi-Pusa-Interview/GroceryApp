import {useState} from "react";


export default function useSearchQuery(){
    const [searchQuery, setSearchQuery] = useState("");
    
    const updateSearchQuery = (query:string) => {
        setSearchQuery(query);
    }

    return {searchQuery,updateSearchQuery};
}