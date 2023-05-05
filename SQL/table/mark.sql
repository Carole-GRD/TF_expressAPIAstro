
USE DBexpressAstro;


BEGIN TRANSACTION;

INSERT INTO dbo.Mark (name, createdAt, updatedAt) VALUES ('Celestron', GETDATE(), GETDATE());
INSERT INTO dbo.Mark (name, createdAt, updatedAt) VALUES ('Lunt Solar Systems', GETDATE(), GETDATE());
INSERT INTO dbo.Mark (name, createdAt, updatedAt) VALUES ('Perl', GETDATE(), GETDATE());
INSERT INTO dbo.Mark (name, createdAt, updatedAt) VALUES ('Sky-Watcher', GETDATE(), GETDATE());
INSERT INTO dbo.Mark (name, createdAt, updatedAt) VALUES ('Omegon', GETDATE(), GETDATE());
INSERT INTO dbo.Mark (name, createdAt, updatedAt) VALUES ('Bresser', GETDATE(), GETDATE());
INSERT INTO dbo.Mark (name, createdAt, updatedAt) VALUES ('Helios Optics', GETDATE(), GETDATE());
INSERT INTO dbo.Mark (name, createdAt, updatedAt) VALUES ('Nikon', GETDATE(), GETDATE());
INSERT INTO dbo.Mark (name, createdAt, updatedAt) VALUES ('Buki', GETDATE(), GETDATE());

COMMIT;