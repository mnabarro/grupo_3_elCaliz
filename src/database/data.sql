INSERT INTO groups (`name`)
VALUES
("Usuario"),
("Administrador");

INSERT INTO category (`name`)
VALUES
("Tintos"),
("Blancos"),
("Rosados"),
("Espumantes"),
("Accesorios"),
("Ofertas");

INSERT INTO users (`name`, `lastname`, `dni`, `address`, `phone`,`email`, `password`,`image`, `group_id`)
VALUES
("Daniela", "Romero", "31968796", "Medrano 794", "1165408577", "bsnowling0@shop-pro.jp", "uwDphUPLy5g", "https://source.unsplash.com/user/c_v_r/100x100", 1),
("Ezequiel", "Pereyra", "29453698", "Acoyte 77", "1150284569", "bhumpage1@ow.ly", "AwMOj4A", "https://source.unsplash.com/user/c_v_r/100x100", 1),
("Gabriela", "Medina", "15236458", "Av. Cordoba 4758", "1145697854", "ayuryaev2@typepad.com", "ztgPqfbXuC","https://source.unsplash.com/user/c_v_r/100x100", 1),
("Daniela", "Faga", "10504587", "Av. Corrientes 4589", "1142517637", "pkleinhaus3@meetup.com", "k3OcTmkMgyt", "https://source.unsplash.com/user/c_v_r/100x100", 1),
("Julian", "Gonzalez", "22364796", "Palestina 658", "1123587469", "ebear4@rakuten.co.jp", "L50jsfNN1", "https://source.unsplash.com/user/c_v_r/100x100", 1),
("Agustin", "Torraco", "25469321", "Peron 250", "1125874569", "lscorah5@jimdo.com", "iXvRAO6Sf", "https://source.unsplash.com/user/c_v_r/100x100", 1),
("Marclo", "Gutierrez", "23659456", "Sarmiento 2152", "1152368547", "golo@jimdo.com", "fdfsfdsf", "https://source.unsplash.com/user/c_v_r/100x100", 1),
("Pedro", "Lopez", "31953987", "Honduras 4211", "1112547896", "koki@jimdo.com", "gfdgdgd", "https://source.unsplash.com/user/c_v_r/100x100", 1),
("Admin", "Admin", "12345678", "Calle 123", "1112345678","admin6@admin.com", "1LWtEOMzW1gk", "https://source.unsplash.com/user/c_v_r/100x100", 2);

INSERT INTO products (`sku`, `name`, `description`, `price`, `discount`)
VALUES 
("BE75882", "Luigi Bosca Malbec 750", "Luigi Bosca Malbec es un tinto emblemático de la bodega, elaborado con uvas de viñedos propios situados en Luján de Cuyo y Valle de Uco, Mendoza. Tiene un color rojo violáceo profundo y brillante. Sus aromas son intensos y equilibrados, con notas de frutas rojas algo maduras y especias. En boca es generoso, fluido y expresivo, con taninos incipientes. De paladar franco y paso refrescante, con buen cuerpo y carácter atractivo. Su final es profundo y nítido, con el roble totalmente integrado, y posee un buen potencial de guarda. Es un vino insignia de su variedad.","1031","0"),
("BE75883", "Navarro Correas Juan De Dios Blend 750", "Se puede agregar una tarjeta dedicatoria y presentación de regalo. Entregas a varios domicilios por pedido con logística propia. Todas las normas sanitarias garantizadas. Aceptamos Mercadopago, tarjetas de crédito y transferencia bancaria.","8963","50"),
("BE75884", "Pascual Toso 125 Años 1500 Cofre", "Se puede agregar una tarjeta dedicatoria y presentación de regalo. Envíos a CABA y GBA con nuestra propia flota, siguiendo todas las normas de seguridad sanitaria. Todas las formas de pago.","6795","0"),
("BE75885", "Rutini Colección Cabernet Merlot 2010 750", "Consulte por envoltorios, cajas y estuches de diseño para que este producto sea obsequio único. Envíos a CABA y GBA con nuestra propia flota, siguiendo todas las normas de seguridad sanitaria. Aceptamos Mercadopago, tarjetas de crédito y transferencia bancaria.","5216","0"),
("BE75886", "Saint Felicien Syrah 750", "Este vino tiene una fermentación con levaduras seleccionadas. Máx. temp. de ferm. 30º C, durante 12 días. Su añejamiento es de 12 meses en roble francés y americano. Saint Felicien Syrah, es un vino elegante y complejo, de color violeta, oscuro y profundo. A la nariz, intenso y concentrado, presenta aromas de moras maduras, ciruelas y cuero, con notas ligeras de vainilla, tabaco y licor. En boca, de impacto dulce y gran complejidad, es untuoso, con taninos suaves y redondos que le otorgan una gran armonía final.","1200","0"),
("BE75887", "Salentein Reserve Pinot Noir 2011 750", "Color rojo cereza brillante de intensidad media. Aroma intenso y complejo, de marcada tipicidad, se destacan notas de cerezas, frutillas y frambuesas. En boca es suave, elegante y complejo de marcada acidez y longitud.","3600","0"),
("BE75888", "Trapiche Medalla 750", "Cajas y estuches de diseño disponibles para crear un regalo especial según la ocasión. Entregas a varios domicilios por pedido con logística propia. Todas las normas sanitarias garantizadas. Aceptamos Mercadopago, tarjetas de crédito y transferencia bancaria.","1020","0"),
("BE75889", "Altosur Malbec Rose 750", "Consulte por envoltorios, cajas y estuches de diseño para que este producto sea obsequio único. Entregas a varios domicilios por pedido con logística propia. Todas las normas sanitarias garantizadas. Tarjetas, Mercadopago y Transferencia Bancaria.","546","0"),
("BE75890", "El Salvaje Organico Rosado Gris 750", "Consulte por envoltorios, cajas y estuches de diseño para que este producto sea obsequio único. Entregas a varios domicilios por pedido con logística propia. Todas las normas sanitarias garantizadas. Tarjetas, Mercadopago y Transferencia Bancaria.","947","0"),
("BE75891", "Emilio Moro Hito Rosado 750cc", "Consulte por envoltorios, cajas y estuches de diseño para que este producto sea obsequio único. Entregas a varios domicilios por pedido con logística propia. Todas las normas sanitarias garantizadas. Tarjetas, Mercadopago y Transferencia Bancaria.","10062","0"),
("BE75892", "Escorihuela Gascon Gran Reserva Rose 750", "Consulte por envoltorios, cajas y estuches de diseño para que este producto sea obsequio único. Entregas a varios domicilios por pedido con logística propia. Todas las normas sanitarias garantizadas. Tarjetas, Mercadopago y Transferencia Bancaria.","1134","0"),
("BE75893", "Perdriel Series Rosado De Malbec 750", "Consulte por envoltorios, cajas y estuches de diseño para que este producto sea obsequio único. Entregas a varios domicilios por pedido con logística propia. Todas las normas sanitarias garantizadas. Tarjetas, Mercadopago y Transferencia Bancaria.","1223","0"),
("BE75894", "Sottano Clasico Rosado 750", "Consulte por envoltorios, cajas y estuches de diseño para que este producto sea obsequio único. Entregas a varios domicilios por pedido con logística propia. Todas las normas sanitarias garantizadas. Tarjetas, Mercadopago y Transferencia Bancaria.","471","0"),
("BE75895", "Susana Balbo Rose 750", "Consulte por envoltorios, cajas y estuches de diseño para que este producto sea obsequio único. Entregas a varios domicilios por pedido con logística propia. Todas las normas sanitarias garantizadas. Tarjetas, Mercadopago y Transferencia Bancaria.","2291","0");

INSERT INTO products_has_category (`products_id`, `category_id`)
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