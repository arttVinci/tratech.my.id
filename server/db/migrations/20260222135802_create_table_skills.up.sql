CREATE TABLE skills
(
    id          varchar(100) not null,
    user_id     varchar(100) NOT NULL,

    title       varchar(100) NOT NULL,
    icon_url    varchar(255),
    level       varchar(50), 

    created_at  bigint,
    updated_at  bigint,

    primary key (id),
    foreign key fk_skills_user_id (user_id) references users (id)
);