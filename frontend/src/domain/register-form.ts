export interface RegisterForm {
  username: string,
  email: string,
  password: string,
  repeatedPassword: string,
  firstName: string,
  lastName: string,
  fav_language_slug?: string,
  about?: string
}