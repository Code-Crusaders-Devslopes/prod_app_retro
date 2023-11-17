import { supabase } from '../supabaseConfig';

export const getTasks = async () => {
  const { data, error } = await supabase.from('tasks').select('*');

  if (data) {
    return data;
  }

  return error.message;
};
