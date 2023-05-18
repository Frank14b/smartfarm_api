//////////////////////// RESULT DATA DTO /////////////////////

export type ResultUserLoginDto = {
    _id: number,
    userName: string,
    fullName: string,
    phone: number,
    countryCode: number,
    country: string,
    email: string,
    createdAt: Date,
    modifiedAt: Date,
    status: number,
    token: string,
}

export type ResultUserListDto ={
    data: ResultUserDto,
    skip: number,
    limit: number,
    sort: string,
    column: string,
    keyword: string
}

export type ResultUserDto = {
    _id: number,
    userName: string,
    fullName: string,
    phone: number,
    countryCode: number,
    country: string,
    email: string,
    createdAt: Date,
    modifiedAt: Date,
    status: number,
    token: string,
}

//////////////////////// POST DATA DTO /////////////////////

export type UserLoginDto = {
    email: string,
    password: string,
}

export type UserRegisterDto = {
    email: string,
    password: string,
}