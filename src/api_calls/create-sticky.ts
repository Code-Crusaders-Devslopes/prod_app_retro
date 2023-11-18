import { supabase } from '../supabaseConfig';

export type Sticky = {
  id?: number;
  title: string;
  note: string;
};

export const createSticky = async (title: string, note: string) => {
  const { error } = await supabase.from('stickies').insert({ title, note });

  if (error) {
    return error?.message;
  }
};
