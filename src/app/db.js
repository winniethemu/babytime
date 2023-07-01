import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  'https://vyyqhbvrfoxzvsojbygl.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5eXFoYnZyZm94enZzb2pieWdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgxMzQyMTIsImV4cCI6MjAwMzcxMDIxMn0.UZampaMFkVe9h4lZPc7bVNO0jNf0CYq4XVLnJ6f0Ies'
);
