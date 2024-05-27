'use server'

import { connectToDatabase } from "../mongoose"

export async function createQuestion(params:any){
    // eslint-disable-next-line no-empty
    try {
        // connect to database
        connectToDatabase()
    } 
    catch (error) {
        
    }
}