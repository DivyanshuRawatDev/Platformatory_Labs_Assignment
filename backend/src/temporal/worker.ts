import { Worker } from "@temporalio/worker";

async function run() {
  console.log("Starting Temporal Worker");
  const worker = await Worker.create({
    workflowsPath: require.resolve("./workflows/saveUserDataWorkflow"),
    activities: require("./activities/crudCrudActivities"),
    taskQueue: "user-profile-task-queue",
  });

  // console.log("Worker created. Listening on task queue");
  await worker.run();
}

run().catch((err) => {
  console.error("Worker failed:", err);
  process.exit(1);
});
