# ************************************************************
# Sequel Pro SQL dump
# Version 4096
#
# http://www.sequelpro.com/
# http://code.google.com/p/sequel-pro/
#
# Host: localhost (MySQL 5.5.38)
# Database: t3c-soccer
# Generation Time: 2015-11-01 03:55:02 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table attendance_record
# ------------------------------------------------------------

DROP TABLE IF EXISTS `attendance_record`;

CREATE TABLE `attendance_record` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `date` varchar(11) NOT NULL DEFAULT '',
  `white_team_flag` tinyint(1) DEFAULT NULL,
  `player` varchar(20) NOT NULL DEFAULT '',
  `first_name` varchar(11) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table players
# ------------------------------------------------------------

DROP TABLE IF EXISTS `players`;

CREATE TABLE `players` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(10) NOT NULL DEFAULT '',
  `last_name` varchar(10) NOT NULL DEFAULT '',
  `login_name` varchar(10) NOT NULL DEFAULT '',
  `login_pwd` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `players` WRITE;
/*!40000 ALTER TABLE `players` DISABLE KEYS */;

INSERT INTO `players` (`id`, `first_name`, `last_name`, `login_name`, `login_pwd`)
VALUES
	(1,'Ke','Zhang','kzhan007','123'),
	(2,'Yue','Li','yueli','123'),
	(3,'Tianwei','Zhang','tianweiz','123');

/*!40000 ALTER TABLE `players` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table record
# ------------------------------------------------------------

DROP TABLE IF EXISTS `record`;

CREATE TABLE `record` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table schedule
# ------------------------------------------------------------

DROP TABLE IF EXISTS `schedule`;

CREATE TABLE `schedule` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `date` varchar(11) NOT NULL DEFAULT '',
  `weekday` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `schedule` WRITE;
/*!40000 ALTER TABLE `schedule` DISABLE KEYS */;

INSERT INTO `schedule` (`id`, `date`, `weekday`)
VALUES
	(1,'2015-10-12',3),
	(2,'2015-10-14',3),
	(3,'2015-10-19',1),
	(4,'2015-10-21',3);

/*!40000 ALTER TABLE `schedule` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
