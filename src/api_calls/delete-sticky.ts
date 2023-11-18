import { supabase } from "../supabaseConfig";

export const deleteSticky = async (id: number) => {
  const { error } = await supabase.from("stickies").delete().eq("id", id);

  return error?.message;
};
