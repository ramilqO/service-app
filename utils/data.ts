interface IMovement {
  date: string;
  data: {
    id: number;
    time: string;
    distance: string;
  }[];
}

interface IEmployer {
  id: number;
  name: string;
  profession: string;
  phone: string;
  movements: IMovement[];
}

export const data: IEmployer[] = [
  {
    id: 1,
    name: "Иванов И.И",
    profession: "Слесарь",
    phone: "+790811276541",
    movements: [
      {
        date: "14 октября",
        data: [
          { id: 1, time: "15:34 - 16:00", distance: "1,2 км" },
          { id: 2, time: "19:10 - 20:01", distance: "2,1 км" },
        ],
      },
      {
        date: "10 октября",
        data: [
          { id: 3, time: "15:34 - 16:00", distance: "1 км" },
          { id: 4, time: "19:10 - 20:01", distance: "1,6 км" },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Греченко И.И",
    profession: "Сантехник",
    phone: "+7908112764",
    movements: [
      {
        date: "10 октября",
        data: [
          { id: 5, time: "15:34 - 16:00", distance: "3 км" },
          { id: 6, time: "15:34 - 16:00", distance: "7,2 км" },
        ],
      },
      {
        date: "10 октября",
        data: [
          { id: 7, time: "15:34 - 16:00", distance: "12,8 км" },
          { id: 8, time: "15:34 - 16:00", distance: "1,1 км" },
        ],
      },
    ],
  },
];
