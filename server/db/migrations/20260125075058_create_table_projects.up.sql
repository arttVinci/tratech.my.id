CREATE TABLE projects
(
    id          varchar(100) not null,
    user_id     varchar(100) NOT NULL,
    title       varchar(100) NOT NULL,
    image_url   text,
    description text,
    github_url  varchar(100),
    live_url    varchar(100),
    challenge   text,
    solution    text,
    is_featured boolean default false,

    tags        JSON,
    tech_stack  JSON,
    gallery     JSON,
    features    JSON,

    created_at bigint,
    updated_at bigint,

    primary key (id),
    foreign key fk_projects_user_id (user_id) references users (id)
);