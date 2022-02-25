import { LoginErrorCodes, SignupErrorCodes } from "./errorCodes";
import { ERROR_CREDENTIALS_INVALID, ERROR_EMAIL_INVALID, ERROR_EMAIL_OCCUPIED, ERROR_MESSAGE } from "./strings";
import { toastManager } from "./toastManager";

export const loginErrorHandler = (code: LoginErrorCodes) => {
    switch (code) {
        case LoginErrorCodes.ERROR_EMAIL:
            toastManager.error(ERROR_EMAIL_INVALID);
            break;
        case LoginErrorCodes.ERROR_CREDENTIALS:
            toastManager.error(ERROR_CREDENTIALS_INVALID);
            break;
        default:
            toastManager.error(ERROR_MESSAGE);
            break
    }
}

export const signupErrorHandler = (code: SignupErrorCodes) => {
    switch (code) {
        case SignupErrorCodes.ERROR_EMAIL:
            toastManager.error(ERROR_EMAIL_OCCUPIED);
            break;
        default:
            toastManager.error(ERROR_MESSAGE);
            break
    }
}