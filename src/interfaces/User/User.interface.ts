export interface UserInterface {
  firstName?: string | null;
  lastName?: string | null;
  avatar?: string | null;
  nationalCode?: string | null;
  birthDate?: string | null;
  mobile?: string | null;
  address?: string | null;
  accessToken?: string | null;
  refreshToken?: string | null;
  updatedAt?: string | null;
}

export interface ProductShoping {
  product: Array<{
    id: string;
    name: string;
  }>;
}

export interface CreateProduct {
  id: string | null;
  name: string | null;
}

export interface TokenInterface {
  refreshToken?: string | null;
  accessToken?: string | null;
}

export interface FormLoginInterface {
  nationalCode: string;
  password: string;
}

export interface FormRegisterInterface extends FormLoginInterface {
  firstName: string;
  lastName: string;
}

export interface HeaderInterface {
  user: UserInterface;
}

export interface SliderItemInterface {
  createdAt: string;
  image: string;
  id: string;
  name: string;
}
