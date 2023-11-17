import { supabase } from "../supabaseConfig";

export const deleteSticky = async (id: number) => {
  const { data, error } = await supabase.from("sticky").delete().eq("id", id);
  if (data) {
    return data;
  }
  return error?.message;
};
