



USE DBexpressAstro;


BEGIN TRANSACTION;

INSERT INTO dbo.[Article_Order] (quantity, store, createdAt, updatedAt, ArticleId, OrderId)
VALUES 
(
	2, 
    6,
    GETDATE(),
	GETDATE(),
	1,
	2
)



INSERT INTO dbo.[Article_Order] (quantity, store, createdAt, updatedAt, ArticleId, OrderId)
VALUES 
(
	1, 
    4,
    GETDATE(),
	GETDATE(),
	1,
	1
)
INSERT INTO dbo.[Article_Order] (quantity, store, createdAt, updatedAt, ArticleId, OrderId)
VALUES 
(
	1, 
    5,
    GETDATE(),
	GETDATE(),
	3,
	1
)
INSERT INTO dbo.[Article_Order] (quantity, store, createdAt, updatedAt, ArticleId, OrderId)
VALUES 
(
	2, 
    6,
    GETDATE(),
	GETDATE(),
	38,
	1
)
INSERT INTO dbo.[Article_Order] (quantity, store, createdAt, updatedAt, ArticleId, OrderId)
VALUES 
(
	2, 
    5,
    GETDATE(),
	GETDATE(),
	33,
	3
)
INSERT INTO dbo.[Article_Order] (quantity, store, createdAt, updatedAt, ArticleId, OrderId)
VALUES 
(
	1, 
    5,
    GETDATE(),
	GETDATE(),
	33,
	4
)
INSERT INTO dbo.[Article_Order] (quantity, store, createdAt, updatedAt, ArticleId, OrderId)
VALUES 
(
	1, 
    3,
    GETDATE(),
	GETDATE(),
	8,
	4
)



COMMIT;

