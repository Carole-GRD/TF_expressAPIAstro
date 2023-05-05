
USE DBexpressAstro;


BEGIN TRANSACTION;

INSERT INTO dbo.Category (name, createdAt, updatedAt) VALUES ('Télescope', GETDATE(), GETDATE());
INSERT INTO dbo.Category (name, createdAt, updatedAt) VALUES ('Jumelles', GETDATE(), GETDATE());
INSERT INTO dbo.Category (name, createdAt, updatedAt) VALUES ('Longue vue', GETDATE(), GETDATE());
INSERT INTO dbo.Category (name, createdAt, updatedAt) VALUES ('Accessoires', GETDATE(), GETDATE());
INSERT INTO dbo.Category (name, createdAt, updatedAt) VALUES ('Livre', GETDATE(), GETDATE());
INSERT INTO dbo.Category (name, createdAt, updatedAt) VALUES ('Éducatif', GETDATE(), GETDATE());

COMMIT;


