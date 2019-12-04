
-- primera consulta, horario de corrido

-- 1 Fijo
-- 2 Manana
-- 3 Tarde

SELECT CONCAT_WS(' ',e.apellidoPaterno,e.apellidoMaterno,e.primerNombre,e.segundoNombre) as Empleado,
       (ELT(WEEKDAY(DATE(fechaHoraIngreso)) + 1, 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo')) AS DIA,
       a.totalHoraParcial as HorasTrabajadas,
	   c.nombre AS Cargo,
	   IF(c.esFlexible,'Horario Flexible','Horario Fijo') AS TipoHorario,
	   h.horaInicio, h.horaFin
	   -- t.nombre AS Turno
FROM empleado e INNER JOIN asistencia a
ON e.idEmpleado = a.idEmpleado AND e.idEmpleado = 1
AND DATE(fechaHoraIngreso) = '2019-07-02'
INNER JOIN cargo c
ON e.idCargo = c.idCargo
INNER JOIN horario h
ON c.idCargo = h.idCargo
INNER Join turno t
ON h.idTurno = t.idTurno AND t.idTurno = 2;



-- segunda consulta, , horario de corrido, dada dos fechas

SELECT CONCAT_WS(' ',e.apellidoPaterno,e.apellidoMaterno,e.primerNombre,e.segundoNombre) as Empleado,
       (ELT(WEEKDAY(DATE(fechaHoraIngreso)) + 1, 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo')) AS DIA,
       a.totalHoraParcial as HorasTrabajadas, 
	   c.nombre AS Cargo, 
	   IF(c.esFlexible,'Horario Flexible','Horario Fijo') AS TipoHorario,
	   h.horaInicio, h.horaFin,
	   t.nombre AS Turno 
FROM empleado e INNER JOIN asistencia a
ON e.idEmpleado = a.idEmpleado AND e.idEmpleado = 1
AND DATE(fechaHoraIngreso) between '2019-07-01' AND '2019-07-05'   
INNER JOIN cargo c 
ON e.idCargo = c.idCargo
INNER JOIN horario h 
ON c.idCargo = h.idCargo
INNER Join turno t
ON h.idTurno = t.idTurno AND t.idTurno = 2;

-- Consulta para horario fijo, hora para contador
SELECT CONCAT_WS(' ',e.apellidoPaterno,e.apellidoMaterno,e.primerNombre,e.segundoNombre) as Empleado,
       (ELT(WEEKDAY(DATE(fechaHoraIngreso)) + 1, 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo')) AS DIA,
       a.totalHoraParcial as HorasTrabajadas, 
	   c.nombre AS Cargo, 
	   IF(c.esFlexible,'Horario Flexible','Horario Fijo') AS TipoHorario,
	   h.horaInicio, h.horaFin
	   -- t.nombre AS Turno 
FROM empleado e INNER JOIN asistencia a
ON e.idEmpleado = a.idEmpleado AND e.idEmpleado = 5
AND DATE(fechaHoraIngreso) = '2019-07-01' 
INNER JOIN cargo c 
ON e.idCargo = c.idCargo
INNER JOIN horario h 
ON c.idCargo = h.idCargo
INNER Join turno t
ON h.idTurno = t.idTurno AND t.idTurno = 1;

-- scando las hora trabajadas en total de un dia, para el contador

SELECT CONCAT_WS(' ',e.apellidoPaterno,e.apellidoMaterno,e.primerNombre,e.segundoNombre) as Empleado,
       (ELT(WEEKDAY(DATE(fechaHoraIngreso)) + 1, 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo')) AS DIA,
	   c.nombre AS Cargo, 
	   IF(c.esFlexible,'Horario Flexible','Horario Fijo') AS TipoHorario,
       a.totalHoraParcial
	   -- h.horaInicio, h.horaFin
	   -- t.nombre AS Turno 
FROM empleado e INNER JOIN asistencia a
ON e.idEmpleado = a.idEmpleado AND e.idEmpleado = 5
AND DATE(fechaHoraIngreso) = '2019-07-01' 
INNER JOIN cargo c 
ON e.idCargo = c.idCargo
INNER JOIN horario h 
ON c.idCargo = h.idCargo
INNER Join turno t
ON h.idTurno = t.idTurno AND t.idTurno = 1;

-- suma de horarios, para el chofer flexible
select CONCAT_WS(' ',e.apellidoPaterno,e.apellidoMaterno,e.primerNombre,e.segundoNombre) as Empleado, h.DIA,
       ROUND(h.HorasTrabajadasPorDia, 2) as horasTrabajadasPorDia,
       h.fecha
from empleado e,
	 (select (ELT(WEEKDAY(DATE(fechaHoraIngreso)) + 1, 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo')) AS DIA,
		     SUM(a.totalHoraParcial) as HorasTrabajadasPorDia, DATE(a.fechaHoraIngreso) as fecha,
			 a.IdEmpleado
	  from asistencia a 
	  where a.IdEmpleado = 15 and  DATE(fechaHoraIngreso) between '2019-08-01' and '2019-08-05'
	    group by 1, 3) as h
where e.IdEmpleado = h.idEmpleado;


# select (ELT(WEEKDAY(DATE(fechaHoraIngreso)) + 1, 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo')) AS DIA,
# 		     SUM(a.totalHoraParcial) as HorasTrabajadasPorDia,
# 			 a.IdEmpleado
# 	  from asistencia a
# 	  where a.IdEmpleado = 5 and  DATE(fechaHoraIngreso) = '2019-07-03' group by 1)
# SELECT a.fechaHoraIngreso
# FROM asistencia a
# WHERE DATE(a.fechaHoraIngreso) = '2019-07-03';

# DELETE c, e, a
# FROM cargo c
# LEFT JOIN empleado e on c.idCargo = e.idCargo
# JOIN asistencia a on e.idEmpleado = a.idEmpleado
# WHERE e.idEmpleado = 1;

DELETE e
FROM empleado e
WHERE e.idEmpleado = 5;

SELECT *
FROM empleado;


SELECT c.nombre as cargo, t.nombre as turno, h.horaInicio, h.horaFin
FROM cargo c JOIN horario h on c.idCargo = h.idCargo
JOIN turno t on h.idTurno = t.idTurno
ORDER BY c.nombre, t.nombre;

# JOIN empleado e on c.idCargo = e.idCargo;
