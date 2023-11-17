import { supabase } from "../supabaseConfig";

type Sticky = {
  id: number;
  title: string;
  content: string;
};

export const createSticky = async (sticky: Sticky) => {
  const { error } = await supabase.from("sticky").insert({ sticky });

  if (error) {
    return error?.message;
  }
};
