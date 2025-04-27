
import { supabase } from "@/integrations/supabase/client";

export const analyzeWithOpenAI = async (text: string): Promise<string> => {
  try {
    const { data, error } = await supabase.functions.invoke('analyze-cv', {
      body: JSON.stringify({ text }),
    });

    if (error) throw error;

    return data.analysis;
  } catch (error) {
    console.error('CV Analysis Error:', error);
    throw new Error('Failed to analyze CV');
  }
};
