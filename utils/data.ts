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
    name: "Иванов И.И.",
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
    name: "Греченко И.И.",
    profession: "Сантехник",
    phone: "+790811276542",
    movements: [
      {
        date: "10 октября",
        data: [
          { id: 5, time: "15:34 - 16:00", distance: "3 км" },
          { id: 6, time: "15:34 - 16:00", distance: "7,2 км" },
        ],
      },
      {
        date: "11 октября",
        data: [
          { id: 7, time: "15:34 - 16:00", distance: "12,8 км" },
          { id: 8, time: "15:34 - 16:00", distance: "1,1 км" },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Петров П.П.",
    profession: "Электрик",
    phone: "+790811276543",
    movements: [
      {
        date: "12 октября",
        data: [
          { id: 9, time: "10:00 - 11:00", distance: "5 км" },
          { id: 10, time: "14:00 - 15:00", distance: "3 км" },
        ],
      },
      {
        date: "13 октября",
        data: [
          { id: 11, time: "09:00 - 10:30", distance: "4 км" },
          { id: 12, time: "18:00 - 19:30", distance: "2 км" },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Сидоров С.С.",
    profession: "Курьер",
    phone: "+790811276544",
    movements: [
      {
        date: "14 октября",
        data: [
          { id: 13, time: "08:30 - 09:30", distance: "10 км" },
          { id: 14, time: "12:30 - 13:30", distance: "5 км" },
        ],
      },
      {
        date: "15 октября",
        data: [
          { id: 15, time: "11:00 - 12:00", distance: "7 км" },
          { id: 16, time: "14:30 - 15:30", distance: "8 км" },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Кузнецов К.К.",
    profession: "Механик",
    phone: "+790811276545",
    movements: [
      {
        date: "16 октября",
        data: [
          { id: 17, time: "09:00 -10:00", distance: "6 км" },
          { id: 18, time: "13:00 -14 :00", distance: "4 км" },
        ],
      },
      {
        date: "17 октября",
        data: [
          { id: 19, time: "11:30 -12:30", distance: "3 км" },
          { id: 20, time: "15:45 -16:45", distance: "5.5 км" },
        ],
      },
    ],
  },
];
