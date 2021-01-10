import makeProvider from "./Provider";
import makeAmplifyDataStoreDriver from "./drivers/amplifyDataStore";
import { User } from "@/models";

export default makeProvider(
  "User",
  makeAmplifyDataStoreDriver({
    model: User
  })
);
