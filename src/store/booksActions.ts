import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBooks=createAsyncThunk("getBooks",async ()=>{
    try{
        const {data}=await axios.get("https://02cba96b-fccc-439b-b154-4e4d6f6decb2.mock.pstmn.io/getBooks")
        return data
    }catch(err){
        console.log(err);
    }
})