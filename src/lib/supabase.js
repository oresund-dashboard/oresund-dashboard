import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hnnecnxeyuyngddeqxkl.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhubmVjbnhleXV5bmdkZGVxeGtsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE1NTg5NDIsImV4cCI6MjA3NzEzNDk0Mn0.OyzEcSzjwM_A3r8SqX6ZxU9AHKI6EgSMiU934UgAOmg'
export const supabase = createClient(supabaseUrl, supabaseKey)
