import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lgjvpwqmmxaajorqrhcf.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxnanZwd3FtbXhhYWpvcnFyaGNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMyNTkzNjcsImV4cCI6MjA1ODgzNTM2N30.N-lXLtduf1vlnsB2MuhZdvsHDMXPpdyIajc4Y7AYps4';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
