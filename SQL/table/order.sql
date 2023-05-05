
-- CRÉER D'ABORD LES UTILISATEURS  !!! 
-- Car il faut lier la commande à un utilisateur -> UserId (One to Many)

USE DBexpressAstro;


BEGIN TRANSACTION;

INSERT INTO dbo.[Order] (status, delivery_street, delivery_number, delivery_city, delivery_postalCode, delivery_country, payment_method, payment_status, createdAt, updatedAt, UserId)
VALUES 
(
	'En attente',
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

INSERT INTO dbo.[Order] (status, delivery_street, delivery_number, delivery_city, delivery_postalCode, delivery_country, payment_method, payment_status, createdAt, updatedAt, UserId)
VALUES 
(
	'En attente',
    'Clos de Lorraine',
    6,
    'Saint-Léger',
    4700,
    'Belgique',
    'Visa',
    'Refusé',
	GETDATE(),
	GETDATE(),
    2
)

COMMIT;