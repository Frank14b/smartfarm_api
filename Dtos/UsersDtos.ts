//////////////////////// RESULT DATA DTO /////////////////////

export type ResultUserLoginDto = {
    userName: String,
    fullName: String,
    phone: Number,
    countryCode: Number,
    country: String,
    email: String,
    createdAt: Date,
    modifiedAt: Date,
    status: Number,
    token: String,
}

export type ResultUserListDto ={
    data: ResultUserDto,
    skip: Number,
    limit: Number,
    sort: String,
    column: String,
    keyword: String
}

export type ResultUserDto = {
    userName: String,
    fullName: String,
    phone: Number,
    countryCode: Number,
    country: String,
    email: String,
    createdAt: Date,
    modifiedAt: Date,
    status: Number,
    token: String,
}

//////////////////////// POST DATA DTO /////////////////////

export type UserLoginDto = {
    email: String,
    password: String,
}