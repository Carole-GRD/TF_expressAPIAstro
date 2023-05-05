
USE DBexpressAstro;


BEGIN TRANSACTION;

INSERT INTO dbo.Store (name, address_street, address_number, address_city, address_postalCode, address_country, phone, createdAt, updatedAt) 
VALUES 
(
    'La Maison de l''Astronomie', 
    'Rue de l''Étoile',
    141,
    'Uccle',
    1180,
    'Belgique',
    '+32 2 376 99 92',
    GETDATE(), 
    GETDATE() 
);

INSERT INTO dbo.Store (name, address_street, address_number, address_city, address_postalCode, address_country, phone, createdAt, updatedAt) 
VALUES 
(
    'Le Petit Point d''Astronomie', 
    'Rue des Brasseurs',
    11,
    'Namur',
    5000,
    'Belgique',
    '+32 81 22 58 33',
    GETDATE(), 
    GETDATE() 
);

INSERT INTO dbo.Store (name, address_street, address_number, address_city, address_postalCode, address_country, phone, createdAt, updatedAt) 
VALUES 
(
    'Optique et Vision', 
    'Rue de l''Université',
    4,
    'Liège',
    4000,
    'Belgique',
    '+32 42 23 21 36',
    GETDATE(), 
    GETDATE() 
);

INSERT INTO dbo.Store (name, address_street, address_number, address_city, address_postalCode, address_country, phone, createdAt, updatedAt) 
VALUES 
(
    'La Maison de l''Astronomie', 
    'Rue du Pont Louis-Philippe',
    6,
    'Paris',
    75004,
    'France',
    '+33 1 42 77 99 64',
    GETDATE(), 
    GETDATE() 
);

INSERT INTO dbo.Store (name, address_street, address_number, address_city, address_postalCode, address_country, phone, createdAt, updatedAt) 
VALUES 
(
    'Astroshop', 
    'Kundenservice Technischer Handel GmbH, König-Heinrich-Str.',
    28,
    'Rosenheim',
    83022,
    'Allemagne',
    '+49 8031 2218900',
    GETDATE(), 
    GETDATE() 
);

INSERT INTO dbo.Store (name, address_street, address_number, address_city, address_postalCode, address_country, phone, createdAt, updatedAt) 
VALUES 
(
    'Robtics', 
    'Achterweg-Zuid',
    33,
    'DX Lisse',
    2161,
    'Pays-Bas',
    '+31 252 418588',
    GETDATE(), 
    GETDATE() 
);


COMMIT;


       
        