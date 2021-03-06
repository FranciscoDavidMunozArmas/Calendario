import { PASSWORD_LENGTH } from "./utils";

export const HINT_EMAIL = "Escriba su correo electrónico";
export const HINT_PASSWORD = "Escriba su contraseña";
export const HINT_PASSWORD_CONFIRM = "Confirme su contraseña";
export const HINT_TITLE = "Titulo del Evento";
export const HINT_START_DATE = "Fecha de Inicio";
export const HINT_END_DATE = "Fecha de Fin";

export const BUTTON_LOGIN = "Iniciar sesión";
export const BUTTON_SIGNUP = "Registrarse";
export const BUTTON_LOGOUT = "Cerrar sesión";
export const BUTTON_SAVE = "Guardar";
export const BUTTON_DELETE = "Eliminar";

export const TITLE_EVENT_FORM = "Formulario de Evento";
export const TITLE_WELCOME = "Bienvenido";

export const SUCCESS_EVENT_SAVED = "El evento se ha guardado correctamente";
export const SUCCESS_EVENT_DELETED = "El evento se ha eliminado correctamente";
export const ERROR_EVENT_MODIFYING = "Ha ocurrido un error al modificar el evento";

export const ERROR_MESSAGE = "Ha ocurrido un error";
export const ERROR_EMAIL_REQUIRED = "El correo electrónico es requerido";
export const ERROR_EMAIL_INVALID = "El usuario no existe";
export const ERROR_EMAIL_OCCUPIED = "El correo electrónico ya está en uso";
export const ERROR_PASSWORD_REQUIRED = "La contraseña es requerida";
export const ERROR_PASSWORD_CONFIRM = "Las contraseñas no coinciden";
export const ERROR_PASSWORD_LENGTH = `La contraseña debe tener al menos ${PASSWORD_LENGTH} caracteres`;
export const ERROR_CREDENTIALS_INVALID = "Las credenciales no coinciden";
export const ERROR_SENDING_DATA = "Ha ocurrido un error al enviar los datos";
export const ERROR_GETTING_DATA = "Ha ocurrido un error al obtener los datos";
export const ERROR_DELETING_DATA = "Ha ocurrido un error al eliminar los datos";
export const ERROR_MODIFYING_DATA = "Ha ocurrido un error al modificar los datos";

export const ERROR_DATE = "La fecha debe ser posterior a la fecha actual";
export const ERROR_TITLE_REQUIRED = "El titulo es requerido";