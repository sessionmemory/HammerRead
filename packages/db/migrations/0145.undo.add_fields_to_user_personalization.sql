-- Type: UNDO
-- Name: add_fields_to_user_personalization
-- Description: Add fields column to the user_personalization table

BEGIN;

ALTER TABLE omnivore.user_personalization DROP COLUMN fields;

COMMIT;
