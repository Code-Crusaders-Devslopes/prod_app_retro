import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  import.meta.env.VITE_SUPA_URL as string,
  import.meta.env.VITE_SUPA_KEY as string
);
