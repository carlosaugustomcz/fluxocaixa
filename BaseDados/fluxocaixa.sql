# DBTools DBMYSQL - MySQL Database Dump
#
# USEGO
CREATE DATABASE `fluxocaixa`;
# GO
USE `fluxocaixa`;
# GO
SET FOREIGN_KEY_CHECKS=0;

# GO
# Dumping Table Structure for categorias

#
CREATE TABLE `categorias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descricao` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
# GO
#

# Dumping Data for categorias
#
BEGIN;
# GO
INSERT INTO `categorias` (id, descricao) VALUES (1, 'Água');
# GO
INSERT INTO `categorias` (id, descricao) VALUES (2, 'Energia');
# GO
INSERT INTO `categorias` (id, descricao) VALUES (4, 'Aluguel');
# GO
COMMIT;
# GO
# Dumping Table Structure for movimentacoes

#
CREATE TABLE `movimentacoes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descricao` varchar(200) NOT NULL,
  `data` date NOT NULL,
  `idCategoria` int(11) NOT NULL,
  `valor` decimal(10,2) NOT NULL,
  `dataEntrada` date DEFAULT NULL,
  `dataSaida` date DEFAULT NULL,
  `tipo` char(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_movimento_entrada` (`valor`),
  KEY `FK_movimento_saida` (`dataEntrada`),
  KEY `FK_movimento_categoria` (`idCategoria`),
  CONSTRAINT `FK_movimento_categoria` FOREIGN KEY (`idCategoria`) REFERENCES `categorias` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
# GO
#

# Dumping Data for movimentacoes
#
BEGIN;
# GO
INSERT INTO `movimentacoes` (id, descricao, data, idCategoria, valor, dataEntrada, dataSaida, tipo) VALUES (3, 'Pagamento da Casal Janeiro', '2021-01-03', 1, 120.00, NULL, '2021-01-03', 'S');
# GO
INSERT INTO `movimentacoes` (id, descricao, data, idCategoria, valor, dataEntrada, dataSaida, tipo) VALUES (5, 'Pagamento da Energia Janeiro', '2021-01-03', 2, 120.00, NULL, '2021-01-03', 'S');
# GO
INSERT INTO `movimentacoes` (id, descricao, data, idCategoria, valor, dataEntrada, dataSaida, tipo) VALUES (7, 'Recebimento do Aluguel Janeiro', '2021-01-03', 4, 500.00, '2021-01-03', NULL, 'E');
# GO
INSERT INTO `movimentacoes` (id, descricao, data, idCategoria, valor, dataEntrada, dataSaida, tipo) VALUES (8, 'Pagamento da Casal Dezenbro', '2021-01-03', 1, 120.00, NULL, '2021-01-03', 'S');
# GO
COMMIT;
# GO
# Dumping Views
# Dumping User Defined Functions
# Dumping Stored Procedures
SET FOREIGN_KEY_CHECKS=1

# GO
