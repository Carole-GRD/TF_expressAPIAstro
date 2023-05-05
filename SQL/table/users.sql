
USE DBexpressAstro;


BEGIN TRANSACTION;

INSERT INTO dbo.[User] (firstname, lastname, pseudo, email, password, role, avatar, createdAt, updatedAt)
VALUES ('Carole', 'Gérard', 'Caro', 'carole.gerard@gmail.com', 'Password_1', 'Utilisateur', null, GETDATE(), GETDATE());

INSERT INTO dbo.[User] (firstname, lastname, pseudo, email, password, role, avatar, createdAt, updatedAt) 
VALUES ('Samuel', 'Germeaux', 'Sam', 'samuel@gmail.com', 'Password_2', 'Utilisateur', null, GETDATE(), GETDATE());

INSERT INTO dbo.[User] (firstname, lastname, pseudo, email, password, role, avatar, createdAt, updatedAt) 
VALUES ('Lucie', 'Poncelet', 'Lulu', 'lucie@gmail.com', 'Password_3', 'Utilisateur', null, GETDATE(), GETDATE());

INSERT INTO dbo.[User] (firstname, lastname, pseudo, email, password, role, avatar, createdAt, updatedAt) 
VALUES ('Clément', 'Poncelet', 'Clem', 'clement@gmail.com', 'Password_4', 'Utilisateur', null, GETDATE(), GETDATE());

INSERT INTO dbo.[User] (firstname, lastname, pseudo, email, password, role, avatar, createdAt, updatedAt) 
VALUES ('Nathalie', 'Simon', 'Nath', 'nathalie@gmail.com', 'Password_5', 'Utilisateur', null, GETDATE(), GETDATE());

COMMIT;