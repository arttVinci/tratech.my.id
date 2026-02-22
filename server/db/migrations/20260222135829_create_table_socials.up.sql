CREATE TABLE socials
(
    id           varchar(100) not null,
    user_id      varchar(100) NOT NULL,

    title        varchar(100) NOT NULL,
    platform     varchar(50) NOT NULL,
    platform_url varchar(255) NOT NULL,

    created_at   bigint,
    updated_at   bigint,

    primary key (id),
    foreign key fk_socials_user_id (user_id) references users (id)
);