import { supabase } from '../supabaseConfig';

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

export const createTask = async (task: Task) => {
  const { data, error } = await supabase.from('tasks').insert(task);

  if (data) {
    return data;
  }

  return error?.message;
};
