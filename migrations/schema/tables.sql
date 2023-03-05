CREATE TABLE "public"."messages" (
    "id" character varying(100) NOT NULL,
    "user_id" character varying(100) NOT NULL,
    "text" text NOT NULL,
    CONSTRAINT "messages_id" PRIMARY KEY ("id")
) WITH (oids = false);

CREATE TABLE "public"."users" (
    "id" character varying(100) NOT NULL,
    "avatar" character varying(100) NOT NULL,
    CONSTRAINT "users_id" PRIMARY KEY ("id")
) WITH (oids = false);

insert into "public"."users"(id, avatar) values('sampleUser123', 'images/person-circle.svg');
COMMIT;