import mongoose, { Schema } from 'mongoose';
import { DeliveryDocument } from '../interfaces/Delivery';

const coordinatesSchema = new Schema({
  lat: { type: Number, required: true },
  lng: { type: Number, required: true }
});

const pointSchema = new Schema({
  address: { type: String, required: true },
  coordinates: { type: coordinatesSchema, required: true }
});

const deliverySchema = new Schema({
  clientName: {
    type: String,
    required: true
  },
  deliveryDate: {
    type: Date,
    required: true
  },
  startPoint: {
    type: pointSchema,
    required: true
  },
  endPoint: {
    type: pointSchema,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model<DeliveryDocument>('Delivery', deliverySchema);