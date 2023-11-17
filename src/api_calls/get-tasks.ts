import { supabase } from '../supabaseConfig';

export const getTasks = async () => {
  const { data, error } = await supabase.from('tasks').select('*');

  console.log(data);

  if (data) {
    return data;
  }

  return error.message;
};
