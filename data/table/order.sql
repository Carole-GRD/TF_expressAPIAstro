
-- CRÉER D'ABORD LES UTILISATEURS  !!! 
-- Car il faut lier la commande à un utilisateur -> UserId (One to Many)

USE DBexpressAstro;


BEGIN TRANSACTION;

INSERT INTO dbo.[Order] (order_status, sending_status, payment_method, payment_status, createdAt, updatedAt, UserId)
VALUES 
(
	'En attente',
    'en cours de préparation',
    'PayPal',
    'En attente',
	GETDATE(),
	GETDATE(),
    1
)

INSERT INTO dbo.[Order] (order_status, sending_status, payment_method, payment_status, createdAt, updatedAt, UserId)
VALUES 
(
	'Terminée',
    'expédiée',
    'Visa',
    'Payé',
	GETDATE(),
	GETDATE(),
    2
)

COMMIT;