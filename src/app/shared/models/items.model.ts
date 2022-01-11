export interface Items {
  id: number;
  name: string;
  items: Item[];
}

interface Item {
  key: string;
  value: string | number;
}
