# Backend (_Laravel_)

Dentro de la estuctura dada al momento de crear un projecto de Laravel, se añadieron las clases _Calendar_ (y su respectiva Migrate Class), _CalendarController_, _AuthController_

Ademas, se definieron las siguiente rutas para la api

> `POST` v1/auth/login  
> `POST` 1/auth/register    
> `GET` v1/calendars    
> `POST` v1/calendars   
> `PUT` v1/calendars/{id}   
> `DELETE` v1/calendars/{id}    
> `POST` v1/logout  

En cuanto al acceso, se implemento el paquete
>`Fruitcake`

Para los modelos usados en la clases _migrate_:
### Calendar
Se espeficaron los atributos
1. id
3. user_id
2. title
3. date_start
4. date_end

### User
Se utilizo la clase autogenerada y su _migrate_, solo se elimino el atributo `name`