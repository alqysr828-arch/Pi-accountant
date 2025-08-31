import { Router } from "express";
import { approve, complete, status } from "../handlers/payments.js";
import { health } from "../handlers/health.js";

const router = Router();

router.get("/health", health);
router.post("/payments/approve", approve);
router.post("/payments/complete", complete);
router.get("/payments/status/:id", status);

export default router;
