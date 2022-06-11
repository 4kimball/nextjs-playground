interface LoginInfo {
  username: string;
  password: string;
}

interface SignupInfo extends LoginInfo {
  passwordConfirmation: string;
  sns_id: string;
  sns_type: string;
}
