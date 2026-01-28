CREATE TABLE profiles
(
    id                varchar(100) not null,
    user_id           varchar(100) not null,
    full_name         varchar(100) not null,
    url_profile       varchar(100) not null,
    address           varchar(100) not null,
    about             text null,
    bio               varchar(100) null,

    created_at     bigint,
    updated_at     bigint,

    primary key (id),
    foreign key fk_profiles_user_id (user_id) references users (id)
)
