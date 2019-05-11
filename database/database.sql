/*CREATE DATABASE ng_gamesFinal01_db;
CREATE TABLE game(
   id INT AUTO_INCREMENT PRIMARY KEY,
   title VARCHAR(180),
   description VARCHAR(255),
   image VARCHAR(200),
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
RENAME TABLE game to games;
DESCRIBE games;
 */

CREATE DATABASE IF NOT EXISTS `db_awing` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci; 
USE `db_awing`;

DROP TABLE IF EXISTS `starship`;
CREATE TABLE `starship` (
  `cod_starship` int(11) AUTO_INCREMENT NOT NULL PRIMARY KEY COMMENT 'Código da nave',
  `cod_type` int(11) NOT NULL COMMENT 'Tipo de nave',
  `nom_starship` varchar(30) COLLATE utf8_unicode_ci NOT NULL COMMENT 'Nome da nave',
  `imagem` varchar(300) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Link para uma imagem da nave',
  `descricao` varchar(3000) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Descrição da nave',
  `datahora` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Data e Hora de ultima atualização'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='Naves utilizadas no universo Star Wars';

--
-- Tabela truncada antes do insert `starship`
--

TRUNCATE TABLE `starship`;


