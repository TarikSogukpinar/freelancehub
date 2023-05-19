import { Router } from "express";
import profileController from "../../controllers/profile/profileController.js";
import { verifyToken } from "../../middleware/verifyTokens/verifyTokens.js";

const router = Router();

router.put(
  "/updateContactInformation",
  verifyToken,
  profileController.updateContactInformation
);

export default router;
