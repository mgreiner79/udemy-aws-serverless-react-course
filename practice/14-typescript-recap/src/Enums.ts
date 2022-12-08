enum AuthError {
    WRONG_CREDENTIALS,
    SERVER_FAIL,
    EXPIRED_SESSION
}

console.log(AuthError[AuthError.WRONG_CREDENTIALS])

enum AuthError2 {
    WRONG_CREDENTIALS = 'wrong credentials',
    SERVER_FAIL = 'server fail',
    EXPIRED_SESSION = 'expired session'
}

function handleError( error: AuthError) {
    switch (error) {
        case AuthError.EXPIRED_SESSION:
            console.log('Get a new session.')
            break;

        case AuthError.SERVER_FAIL:
            console.log('Maybe the server is down.')
            break

        case AuthError.WRONG_CREDENTIALS:
            console.log('Check your input!')
            break
    
        default:
            break;
    }
}


handleError(AuthError.SERVER_FAIL)