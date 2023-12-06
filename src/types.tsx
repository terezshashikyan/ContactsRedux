export interface IContact {
  id: number;
  name: string;
  username?: string;
  image?: string;
  email?: { id: number; value: string }[] | [];
  address?: {
    street?: string;
    suite?: string;
    city?: string;
    zipcode?: string;
    geo?: {
      lat?: number;
      lng?: number;
    };
  };
  phone?: { id: number; value: string }[] | [];
  website?: string;
  company?: {
    name?: string;
    catchPhrase?: string;
    bs?: string;
  };
}
