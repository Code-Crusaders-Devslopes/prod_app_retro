import { supabase } from '../supabaseConfig';

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

export const createTask = async (task: Task) => {
  const { error } = await supabase.from('tasks').insert(task);

  if (error) {
    return error?.message;
  }
};
