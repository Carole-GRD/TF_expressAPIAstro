
-- Les articles séparés car beaucoup de données ???
-- Les commandes séparées car 



USE DBexpressAstro;




-- ===============================================================================
--                                CATEGORY    
-- ===============================================================================

BEGIN TRANSACTION;

INSERT INTO dbo.Category (name, createdAt, updatedAt) VALUES ('Télescope', GETDATE(), GETDATE());
INSERT INTO dbo.Category (name, createdAt, updatedAt) VALUES ('Lunette astronomique', GETDATE(), GETDATE());
INSERT INTO dbo.Category (name, createdAt, updatedAt) VALUES ('Jumelles', GETDATE(), GETDATE());
INSERT INTO dbo.Category (name, createdAt, updatedAt) VALUES ('Longue vue', GETDATE(), GETDATE());
INSERT INTO dbo.Category (name, createdAt, updatedAt) VALUES ('Livre', GETDATE(), GETDATE());
INSERT INTO dbo.Category (name, createdAt, updatedAt) VALUES ('Éducatif', GETDATE(), GETDATE());

COMMIT;



-- ===============================================================================
--                                MARK    
-- ===============================================================================

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



-- ===============================================================================
--                                STORE    
-- ===============================================================================


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




-- ===============================================================================
--                                USERS    
-- ===============================================================================

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






-- ===============================================================================
--                                ARTICLE    
-- ===============================================================================

BEGIN TRANSACTION;


COMMIT;



-- ===============================================================================
--                                MM_Article_Category    
-- ===============================================================================

BEGIN TRANSACTION;


COMMIT;




-- ===============================================================================
--                                MM_Article_store    
-- ===============================================================================

BEGIN TRANSACTION;


COMMIT;







-- ===============================================================================
--                                COMANDES    
-- ===============================================================================


BEGIN TRANSACTION;

INSERT INTO dbo.[Order] (order_status, sending_status, delivery_street, delivery_number, delivery_city, delivery_postalCode, delivery_country, payment_method, payment_status, createdAt, updatedAt, UserId)
VALUES 
(
	'En attente',
    'en cours de préparation',
    'Allée de Tertibu',
    5,
    'Suarlée',
    5020,
    'Belgique',
    'PayPal',
    'En attente',
	GETDATE(),
	GETDATE(),
    1
)

INSERT INTO dbo.[Order] (order_status, sending_status, delivery_street, delivery_number, delivery_city, delivery_postalCode, delivery_country, payment_method, payment_status, createdAt, updatedAt, UserId)
VALUES 
(
	'Terminée',
    'expédiée',
    'Clos de Lorraine',
    6,
    'Saint-Léger',
    4700,
    'Belgique',
    'Visa',
    'Payé',
	GETDATE(),
	GETDATE(),
    2
)

COMMIT;







-- ===============================================================================
--                                MM_Article_Order    
-- ===============================================================================

BEGIN TRANSACTION;


COMMIT;





-- ===============================================================================
--                                C    
-- ===============================================================================

BEGIN TRANSACTION;


COMMIT;



