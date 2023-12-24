declare namespace IGeography {
  interface Province {
    id: number;
    name: string;
  }
  interface District extends Province {}
  interface Commune extends Province {}
}
