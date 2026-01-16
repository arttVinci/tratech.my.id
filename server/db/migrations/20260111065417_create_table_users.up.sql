CREATE TABLE users
(
    id           varchar(100) not null,
    username     varchar(100) not null,
    password     varchar(100) not null,
    email        varchar(100) not null,
    no_telp      varchar(100) not null,
    created_at   bigint       not null,
    updated_at   bigint       not null,
    primary key  (id)
)