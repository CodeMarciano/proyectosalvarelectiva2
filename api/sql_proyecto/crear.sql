DROP DATABASE IF EXISTS kantuta_electiva;
CREATE DATABASE kantuta_electiva;
USE kantuta_electiva;

CREATE TABLE turno(
    idTurno INT PRIMARY KEY AUTO_INCREMENT,
    nombre ENUM('Fijo','Manana','Tarde') not null 
) ENGINE=InnoDB;

CREATE TABLE cargo(
    idCargo INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) UNIQUE not null,
    esFlexible BOOL NOT NULL
) ENGINE=InnoDB;

CREATE TABLE horario(
    idHorario INT PRIMARY KEY AUTO_INCREMENT,
    idCargo INT NOT NULL,
	idTurno INT,
    horaInicio TIME,
    horaFin TIME,
    FOREIGN KEY (idCargo) REFERENCES cargo(idCargo) ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY (idTurno) REFERENCES turno(idTurno) ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE empleado(
    idEmpleado INT PRIMARY KEY AUTO_INCREMENT,
    idCargo INT NOT NULL,
    idTurnoEmpleado INT,
    ciEmpleado VARCHAR(40) UNIQUE NOT NULL,
    primerNombre VARCHAR(50) NOT NULL,
    segundoNombre VARCHAR(50),
    apellidoPaterno VARCHAR(50) NOT NULL,
    apellidoMaterno VARCHAR(50),
    fechaNacimiento DATE NOT NULL,
    genero ENUM('M', 'F') NOT NULL,
    idRFID VARCHAR(50),
    usuario VARCHAR(50),
    contrasenia VARCHAR(86),
    activo BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (idCargo) REFERENCES Cargo(idCargo) ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE asistencia(
    idAsistencia INT PRIMARY KEY AUTO_INCREMENT,
    idEmpleado INT NOT NULL,
    fechaHoraIngreso DATETIME,
    fechaHoraSalida DATETIME,
    totalHoraParcial FLOAT,
    FOREIGN KEY (idEmpleado) REFERENCES empleado(idEmpleado) ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB;
