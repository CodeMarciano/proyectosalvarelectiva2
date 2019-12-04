-- turno 'Fijo','Manana','Tarde'
INSERT INTO turno(nombre) VALUES ('Fijo');
INSERT INTO turno(nombre) VALUES ('Manana');
INSERT INTO turno(nombre) VALUES ('Tarde');
 
-- cargo
INSERT INTO cargo(nombre, esFlexible) VALUE ('Prensista', FALSE);
INSERT INTO cargo(nombre, esFlexible) VALUE ('Obrero', FALSE);
INSERT INTO cargo(nombre, esFlexible) VALUE ('Supervisor', FALSE);
INSERT INTO cargo(nombre, esFlexible) VALUE ('Almacenero', FALSE);

INSERT INTO cargo(nombre, esFlexible) VALUE ('Contador', FALSE);
INSERT INTO cargo(nombre, esFlexible) VALUE ('Auditor', FALSE);
INSERT INTO cargo(nombre, esFlexible) VALUE ('Secretaria', FALSE);
INSERT INTO cargo(nombre, esFlexible) VALUE ('Distribuidor', FALSE);

INSERT INTO cargo(nombre, esFlexible) VALUE ('Guardia de Seguridad', FALSE);

INSERT INTO cargo(nombre, esFlexible) VALUE ('Limpieza', TRUE);
INSERT INTO cargo(nombre, esFlexible) VALUE ('Administrador de Sistemas', TRUE);
INSERT INTO cargo(nombre, esFlexible) VALUE ('Chofer', TRUE);
INSERT INTO cargo(nombre, esFlexible) VALUE ('Diseñador', TRUE);
INSERT INTO cargo(nombre, esFlexible) VALUE ('Marqueting', TRUE);
INSERT INTO cargo(nombre, esFlexible) VALUE ('Editor', TRUE);
INSERT INTO cargo(nombre, esFlexible) VALUE ('Publicista', TRUE);
INSERT INTO cargo(nombre, esFlexible) VALUE ('Vendedor', TRUE);
INSERT INTO cargo(nombre, esFlexible) VALUE ('Director de Producción', TRUE);
INSERT INTO cargo(nombre, esFlexible) VALUE ('Asistente de Producción', TRUE);
INSERT INTO cargo(nombre, esFlexible) VALUE ('Revisor de Juegos', TRUE);

-- Horario de Corrido Turno Mañana y Tarde
-- Prensista
INSERT INTO horario(idCargo,idTurno, horaInicio, horaFin) VALUE (1,2,'06:00', '14:00');
INSERT INTO horario(idCargo,idTurno, horaInicio, horaFin) VALUE (1,3,'14:00', '22:00');
-- obrero
INSERT INTO horario(idCargo,idTurno, horaInicio, horaFin) VALUE (2,2, '06:00', '14:00');
INSERT INTO horario(idCargo,idTurno, horaInicio, horaFin) VALUE (2,3, '14:00', '22:00');
-- supervisor
INSERT INTO horario(idCargo,idTurno, horaInicio, horaFin) VALUE (3,2, '06:00', '14:00');
INSERT INTO horario(idCargo,idTurno, horaInicio, horaFin) VALUE (3,3, '14:00', '22:00');
-- almacenero
INSERT INTO horario(idCargo,idTurno, horaInicio, horaFin) VALUE (4,2, '06:00', '14:00');
INSERT INTO horario(idCargo,idTurno, horaInicio, horaFin) VALUE (4,3, '14:00', '22:00');

-- Horario de Oficina
INSERT INTO horario(idCargo,idTurno, horaInicio, horaFin) VALUE (5,1, '08:00', '12:00');
INSERT INTO horario(idCargo,idTurno, horaInicio, horaFin) VALUE (5,1, '14:00', '18:00');

INSERT INTO horario(idCargo,idTurno, horaInicio, horaFin) VALUE (6,1, '08:00', '12:00');
INSERT INTO horario(idCargo,idTurno, horaInicio, horaFin) VALUE (6,1, '14:00', '18:00');

INSERT INTO horario(idCargo,idTurno, horaInicio, horaFin) VALUE (7,1, '08:00', '12:00');
INSERT INTO horario(idCargo,idTurno, horaInicio, horaFin) VALUE (7,1, '14:00', '18:00');

INSERT INTO horario(idCargo,idTurno, horaInicio, horaFin) VALUE (8,1, '08:00', '12:00');
INSERT INTO horario(idCargo,idTurno, horaInicio, horaFin) VALUE (8,1, '14:00', '18:00');

-- Horario de Guardia de Seguridad
INSERT INTO horario(idCargo,idTurno, horaInicio, horaFin) VALUE (9,2, '08:00', '20:00');
INSERT INTO horario(idCargo,idTurno, horaInicio, horaFin) VALUE (9,3, '20:00', '08:00');



-- Empleados de Horario Corrido
INSERT INTO empleado(idCargo, ciEmpleado, primerNombre, apellidoPaterno, fechaNacimiento, genero)
VALUE (1, 'CCC101', 'Jorge', 'Alarcon', '1999-01-12', 'M');
INSERT INTO empleado(idCargo, ciEmpleado, primerNombre, apellidoPaterno, fechaNacimiento, genero)
VALUE (2, 'CCC102', 'Jorge', 'Perez', '1980-02-20', 'M');
INSERT INTO empleado(idCargo, ciEmpleado, primerNombre, apellidoPaterno, fechaNacimiento, genero)
VALUE (3, 'CCC103', 'George', 'Apaza', '1977-12-12', 'M');
INSERT INTO empleado(idCargo, ciEmpleado, primerNombre, apellidoPaterno, fechaNacimiento, genero)
VALUE (4, 'CCC104', 'Eugenia', 'Chavez', '1999-01-12', 'F');

-- Empleados de Oficina
-- contador
INSERT INTO empleado(idCargo, ciEmpleado, primerNombre, apellidoPaterno, fechaNacimiento, genero)
VALUE (5, 'CCC105', 'Guillermina', 'Quiroz', '1982-01-12', 'F');

INSERT INTO empleado(idCargo, ciEmpleado, primerNombre, apellidoPaterno, fechaNacimiento, genero)
VALUE (6, 'CCC106', 'Tomas', 'Paredez', '1980-02-20', 'M');
INSERT INTO empleado(idCargo, ciEmpleado, primerNombre, apellidoPaterno, fechaNacimiento, genero)
VALUE (7, 'CCC107', 'Ramira', 'Secante', '1977-12-12', 'F');
INSERT INTO empleado(idCargo, ciEmpleado, primerNombre, apellidoPaterno, fechaNacimiento, genero)
VALUE (8, 'CCC108', 'Ken', 'Morales', '1994-04-20', 'M');

-- Empleados de Guardia de Seguridad
INSERT INTO empleado(idCargo, ciEmpleado, primerNombre, apellidoPaterno, fechaNacimiento, genero)
VALUE (9, 'CCC1109', 'Dionicio', 'Melchor', '1990-01-12', 'M');
INSERT INTO empleado(idCargo, ciEmpleado, primerNombre, apellidoPaterno, fechaNacimiento, genero)
VALUE (9, 'CCC2109', 'Severo', 'Caballero', '1980-02-20', 'M');
INSERT INTO empleado(idCargo, ciEmpleado, primerNombre, apellidoPaterno, fechaNacimiento, genero)
VALUE (9, 'CCC3109', 'Eustaquio', 'Serna', '1979-12-12', 'M');
INSERT INTO empleado(idCargo, ciEmpleado, primerNombre, apellidoPaterno, fechaNacimiento, genero)
VALUE (9, 'CCC4109', 'Simon', 'Colque', '1999-04-20', 'M');

-- Empleados de Horarios Flexibles, pueden salir y entrar cuando quieren
INSERT INTO empleado(idCargo, ciEmpleado, primerNombre, apellidoPaterno, fechaNacimiento, genero)
VALUE (10, 'FFF110', 'Alvaro', 'Chire', '1999-01-12', 'M');
-- Administrador de Sistemas start
INSERT INTO empleado(idCargo, ciEmpleado, primerNombre, apellidoPaterno, fechaNacimiento, genero, usuario, contrasenia)
VALUE (11, 'FFF111', 'Santos', 'Chipana', '1980-01-14', 'M', 'admin', '$2y$04$.XuJ4163xd5OkVtmD8XHL.jEDkbfiETxojyOq4sc6cSlKE6L5xVuG');
-- end
INSERT INTO empleado(idCargo, ciEmpleado, primerNombre, apellidoPaterno, fechaNacimiento, genero)
VALUE (12, 'FFF112', 'Edmundo', 'Cacerez', '1979-03-12', 'M');
INSERT INTO empleado(idCargo, ciEmpleado, primerNombre, apellidoPaterno, fechaNacimiento, genero)
VALUE (13, 'FFF113', 'Florencia', 'Fernandez', '1996-05-20', 'F');
INSERT INTO empleado(idCargo, ciEmpleado, primerNombre, apellidoPaterno, fechaNacimiento, genero)
VALUE (14, 'FFF114', 'Rigoberta', 'Mendez', '1990-02-22', 'F');
INSERT INTO empleado(idCargo, ciEmpleado, primerNombre, apellidoPaterno, fechaNacimiento, genero)
VALUE (15, 'FFF115', 'Erik', 'Pando', '1980-01-12', 'M');
INSERT INTO empleado(idCargo, ciEmpleado, primerNombre, apellidoPaterno, fechaNacimiento, genero)
VALUE (16, 'FFF116', 'Senon', 'Quiroga', '1989-04-12', 'M');
INSERT INTO empleado(idCargo, ciEmpleado, primerNombre, apellidoPaterno, fechaNacimiento, genero)
VALUE (17, 'FFF117', 'Timoteo', 'Alferez', '1997-01-12', 'M');
INSERT INTO empleado(idCargo, ciEmpleado, primerNombre, apellidoPaterno, fechaNacimiento, genero)
VALUE (18, 'FFF118', 'Wilmer', 'Coca', '1978-01-12', 'M');
INSERT INTO empleado(idCargo, ciEmpleado, primerNombre, apellidoPaterno, fechaNacimiento, genero)
VALUE (19, 'FFF119', 'Ximena', 'Calle', '1995-01-12', 'F');
INSERT INTO empleado(idCargo, ciEmpleado, primerNombre, apellidoPaterno, fechaNacimiento, genero)
VALUE (20, 'FFF120', 'Julio', 'Aguilar', '1990-01-12', 'M');

-- Asistencia de Prensista de 6 a 2 pm

INSERT INTO asistencia(idEmpleado, fechaHoraIngreso, fechaHoraSalida, totalHoraParcial)
VALUE (1, '2019-07-01 06:02', '2019-07-01 14:03', 8.1);

-- INSERT INTO asistencia(idEmpleado, fechaHoraIngreso, fechaHoraSalida, totalHoraParcial)
-- VALUE (1, '2019-07-02 06:00', '2019-07-02 14:00', 8);

INSERT INTO asistencia(idEmpleado, fechaHoraIngreso, fechaHoraSalida, totalHoraParcial)
VALUE (1, '2019-07-02 06:00', null, 8);

INSERT INTO asistencia(idEmpleado, fechaHoraIngreso, fechaHoraSalida, totalHoraParcial)
VALUE (1, '2019-07-03 06:00', '2019-07-03 14:00', 8);

INSERT INTO asistencia(idEmpleado, fechaHoraIngreso, fechaHoraSalida, totalHoraParcial)
VALUE (1, '2019-07-04 06:00', '2019-07-04 14:00', 8.1);

INSERT INTO asistencia(idEmpleado, fechaHoraIngreso, fechaHoraSalida, totalHoraParcial)
VALUE (1, '2019-07-05 06:30', '2019-07-05 13:30', 7);


-- COntadorr id:5 guillermina horario de oficina
INSERT INTO asistencia(idEmpleado, fechaHoraIngreso, fechaHoraSalida, totalHoraParcial)
VALUE (5, '2019-07-01 07:52', '2019-07-01 12:03', 4.1);
INSERT INTO asistencia(idEmpleado, fechaHoraIngreso, fechaHoraSalida, totalHoraParcial)
VALUE (5, '2019-07-01 13:52', '2019-07-01 18:10', 4.15);

INSERT INTO asistencia(idEmpleado, fechaHoraIngreso, fechaHoraSalida, totalHoraParcial)
VALUE (5, '2019-07-02 07:45', '2019-07-02 12:10', 4.20);
INSERT INTO asistencia(idEmpleado, fechaHoraIngreso, fechaHoraSalida, totalHoraParcial)
VALUE (5, '2019-07-02 13:30', '2019-07-02 18:15', 4.30);

INSERT INTO asistencia(idEmpleado, fechaHoraIngreso, fechaHoraSalida, totalHoraParcial)
VALUE (5, '2019-07-03 07:40', '2019-07-03 12:00', 4.17);
INSERT INTO asistencia(idEmpleado, fechaHoraIngreso, fechaHoraSalida, totalHoraParcial)
VALUE (5, '2019-07-03 13:58', '2019-07-03 18:01', 4.1);

-- ASISTENCIA de
-- Empleado = Edmundo Caceres
-- cargo = CHOFER
-- Horario = flexible
-- id = 15

INSERT INTO asistencia(idEmpleado, fechaHoraIngreso, fechaHoraSalida, totalHoraParcial)
VALUES(15, '2019-08-01 07:30', '2019-08-01 08:30', 1);

INSERT INTO asistencia(idEmpleado, fechaHoraIngreso, fechaHoraSalida, totalHoraParcial)
VALUES(15, '2019-08-01 10:30', '2019-08-01 14:00', 3.30);

INSERT INTO asistencia(idEmpleado, fechaHoraIngreso, fechaHoraSalida, totalHoraParcial)
VALUES(15, '2019-08-01 15:00', '2019-08-01 19:30', 4.30);

INSERT INTO asistencia(idEmpleado, fechaHoraIngreso, fechaHoraSalida, totalHoraParcial)
VALUES(15, '2019-08-02 07:30', '2019-08-02 08:30', 1);

INSERT INTO asistencia(idEmpleado, fechaHoraIngreso, fechaHoraSalida, totalHoraParcial)
VALUES(15, '2019-08-02 10:30', '2019-08-02 14:00', 3.30);

INSERT INTO asistencia(idEmpleado, fechaHoraIngreso, fechaHoraSalida, totalHoraParcial)
VALUES(15, '2019-08-02 15:00', '2019-08-02 19:00', 4);



INSERT INTO asistencia(idEmpleado, fechaHoraIngreso, fechaHoraSalida, totalHoraParcial)
VALUES(15, '2019-08-05 07:30', '2019-08-05 08:30', 1);
INSERT INTO asistencia(idEmpleado, fechaHoraIngreso, fechaHoraSalida, totalHoraParcial)
VALUES(15, '2019-08-05 10:30', '2019-08-05 14:00', 3.30);
INSERT INTO asistencia(idEmpleado, fechaHoraIngreso, fechaHoraSalida, totalHoraParcial)
VALUES(15, '2019-08-05 15:00', '2019-08-05 19:00', 4);


INSERT INTO asistencia(idEmpleado, fechaHoraIngreso, fechaHoraSalida, totalHoraParcial)
VALUES(15, '2019-08-06 10:30', '2019-08-06 14:00', 3.30);
INSERT INTO asistencia(idEmpleado, fechaHoraIngreso, fechaHoraSalida, totalHoraParcial)
VALUES(15, '2019-08-06 15:00', '2019-08-06 19:00', 4);


INSERT INTO asistencia(idEmpleado, fechaHoraIngreso, fechaHoraSalida, totalHoraParcial)
VALUES(15, '2019-08-07 10:00', '2019-08-07 14:00', 4);
INSERT INTO asistencia(idEmpleado, fechaHoraIngreso, fechaHoraSalida, totalHoraParcial)
VALUES(15, '2019-08-07 15:00', '2019-08-07 19:00', 4);

INSERT INTO asistencia(idEmpleado, fechaHoraIngreso, fechaHoraSalida, totalHoraParcial)
VALUES(15, '2019-08-08 10:30', '2019-08-08 14:00', 3.30);
INSERT INTO asistencia(idEmpleado, fechaHoraIngreso, fechaHoraSalida, totalHoraParcial)
VALUES(15, '2019-08-08 15:00', '2019-08-08 19:00', 4);

INSERT INTO asistencia(idEmpleado, fechaHoraIngreso, fechaHoraSalida, totalHoraParcial)
VALUES(15, '2019-08-09 10:00', '2019-08-09 14:00', 4);
INSERT INTO asistencia(idEmpleado, fechaHoraIngreso, fechaHoraSalida, totalHoraParcial)
VALUES(15, '2019-08-09 15:00', '2019-08-09 19:00', 4);


-- Asistencia de hoy 2019-09-03 Edmundo Cacerez, temporal

INSERT INTO asistencia(idEmpleado, fechaHoraIngreso, fechaHoraSalida, totalHoraParcial)
VALUES(15, '2019-09-03 08:00', null, null);
