export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegistrationCredentials extends LoginCredentials {
  firstName: string;
  lastName: string;
  confirmPassword?: string;
  createdAt: string;
}
