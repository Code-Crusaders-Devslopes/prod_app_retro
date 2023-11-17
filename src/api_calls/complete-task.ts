import { supabase } from '../supabaseConfig';

export const completeTask = async (id: string) => {
  const { data, error } = await supabase
    .from('tasks')
    .update({ completed: true })
    .eq('id', id);

  if (data) {
    return data;
  }

  return error?.message;
};
