import { Router } from "express";
import { healthController } from "../controllers/health.controller";
import { verifyWebhook, receiveWebhook } from "../controllers/webhook.controller.js";

const router = Router();

router.get("/health", healthController);
router.get("/webhook", verifyWebhook);
router.post("/webhook", receiveWebhook);

export default router;
