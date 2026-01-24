CREATE TABLE achievements
(
    id                varchar(100) not null,
    user_id           varchar(100) not null,
    title             varchar(100) not null,
    image_url         varchar(100) not null,
    organization      varchar(100) not null,
    issued_date       datetime(3)  null,
    credential_url    varchar(100) null,
    credential_id     varchar(100) null,
    primary key (id),
    foreign key fk_profiles_user_id (user_id) references users (id)
)