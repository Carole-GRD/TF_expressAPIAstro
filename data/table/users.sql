
USE DBexpressAstro;


BEGIN TRANSACTION;

INSERT INTO dbo.[User] (firstname, lastname, pseudo, email, password, role, avatar, address_street, address_number, address_city, address_postalCode, address_country, createdAt, updatedAt)
VALUES ('Carole', 'Gérard', 'Caro', 'carole@gmail.com', 'Password_1', 'Admin', null, 'Allée de Tertibu', 10, 'Namur', 5000, 'Belgique', GETDATE(), GETDATE());

INSERT INTO dbo.[User] (firstname, lastname, pseudo, email, password, role, avatar, address_street, address_number, address_city, address_postalCode, address_country, createdAt, updatedAt) 
VALUES ('Samuel', 'Germeaux', 'Sam', 'samuel@gmail.com', 'Password_2', 'Sous-Admin', null, 'Rue de Vedrin', 18, 'Rhisnes', 5080, 'Belgique', GETDATE(), GETDATE());

INSERT INTO dbo.[User] (firstname, lastname, pseudo, email, password, role, avatar, address_street, address_number, address_city, address_postalCode, address_country, createdAt, updatedAt) 
VALUES ('Lucie', 'Poncelet', 'Lulu', 'lucie@gmail.com', 'Password_3', 'Utilisateur', null, 'Rue du Ruisseau', 6, 'Arlon', 6700, 'Belgique', GETDATE(), GETDATE());

INSERT INTO dbo.[User] (firstname, lastname, pseudo, email, password, role, avatar, address_street, address_number, address_city, address_postalCode, address_country, createdAt, updatedAt) 
VALUES ('Clément', 'Poncelet', 'Clem', 'clement@gmail.com', 'Password_4', 'Utilisateur', null, 'Rue des Diapasons', 11, 'Arlon', 6700, 'Belgique', GETDATE(), GETDATE());

INSERT INTO dbo.[User] (firstname, lastname, pseudo, email, password, role, avatar, address_street, address_number, address_city, address_postalCode, address_country, createdAt, updatedAt) 
VALUES ('Nathalie', 'Simon', 'Nath', 'nathalie@gmail.com', 'Password_5', 'Utilisateur', null, 'Rue Campagnole', 3, 'Suarlée', 5020, 'Belgique', GETDATE(), GETDATE());

COMMIT;