import { supabase } from '../supabaseConfig';

export const getStickies = async () => {
  const { data, error } = await supabase.from('stickies').select('*');

  // console.log(data);

  if (data) {
    return data;
  }

  return error.message;
};
