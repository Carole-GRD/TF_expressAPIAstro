
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













-- ===============================================================================
--                                ARTICLE    
-- ===============================================================================

BEGIN TRANSACTION;

-- ///////////////////////////////////////////////////////////////////////////// 
-- //////////////////////////////     TELESCOPES    ////////////////////////////////
-- ///////////////////////////////////////////////////////////////////////////// 


-- +++++++++++++++    Celestron     ++++++++++++++++++++++

INSERT INTO dbo.[Article] (name, description, reference, author, createdAt, updatedAt, MarkId)
VALUES (
    'Télescope StarSense Explorer DX 130AZ (1)', 
    'Ce tube optique Newton ne pèse que 4 kg pour une longueur de 635 mm. De plus, il offre des performances optiques d’excellentes qualités. Il sera à même de vous faire découvrir les magnifiques cratères de la lune, les planètes, les supers anneaux de Saturne ou encore les bandes de Jupiter et ses 4 principaux satellites, mais également bien d’autres merveilles de notre système solaire. Parallèlement, pour ceux qui souhaitent s’initier aux observations des objets célestes du ciel profond, le diamètre de 130 mm jumelé à sa courte focale de 650 lui offrent un rapport d''ouverture de F/5 ce qui lui confère des possibilités en ciel profond tout à fait intéressante. Il sera possible d’admirer les amas d''étoiles, les nébuleuses ou les galaxies si vous vous trouvez sous un ciel bien sombre, loin de la pollution lumineuse des villes.', 
    'C22461', 
    null, 
    GETDATE(), 
    GETDATE(),
    1
);
INSERT INTO dbo.[Article] (name, description, reference, author, createdAt, updatedAt, MarkId)
VALUES (
    'Télescope StarSense Explorer DX 130AZ (2)', 
    'Ce tube optique Newton ne pèse que 4 kg pour une longueur de 635 mm. De plus, il offre des performances optiques d’excellentes qualités. Il sera à même de vous faire découvrir les magnifiques cratères de la lune, les planètes, les supers anneaux de Saturne ou encore les bandes de Jupiter et ses 4 principaux satellites, mais également bien d’autres merveilles de notre système solaire. Parallèlement, pour ceux qui souhaitent s’initier aux observations des objets célestes du ciel profond, le diamètre de 130 mm jumelé à sa courte focale de 650 lui offrent un rapport d''ouverture de F/5 ce qui lui confère des possibilités en ciel profond tout à fait intéressante. Il sera possible d’admirer les amas d''étoiles, les nébuleuses ou les galaxies si vous vous trouvez sous un ciel bien sombre, loin de la pollution lumineuse des villes.', 
    'C22462', 
    null, 
    GETDATE(), 
    GETDATE(),
    1
);
INSERT INTO dbo.[Article] (name, description, reference, author, createdAt, updatedAt, MarkId)
VALUES (
    'Télescope StarSense Explorer DX 130AZ (3)', 
    'Ce tube optique Newton ne pèse que 4 kg pour une longueur de 635 mm. De plus, il offre des performances optiques d’excellentes qualités. Il sera à même de vous faire découvrir les magnifiques cratères de la lune, les planètes, les supers anneaux de Saturne ou encore les bandes de Jupiter et ses 4 principaux satellites, mais également bien d’autres merveilles de notre système solaire. Parallèlement, pour ceux qui souhaitent s’initier aux observations des objets célestes du ciel profond, le diamètre de 130 mm jumelé à sa courte focale de 650 lui offrent un rapport d''ouverture de F/5 ce qui lui confère des possibilités en ciel profond tout à fait intéressante. Il sera possible d’admirer les amas d''étoiles, les nébuleuses ou les galaxies si vous vous trouvez sous un ciel bien sombre, loin de la pollution lumineuse des villes.', 
    'C22463', 
    null, 
    GETDATE(), 
    GETDATE(),
    1
);

-- +++++++++++++++    Lunt     ++++++++++++++++++++++

INSERT INTO dbo.[Article] (name, description, reference, author, createdAt, updatedAt, MarkId)
VALUES (
    'Lunt 130 mm Universal Telescope (4)', 
    'Le télescope universel Lunt 130 mm est LE télescope complet. Ce système basé sur une lunette possède une lentille ED triplet alignée avec précision et une ouverture de 130 mm, pour des applications diurnes et nocturnes vraiment époustouflantes. Le Lunt 130 mm passe facilement de la configuration Hydrogène Alpha à son mode nocturne en retirant rapidement et facilement son module interne. Avec le télescope universel jour et nuit Lunt 130 mm à vos côtés, vous n''aurez besoin de rien d''autre !', 
    '69159', 
    null, 
    GETDATE(), 
    GETDATE(),
    2
);

-- +++++++++++++++    Perl    ++++++++++++++++++++++

INSERT INTO dbo.[Article] (name, description, reference, author, createdAt, updatedAt, MarkId)
VALUES (
    'TELESCOPE NEXSTAR 8 SE CELESTRON (5)', 
    'Dans la tradition des célèbres tubes optiques orange Celestron, la série NexStar SE combine l’héritage des télescopes à tube optique de couleur orange avec des caractéristiques de pointe comme le nouveau système de fonctionnement complètement informatisé, la raquette de commande avec mise à jour par internet, des traitements optiques supérieurs, le logiciel d’alignement révolutionnaire SkyAlign et bien d’autres choses.', 
    '6458 C-11069', 
    null, 
    GETDATE(), 
    GETDATE(),
    3
);
INSERT INTO dbo.[Article] (name, description, reference, author, createdAt, updatedAt, MarkId)
VALUES (
    'TELESCOPE NEXSTAR 8 SE CELESTRON (6)', 
    'Dans la tradition des célèbres tubes optiques orange Celestron, la série NexStar SE combine l’héritage des télescopes à tube optique de couleur orange avec des caractéristiques de pointe comme le nouveau système de fonctionnement complètement informatisé, la raquette de commande avec mise à jour par internet, des traitements optiques supérieurs, le logiciel d’alignement révolutionnaire SkyAlign et bien d’autres choses.', 
    '6458 C-11070', 
    null, 
    GETDATE(), 
    GETDATE(),
    3
);
INSERT INTO dbo.[Article] (name, description, reference, author, createdAt, updatedAt, MarkId)
VALUES (
    'TELESCOPE NEXSTAR 8 SE CELESTRON (7)', 
    'Dans la tradition des célèbres tubes optiques orange Celestron, la série NexStar SE combine l’héritage des télescopes à tube optique de couleur orange avec des caractéristiques de pointe comme le nouveau système de fonctionnement complètement informatisé, la raquette de commande avec mise à jour par internet, des traitements optiques supérieurs, le logiciel d’alignement révolutionnaire SkyAlign et bien d’autres choses.', 
    '6458 C-11071', 
    null, 
    GETDATE(), 
    GETDATE(),
    3
);


-- +++++++++++++++    Skywatcher    ++++++++++++++++++++++

INSERT INTO dbo.[Article] (name, description, reference, author, createdAt, updatedAt, MarkId)
VALUES (
    'Télescope N 150/750 PDS Explorer BD EQM-35 PRO SynScan GoTo (8)', 
    'Très polyvalent, ce réflecteur Newton convient aussi bien aux débutants qu''aux observateurs chevronnés. Il offre beaucoup de lumière et une grande stabilité à petit prix. La quantité de lumière collectée grâce à son imposant diamètre de 150 mm permet de bien voir des objets très éloignés du ciel profond tels que la Nébuleuse de l''Anneau dans la Lyre ou la Nébuleuse Hantel. Et des amas globulaires comme M13 sont résolus, au bord, en de nombreuses étoiles individuelles. L''observation planétaire aussi offre des images riches en détails de Saturne, Jupiter, Vénus et Mars. Le rapport d''ouverture de l''objectif est de F/5. Ce télescope fait donc partie des Newton rapides. Ce type d''optique convient particulièrement bien pour la photographie. Le pouvoir collecteur est d''environ 450 fois plus grand qu''à l''œil nu avec une pupille de sortie de 7 mm.', 
    '59456', 
    null, 
    GETDATE(), 
    GETDATE(),
    4
);
INSERT INTO dbo.[Article] (name, description, reference, author, createdAt, updatedAt, MarkId)
VALUES (
    'Télescope N 150/750 PDS Explorer BD EQM-35 PRO SynScan GoTo (9)', 
    'Très polyvalent, ce réflecteur Newton convient aussi bien aux débutants qu''aux observateurs chevronnés. Il offre beaucoup de lumière et une grande stabilité à petit prix. La quantité de lumière collectée grâce à son imposant diamètre de 150 mm permet de bien voir des objets très éloignés du ciel profond tels que la Nébuleuse de l''Anneau dans la Lyre ou la Nébuleuse Hantel. Et des amas globulaires comme M13 sont résolus, au bord, en de nombreuses étoiles individuelles. L''observation planétaire aussi offre des images riches en détails de Saturne, Jupiter, Vénus et Mars. Le rapport d''ouverture de l''objectif est de F/5. Ce télescope fait donc partie des Newton rapides. Ce type d''optique convient particulièrement bien pour la photographie. Le pouvoir collecteur est d''environ 450 fois plus grand qu''à l''œil nu avec une pupille de sortie de 7 mm.', 
    '59457', 
    null, 
    GETDATE(), 
    GETDATE(),
    4
);


-- ///////////   Categorie Télescope + Educatif   //////////////////////

INSERT INTO dbo.[Article] (name, description, reference, author, createdAt, updatedAt, MarkId)
VALUES (
    'Buki - 9004 - Mini sciences - télescope (10)', 
    'Un télescope binoculaire pour observer le monde qui t’entoure. Utilise le trépied pour stabiliser l’image et la molette pour faire une mise au point parfaite. Idéal aussi bien pour le jour que pour la nuit.', 
    'B071ZRR2L1', 
    null, 
    GETDATE(), 
    GETDATE(),
    9
);

INSERT INTO dbo.[Article] (name, description, reference, author, createdAt, updatedAt, MarkId)
VALUES (
    'Buki - TS006B - Télescope 15 activités (11)', 
    'Un télescope d’initiation avec une notice de 15 activités. Découvre le ciel étoilé, les planètes et les cratères lunaires. Le télescope permet des observations la journée. Lentille de 50 mm de diamètre et 2 oculaires de 20 mm et 4 mm interchangeables. Trépied de sol de 89 cm en métal. Une carte du ciel est incluse. Notice illustrée en couleurs.', 
    'B072M6T18X', 
    null, 
    GETDATE(), 
    GETDATE(),
    9
);




-- ///////////////////////////////////////////////////////////////////////////// 
-- //////////////////////////////     JUMELLES    ////////////////////////////////
-- ///////////////////////////////////////////////////////////////////////////// 


-- +++++++++++++++    Bresser     ++++++++++++++++++++++

INSERT INTO dbo.[Article] (name, description, reference, author, createdAt, updatedAt, MarkId)
VALUES (
    'Spezial-Zoomar 36x70 (12)', 
    'Les jumelles BRESSER Zoomar Spéciale 12-36x70 offrent des images pointues de fascination. Les différents oculaires sont soigneusement accordés, faisant la variable de rapport optique par l''utilisation du levier de bourdonnement. Grâce au traitement multicouche des optiques les objets à la grande distance peut encore être vue en tant que clairement images. La bâche en caoutchouc maniable et ergonomique prévoit une prise stable. Avec le fil et l''adapteur standard de trépied inclus vous pouvez attacher ces jumelles à n''importe quel photo-trépied.', 
    '1663670', 
    null, 
    GETDATE(), 
    GETDATE(),
    6
);
INSERT INTO dbo.[Article] (name, description, reference, author, createdAt, updatedAt, MarkId)
VALUES (
    'Spezial-Zoomar 36x70 (13)', 
    'Les jumelles BRESSER Zoomar Spéciale 12-36x70 offrent des images pointues de fascination. Les différents oculaires sont soigneusement accordés, faisant la variable de rapport optique par l''utilisation du levier de bourdonnement. Grâce au traitement multicouche des optiques les objets à la grande distance peut encore être vue en tant que clairement images. La bâche en caoutchouc maniable et ergonomique prévoit une prise stable. Avec le fil et l''adapteur standard de trépied inclus vous pouvez attacher ces jumelles à n''importe quel photo-trépied.', 
    '1663671', 
    null, 
    GETDATE(), 
    GETDATE(),
    6
);

-- +++++++++++++++    Helios Optics     ++++++++++++++++++++++

INSERT INTO dbo.[Article] (name, description, reference, author, createdAt, updatedAt, MarkId)
VALUES (
    'Jumelles 10x50 ED WP6 Mistral (14)', 
    'Les nouvelles séries Helios Mistral WP6 de très haute qualité sont des jumelles compactes à prismes de toit. La série Mistral WP6 se compose de dix modèles avec un diamètre d''objectif de 32 mm, 42 mm et 50 mm. L''Helios Mistral WP6 10x50 est idéal pour l''observation des oiseaux ainsi que pour une utilisation polyvalente. Le spectateur a un corps léger élégant, ergonomique et moderne qui est fini avec un revêtement en caoutchouc étanche. La visionneuse est dotée de prismes BaK-4 plaqués argent à indice élevé et d''optiques entièrement multicouches, garantissant d''excellentes performances optiques..', 
    'H30959', 
    null, 
    GETDATE(), 
    GETDATE(),
    7
);
INSERT INTO dbo.[Article] (name, description, reference, author, createdAt, updatedAt, MarkId)
VALUES (
    'Jumelles 10x50 ED WP6 Mistral (15)', 
    'Les nouvelles séries Helios Mistral WP6 de très haute qualité sont des jumelles compactes à prismes de toit. La série Mistral WP6 se compose de dix modèles avec un diamètre d''objectif de 32 mm, 42 mm et 50 mm. L''Helios Mistral WP6 10x50 est idéal pour l''observation des oiseaux ainsi que pour une utilisation polyvalente. Le spectateur a un corps léger élégant, ergonomique et moderne qui est fini avec un revêtement en caoutchouc étanche. La visionneuse est dotée de prismes BaK-4 plaqués argent à indice élevé et d''optiques entièrement multicouches, garantissant d''excellentes performances optiques..', 
    'H30960', 
    null, 
    GETDATE(), 
    GETDATE(),
    7
);
INSERT INTO dbo.[Article] (name, description, reference, author, createdAt, updatedAt, MarkId)
VALUES (
    'Jumelles 10x50 ED WP6 Mistral (16)', 
    'Les nouvelles séries Helios Mistral WP6 de très haute qualité sont des jumelles compactes à prismes de toit. La série Mistral WP6 se compose de dix modèles avec un diamètre d''objectif de 32 mm, 42 mm et 50 mm. L''Helios Mistral WP6 10x50 est idéal pour l''observation des oiseaux ainsi que pour une utilisation polyvalente. Le spectateur a un corps léger élégant, ergonomique et moderne qui est fini avec un revêtement en caoutchouc étanche. La visionneuse est dotée de prismes BaK-4 plaqués argent à indice élevé et d''optiques entièrement multicouches, garantissant d''excellentes performances optiques..', 
    'H30961', 
    null, 
    GETDATE(), 
    GETDATE(),
    7
);

-- +++++++++++++++    Nikon     ++++++++++++++++++++++

INSERT INTO dbo.[Article] (name, description, reference, author, createdAt, updatedAt, MarkId)
VALUES (
    'Jumelles Marine 10x70 IF HP WP (17)', 
    'Pour des performances au plus haut niveau en sport de voile, les jumelles de Nikon sont tout simplement incomparables. Tous les modèles de la série Marine assurent des images nettes et lumineuses. Leur remplissage d’azote et leur étanchéité par joints toriques les rendent insensibles aux variations de température et, par conséquent, idéales pour les applications nautiques.', 
    '13558', 
    null, 
    GETDATE(), 
    GETDATE(),
    8
);
INSERT INTO dbo.[Article] (name, description, reference, author, createdAt, updatedAt, MarkId)
VALUES (
    'Jumelles Marine 10x70 IF HP WP (18)', 
    'Pour des performances au plus haut niveau en sport de voile, les jumelles de Nikon sont tout simplement incomparables. Tous les modèles de la série Marine assurent des images nettes et lumineuses. Leur remplissage d’azote et leur étanchéité par joints toriques les rendent insensibles aux variations de température et, par conséquent, idéales pour les applications nautiques.', 
    '13559', 
    null, 
    GETDATE(), 
    GETDATE(),
    8
);



-- +++++++++++++++    Omegon     ++++++++++++++++++++++

INSERT INTO dbo.[Article] (name, description, reference, author, createdAt, updatedAt, MarkId)
VALUES (
    'Omegon-Jumelles-Nightstar-16x70-45d (19)', 
    'Les jumelles Nightstar d’Omegon ont été conçues spécialement pour les amis de la nature et des étoiles, qui recherchent de bonnes performances sans vouloir pour autant dépenser des centaines, voire des milliers d’euros.', 
    '47316', 
    null, 
    GETDATE(), 
    GETDATE(),
    5
);
INSERT INTO dbo.[Article] (name, description, reference, author, createdAt, updatedAt, MarkId)
VALUES (
    'Omegon-Jumelles-Nightstar-16x70-45d (20)', 
    'Les jumelles Nightstar d’Omegon ont été conçues spécialement pour les amis de la nature et des étoiles, qui recherchent de bonnes performances sans vouloir pour autant dépenser des centaines, voire des milliers d’euros.', 
    '47317', 
    null, 
    GETDATE(), 
    GETDATE(),
    5
);
INSERT INTO dbo.[Article] (name, description, reference, author, createdAt, updatedAt, MarkId)
VALUES (
    'Omegon-Jumelles-Nightstar-16x70-45d (21)', 
    'Les jumelles Nightstar d’Omegon ont été conçues spécialement pour les amis de la nature et des étoiles, qui recherchent de bonnes performances sans vouloir pour autant dépenser des centaines, voire des milliers d’euros.', 
    '47318', 
    null, 
    GETDATE(), 
    GETDATE(),
    5
);
INSERT INTO dbo.[Article] (name, description, reference, author, createdAt, updatedAt, MarkId)
VALUES (
    'Omegon-Jumelles-Nightstar-16x70-45d (22)', 
    'Les jumelles Nightstar d’Omegon ont été conçues spécialement pour les amis de la nature et des étoiles, qui recherchent de bonnes performances sans vouloir pour autant dépenser des centaines, voire des milliers d’euros.', 
    '47319', 
    null, 
    GETDATE(), 
    GETDATE(),
    5
);





-- ///////////   Categorie Jumelles + Educatif   //////////////////////

INSERT INTO dbo.[Article] (name, description, reference, author, createdAt, updatedAt, MarkId)
VALUES (
    'Jumelles 10x50 ED WP6 Mistral (23)', 
    'Avec un grossissement de 8x, les plus beaux paysages et des animaux de taille impressionnante brillent sous vos yeux! La molette de mise au point et la compensation dioptrique assurent une netteté nette!', 
    '70793', 
    null, 
    GETDATE(), 
    GETDATE(),
    7
);




-- ///////////////////////////////////////////////////////////////////////////// 
-- ////////////////////////////     LONGUE VUE    //////////////////////////////
-- ///////////////////////////////////////////////////////////////////////////// 


-- +++++++++++++++    Celestron     ++++++++++++++++++++++

INSERT INTO dbo.[Article] (name, description, reference, author, createdAt, updatedAt, MarkId)
VALUES (
    'Regal m2 65ed (24)', 
    'Les lentilles ED de l''objectif vous permettront de réduire les aberrations chromatiques, pour une reproduction précise des couleurs et une résolution et des contrastes augmentés. Revêtement XLT (optique entièrement multi traitées). Le traitement XLT vous permettra de maximiser la transmission de la lumière à travers le chemin optique pour des images plus brillantes et une augmentation de la résolution et du contraste. La longue-vue Regal M2 65 ED dispose de prisme BaK4. Corps en alliage de magnésium, matériel durable et résistant, plus léger que les alliages d''aluminium traditionnels.', 
    '91603930', 
    null, 
    GETDATE(), 
    GETDATE(),
    1
);

INSERT INTO dbo.[Article] (name, description, reference, author, createdAt, updatedAt, MarkId)
VALUES (
    'Regal m2 65ed (25)', 
    'Les lentilles ED de l''objectif vous permettront de réduire les aberrations chromatiques, pour une reproduction précise des couleurs et une résolution et des contrastes augmentés. Revêtement XLT (optique entièrement multi traitées). Le traitement XLT vous permettra de maximiser la transmission de la lumière à travers le chemin optique pour des images plus brillantes et une augmentation de la résolution et du contraste. La longue-vue Regal M2 65 ED dispose de prisme BaK4. Corps en alliage de magnésium, matériel durable et résistant, plus léger que les alliages d''aluminium traditionnels.', 
    '91603931', 
    null, 
    GETDATE(), 
    GETDATE(),
    1
);

INSERT INTO dbo.[Article] (name, description, reference, author, createdAt, updatedAt, MarkId)
VALUES (
    'Regal m2 65ed (26)', 
    'Les lentilles ED de l''objectif vous permettront de réduire les aberrations chromatiques, pour une reproduction précise des couleurs et une résolution et des contrastes augmentés. Revêtement XLT (optique entièrement multi traitées). Le traitement XLT vous permettra de maximiser la transmission de la lumière à travers le chemin optique pour des images plus brillantes et une augmentation de la résolution et du contraste. La longue-vue Regal M2 65 ED dispose de prisme BaK4. Corps en alliage de magnésium, matériel durable et résistant, plus léger que les alliages d''aluminium traditionnels.', 
    '91603932', 
    null, 
    GETDATE(), 
    GETDATE(),
    1
);

-- +++++++++++++++    Nikon     ++++++++++++++++++++++


INSERT INTO dbo.[Article] (name, description, reference, author, createdAt, updatedAt, MarkId)
VALUES (
    'MONARCH 82ED-A (27)', 
    'Appréciez les images nettes au contraste accentué de la longue-vue MONARCH. Que ce soit pour observer les oiseaux ou simplement contempler la beauté de la nature, le système optique à traitement apochromatique avancé avec verre ED (à dispersion ultra-faible) réduit les aberrations chromatiques pour vous offrir un champ visuel d’une netteté exceptionnelle. Le système de lentille aplanissante de champ assure une image d’une netteté homogène jusqu’à la périphérie. Quant au système de mise au point optimisé, il propose différentes vitesses dans un barillet de mise au point (action fine pour les sujets lointains et action plus grossière pour les sujets proches) pour un contrôle précis avec un mouvement naturel. La longue-vue MONARCH est idéale pour toutes les activités de plein air : elle est étanche et antibuée, tout en étant d’une robustesse et d’une résistance à toute épreuve.', 
    '51487', 
    null, 
    GETDATE(), 
    GETDATE(),
    8
);



-- ///////////////////////////////////////////////////////////////////////////// 
-- //////////////////////////////    ACCESSEOIRES     ////////////////////////////////
-- ///////////////////////////////////////////////////////////////////////////// 



INSERT INTO dbo.[Article] (name, description, reference, author, createdAt, updatedAt, MarkId)
VALUES (
    'Adaptateur photo pour smartphone (28)', 
    'Déclenchement des photos par télécommande Bluetooth. Universel : il se règle de 52 à 100 mm pour accueillir tous les smartphones. Grâce à cet accessoire, capturez et partagez facilement vos plus belles observations de la nature et du ciel.', 
    '53159160', 
    null, 
    GETDATE(), 
    GETDATE(),
    null
);

INSERT INTO dbo.[Article] (name, description, reference, author, createdAt, updatedAt, MarkId)
VALUES (
    'BATTERIE POWERTANK LITHIUM (29)', 
    'Grâce à son autonomie de 10h vous pouvez alimentez vos télescopes durant une nuit entière ou rechargez vos appareils électroniques équipés d’un port USB tels que smartphones, tablettes, GPS, appareils photo et tous autres produits.', 
    'C-18771', 
    null, 
    GETDATE(), 
    GETDATE(),
    null
);

INSERT INTO dbo.[Article] (name, description, reference, author, createdAt, updatedAt, MarkId)
VALUES (
    'Câble de démarrage sur allume-cigare 12V avec voyant - 4m (30)', 
    'Très pratiques, ces câbles de démarrage permettent de recharger la batterie d''un véhicule pour le faire démarrer. Et ce sans ouvrir le capot ! Il suffit de relier votre véhicule à un autre via la prise allume-cigare. La batterie de votre véhicule se recharge alors suffisamment pour le faire démarrer. Vous n’avez pas besoin d’être un expert en mécanique, ni de vous salir les mains !', 
    '4022107198820', 
    null, 
    GETDATE(), 
    GETDATE(),
    null
);

INSERT INTO dbo.[Article] (name, description, reference, author, createdAt, updatedAt, MarkId)
VALUES (
    'Jeu d''oculaires K 10 mm, K 25 mm (31)', 
    'Un télescope et des oculaires : ils vont ensemble comme un objectif et son appareil photo. Ce n''est que lorsque vous insérez un oculaire dans le télescope que vous verrez une image et que vous l''agrandissez. Le jeu d''oculaires très bon marché se compose d''un oculaire de 10 mm et un de 25 mm. Ces deux oculaires de 1,25 pouce sont votre base pour vos premières observations.', 
    '33355', 
    null, 
    GETDATE(), 
    GETDATE(),
    5
);




-- ///////////////////////////////////////////////////////////////////////////// 
-- //////////////////////////////     LIVRES    ////////////////////////////////
-- ///////////////////////////////////////////////////////////////////////////// 


INSERT INTO dbo.[Article] (name, description, reference, author, createdAt, updatedAt, MarkId)
VALUES (
    'La Terre entre nos mains (32)', 
    'Mers, fleuves, îles, déserts, montagnes, villes... D''avril à novembre 2021, l''astronaute Thomas Pesquet a photographié depuis la Station spatiale internationale notre planète sous toutes ses facettes. Des clichés spectaculaires et fascinants de la mission Alpha, pour la première fois réunis dans un livre, qui nous font prendre conscience de la fragilité de la Terre et de l''absolue nécessité de la protéger. Un vibrant hommage aux merveilles de la nature. Un plaidoyer magistral pour une prise de conscience collective face aux bouleversements climatiques. Envoyé pour la deuxième fois en mission par l''Agence spatiale européenne (ESA), Thomas Pesquet aura passé 200 jours dans l''espace, au cours desquels il a effectué 4 sorties dans le vide du cosmos et pris part à plus de 200 expériences scientifiques, dont certaines préparent les futures missions vers la Lune et Mars. Il fut à cette occasion le premier commandant français de la Station spatiale internationale. Les droits d''auteur de cet ouvrage sont reversés aux Restos du Coeur.', 
    '2080414135', 
    'Thomas Pesquet', 
    GETDATE(), 
    GETDATE(),
    null
);


INSERT INTO dbo.[Article] (name, description, reference, author, createdAt, updatedAt, MarkId)
VALUES (
    'Le livre d’astronomie pour les enfants de 7 à 12 ans (33)', 
    'Vous cherchez un livre, pour occuper votre enfant passionné d’espace, pendant les week-ends et les vacances ? Un livre sur l’astronomie pour tout comprendre sur notre système solaire et notre univers ? Alors notre petite encyclopédie d’astronomie est faite pour vous ! Un livre en image pour les fans d’espace !', 
    '979-8356176753', 
    'Jenna Smith', 
    GETDATE(), 
    GETDATE(),
    null
);


INSERT INTO dbo.[Article] (name, description, reference, author, createdAt, updatedAt, MarkId)
VALUES (
    'Le ciel au télescope: 110 observations essentielles à faire avec votre instrument (34)', 
    'Vous disposez d''un télescope ou d''une lunette astronomique ? Partez en exploration dans le ciel étoilé et découvrez au coeur de l''Univers des merveilles insoupçonnables à l''oeil nu… Écrit par deux passionnés d''astronomie, ce guide pratique donne toutes les clés pour réussir vos observations avec votre télescope ou votre lunette, que vous soyez débutant ou de niveau intermédiaire. Ses 75 fiches d''observation réunissent plus d''une centaine d''objets célestes à découvrir pas à pas, aussi bien dans le Système solaire que dans le ciel profond. Un soin particulier a été apporté aux cartographies, claires et précises, qui permettent à chacun de s''approprier facilement les méthodes d''approche exposées. Ce guide de référence est le complément indispensable de votre télescope ! - Toutes les notions essentielles pour débuter - Des pictos pour choisir son niveau de difficulté d''un seul coup d''oeil - Des cartes précises et faciles à comprendre - Un format pratique pour une utilisation sur le terrain - Observations réalisables depuis l''hémisphère nord avec tout télescope ou lunette de 60 à 250 mm de diamètre', 
    '9782956341741', 
    'Carine Souplet, Bertrand d''Armagnac', 
    GETDATE(), 
    GETDATE(),
    null
);




INSERT INTO dbo.[Article] (name, description, reference, author, createdAt, updatedAt, MarkId)
VALUES (
    'Guide du chasseur d''étoiles : Découvrir les planètes, les étoiles et l''univers en 275 leçons (35)', 
    'Connaissez-vous tous les secrets de la voûte céleste ? Savez-vous ce que sont un planisphère ou un solarigramme ? Relèverez-vous le défi de vous fabriquer une montre stellaire ? Ce "Guide du chasseur d''étoiles" contient plus de deux cents fiches et regorge d''idées, d''activités ludiques et d''astuces, toutes réalisables avec du matériel simple. Il vous permettra de vous familiariser avec l''exploration passionnante de l''univers. Comment concevoir un kit basique d''astronomie ? Quels conseils suivre pour bien choisir votre paire de jumelles ou votre télescope et déambuler entre les constellations ?  A mesure que vous deviendrez expérimentés, des thèmes plus complexes vous seront proposés : la photographie d''objets célestes grâce à la technique de l''astrophotographie ; la contemplation de vues étonnantes de la lune, des étoiles binaires, des exoplanètes ou des nébuleuses… Devenez progressivement un maître en astronomie. Un guide pratique et pédagogique qui intéressera autant les novices que les experts.',  
    '2603024337',
    'Linda Shore, David Prosper, Vivian White', 
    GETDATE(), 
    GETDATE(),
    null
);


INSERT INTO dbo.[Article] (name, description, reference, author, createdAt, updatedAt, MarkId)
VALUES (
    'Le guide de l''astronome débutant - Bien commencer dans l''observation du ciel (36)', 
    'Ce guide d''initiation simple et très pédagogique aborde les notions principales de l''astronomie. En tant qu’astronome débutant, un certain nombre d’étapes vous seront utiles pour acquérir de bonnes bases et comprendre cette science. Quels conseils essentiels devriez-vous connaître avant vos premières observations ? Que peut-on observer à l''œil nu ? Comment bien choisir votre instrument d''observation du ciel ? Tous les conseils utiles et élémentaires vous seront ici enseignés. Le lecteur apprend ainsi à régler son instrument, se repérer dans le ciel, pointer ce qu''il souhaite observer et le conserver dans son viseur, etc. Apprenez aussi en dernier chapitre, une des techniques les plus avancées telles que l''astrophotographie, discipline qui consiste à photographier des objets célestes. Destiné aux néophytes, cet ouvrage est le livre idéal qui accompagnera vos premières sorties nocturnes grâce à son format poche.', 
    '2603027050', 
    'Tom Kerss (Auteur), Radmila Topalovic, Fanny Bouilly (Traduction)', 
    GETDATE(), 
    GETDATE(),
    null
);


INSERT INTO dbo.[Article] (name, description, reference, author, createdAt, updatedAt, MarkId)
VALUES (
    'Le système solaire : Une exploration visuelle des planètes, des lunes et autres corps célestes qui gravitent autour de notre soleil (37)', 
    'Le nom de notre système provient de l''ancien nom du Soleil : Sol. Notre système solaire représente l’ensemble du Soleil et des planètes qui gravitent autour de lui.Ce bel ouvrage relié que nous vous présentons est un cadeau offert aux lecteurs. Il offre une vraie incursion au cœur de notre système solaire. Comme si vous y étiez, découvrez les 8 planètes principales de notre système solaire, ses 5 planètes naines, ses 162 lunes planétaires, sa ceinture d''astéroïdes rocheuses et autres objets célestes. Jamais l''immensité du système solaire avec ses 8 planètes principales ne vous a été si clairement présentée. Après une revue détaillée du système solaire, découvrez chaque planète, de la plus proche à la plus lointaine, ainsi que les comètes et les astéroïdes. Partez en exploration sur la surface de Mars, traversez les anneaux de Saturne, éblouissez-vous avec Vénus, planète la plus brillante, volez au-dessus des volcans, enfin voguez à travers des rubans de gaz échappés du soleil. Diamètre, surface, volume, température de la surface, période orbitale sont autant d''informations qui viennent compléter cette somme foisonnante de connaissances.  Un grand et bel ouvrage, abordable pour les enfants, qui fera rêver petits et grands.', 
    '2809913528', 
    'Marcus Chown', 
    GETDATE(), 
    GETDATE(),
    null
);


INSERT INTO dbo.[Article] (name, description, reference, author, createdAt, updatedAt, MarkId)
VALUES (
    'Le grand atlas de l''astronomie Le Monde (38)', 
    '"Quand on regarde l''espace, on regarde le passé : on voit l''univers tel qu''il était " nous explique l''astrophysicien, vulgarisateur scientifique et écologiste canadien, Hubert Reeves. La composition de l''Univers, du système solaire aux étoiles, en passant par les galaxies, les constellations et les trous noirs, nous plonge dans un passé lointain aux origines encore mystérieuses. Toutefois, des datations très précises semblent accorder le monde scientifique. Peu à peu, l''Univers nous dévoile ses mystères. Les Éditions Atlas rééditent pour notre plus grand bonheur le Grand Atlas de l’Astronomie. Grand, d''abord par la taille de l’Atlas, il n''en fallait pas moins pour retranscrire la grandeur de notre Univers. Richement illustré sur un papier haute qualité, on y découvre des images satellites d''une précision incroyable issues directement de la NASA et d''impressionnants documents d’archives. Un incroyable livre qui nous permet de capter les plus infimes détails des planètes et des amas d''étoiles. Cet Atlas fait le point sur notre connaissance du système solaire, des galaxies, des étoiles, des constellations. Il revient également sur différentes missions telle la mission Rosetta de l’Agence spatiale européenne. Un livre documenté qui se feuillette comme un album photo. Il trouvera à coup sûr sa place dans vos rayonnages.', 
    '2344045007', 
    'Libreria Geografica', 
    GETDATE(), 
    GETDATE(),
    null
);


INSERT INTO dbo.[Article] (name, description, reference, author, createdAt, updatedAt, MarkId)
VALUES (
    'L''astrophysique : L''histoire de l''univers depuis le big bang (39)', 
    'L''astrophysique, l''Univers, le Big Bang... Autant de questions passionnantes et complexes. "Quand on regarde l''espace, on regarde le passé : on voit l''Univers tel qu''il était". Mais alors de quand daterait l''origine de la naissance de l''Univers ? L''Univers serait apparu il y a 13,77 milliards d’années. Cette « naissance » est ce que l''on nomme le Big Bang. L''astrophysique, science des astres et de l''architecture de l''univers, tente précisément de nous éclairer sur les mystères de l''Univers, et par conséquent nos origines. Pourquoi les étoiles meurent-elles ? Que fait un trou noir ? Pourquoi découvrons-nous encore de nouvelles planètes ? Marc Bousquet nous raconte l''histoire fascinante de la naissance de l''Univers. Ce guide complet vous aidera à mieux comprendre l''origine du monde et à en appréhender tous ses mystères.', 
    '2822605793',
    'Marc Bousquet, Yann Belloir, Paul Mallet, Eric Mathivet, Fabien Mieturka',  
    GETDATE(), 
    GETDATE(),
    null
);

INSERT INTO dbo.[Article] (name, description, reference, author, createdAt, updatedAt, MarkId)
VALUES (
    'Astronomie astrophysique (40)', 
    'L''astronomie serait la plus vieille science du monde. Elle décrit les astres et leurs mouvements et nous aide à découvrir la place de la Terre dans le monde. Cette science a permis de comprendre le principe des saisons, des périodes de glaciation, des marées, et bien d’autres phénomènes... L’astrophysique est quant à elle beaucoup plus jeune et débute au XXe siècle. Branche interdisciplinaire de l''astronomie, elle s’intéresse aux processus physiques qui permettent la naissance, la vie et la mort des étoiles, à la formation des trous noirs et l’évolution des galaxies et de l’Univers en général. Vous aimez observer le ciel ponctué d''étoiles fascinantes et intrigantes ? Alors plongez au cœur de ce livre et apprenez à mieux comprendre l’architecture de l’Univers, la complexification de la matière et son rayonnement, les propriétés et l’histoire des étoiles et des galaxies. Un livre abordable avec des termes et des calculs simples de niveau baccalauréat. Cet ouvrage, bien qu''il s’adresse en particulier aux étudiants (Licence 3 ou Master de physique), ainsi qu’aux enseignants, est aussi une bible incroyable pour tous les amateurs et férus d’astronomie. Le livre parfait pour survoler la science et ses mystères fascinants de manière ludique, claire et passionnante.', 
    '2100798588', 
    'Agnès Acker', 
    GETDATE(), 
    GETDATE(),
    null
);



-- ///////////////////////////////////////////////////////////////////////////// 
-- //////////////////////////////     EDUCATIF    ////////////////////////////////
-- ///////////////////////////////////////////////////////////////////////////// 


INSERT INTO dbo.[Article] (name, description, reference, author, createdAt, updatedAt, MarkId)
VALUES (
    'Je découvre l''espace - coffret avec lampe (41)', 
    'Un coffret contenant un livre de 48 pages, 1 lampe de poche avec ses piles et 3 rondelles kaleïdoscopiques. Chacune des rondelles permet de projeter 8 images de grande qualité. Le livre propose une première découverte de l''espace : sa naissance, les objets à observer (les galaxies, les étoiles, notre système solaire, les météorites...) et les différents moyens d''observation. Le livre permet aussi de commenter et d''expliquer à l''enfant les images qu''il peut projeter avec sa lampe.', 
    '2017862622', 
    'Anne Thomas-Belli', 
    GETDATE(), 
    GETDATE(),
    null
);


INSERT INTO dbo.[Article] (name, description, reference, author, createdAt, updatedAt, MarkId)
VALUES (
    'Mon coffret Montessori astronomie (42)', 
    'Un coffret complet pour que l''enfant découvre le Ciel
    La pédagogie de Maria Montessori au service de la connaissance des enfants
    Comment appréhender le monde qui nous entoure ? Dans la pédagogie Montessori, la prise en compte du Ciel s''inscrit dans cette compréhension du monde. 
    Avec ce coffret sur l''astronomie, l''enfant découvre à son rythme les étoiles, les constellations, les astéroïdes, les météores ou encore les galaxies qui peuplent le Ciel. 
    En suivant le livrer, le parent ou l''accompagnant peut expliquer à l''enfant ce qu''est l''astronomie et lui présenter tous les éléments qui forment le Ciel. 
    Si l''enfant sait déjà lire, il peut également évoluer en toute autonomie.', 
    '11194220', 
    null, 
    GETDATE(), 
    GETDATE(),
    null
);



INSERT INTO dbo.[Article] (name, description, reference, author, createdAt, updatedAt, MarkId)
VALUES (
    'Le super quiz de l''espace (43)', 
    'Une boîte en forme de cube qui renferme 250 cartes questions sur notre planète, le Sytème solaire, les étoiles, la conquète de l''espace, etc.', 
    '203587243X', 
    null, 
    GETDATE(), 
    GETDATE(),
    null
);

COMMIT;










-- ===============================================================================
--                                MM_Article_Category    
-- ===============================================================================

BEGIN TRANSACTION;

INSERT INTO dbo.[MM_Article_Category] (createdAt, updatedAt, ArticleId, CategoryId)
VALUES 
(
	GETDATE(),
	GETDATE(),
	1,
	1
)
INSERT INTO dbo.[MM_Article_Category] (createdAt, updatedAt, ArticleId, CategoryId)
VALUES 
(
	GETDATE(),
	GETDATE(),
	2,
	1
)
INSERT INTO dbo.[MM_Article_Category] (createdAt, updatedAt, ArticleId, CategoryId)
VALUES 
(
	GETDATE(),
	GETDATE(),
	3,
	1
)
INSERT INTO dbo.[MM_Article_Category] (createdAt, updatedAt, ArticleId, CategoryId)
VALUES 
(
	GETDATE(),
	GETDATE(),
	4,
	1
)
INSERT INTO dbo.[MM_Article_Category] (createdAt, updatedAt, ArticleId, CategoryId)
VALUES 
(
	GETDATE(),
	GETDATE(),
	5,
	1
)
INSERT INTO dbo.[MM_Article_Category] (createdAt, updatedAt, ArticleId, CategoryId)
VALUES 
(
	GETDATE(),
	GETDATE(),
	6,
	1
)
INSERT INTO dbo.[MM_Article_Category] (createdAt, updatedAt, ArticleId, CategoryId)
VALUES 
(
	GETDATE(),
	GETDATE(),
	7,
	1
)
INSERT INTO dbo.[MM_Article_Category] (createdAt, updatedAt, ArticleId, CategoryId)
VALUES 
(
	GETDATE(),
	GETDATE(),
	8,
	1
)
INSERT INTO dbo.[MM_Article_Category] (createdAt, updatedAt, ArticleId, CategoryId)
VALUES 
(
	GETDATE(),
	GETDATE(),
	9,
	1
)
INSERT INTO dbo.[MM_Article_Category] (createdAt, updatedAt, ArticleId, CategoryId)
VALUES 
(
	GETDATE(),
	GETDATE(),
	10,
	1
)
INSERT INTO dbo.[MM_Article_Category] (createdAt, updatedAt, ArticleId, CategoryId)
VALUES 
(
	GETDATE(),
	GETDATE(),
	10,
	6
)
INSERT INTO dbo.[MM_Article_Category] (createdAt, updatedAt, ArticleId, CategoryId)
VALUES 
(
	GETDATE(),
	GETDATE(),
	11,
	1
)
INSERT INTO dbo.[MM_Article_Category] (createdAt, updatedAt, ArticleId, CategoryId)
VALUES 
(
	GETDATE(),
	GETDATE(),
	11,
	6
)

INSERT INTO dbo.[MM_Article_Category] (createdAt, updatedAt, ArticleId, CategoryId)
VALUES 
(
	GETDATE(),
	GETDATE(),
	12,
	2
)
INSERT INTO dbo.[MM_Article_Category] (createdAt, updatedAt, ArticleId, CategoryId)
VALUES 
(
	GETDATE(),
	GETDATE(),
	13,
	2
)
INSERT INTO dbo.[MM_Article_Category] (createdAt, updatedAt, ArticleId, CategoryId)
VALUES 
(
	GETDATE(),
	GETDATE(),
	14,
	2
)
INSERT INTO dbo.[MM_Article_Category] (createdAt, updatedAt, ArticleId, CategoryId)
VALUES 
(
	GETDATE(),
	GETDATE(),
	15,
	2
)
INSERT INTO dbo.[MM_Article_Category] (createdAt, updatedAt, ArticleId, CategoryId)
VALUES 
(
	GETDATE(),
	GETDATE(),
	16,
	2
)
INSERT INTO dbo.[MM_Article_Category] (createdAt, updatedAt, ArticleId, CategoryId)
VALUES 
(
	GETDATE(),
	GETDATE(),
	17,
	2
)
INSERT INTO dbo.[MM_Article_Category] (createdAt, updatedAt, ArticleId, CategoryId)
VALUES 
(
	GETDATE(),
	GETDATE(),
	18,
	2
)
INSERT INTO dbo.[MM_Article_Category] (createdAt, updatedAt, ArticleId, CategoryId)
VALUES 
(
	GETDATE(),
	GETDATE(),
	19,
	2
)
INSERT INTO dbo.[MM_Article_Category] (createdAt, updatedAt, ArticleId, CategoryId)
VALUES 
(
	GETDATE(),
	GETDATE(),
	20,
	2
)
INSERT INTO dbo.[MM_Article_Category] (createdAt, updatedAt, ArticleId, CategoryId)
VALUES 
(
	GETDATE(),
	GETDATE(),
	21,
	2
)
INSERT INTO dbo.[MM_Article_Category] (createdAt, updatedAt, ArticleId, CategoryId)
VALUES 
(
	GETDATE(),
	GETDATE(),
	22,
	2
)
INSERT INTO dbo.[MM_Article_Category] (createdAt, updatedAt, ArticleId, CategoryId)
VALUES 
(
	GETDATE(),
	GETDATE(),
	23,
	2
)
INSERT INTO dbo.[MM_Article_Category] (createdAt, updatedAt, ArticleId, CategoryId)
VALUES 
(
	GETDATE(),
	GETDATE(),
	23,
	6
)

INSERT INTO dbo.[MM_Article_Category] (createdAt, updatedAt, ArticleId, CategoryId)
VALUES 
(
	GETDATE(),
	GETDATE(),
	24,
	3
)
INSERT INTO dbo.[MM_Article_Category] (createdAt, updatedAt, ArticleId, CategoryId)
VALUES 
(
	GETDATE(),
	GETDATE(),
	25,
	3
)
INSERT INTO dbo.[MM_Article_Category] (createdAt, updatedAt, ArticleId, CategoryId)
VALUES 
(
	GETDATE(),
	GETDATE(),
	26,
	3
)
INSERT INTO dbo.[MM_Article_Category] (createdAt, updatedAt, ArticleId, CategoryId)
VALUES 
(
	GETDATE(),
	GETDATE(),
	27,
	3
)

INSERT INTO dbo.[MM_Article_Category] (createdAt, updatedAt, ArticleId, CategoryId)
VALUES 
(
	GETDATE(),
	GETDATE(),
	28,
	4
)
INSERT INTO dbo.[MM_Article_Category] (createdAt, updatedAt, ArticleId, CategoryId)
VALUES 
(
	GETDATE(),
	GETDATE(),
	29,
	4
)
INSERT INTO dbo.[MM_Article_Category] (createdAt, updatedAt, ArticleId, CategoryId)
VALUES 
(
	GETDATE(),
	GETDATE(),
	30,
	4
)
INSERT INTO dbo.[MM_Article_Category] (createdAt, updatedAt, ArticleId, CategoryId)
VALUES 
(
	GETDATE(),
	GETDATE(),
	31,
	4
)

INSERT INTO dbo.[MM_Article_Category] (createdAt, updatedAt, ArticleId, CategoryId)
VALUES 
(
	GETDATE(),
	GETDATE(),
	32,
	5
)
INSERT INTO dbo.[MM_Article_Category] (createdAt, updatedAt, ArticleId, CategoryId)
VALUES 
(
	GETDATE(),
	GETDATE(),
	33,
	5
)
INSERT INTO dbo.[MM_Article_Category] (createdAt, updatedAt, ArticleId, CategoryId)
VALUES 
(
	GETDATE(),
	GETDATE(),
	33,
	6
)
INSERT INTO dbo.[MM_Article_Category] (createdAt, updatedAt, ArticleId, CategoryId)
VALUES 
(
	GETDATE(),
	GETDATE(),
	34,
	5
)
INSERT INTO dbo.[MM_Article_Category] (createdAt, updatedAt, ArticleId, CategoryId)
VALUES 
(
	GETDATE(),
	GETDATE(),
	35,
	5
)
INSERT INTO dbo.[MM_Article_Category] (createdAt, updatedAt, ArticleId, CategoryId)
VALUES 
(
	GETDATE(),
	GETDATE(),
	36,
	5
)
INSERT INTO dbo.[MM_Article_Category] (createdAt, updatedAt, ArticleId, CategoryId)
VALUES 
(
	GETDATE(),
	GETDATE(),
	37,
	5
)
INSERT INTO dbo.[MM_Article_Category] (createdAt, updatedAt, ArticleId, CategoryId)
VALUES 
(
	GETDATE(),
	GETDATE(),
	38,
	5
)
INSERT INTO dbo.[MM_Article_Category] (createdAt, updatedAt, ArticleId, CategoryId)
VALUES 
(
	GETDATE(),
	GETDATE(),
	39,
	5
)
INSERT INTO dbo.[MM_Article_Category] (createdAt, updatedAt, ArticleId, CategoryId)
VALUES 
(
	GETDATE(),
	GETDATE(),
	40,
	5
)

INSERT INTO dbo.[MM_Article_Category] (createdAt, updatedAt, ArticleId, CategoryId)
VALUES 
(
	GETDATE(),
	GETDATE(),
	41,
	6
)
INSERT INTO dbo.[MM_Article_Category] (createdAt, updatedAt, ArticleId, CategoryId)
VALUES 
(
	GETDATE(),
	GETDATE(),
	42,
	6
)
INSERT INTO dbo.[MM_Article_Category] (createdAt, updatedAt, ArticleId, CategoryId)
VALUES 
(
	GETDATE(),
	GETDATE(),
	43,
	6
)

COMMIT;















-- ===============================================================================
--                                MM_Article_store    
-- ===============================================================================

BEGIN TRANSACTION;

INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	619,
    0.1,
    10,
    GETDATE(),
	GETDATE(),
	1,
	1
)
INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	619,
    0.15,
    4,
    GETDATE(),
	GETDATE(),
	1,
	2
)
INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	619,
    0.05,
    7,
    GETDATE(),
	GETDATE(),
	1,
	3
)
INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	619,
    0.25,
    12,
    GETDATE(),
	GETDATE(),
	1,
	4
)
INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	619,
    0.2,
    8,
    GETDATE(),
	GETDATE(),
	1,
	5
)
INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	619,
    0,
    10,
    GETDATE(),
	GETDATE(),
	1,
	6
)

-- /////////////////////////////////////////////////////////////////////////////////////////////////////
-- /////////////////////////////////////////////////////////////////////////////////////////////////////
-- /////////////////////////////////////////////////////////////////////////////////////////////////////

INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	599,
    0.1,
    10,
    GETDATE(),
	GETDATE(),
	2,
	1
)
INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	599,
    0.15,
    4,
    GETDATE(),
	GETDATE(),
	2,
	2
)
INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	599,
    0.05,
    7,
    GETDATE(),
	GETDATE(),
	2,
	3
)
INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	599,
    0.25,
    12,
    GETDATE(),
	GETDATE(),
	2,
	4
)
INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	599,
    0.2,
    8,
    GETDATE(),
	GETDATE(),
	2,
	5
)
INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	599,
    0,
    10,
    GETDATE(),
	GETDATE(),
	2,
	6
)


-- /////////////////////////////////////////////////////////////////////////////////////////////////////
-- /////////////////////////////////////////////////////////////////////////////////////////////////////
-- /////////////////////////////////////////////////////////////////////////////////////////////////////

INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	559,
    0.1,
    10,
    GETDATE(),
	GETDATE(),
	3,
	1
)
INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	559,
    0.15,
    4,
    GETDATE(),
	GETDATE(),
	3,
	2
)
INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	559,
    0.05,
    7,
    GETDATE(),
	GETDATE(),
	3,
	3
)
INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	559,
    0.25,
    12,
    GETDATE(),
	GETDATE(),
	3,
	4
)
INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	559,
    0.2,
    8,
    GETDATE(),
	GETDATE(),
	3,
	5
)
INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	559,
    0,
    10,
    GETDATE(),
	GETDATE(),
	3,
	6
)


-- /////////////////////////////////////////////////////////////////////////////////////////////////////
-- /////////////////////////////////////////////////////////////////////////////////////////////////////
-- /////////////////////////////////////////////////////////////////////////////////////////////////////

INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	8250,
    0.1,
    10,
    GETDATE(),
	GETDATE(),
	4,
	1
)
INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	8250,
    0.15,
    4,
    GETDATE(),
	GETDATE(),
	4,
	2
)
INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	8250,
    0.05,
    7,
    GETDATE(),
	GETDATE(),
	4,
	3
)
INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	8250,
    0.25,
    12,
    GETDATE(),
	GETDATE(),
	4,
	4
)
INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	8250,
    0.2,
    8,
    GETDATE(),
	GETDATE(),
	4,
	5
)
INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	8250,
    0,
    10,
    GETDATE(),
	GETDATE(),
	4,
	6
)


-- /////////////////////////////////////////////////////////////////////////////////////////////////////
-- /////////////////////////////////////////////////////////////////////////////////////////////////////
-- /////////////////////////////////////////////////////////////////////////////////////////////////////

INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	2056.15,
    0.1,
    10,
    GETDATE(),
	GETDATE(),
	5,
	1
)
INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	2056.15,
    0.15,
    4,
    GETDATE(),
	GETDATE(),
	5,
	2
)
INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	2056.15,
    0.05,
    7,
    GETDATE(),
	GETDATE(),
	5,
	3
)
INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	2056.15,
    0.25,
    12,
    GETDATE(),
	GETDATE(),
	5,
	4
)
INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	2056.15,
    0.2,
    8,
    GETDATE(),
	GETDATE(),
	5,
	5
)
INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	2056.15,
    0,
    10,
    GETDATE(),
	GETDATE(),
	5,
	6
)
-- /////////////////////////////////////////////////////////////////////////////////////////////////////
-- /////////////////////////////////////////////////////////////////////////////////////////////////////
-- /////////////////////////////////////////////////////////////////////////////////////////////////////

INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	1999.55,
    0.1,
    10,
    GETDATE(),
	GETDATE(),
	6,
	1
)
INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	1999.55,
    0.15,
    4,
    GETDATE(),
	GETDATE(),
	6,
	2
)
INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	1999.55,
    0.05,
    7,
    GETDATE(),
	GETDATE(),
	6,
	3
)
INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	1999.55,
    0.25,
    12,
    GETDATE(),
	GETDATE(),
	6,
	4
)
INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	1999.55,
    0.2,
    8,
    GETDATE(),
	GETDATE(),
	6,
	5
)
INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	1999.55,
    0,
    10,
    GETDATE(),
	GETDATE(),
	6,
	6
)
-- /////////////////////////////////////////////////////////////////////////////////////////////////////
-- /////////////////////////////////////////////////////////////////////////////////////////////////////
-- /////////////////////////////////////////////////////////////////////////////////////////////////////

INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	2056.15,
    0.1,
    10,
    GETDATE(),
	GETDATE(),
	7,
	1
)
INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	2056.15,
    0.15,
    4,
    GETDATE(),
	GETDATE(),
	7,
	2
)
INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	2056.15,
    0.05,
    7,
    GETDATE(),
	GETDATE(),
	7,
	3
)
INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	2056.15,
    0.25,
    12,
    GETDATE(),
	GETDATE(),
	7,
	4
)
INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	2056.15,
    0.2,
    8,
    GETDATE(),
	GETDATE(),
	7,
	5
)
INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	2056.15,
    0,
    10,
    GETDATE(),
	GETDATE(),
	7,
	6
)

-- /////////////////////////////////////////////////////////////////////////////////////////////////////
-- /////////////////////////////////////////////////////////////////////////////////////////////////////
-- /////////////////////////////////////////////////////////////////////////////////////////////////////

INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	1250,
    0.1,
    10,
    GETDATE(),
	GETDATE(),
	8,
	1
)
INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	1250,
    0.15,
    4,
    GETDATE(),
	GETDATE(),
	8,
	2
)
INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	1250,
    0.05,
    7,
    GETDATE(),
	GETDATE(),
	8,
	3
)
INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	1250,
    0.25,
    12,
    GETDATE(),
	GETDATE(),
	8,
	4
)
INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	1250,
    0.2,
    8,
    GETDATE(),
	GETDATE(),
	8,
	5
)
INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	1250,
    0,
    10,
    GETDATE(),
	GETDATE(),
	8,
	6
)

-- /////////////////////////////////////////////////////////////////////////////////////////////////////
-- /////////////////////////////////////////////////////////////////////////////////////////////////////
-- /////////////////////////////////////////////////////////////////////////////////////////////////////

INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	1250,
    0.1,
    10,
    GETDATE(),
	GETDATE(),
	9,
	1
)
INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	1250,
    0.15,
    4,
    GETDATE(),
	GETDATE(),
	9,
	2
)
INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	1250,
    0.05,
    7,
    GETDATE(),
	GETDATE(),
	9,
	3
)
INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	1250,
    0.25,
    12,
    GETDATE(),
	GETDATE(),
	9,
	4
)
INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	1250,
    0.2,
    8,
    GETDATE(),
	GETDATE(),
	9,
	5
)
INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	1250,
    0,
    10,
    GETDATE(),
	GETDATE(),
	9,
	6
)

-- /////////////////////////////////////////////////////////////////////////////////////////////////////
-- /////////////////////////////////////////////////////////////////////////////////////////////////////
-- /////////////////////////////////////////////////////////////////////////////////////////////////////

INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	32.90,
    0.1,
    10,
    GETDATE(),
	GETDATE(),
	10,
	1
)
INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	32.90,
    0.15,
    4,
    GETDATE(),
	GETDATE(),
	10,
	2
)
INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	32.90,
    0.05,
    7,
    GETDATE(),
	GETDATE(),
	10,
	3
)
INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	32.90,
    0.25,
    12,
    GETDATE(),
	GETDATE(),
	10,
	4
)
INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	32.90,
    0.2,
    8,
    GETDATE(),
	GETDATE(),
	10,
	5
)
INSERT INTO dbo.[MM_Article_Store] (price, discount, stock, createdAt, updatedAt, ArticleId, StoreId)
VALUES 
(
	32.90,
    0,
    10,
    GETDATE(),
	GETDATE(),
	10,
	6
)

COMMIT;














-- ===============================================================================
--                                COMANDES    
-- ===============================================================================


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














-- ===============================================================================
--                                MM_Article_Order    
-- ===============================================================================

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






















-- ===============================================================================
--                                MM_Article_User    
-- ===============================================================================



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





-- ===============================================================================
--                                PHOTO    
-- ===============================================================================

BEGIN TRANSACTION;


COMMIT;



