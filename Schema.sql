DROP TABLE IF EXISTS participation;
DROP TABLE IF EXISTS meeting;
DROP TABLE IF EXISTS all_schedule;
DROP TABLE IF EXISTS all_user;
DROP TABLE IF EXISTS interview_position;
DROP TABLE IF EXISTS location;

CREATE TABLE location(
	location_id INT,
    location_name VARCHAR(255),
    location_starttime DATETIME, #when the location is available
    location_endtime DATETIME,
    PRIMARY KEY (location_id)
);

CREATE TABLE meeting(
	meeting_id INT AUTO_INCREMENT,
    meeting_starttime DATETIME,
    meeting_endtime DATETIME,
    meeting_feedback VARCHAR(255),
    location_id INT,
    FOREIGN KEY (location_id) REFERENCES location(location_id),
    PRIMARY KEY (meeting_id)
    
)AUTO_INCREMENT=100;

CREATE TABLE all_user(
	user_id INT AUTO_INCREMENT,
    user_phone INT,
    user_email VARCHAR(255),
    user_name VARCHAR(255),
    user_password VARCHAR(255),
    user_type ENUM("SuperAdmin","Admin","DepartAdmin","MeetingCreator","Participant","Candidate"),
    user_cv VARCHAR(255),
    user_coverletter VARCHAR(255),
    user_statement VARCHAR(255),
    PRIMARY KEY (user_id)
)AUTO_INCREMENT=0;


CREATE TABLE participation(
	user_id INT,
    meeting_id INT,
	alert_type ENUM("Off","Email","Phone","Both"),
	FOREIGN KEY (user_id) REFERENCES all_user(user_id),
    FOREIGN KEY (meeting_id) REFERENCES meeting(meeting_id)
);

CREATE TABLE interview_position(
	position_id INT,
    position_name VARCHAR(255),
    department_name VARCHAR(255),
    PRIMARY KEY (position_id)
);

CREATE TABLE all_schedule(
	position_id INT,
    user_id INT,
	schedule_type ENUM("Create","View","Update","Delete"),
    schedule_info VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES all_user(user_id),
    FOREIGN KEY (position_id) REFERENCES interview_position(position_id)
);

SELECT * FROM all_user;
INSERT INTO all_user(user_phone,user_name,user_password)
	VALUES (33456,'User1','123456');
INSERT INTO all_user(user_phone,user_name,user_password)
	VALUES (72345,'User2','13456all_user6');
INSERT INTO all_user(user_phone,user_name,user_password)
	VALUES (34567,'User3','543245');

INSERT INTO interview_position(position_id,position_name,department_name)
	VALUES (1,'Assistant','Computer Science');
INSERT INTO interview_position(position_id,position_name,department_name)
	VALUES (2,'Professor','Computer Science');

INSERT INTO location(location_id,location_name,location_starttime,location_endtime)
	VALUES (1,'Davies','2020-09-26 08:00:00','2020-09-26 16:00:00');
INSERT INTO location(location_id,location_name,location_starttime,location_endtime)
	VALUES (2,'HHH','2020-09-26 09:30:00','2020-09-26 15:45:00');

SELECT * FROM meeting;
INSERT INTO meeting(meeting_starttime,meeting_endtime,location_id) 
	VALUES ('2020-09-26 09:00:00','2020-09-26 10:00:00',1);
INSERT INTO meeting(meeting_starttime,meeting_endtime,location_id) 
	VALUES ('2020-09-26 09:45:00','2020-09-26 10:30:00',2);
INSERT INTO meeting(meeting_starttime,meeting_endtime,location_id) 
	VALUES ('2020-09-26 13:00:00','2020-09-26 13:30:00',2);

INSERT INTO participation(user_id,meeting_id,alert_type)
	VALUES (1,100,'Off');
INSERT INTO participation(user_id,meeting_id,alert_type)
	VALUES (1,101,"Email");
INSERT INTO participation(user_id,meeting_id,alert_type)
	VALUES (2,101,"Both");
INSERT INTO participation(user_id,meeting_id,alert_type)
	VALUES (3,102,"Off");
INSERT INTO participation(user_id,meeting_id,alert_type)
	VALUES (2,100,"Phone");