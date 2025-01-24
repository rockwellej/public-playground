import { defineFunction } from "@aws-amplify/backend";
    
export const hack = defineFunction({
  name: "hack",
  entry: "./handler.ts"
});