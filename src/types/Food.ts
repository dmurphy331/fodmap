export interface Food {
  id: string;
  name: string;
  fodmap: "low" | "high" | "medium" | "root" | "card";
  category: string;
  qty: string;
  details: {
    oligos: number;
    fructose: number;
    polyols: number;
    lactose: number;
  };
}
