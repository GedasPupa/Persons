interface In_person {
  id: number;
  name: string;
  surname: string;
  phone: number;
  email: string;
  importance: number[];
  getAverageRating(): number;
}

export { In_person };
