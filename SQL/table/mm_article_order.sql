



USE DBexpressAstro;


BEGIN TRANSACTION;

INSERT INTO dbo.[MM_Article_Order] (quantity, sending_status, store, createdAt, updatedAt, ArticleId, OrderId)
VALUES 
(
	2, 
    'en cours de préparation',
    6,
    GETDATE(),
	GETDATE(),
	1,
	2
)



INSERT INTO dbo.[MM_Article_Order] (quantity, sending_status, store, createdAt, updatedAt, ArticleId, OrderId)
VALUES 
(
	1, 
    'prêt pour expédition',
    3,
    GETDATE(),
	GETDATE(),
	1,
	1
)
INSERT INTO dbo.[MM_Article_Order] (quantity, sending_status, store, createdAt, updatedAt, ArticleId, OrderId)
VALUES 
(
	1, 
    'prêt pour expédition',
    5,
    GETDATE(),
	GETDATE(),
	3,
	1
)


COMMIT;

