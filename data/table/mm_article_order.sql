



USE DBexpressAstro;


BEGIN TRANSACTION;

INSERT INTO dbo.[MM_Article_Order] (quantity, store, createdAt, updatedAt, ArticleId, OrderId)
VALUES 
(
	2, 
    6,
    GETDATE(),
	GETDATE(),
	1,
	2
)



INSERT INTO dbo.[MM_Article_Order] (quantity, store, createdAt, updatedAt, ArticleId, OrderId)
VALUES 
(
	1, 
    3,
    GETDATE(),
	GETDATE(),
	1,
	1
)
INSERT INTO dbo.[MM_Article_Order] (quantity, store, createdAt, updatedAt, ArticleId, OrderId)
VALUES 
(
	1, 
    5,
    GETDATE(),
	GETDATE(),
	3,
	1
)


COMMIT;

