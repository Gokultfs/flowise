export class CreateUserDto {
  name: string;
  email: string;
  password: string;
}

namespace CreateUserDto {
  export class CreateUserDto {
    name: string;
    email: string;
    password: string;
  }
}
export class UpdateUserDto {
  name?: string;
  email?: string;
  password?: string;
}

namespace UpdateUserDto {
  export class UpdateUserDto {
    name?: string;
    email?: string;
    password?: string;
  }
}