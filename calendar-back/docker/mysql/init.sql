/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     24/2/2022 10:01:19                           */
/*==============================================================*/


drop table if exists EVENTDATA;

drop table if exists USER;

/*==============================================================*/
/* Table: EVENTDATA                                             */
/*==============================================================*/
create table EVENTDATA
(
   ID_EVENT             int not null auto_increment,
   EMAIL                char(64),
   TITLE                text,
   DATE_START           datetime,
   DATE_END             datetime,
   primary key (ID_EVENT)
);

/*==============================================================*/
/* Table: USER                                                  */
/*==============================================================*/
create table USER
(
   EMAIL                char(64) not null,
   PASSWORD             text not null,
   primary key (EMAIL)
);

alter table EVENTDATA add constraint FK_REFERENCE_1 foreign key (EMAIL)
      references USER (EMAIL) on delete restrict on update restrict;

