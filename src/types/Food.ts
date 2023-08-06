export interface Food {
  name: string;
  fodmap: "low" | "high" | "medium";
  category: string;
  qty?: string;
  details?: {
    oligos: number;
    fructose: number;
    polyols: number;
    lactose: number;
  };
}
