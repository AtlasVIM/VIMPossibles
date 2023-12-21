DROP DATABASE IF EXISTS vimPossibles;
CREATE DATABASE vimPossibles;
USE vimPossibles;
CREATE TABLE Spies
(
    id int AUTO_INCREMENT primary key,
    FirstName varchar(100),
    LastName varchar(100),
    Speciality varchar(100),
    Description varchar(1000),
    ImageURL varchar(200),
    Price int
);


INSERT INTO Spies(FirstName, LastName, Speciality, Description, ImageURL, Price)
values('Kim', 'Possible', 'Crime solving', 'hello, is my kim being possible', 'image here', '600'),
      ('Ron', 'Stoppable', 'nachos', 'hello, im ron', 'image here', '10'),
      ('Rufus', 'bald', 'animal crime solving', '*adorable mouse noises', 'image here', '100'),
      ('Monique', 'Raven', 'Personal investigator', 'love is in the air, or not...', 'image here', '300'),
      ('Wade', 'TechGuy', 'CyberSecurity', 'Former ode for all cadet', 'image here', '400');
