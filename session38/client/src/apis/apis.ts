// Nơi cấu hình api

import axios from "axios";
import type { Book } from "../utils/types";

export const API_GETALL_BOOK ="http://localhost:8080/books";


export const API_ADD_BOOK= async (new_book:Book)=>{
    const response = await axios.post("http://localhost:8080/books",new_book);
    return response.data;
}
