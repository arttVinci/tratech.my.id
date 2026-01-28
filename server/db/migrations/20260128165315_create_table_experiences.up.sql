CREATE TABLE experiences
(
    id              varchar(100) not null,
    user_id         varchar(100) NOT NULL,

    position        varchar(100) NOT NULL,
    company         varchar(100) NOT NULL,
    company_url     varchar(255),
    logo_url        varchar(255),
    location        varchar(100),

    employment_type varchar(50), -- Contoh: Full-time, Contract, Internship, Freelance
    location_type   varchar(50), -- Contoh: On-site, Remote, Hybrid

    start_date      DATE NOT NULL,
    end_date        DATE,
    is_current      boolean default false,

    description     text,

    created_at      bigint,
    updated_at      bigint,

    primary key (id),
    foreign key fk_experiences_user_id (user_id) references users (id)
);