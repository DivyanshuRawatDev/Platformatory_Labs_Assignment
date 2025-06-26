import { proxyActivities, sleep } from "@temporalio/workflow";
import type * as activities from "../activities/crudCrudActivities";

const { updateCrudCrud } = proxyActivities<typeof activities>({
  startToCloseTimeout: "30 seconds",
});

export async function saveUserDataWorkflow(user: any) {
  // console.log("Starting workflow for user:", user.email);

  await sleep(10000); 

  const result = await updateCrudCrud(user);

  // console.log("User updated via CrudCrud:", result);
  return result;
}
