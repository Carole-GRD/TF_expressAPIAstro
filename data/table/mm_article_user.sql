-- ATTENTION : il faut au moins 5 utilisateurs

USE DBexpressAstro;


BEGIN TRANSACTION;

INSERT INTO dbo.[MM_Article_User] (createdAt, updatedAt, ArticleId, UserId)
VALUES 
(
	GETDATE(),
	GETDATE(),
	21,
	2
)
INSERT INTO dbo.[MM_Article_User] (createdAt, updatedAt, ArticleId, UserId)
VALUES 
(
	GETDATE(),
	GETDATE(),
	9,
	2
)
INSERT INTO dbo.[MM_Article_User] (createdAt, updatedAt, ArticleId, UserId)
VALUES 
(
	GETDATE(),
	GETDATE(),
	21,
	5
)
INSERT INTO dbo.[MM_Article_User] (createdAt, updatedAt, ArticleId, UserId)
VALUES 
(
	GETDATE(),
	GETDATE(),
	17,
	3
)


COMMIT;