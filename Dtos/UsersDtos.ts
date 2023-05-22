//////////////////////// RESULT DATA DTO /////////////////////

export type ResultUserLoginDto = {
    data: {
        _id: number,
        username: string,
        fullname: string,
        phone: number,
        countrycode: number,
        country: string,
        email: string,
        createdAt: Date,
        modifiedAt: Date,
        status: number,
    },
    authtoken: string
}

export type ResultUserListDto = {
    data: ResultUserDto,
    skip: number,
    limit: number,
    sort: string,
    column: string,
    keyword: string
}

export type ResultUserDto = {
    _id: number,
    username: string,
    fullname: string,
    phone: number,
    countrycode: number,
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
    username: string,
    fullname: string,
    phone: number,
    countrycode: number,
    country: string,
    email: string,
    password: string
}