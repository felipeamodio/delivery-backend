export const config = {
    port: process.env.PORT || 5001,
    mongoUri: process.env.MONGO_URI || 'mongodb://localhost:27017/delivery-system',
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY || ''
  };