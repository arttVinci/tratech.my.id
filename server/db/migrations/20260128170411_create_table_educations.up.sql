CREATE TABLE educations
(
    id             varchar(100) not null,
    user_id        varchar(100) NOT NULL,

    institution    varchar(100) NOT NULL, -- Contoh: Universitas Terbuka
    degree         varchar(100),          -- Contoh: Sarjana (S1), SMA
    field_of_study varchar(100),          -- Contoh: Sistem Informasi
    grade          varchar(50),           -- Contoh: 3.85/4.00

    logo_url       text,
    location       varchar(100),          -- Contoh: Jakarta, Indonesia

    start_date     DATE NOT NULL,
    end_date       DATE,
    is_current     boolean default false,

    description    text,

    created_at     bigint,
    updated_at     bigint,

    primary key (id),
    foreign key fk_educations_user_id (user_id) references users(id)
);