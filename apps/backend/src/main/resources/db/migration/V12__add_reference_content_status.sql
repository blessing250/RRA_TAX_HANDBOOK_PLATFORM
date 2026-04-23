alter table categories add column status varchar(50) not null default 'PUBLISHED';
alter table faqs add column status varchar(50) not null default 'PUBLISHED';
alter table documents add column status varchar(50) not null default 'PUBLISHED';
