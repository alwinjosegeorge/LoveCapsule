import { createClient } from '@supabase/supabase-js';

// TODO: Replace with environment variables if available, but hardcoding for now as verified project
const supabaseUrl = 'https://qzaunxgfjogcwymdnacn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6YXVueGdmam9nY3d5bWRuYWNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc5NzY1NTUsImV4cCI6MjA4MzU1MjU1NX0.dg8KywFfRzfg5UtatiIVaTiwc-NDdJBNMAmhPSCp8IY';

export const supabase = createClient(supabaseUrl, supabaseKey);
