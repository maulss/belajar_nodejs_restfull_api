
import { logger } from "./application/logger.js";
import { web } from "./application/web.js";

web.listen(300, () => {
    logger.info("Server running on port 300");
})