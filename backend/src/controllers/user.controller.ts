import { Request, Response } from "express";
import { Connection, Client } from "@temporalio/client";

const handleUserEdit = async (req: Request, res: Response) => {
  try {
    const userData = req.body;

    if (!userData?.email) {
      return res.status(400).json({ error: "User email is required" });
    }

    // Step 1: Connect to Temporal
    const connection = await Connection.connect();
    const client = new Client({ connection });

    // Step 2: Start workflow
    const handle = await client.workflow.start("saveUserDataWorkflow", {
      taskQueue: "user-profile-task-queue",
      workflowId: `user-${userData.email}-${Date.now()}`,
      args: [userData],
    });

    // Step 3: Respond back
    return res.status(200).json({
      message: "User update workflow started successfully",
      workflowId: handle.workflowId,
    });
  } catch (error) {
    console.error("Error in handleUserEdit:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export { handleUserEdit };
