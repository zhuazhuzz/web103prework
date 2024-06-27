import { createClient } from '@supabase/supabase-js';

//dbpswd33McsUlw4ax37Ogt
let URL = "https://qhxhjomywrxqjoucvpqv.supabase.co"
let API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFoeGhqb215d3J4cWpvdWN2cHF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg1NTU5MDQsImV4cCI6MjAzNDEzMTkwNH0.dx9wkIhp9ah8qVKWiLShhzOiF5RvCkM3DtWv8BNHfpI"

const supabase = createClient(URL, API_KEY);
export default supabase;