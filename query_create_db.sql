CREATE DATABASE vocabulary_db; 

USE vocabulary_db; 
CREATE TABLE voca ( 
	id INT PRIMARY KEY AUTO_INCREMENT, 
    mot VARCHAR(45) NOT NULL); 
	
CREATE TABLE  translation (
	id INT PRIMARY KEY AUTO_INCREMENT, 
	mot_id INT, 
	response VARCHAR(45), 
	iscorrect BOOLEAN, 
	FOREIGN KEY (mot_id) 
REFERENCES voca(id) ); 
