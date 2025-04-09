import { Router } from 'express';
import * as deliveryController from '../controllers/deliveryController';

const router = Router();

router.get('/deliveries', deliveryController.getAllDeliveries);
router.get('/deliveries/:id', deliveryController.getDeliveryById);
router.post('/deliveries', deliveryController.createDelivery);
router.put('/deliveries/:id', deliveryController.updateDelivery);
router.delete('/deliveries/:id', deliveryController.deleteDelivery);

export default router;