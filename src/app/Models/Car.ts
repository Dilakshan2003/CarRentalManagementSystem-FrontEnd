export interface Car {
    id: number;
    make: string;
    model: string;
    year: number;
    pricePerDay: number;
    color: string;
    isAvailable: boolean;
    imageFilePath?: string;
  }