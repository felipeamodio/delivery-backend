import { Document } from 'mongoose';

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Point {
  address: string;
  coordinates: Coordinates;
}

export interface IDelivery {
  clientName: string;
  deliveryDate: Date;
  startPoint: Point;
  endPoint: Point;
  createdAt?: Date;
}

export interface DeliveryDocument extends IDelivery, Document {}