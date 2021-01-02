# DBTools DBMYSQL - MySQL Database Dump
#
# USEGO
CREATE DATABASE `anestech`;
# GO
USE `anestech`;
# GO
SET FOREIGN_KEY_CHECKS=0;

# GO
# Dumping Table Structure for tarefas

#
CREATE TABLE `tarefas` (
  `idTarefa` int(11) NOT NULL AUTO_INCREMENT,
  `responsavel` int(11) NOT NULL,
  `status` varchar(50) NOT NULL,
  `descricao` varchar(200) NOT NULL,
  `dataHoraInicio` datetime DEFAULT NULL,
  `dataHoraFinal` datetime DEFAULT NULL,
  `dataHoraCriacao` datetime DEFAULT NULL,
  PRIMARY KEY (`idTarefa`),
  KEY `FK_tarefas_status` (`status`),
  KEY `FK_tarefas_usuarios` (`responsavel`),
  CONSTRAINT `FK_tarefas_usuarios` FOREIGN KEY (`responsavel`) REFERENCES `usuarios` (`idUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
# GO
#

# Dumping Data for tarefas
#
BEGIN;
# GO
COMMIT;
# GO
# Dumping Table Structure for usuarios

#
CREATE TABLE `usuarios` (
  `idUsuario` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `email` varchar(300) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  PRIMARY KEY (`idUsuario`),
  KEY `FK_usuarios_tipo` (`tipo`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
# GO
#

# Dumping Data for usuarios
#
BEGIN;
# GO
COMMIT;
# GO
# Dumping Views
# Dumping User Defined Functions
# Dumping Stored Procedures
SET FOREIGN_KEY_CHECKS=1

# GO
