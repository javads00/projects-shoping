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
