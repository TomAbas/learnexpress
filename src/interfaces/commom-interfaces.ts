export interface queryObj {
  featured?: boolean;
  rating?: number;
  createAt?: Date;
  price?: Object;
  name?: Object;
  company?: String;
}

export interface decoded {
  id: string | number;
  username: string;
  expiresIn: string;
  issuer: string;
}
