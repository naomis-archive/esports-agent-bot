import { logHandler } from "../helpers/logHandler";
import { startServer } from "../helpers/server";

export const onReady = async (): Promise<void> => {
  await startServer();
  logHandler.log("debug", "Bot is online!");
};
