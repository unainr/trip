import { z } from "zod";

export const formSchema = z.object({
	country: z.string(),
  duration: z.string(),
  groupType: z.string(),
  travelStyle:z.string(),
  interests:z.string(),
  budget:z.string(),
  
  
});