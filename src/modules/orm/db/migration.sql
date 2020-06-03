DROP TABLE IF EXISTS public."user";

CREATE TABLE public."user" (
	id UUID NOT NULL DEFAULT uuid_generate_v4(),
	"name" TEXT NOT NULL,
	email TEXT NULL,
    
	CONSTRAINT user_pk PRIMARY KEY (id)
);