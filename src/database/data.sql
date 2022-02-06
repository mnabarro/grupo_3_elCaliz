INSERT INTO genres (nombre)
VALUES 
("Femenino"),
("Masculino"),
("Prefiero no decirlo");

INSERT INTO groups (nombre)
VALUES
("Visitante"),
("Invitado"),
("Cliente");

INSERT INTO categories (nombre, value)
VALUES
("Tintos", "cat-tintos"),
("Blancos", "cat-blancos"),
("Rosados", "cat-rosados"),
("Espumantes", "cat-espumantes"),
("Accesorios", "cat-accesorios"),
("Ofertas", "cat-ffertas");

INSERT INTO orders_status (nombre)
VALUES
("En armado"),
("Enviado"),
("Entregado");

INSERT INTO states (nombre)
VALUES
("Buenos Aires"),
("Ciudad Autónoma de Buenos Aires"),
("Catamarca"),
("Chaco"),
("Chubut"),
("Córdoba"),
("Corrientes"),
("Entre Ríos"),
("Formosa"),
("Jujuy"),
("La Pampa"),
("La Rioja"),
("Mendoza"),
("Misiones"),
("Neuquén"),
("Rio Negro"),
("Salta"),
("San Juan"),
("San Luis"),
("Santa Cruz"),
("Santa Fe"),
("Santiago Del Estero"),
("Tierra Del Fuego"),
("Tucumán");

INSERT INTO users (`nombre`, `apellido`, `dni`, `mail`, `password`, `fecha_registro`, `estado`, `image`, `group_id(pk)`,`genre_id(pk)`)
VALUES
("Daniela", "Romero", "31968796", "bsnowling0@shop-pro.jp", "uwDphUPLy5g", "2021-02-20", 1, "https://source.unsplash.com/user/c_v_r/100x100", 2, 1),
("Ezequiel", "Pereyra", "29453698", "bhumpage1@ow.ly", "AwMOj4A", "2021-09-24", 1, "https://source.unsplash.com/user/c_v_r/100x100", 1, 2),
("Gabriela", "Medina", "15236458", "ayuryaev2@typepad.com", "ztgPqfbXuC", "2021-02-11", 1, "https://source.unsplash.com/user/c_v_r/100x100", 3, 1),
("Daniela", "Faga", "10504587", "pkleinhaus3@meetup.com", "k3OcTmkMgyt", "2020-03-13", 1, "https://source.unsplash.com/user/c_v_r/100x100", 2, 1),
("Julian", "Gonzalez", "22364796", "ebear4@rakuten.co.jp", "L50jsfNN1", "2019-08-30", 1, "https://source.unsplash.com/user/c_v_r/100x100", 1, 2),
("Agustin", "Torraco", "25469321", "lscorah5@jimdo.com", "iXvRAO6Sf", "2015-07-05", 1, "https://source.unsplash.com/user/c_v_r/100x100", 1, 2),
("Silvia", "Crozen", "35489236", "dhaslum6@blinklist.com", "1LWtEOMzW1gk", "2021-03-16", 1, "https://source.unsplash.com/user/c_v_r/100x100", 3, 1),
("Eric", "Ursic", "33254785", "dauton7@booking.com", "kvJGmI2s", "2018-10-03", 1, "https://source.unsplash.com/user/c_v_r/100x100", 3, 1),
("Marcela", "Perez", "29563487", "rvalenta8@usgs.gov", "fIznZvl6", "2021-04-22", 1, "https://source.unsplash.com/user/c_v_r/100x100", 3, 1),
("Horacio", "Silver", "31569325", "wwillison9@multiply.com", "1Ark4K9", "2020-08-01", 1, "https://source.unsplash.com/user/c_v_r/100x100", 2, 3);

INSERT INTO adresses (`nombre`, `apellido`, `direccion`, `codigo_postal`, `localidad`, `telefono`, `state_id(pk)`, `user_id(pk)`)
VALUES 
("Daniela", "Romero", "Av. Corrientes 4345", "1179", "Almagro", "1165408578", 2, 2),
("Ezequiel","Pereyra","Av. Corrientes 123", "2000", "Rosario", "1568938282", 21, 3),
("Ezequiel","Pereyra","Americas 35", "2000", "Rosario", "1568938282", 21, 3),
("Gabriela","Medina","Lavalle 1240", "1179", "Los Polvorines", "1526857469", 1, 4),
("Daniela","Faga","Tte. Gral. J.D. Perón 350", "1569", "Almagro", "1187456985", 2, 5),
("Julian","Gonzalez","25 de mayo 557", "1179", "Parana", "351569874", 8, 6);

INSERT INTO products (`sku`, `nombre`, `descripcion`, `precio`, `discount`, `estado`)
VALUES 
("BE75882", "Luigi Bosca Malbec 750", "Luigi Bosca Malbec es un tinto emblemático de la bodega, elaborado con uvas de viñedos propios situados en Luján de Cuyo y Valle de Uco, Mendoza. Tiene un color rojo violáceo profundo y brillante. Sus aromas son intensos y equilibrados, con notas de frutas rojas algo maduras y especias. En boca es generoso, fluido y expresivo, con taninos incipientes. De paladar franco y paso refrescante, con buen cuerpo y carácter atractivo. Su final es profundo y nítido, con el roble totalmente integrado, y posee un buen potencial de guarda. Es un vino insignia de su variedad.","1031","0",1),
("BE75883", "Navarro Correas Juan De Dios Blend 750", "Se puede agregar una tarjeta dedicatoria y presentación de regalo. Entregas a varios domicilios por pedido con logística propia. Todas las normas sanitarias garantizadas. Aceptamos Mercadopago, tarjetas de crédito y transferencia bancaria.","8963","50",1),
("BE75884", "Pascual Toso 125 Años 1500 Cofre", "Se puede agregar una tarjeta dedicatoria y presentación de regalo. Envíos a CABA y GBA con nuestra propia flota, siguiendo todas las normas de seguridad sanitaria. Todas las formas de pago.","6795","0",1),
("BE75885", "Rutini Colección Cabernet Merlot 2010 750", "Consulte por envoltorios, cajas y estuches de diseño para que este producto sea obsequio único. Envíos a CABA y GBA con nuestra propia flota, siguiendo todas las normas de seguridad sanitaria. Aceptamos Mercadopago, tarjetas de crédito y transferencia bancaria.","5216","0",1),
("BE75886", "Saint Felicien Syrah 750", "Este vino tiene una fermentación con levaduras seleccionadas. Máx. temp. de ferm. 30º C, durante 12 días. Su añejamiento es de 12 meses en roble francés y americano. Saint Felicien Syrah, es un vino elegante y complejo, de color violeta, oscuro y profundo. A la nariz, intenso y concentrado, presenta aromas de moras maduras, ciruelas y cuero, con notas ligeras de vainilla, tabaco y licor. En boca, de impacto dulce y gran complejidad, es untuoso, con taninos suaves y redondos que le otorgan una gran armonía final.","1200","0",1),
("BE75887", "Salentein Reserve Pinot Noir 2011 750", "Color rojo cereza brillante de intensidad media. Aroma intenso y complejo, de marcada tipicidad, se destacan notas de cerezas, frutillas y frambuesas. En boca es suave, elegante y complejo de marcada acidez y longitud.","3600","0",1),
("BE75888", "Trapiche Medalla 750", "Cajas y estuches de diseño disponibles para crear un regalo especial según la ocasión. Entregas a varios domicilios por pedido con logística propia. Todas las normas sanitarias garantizadas. Aceptamos Mercadopago, tarjetas de crédito y transferencia bancaria.","1020","0",1),
("BE75889", "Altosur Malbec Rose 750", "Consulte por envoltorios, cajas y estuches de diseño para que este producto sea obsequio único. Entregas a varios domicilios por pedido con logística propia. Todas las normas sanitarias garantizadas. Tarjetas, Mercadopago y Transferencia Bancaria.","546","0",3),
("BE75890", "El Salvaje Organico Rosado Gris 750", "Consulte por envoltorios, cajas y estuches de diseño para que este producto sea obsequio único. Entregas a varios domicilios por pedido con logística propia. Todas las normas sanitarias garantizadas. Tarjetas, Mercadopago y Transferencia Bancaria.","947","0",3),
("BE75891", "Emilio Moro Hito Rosado 750cc", "Consulte por envoltorios, cajas y estuches de diseño para que este producto sea obsequio único. Entregas a varios domicilios por pedido con logística propia. Todas las normas sanitarias garantizadas. Tarjetas, Mercadopago y Transferencia Bancaria.","10062","0",3),
("BE75892", "Escorihuela Gascon Gran Reserva Rose 750", "Consulte por envoltorios, cajas y estuches de diseño para que este producto sea obsequio único. Entregas a varios domicilios por pedido con logística propia. Todas las normas sanitarias garantizadas. Tarjetas, Mercadopago y Transferencia Bancaria.","1134","0",3),
("BE75893", "Perdriel Series Rosado De Malbec 750", "Consulte por envoltorios, cajas y estuches de diseño para que este producto sea obsequio único. Entregas a varios domicilios por pedido con logística propia. Todas las normas sanitarias garantizadas. Tarjetas, Mercadopago y Transferencia Bancaria.","1223","0",3),
("BE75894", "Sottano Clasico Rosado 750", "Consulte por envoltorios, cajas y estuches de diseño para que este producto sea obsequio único. Entregas a varios domicilios por pedido con logística propia. Todas las normas sanitarias garantizadas. Tarjetas, Mercadopago y Transferencia Bancaria.","471","0",3),
("BE75895", "Susana Balbo Rose 750", "Consulte por envoltorios, cajas y estuches de diseño para que este producto sea obsequio único. Entregas a varios domicilios por pedido con logística propia. Todas las normas sanitarias garantizadas. Tarjetas, Mercadopago y Transferencia Bancaria.","2291","0",3);

INSERT INTO orders (`referencia`, `total`, `metodo_pago`, `fecha`, `user_id(pk)`)
VALUES 
("DSASDFD", "2762", "Mercado Pago", "2021-06-21", 1),
("GSDGDSG", "1031", "Transferencia", "2021-06-21", 3),
("HGFHFHH", "4582", "Mercado Pago", "2021-06-21", 10),
("TYRYRTY", "1493", "Transferencia", "2021-06-21", 5),
("KJHKHKH", "1624", "Mercado Pago", "2021-06-21", 9);

INSERT INTO orders_has_orders_status (`fecha_estado`, `order_id(pk)`, `order_status_id(pk)`)
VALUES 
("2021-06-20",1,1),
("2021-06-20",1,2),
("2021-06-20",1,3),
("2021-06-20",2,1),
("2021-06-20",2,2),
("2021-06-20",2,3),
("2021-06-20",3,1),
("2021-06-20",3,2),
("2021-06-20",3,3),
("2021-06-20",4,1),
("2021-06-20",4,2),
("2021-06-20",4,3),
("2021-06-20",5,1),
("2021-06-20",5,2);


INSERT INTO products_has_orders (`id_pedido(fk)`, `precio`, `cantidad`, `product_id(pk)`)
VALUES 
(1, 471.00, 1, 13),
(1, 2291.00, 1, 14),
(2, 1031.00, 1, 1),
(3, 4582.00, 2, 14),
(4, 1223.00, 1, 12),
(5, 8963.00, 1, 2);

INSERT INTO products_has_categories (`product_id(pk)`, `category_id(pk)`)
VALUES 
(1,1),
(1,6),
(2,1),
(3,1),
(4,1),
(5,1),
(6,1),
(7,1),
(8,3),
(9,3),
(10,3),
(11,3),
(12,3),
(13,3),
(14,3);



