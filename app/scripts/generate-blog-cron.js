import cron from "node-cron";
import { generatePost } from "~/functions/generatePost";

let jobScheduled = false;

if (!jobScheduled) {
  cron.schedule("0 9,18 * * *", () => {
    console.log("---Generating blog---", new Date());
    generatePost();
  });

  jobScheduled = true;
}
