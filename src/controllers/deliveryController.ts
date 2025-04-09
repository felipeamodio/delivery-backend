import { Request, Response } from 'express';
import Delivery from '../models/Delivery';
import { IDelivery } from '../interfaces/Delivery';

export const getAllDeliveries = async (req: Request, res: Response): Promise<void> => {
  try {
    const deliveries = await Delivery.find().sort({ deliveryDate: 1 });
    res.status(200).json(deliveries);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar entregas', error });
  }
};

export const getDeliveryById = async (req: Request, res: Response): Promise<void> => {
  try {
    const delivery = await Delivery.findById(req.params.id);
    if (!delivery) {
      res.status(404).json({ message: 'Entrega não encontrada' });
      return;
    }
    res.status(200).json(delivery);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar entrega', error });
  }
};

export const createDelivery = async (req: Request, res: Response): Promise<void> => {
  try {
    const deliveryData: IDelivery = req.body;
    const newDelivery = new Delivery(deliveryData);
    const savedDelivery = await newDelivery.save();
    res.status(201).json(savedDelivery);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criar', error });
  }
};

export const updateDelivery = async (req: Request, res: Response): Promise<void> => {
  try {
    const deliveryData: Partial<IDelivery> = req.body;
    const updatedDelivery = await Delivery.findByIdAndUpdate(
      req.params.id,
      deliveryData,
      { new: true }
    );
    
    if (!updatedDelivery) {
      res.status(404).json({ message: 'Entrega não encontrada' });
      return;
    }
    
    res.status(200).json(updatedDelivery);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao atualizar entrega', error });
  }
};

export const deleteDelivery = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedDelivery = await Delivery.findByIdAndDelete(req.params.id);
    
    if (!deletedDelivery) {
      res.status(404).json({ message: 'Entrega não encontrada' });
      return;
    }
    
    res.status(200).json({ message: 'Entrega removida' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao remover', error });
  }
};