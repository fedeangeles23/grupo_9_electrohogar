-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: electrohogarDB3
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.22-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `addresses`
--

DROP TABLE IF EXISTS `addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `addresses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `street` varchar(100) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `province` varchar(100) DEFAULT NULL,
  `number` int(11) DEFAULT NULL,
  `postal_code` int(11) DEFAULT NULL,
  `userId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `addresses_FK` (`userId`),
  CONSTRAINT `addresses_FK` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Celulares'),(2,'TV & Audio'),(3,'Electro'),(4,'Computacion'),(5,'Gaming'),(6,'Climatizacion'),(7,'Movilidad');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_items`
--

DROP TABLE IF EXISTS `order_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `order_items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `orderId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `order_items_un` (`id`),
  KEY `order_items_FK` (`productId`),
  KEY `order_items_FK_1` (`orderId`),
  CONSTRAINT `order_items_FK` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `order_items_FK_1` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_items`
--

LOCK TABLES `order_items` WRITE;
/*!40000 ALTER TABLE `order_items` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `state` varchar(100) NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `orders_un` (`id`),
  KEY `orders_FK` (`userId`),
  CONSTRAINT `orders_FK` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=115 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `price` int(11) NOT NULL,
  `discount` decimal(10,0) DEFAULT NULL,
  `description` varchar(800) DEFAULT NULL,
  `subcategoryId` int(11) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `cuotes` decimal(10,0) DEFAULT NULL,
  `brand` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `subcategory_idx` (`subcategoryId`),
  CONSTRAINT `subcategory` FOREIGN KEY (`subcategoryId`) REFERENCES `subcategories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=99 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Celular Samsung Galaxy S21 FE 128GB',124999,5,'Ã‚Â¡QuÃƒÂ© no se le escape la toma perfecta! los galaxy s21+ 5g han sido diseÃƒÂ±ados para revolucionar el vÃƒÂ­deo y la fotografÃƒÂ­a, con una resoluciÃƒÂ³n 8k cinematogrÃƒÂ¡fica superior para que puedas extraer fotos impresionantes de sus grabaciones. Disponible en dos tamaÃƒÂ±os, 64 mp de cÃƒÂ¡mara, nuestro chip mÃƒÂ¡s rÃƒÂ¡pido incorporado y con baterÃƒÂ­a para todo el dÃƒÂ­a. Ã‚Â¡haga de su realidad algo ÃƒÂ©pico!',1,NULL,NULL,12,'Samsung'),(2,'Celular Samsung Galaxy S20 FE 128GB',94999,5,'Con pÃ­xeles mÃ¡s grandes e IA de cÃ¡mara mejorada, la cÃ¡mara trasera del Galaxy S20 FE se ajusta para recibir mÃ¡s luz incluso cuando estÃ¡ oscuro, de forma que sus fotos salen con mÃ¡s detalle y color. TambiÃ©n puede tomar mÃºltiples fotos instantÃ¡neamente, procesÃ¡ndolas en una Ãºnica foto nocturna.',1,NULL,NULL,12,'Samsung'),(3,'Celular Samsung Galaxy A12 64GB',33999,5,'La cÃ¡mara de profundidad de 2 MP le permite ajustar la profundidad de campo en tus fotografÃ­as. Con un solo toque, podrÃ¡ editar fÃ¡cilmente el desenfoque del fondo detrÃ¡s del sujeto para retratos de alta calidad que realmente destacan. Con la cÃ¡mara frontal y la funciÃ³n Live Focus del Galaxy A12 de 8 megapÃ­xeles, es muy fÃ¡cil capturar selfies increÃ­bles que le hacen destacar y desefoncan el fondo.',1,NULL,NULL,12,'Samsung'),(4,'Smartwatch Samsung Galaxy Watch3 45mm',56999,5,'Un reloj que te cuida. El Galaxy Watch3 combina la productividad de un smartphone y la tecnologÃ­a lÃ­der en salud, en un dispositivo clÃ¡sico y de primera calidad. Siendo el reloj Galaxy mÃ¡s innovador hasta la fecha, el Galaxy Watch3 te ayuda a controlar tu vida y tu salud para que el bienestar estÃ© al alcance de tus manos.',2,NULL,NULL,6,'Samsung'),(5,'Smartwatch Samsung Fit 2',6799,5,'El Galaxy Fit2 es tan resistente como vos. Es sumergible hasta 50m y cuenta con certificaciÃ³n de 5ATM, por lo que no vas a tener que preocuparte por Ã©l durante tus entrenamientos. HacÃ© ejercicio con total confianza. Si tus sesiones requieren lo mejor de vos, lo mismo deberÃ­as poder pedir a tu equipo. El Galaxy Fit2 te mantendrÃ¡ activo todo el dÃ­a. SeguirÃ¡ tu actividad diaria sin apenas notarlo e incluso monitorearÃ¡ tu calidad de sueÃ±o de forma consistente, todo con una sola carga.',2,NULL,NULL,3,'Samsung'),(6,'Smartwatch Samsung Galaxy Watch3 41mm',52999,5,'Un reloj que te cuida. El Galaxy Watch3 combina la productividad de un smartphone y la tecnologÃ­a lÃ­der en salud, en un dispositivo clÃ¡sico y de primera calidad. Siendo el reloj Galaxy mÃ¡s innovador hasta la fecha, el Galaxy Watch3 te ayuda a controlar tu vida y tu salud para que el bienestar estÃ© al alcance de tus manos. Con mÃ¡s de 120 programas de entrenamiento para elegir realizar en casa, el Galaxy Watch3 te ayuda a mover el cuerpo a tu ritmo. ElegÃ­ uno desde tu telÃ©fono y transmitilo en tu TV. Te mostrarÃ¡ tu ritmo cardÃ­aco en tiempo real mientras te ejercitÃ¡s. UsÃ¡ la correa Ridge Sport para obtener estadÃ­sticas aÃºn mÃ¡s precisas.',2,NULL,NULL,6,'Samsung'),(7,'Cargador Inalambrico Foxbox Transmit',1949,5,'Tiene un cargador InalÃ¡mbrico Activa Carga RÃ¡pida en todos los celulares con dicha tecnologÃ­a (Tiene que utilizar cargador Fast Charge para que active)',3,NULL,NULL,3,'Foxbox'),(8,'Cable Foxbox Cord Type-C',524,5,'Cable Foxbox Cord es un producto de calidad Homologado.\r\nMaterial Super resistente de 1 Mts la medida perfecta para que no te quedes corto y tampoco te sobre mucho cable.',3,NULL,NULL,3,'Foxbox'),(9,'Funda de silicona Samsung Galaxy S21 5G',4399,5,'Elegante a la vista y suave al tacto. El acabado mate ofrece un agarre cÃ³modo, que protege las esquinas y la parte posterior del telÃ©fono para brindar protecciÃ³n, a pesar de su diseÃ±o delgado. Todo en colores diseÃ±ados para complementar los Galaxy S21 5G y S21+ 5G.',3,NULL,NULL,3,'Samsung'),(10,'Smart TV Samsung 32 T4300 EQ HD',35999,5,'Este diseÃ±o maravillosamente delgado se funde con cualquier decoraciÃ³n existente y mejora el estilo sin invadir el ambiente. Ideal para el trabajo desde casa. El acceso remoto te permite duplicar la pantalla de la computadora en la pantalla del televisor de forma inalÃ¡mbrica. TambiÃ©n podÃ©s acceder a la PC para trabajar con archivos o documentos con Microsoft Office 365, todo desde la comodidad de tu hogar.',4,NULL,NULL,24,'Samsung'),(11,'Smart TV Noblex 55\' 91DK55X9500 QLED 4K',86999,5,'tiene un sistema de retroiluminado llamado Full Array Dimming que permite que la pantalla ajuste la iluminaciÃ³n por zonas para crear un mejor contraste, brillos mÃ¡s intensos y sombras mejor definidas. Todo esto va a potenciar tu experiencia frente a la pantalla. reparÃ¡ las mejores noches de pelÃ­culas o maratones de series y dejate envolver por su sonido. Cuenta con 2 parlantes con una potencia de 10W cada uno y podrÃ¡s elegir entre 6 modos distintos de sonido: Standard, Dynamic, Cinema, Natural, Game y Footbal.',4,NULL,NULL,24,'Noblex'),(12,'Smart TV Samsung 43\' T5300 FHD',60999,5,'necesitÃ¡s de un control remoto para descubrir una infinidad de variedad de contenido. PodrÃ¡s controlar desde el decodificador hasta la consola de juegos, las aplicaciones e incluso la televisiÃ³n en vivo. PurColor hace que te sientas como si estuvieras en la escena, gracias a la expresiÃ³n de una amplia gama de colores para un rendimiento de imagen Ã³ptimo y una experiencia de visualizaciÃ³n inmersiva.',4,NULL,NULL,24,'Samsung'),(13,'Auricular Jbl Tune 710 BT',9499,5,'on el potente sonido JBL Pure Bass, los auriculares JBL TUNE 710BT reproducen de forma increÃ­ble e inalÃ¡mbrica. El ligero diseÃ±o integral ofrece la mÃ¡xima comodidad e inmersiÃ³n en el sonido. Con un gran rendimiento, se pueden plegar de una forma compacta para adaptarse a cualquier aventura. Responde llamadas y gestiona el sonido sin manos gracias al cÃ³modo botÃ³n del casco que tambiÃ©n activa los asistentes de voz para obtener ayuda sobre la marcha. DisfrÃºtalos durante todo el dÃ­a gracias a las 50 horas de autonomÃ­a de la baterÃ­a o extiende la diversiÃ³n sin fin con el cable de audio extraÃ­ble incluido.',5,NULL,NULL,3,'Jbl'),(14,'Auriculares In-ear InalÃ¡mbricos Jbl ',6999,5,'A diferencia de otras conectividades, este dispositivo estÃ¡ fabricado con tecnologÃ­a TWS (True Wireless Stereo). La misma permite una conexiÃ³n inalÃ¡mbrica total y funciona sin un solo cable entre pares. Con ella podrÃ¡s disfrutar del entorno sonoro sin necesidad de estar pendiente de conexiones fÃ­sicas. Con la versiÃ³n de bluetooth 5.0 tenÃ©s un montÃ³n de beneficios para aprovechar. En comparaciÃ³n a su antecesor BT 4.2, podrÃ¡s obtener velocidades de transmisiÃ³n de hasta 2.2 Mbps de datos y alcanzar una distancia mÃ¡xima de 200 metros de conexiÃ³n. Pero una de las novedades mÃ¡s sobresalientes es que con su modo dual tendrÃ¡s la posibilidad de reproducir audio al mismo tiempo en dos dispositivos diferentes.',5,NULL,NULL,3,'Jbl'),(15,'Auriculares Jbl Quantum 400 Rgb',13999,5,'No necesitas una entrada de primera fila para disfrutar de la experiencia de escuchar desde allÃ­. El audio en alta resoluciÃ³n y el sonido JBL Pro legendario te ofrecen una amplia gama de detalles y claridad. SumÃ©rgete en la mÃºsica tal como la pensaron tus intÃ©rpretes favoritos. OlvÃ­date de tener que trastear con todo para lograr el sonido perfecto. Solo tienes que pulsar el botÃ³n dedicado de la copa auricular derecha para potenciar los bajos al instante y permanecer en la zona.',5,NULL,NULL,6,'Jbl'),(16,'Barra de sonido JBL SB130',36999,5,'La configuraciÃ³n de canales 2.1 es la pieza fundamental de este equipo, encargada de reconstruir el audio en un sistema de mÃºltiples altavoces. La emisiÃ³n del sonido estereofÃ³nico jugarÃ¡ con altas y bajas frecuencias para lograr efectos Ãºnicos.',6,NULL,NULL,6,'Jbl'),(17,'Barra De Sonido Samsung Soundbar Hw-t420',40999,5,'ControlÃ¡ las funciones clave de la barra de sonido como la potencia, el volumen e incluso los efectos de sonido con el control remoto de tu televisor Samsung, directamente desde la TV. ConectÃ¡ la consola y obtenÃ© un sonido increÃ­ble, al instante. La configuraciÃ³n automÃ¡tica optimiza los ajustes de audio para una experiencia de juego perfecta y la tecnologÃ­a de cancelaciÃ³n de ruido elimina las distracciones con un audio mÃ¡s nÃ­tido que te ayudarÃ¡ a ganar.',6,NULL,NULL,6,'Samsung'),(18,'Barra de Sonido LG SK1D 100W 2.0ch',23999,5,'Control adaptable de sonido (ASC), el sonido ideal para cada contenido',6,NULL,NULL,6,'LG'),(19,'Lavavajillas 12 Cubiertos Midea Blanco',79999,5,'contribuye con el cuidado del medio ambiente, dado que sus funciones inteligentes permiten obtener los mismos resultados, reduciendo de manera efectiva el consumo de agua y energÃ­a y disminuyendo el nivel de ruido. Capacidad para 12 cubiertos: 6 programas de lavado. Delay start: 3/6/9 hs. Control digital. Display frontal. FunciÃ³n media carga. Eficiencia energÃ©tica: A+',7,NULL,NULL,6,'Midea'),(20,'Lavarropas Drean family 7 max',27549,5,'7 kg. de capacidad, sistema de lavado de alta eficiencia (Sistema Europeo), mÃ¡ximo nivel de automatismo y Ãºnico con tambor de acero inoxidable de su segmento, ahorro de 30% de energÃ­a elÃ©ctrica y 70% de consumo de agua, menor consumo de jabÃ³n, cuida la ropa como si lavaras a mano, 9 programas AUTOMÃ�TICOS de Lavado y Enjuague, motor Termoprotegido, y una bomba de desagote sumada a un interruptor de seguridad.',7,NULL,NULL,12,'Drean'),(21,'Lavarropas Samsung WW90J5410GS Inverter 9KG',113999,5,'La tecnologÃ­a Eco Bubbleâ„¢ ofrece un lavado poderoso, incluso a bajas temperaturas*. El detergente es convertido en burbujas, que penetran mÃ¡s rÃ¡pidamente en las telas y remueven las manchas fÃ¡cilmente, mientras protegen las telas y ahorran energÃ­a. Con EcoBubble, lavÃ¡ en frÃ­o con la misma efectividad que en agua caliente*. EcoBubble es un innovador sistema que transforma el detergente en estado lÃ­quido a burbujas, que pueden penetrar mucho mÃ¡s rÃ¡pidamente en las telas, permitiendo una remociÃ³n mÃ¡s efectiva de las manchas. Esto permite que puedas lavar con resultados excelentes incluso en agua frÃ­a, ahorrando energÃ­a y cuidando tus prendas de posibles daÃ±os por altas temperaturas.',7,NULL,NULL,12,'Samsung'),(22,'Heladera Samsung freezer Inverter ',111999,5,'La iluminaciÃ³n de LED de alta eficiencia es mÃ¡s delgada, frÃ­a y energÃ©ticamente mÃ¡s eficiente que la iluminaciÃ³n convencional. Ubicada en la parte superior y sobre los laterales, ilumina en forma atractiva y brillante cada rincÃ³n, asegurando una mejor visibilidad. Big Guard te permite almacenar contenedores grandes de bebidas en la puerta, junto con dos filas de latas y botellas. Big Guard tambiÃ©n es ideal para enfriar botellas de bebidas altas.',8,NULL,NULL,24,'Samsung'),(23,'Heladera Freezer Twin Cooling Plus',121999,5,'El sistema Twin Cooling Plusâ„¢ enfrÃ­a los compartimientos de manera separada para evitar que los olores indeseados pasen de la heladera al freezer. AsÃ­, los alimentos congelados mantienen mejor su sabor original. Ofrece lo Ãºltimo en almacenamiento flexible. ConvertÃ­ fÃ¡cilmente tu freezer en una heladera para mantener todos los alimentos frescos que necesites almacenar para diferentes temporadas u ocasiones especiales. O cambiÃ¡ a modo apagado* para ahorrar energÃ­a, segÃºn las especificaciones.',8,NULL,NULL,24,'Samsung'),(24,'Heladera Combi freezer ',136816,5,'Heladera con Freezer Abajo con Control Digital con 2 motores 358 Lts. Color Acero KGA-4094/8',8,NULL,NULL,24,'KGA'),(25,'Tostadora Smartlife  Inoxidable',4339,5,NULL,9,NULL,NULL,3,'Smartlife'),(26,'Aspiradora Robot Atma',38999,5,'Aspiradora y trapeadora. FunciÃ³n trapeadora con agua. Fintro HEPA. Power 55W. Motor Silencioso. Control remoto. 3 Niveles de Potencia. 4 programas de limpieza. 3 pares de sensores anti-drop. 10 pares de sensores anti-choque. ',9,NULL,NULL,6,'Atma'),(27,'Batidora de mano Atma 300W',4999,5,NULL,9,NULL,NULL,3,'Arma'),(28,'Cloudbook Laptop tablet Lenovo IdeaPad',59999,5,'Laptop-tablet para estudiantes y presupuestos limitados. Rendimiento de una portÃ¡til, pero con la libertad de una tablet. Software preinstalado Microsoft Office Hogar y Estudiantes 2019. Repleta de funciones a pesar de su prÃ¡ctico tamaÃ±o y bajo costo. Conectividad 4G LTE opcional. RÃ¡pida y con procesamiento fluido. Cuenta con dos cÃ¡maras y una baterÃ­a de larga duraciÃ³n.',10,NULL,NULL,6,'Lenovo'),(29,'Notebook HP Probook 240 G8 Core i5 8GB',115999,5,'HP EliteBook 855 se diseÃ±Ã³ para adaptarse a su forma de trabajo actual. Este equipo profesional delgado y ultraligero que es fÃ¡cil de transportarse ofrece con una relaciÃ³n pantalla-cuerpo del 85 por-ciento y un teclado silencioso y cÃ³modo para trabajar.',10,NULL,NULL,6,'Core'),(30,'Notebook Asus X515EA Intel Core i3 256GB 4GB ',96499,NULL,NULL,10,NULL,NULL,12,'Core'),(31,'Tablet Level up mymo 7 16 GB',11999,NULL,'Esta tablet es ideal para cada una de tus actividades: editar fotos, documentos, navegar por internet y ¡mucho más! Su diseño delgado, compacto y portátil es la combinación perfecta de rendimiento y versatilidad.\r\n\r\nTransferir, sincronizar y acceder a tus dispositivos las veces que quieras ahora es posible. Sus conexiones bluetooth, micro-usb, wi-fi te permiten potenciar sus funciones al máximo.',11,NULL,NULL,6,'Level up'),(32,'Tablet Samsung Galaxy Tab S7 Fe + S Pen ',109999,NULL,'Disfrutá de la elegancia de la Galaxy Tab S7 FE en tus manos. Esta tablet de una sola pieza se destaca por su mágnifico acabado y su reducido borde de cámara en la parte posterior, mientras que su delgado diseño te permite un agarre cómodo.  Disfrutá de los colores vibrantes que ofrece la pantalla de 12,4” de la Galaxy Tab S7 FE. Esta vibrante pantalla permite que los detalles se luzcan, y la experiencia cinematográfica es aún mejor con el increíble sonido de AKG. Los altavoces dobles y Dolby Atmos crean un increíble sonido envolvente para situarte en el centro de la escena.',11,NULL,NULL,6,'Level up'),(33,'Tablet Philco TP10F 10\' 32 GB',19999,NULL,'Microprocesador: A133, Quad-core ARM Cortex™-A53. S.O: Android 11. Slot de memoria: SDHC/SDXC. Resolución: 800x1280. Dimensiones (mm): 244x142x9.2. Peso (g): 500. Conectividad: Wi-Fi. Bluetooth: 4.2. Conexión micro USB. Batería: 5000 mAH. Alimentación: 5V 2A. Incluye: Funda.',11,NULL,NULL,6,'Samsung'),(34,'Impresora Multifuncional HP Ink Tank 415 ',34099,NULL,'Imprima fácilmente grandes volúmenes con un costo por página muy bajo y obtenga una impresión móvil sencilla. Con un sistema de tinta confiable sin derrames, podrá imprimir hasta 8,000 páginas en color o 6,000 en negro y producir calidad excepcional.',12,NULL,NULL,6,'Philco'),(35,'Impresora Multifuncional HP Deskjet Ink ',8699,NULL,NULL,12,NULL,NULL,3,'Ink'),(36,'Impresora Multifuncional HP Neverstop Laser ',48399,NULL,NULL,12,NULL,NULL,6,'DeskJet'),(37,'Consola Level up Retroboy plug and play',3999,NULL,'Conectalo a tu TV y juga! Video Game Console. Conectividad mediante RCA. Sonido estéreo. 7 botones con pad direccional de 8 posiciones.',13,NULL,NULL,3,'Neverstop'),(38,'Microsoft Xbox Series S 512GB',89999,NULL,'La nueva generación de videojuegos ofrece nuestra biblioteca de lanzamientos digitales más grande a la Xbox más pequeña de la historia. Con mundos más dinámicos, tiempos de carga más rápidos y la adición de Xbox Game Pass (se vende por separado), la Xbox Series S totalmente digital es el mejor valor disponible en el mundo de los videojuegos.',13,NULL,NULL,6,'Level up'),(39,'Consola Family Retro Nes HD Level Up',5999,NULL,'Conexión AV. Sonido estéreo. 2 joysticks de 6 botones. Pad direccional de 8 posiciónes. La consola incluye 500 juegos built in, no acepta cartuchos de juegos.',13,NULL,NULL,3,'Series'),(40,'Auricular Razer Kraken para Consola con cable',7999,NULL,'Gracias a los controladores optimizados de 40 mm, Razer Kraken X emite un sonido claro y equilibrado, tanto para las enormes explosiones en combate abierto como para las pisadas sigilosas de operaciones secretas. Diseñado de fábrica con un peso tan ligero que parecerá que no llevas nada en la cabeza.',14,NULL,NULL,3,'Level up'),(41,'Combo gamer 3 en 1 Greenfox ',4943,NULL,'Mouse gaming premium 7D. Aceleración máxima 20G. Velocidad máxima: 60 pulgadas/segundo. Frecuencia de actualización: 6000 cuadros/segundo. Resoluciones: 1200/2400/4800/7200 DPI. Retroiluminación RGB programable. Cable trenzado de 1,5 m. Puerto USB 1.1',14,NULL,NULL,3,'Greenfox'),(42,'Auriculares Razer Kraken Kitty Chroma USB',18719,NULL,'¡Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los Razer Kitty no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores.',14,NULL,NULL,6,'Razer'),(43,'Calefactor de vidrio Liliana con termostato ',8549,NULL,'Dependiendo de la temperatura que quieras alcanzar vas a poder seleccionar entre sus 3 niveles de potencia, así disfrutarás de un invierno más placentero. Además, con su termostato controlarás la temperatura de manera segura ya que hará que el electrodoméstico se apague cuando el ambiente haya alcanzando la temperatura seleccionada, volviéndose a encender cuando el calor baja.',15,NULL,NULL,3,'Liliana'),(44,'Calefactor de vidrio con termostato 2200W',7559,NULL,'A diferencia de los sistemas de calefacción por gas, este tipo de convectores no produce ni el humo ni los gases tóxicos que se desprenden de la combustión por lo que tampoco genera olor y puede utilizarse en espacios cerrados sin ventilación. Además, es práctico y ecológicamente amigable. El PPV200 tiene dos niveles de potencia con un máximo de 1200 watts, pero, al mismo tiempo, dispone de un termostato para regular de manera manual la temperatura perfecta. incorpora, además, corte de seguridad por caída y sobrecalentamiento.',15,NULL,NULL,3,'Liliana'),(45,'Calefactor de vidrio Liliana con Turbina ',9449,NULL,NULL,15,NULL,NULL,3,'Liliana'),(46,'Monopatin eléctrico Fiat plegable ',105999,NULL,NULL,16,NULL,NULL,6,'Fiat'),(47,'Hooverboard Kany H80 8,5\'',43999,NULL,NULL,17,NULL,NULL,6,'Kany'),(48,'Hoverboard Kany H65',36999,NULL,NULL,17,NULL,NULL,6,'Kany');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_brand`
--

DROP TABLE IF EXISTS `products_brand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products_brand` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `marca` varchar(100) NOT NULL,
  `productId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `products_marca_FK` (`productId`),
  CONSTRAINT `products_marca_FK` FOREIGN KEY (`productId`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_brand`
--

LOCK TABLES `products_brand` WRITE;
/*!40000 ALTER TABLE `products_brand` DISABLE KEYS */;
/*!40000 ALTER TABLE `products_brand` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_images`
--

DROP TABLE IF EXISTS `products_images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products_images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(100) NOT NULL,
  `productId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `products_images_FK` (`productId`),
  CONSTRAINT `products_images_FK` FOREIGN KEY (`productId`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_images`
--

LOCK TABLES `products_images` WRITE;
/*!40000 ALTER TABLE `products_images` DISABLE KEYS */;
INSERT INTO `products_images` VALUES (1,'SAMSUNGS21.jpg',1),(2,'Celular Samsung Galaxy S20 FE 128GB.jpg',2),(3,'Celular Samsung Galaxy A12 64GB.jpg',3),(4,'Smartwatch Samsung Galaxy Watch3 45mm.jpg',4),(5,'Smartwatch Samsung Fit 2.jpg',5),(6,'Smartwatch Samsung Galaxy Watch3 41mm.jpg',6),(7,'Cargador Inalambrico Foxbox Transmit.jpg',7),(8,'Cable Foxbox Cord Type-C.jpg',8),(9,'Funda de silicona Samsung Galaxy S21 5G.jpg',9),(10,'Smart TV Samsung 32 T4300 EQ HD.jpg',10),(11,'Smart TV Noblex 55\' 91DK55X9500 QLED 4K.jpg',11),(12,'Smart TV Samsung 43\' T5300 FHD.jpg',12),(13,'Auricular Jbl Tune 710 BT.jpg',13),(14,'Auriculares In-ear InalÃ¡mbricos Jbl.jpg',14),(15,'Auriculares Jbl Quantum 400 Rgb.jpg',15),(16,'Barra de sonido JBL SB130.jpg',16),(17,'Barra De Sonido Samsung Soundbar Hw-t420.jpg',17),(18,'Barra de Sonido LG SK1D 100W 2.0ch.jpg',18),(19,'Lavavajillas 12 Cubiertos Midea Blanco.jpg',19),(20,'Lavarropas Drean family 7 max.jpg',20),(21,'Lavarropas Samsung WW90J5410GS Inverter 9KG.jpg',21),(22,'Heladera Samsung freezer Inverter.jpg',22),(23,'Heladera Freezer Twin Cooling Plus.jpg',23),(24,'Heladera Combi freezer .jpg',24),(25,'Tostadora Smartlife  Inoxidable.jpg',25),(26,'Aspiradora Robot Atma.jpg',26),(27,'Batidora de mano Atma 300W.jpg',27),(28,'Cloudbook Laptop tablet Lenovo IdeaPad.jpg',28),(29,'Notebook HP Probook 240 G8 Core i5 8GB.jpg',29),(30,'Notebook Asus X515EA Intel Core i3 256GB 4GB.jpg',30),(31,'Tablet Level up mymo 7 16 GB.jpg',31),(32,'Tablet Samsung Galaxy Tab S7 Fe + S Pen.jpg',32),(33,'Tablet Philco TP10F 10\' 32 GB.jpg',33),(34,'Impresora Multifuncional HP Ink Tank 415.jpg',34),(35,'Impresora Multifuncional HP Deskjet Ink.jpg',35),(36,'Impresora Multifuncional HP Neverstop Laser.jpg',36),(37,'Consola Level up Retroboy plug and play.jpg',37),(38,'Microsoft Xbox Series S 512GB.jpg',38),(39,'Consola Family Retro Nes HD Level Up.jpg',39),(40,'Auricular Razer Kraken X para Consola con cable.jpg',40),(41,'Combo gamer 3 en 1 Greenfox.jpg',41),(42,'Auriculares Razer Kraken Kitty Chroma USB.jpg',42),(43,'Calefactor de vidrio Liliana con termostato.jpg',43),(44,'Calefactor de vidrio con termostato 2200W.jpg',44),(45,'Calefactor de vidrio Liliana con Turbina.jpg',45),(46,'Monopatin eléctrico Fiat plegable.jpg',46),(47,'Hooverboard Kany H80 8,5\'.jpg',47),(48,'Hoverboard Kany H65.jpg',48);
/*!40000 ALTER TABLE `products_images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subcategories`
--

DROP TABLE IF EXISTS `subcategories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `subcategories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `categoryId` int(11) NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `categoria_idx` (`categoryId`),
  CONSTRAINT `categoria` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subcategories`
--

LOCK TABLES `subcategories` WRITE;
/*!40000 ALTER TABLE `subcategories` DISABLE KEYS */;
INSERT INTO `subcategories` VALUES (1,'Telefonos',1,NULL,NULL),(2,'Smartwatches',1,NULL,NULL),(3,'Accesorios',1,NULL,NULL),(4,'SmartTV',2,NULL,NULL),(5,'Auriculares & Buds ',2,NULL,NULL),(6,'Barras de sonido',2,NULL,NULL),(7,'Lavado',3,NULL,NULL),(8,'Heladeras',3,NULL,NULL),(9,'PequeÃ±os elecrodomesticos',3,NULL,NULL),(10,'Notebooxs',4,NULL,NULL),(11,'Tablets',4,NULL,NULL),(12,'Impresoras ',4,NULL,NULL),(13,'Consolas ',5,NULL,NULL),(14,'Accesorios',5,NULL,NULL),(15,'Climatización',6,NULL,NULL),(16,'Monopatines',7,NULL,NULL),(17,'Hoverboard',7,NULL,NULL);
/*!40000 ALTER TABLE `subcategories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `email` varchar(60) NOT NULL,
  `pass` varchar(70) NOT NULL,
  `phone` varchar(30) DEFAULT NULL,
  `rol` int(2) NOT NULL DEFAULT 0,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `avatar` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Joa','Ge','asd@mail.com','123','123',1,NULL,NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_likes`
--

DROP TABLE IF EXISTS `users_likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users_likes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `productId` varchar(100) NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `userslikes_uk` (`id`),
  KEY `userslikes_n` (`userId`),
  CONSTRAINT `userslikes_FK` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=115 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_likes`
--

LOCK TABLES `users_likes` WRITE;
/*!40000 ALTER TABLE `users_likes` DISABLE KEYS */;
/*!40000 ALTER TABLE `users_likes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'electrohogarDB3'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-09  0:38:51
