import { supabase } from '../supabaseConfig';

export const deleteTask = async (id: number) => {
  const { data, error } = await supabase.from('tasks').delete().eq('id', id);
  if (data) {
    return data;
  }
  return error?.message;
};
