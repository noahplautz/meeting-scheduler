DROP TABLE IF EXISTS participation;
DROP TABLE IF EXISTS meeting;
DROP TABLE IF EXISTS all_user;
DROP TABLE IF EXISTS interview_position;
DROP TABLE IF EXISTS all_schedule;
DROP TABLE IF EXISTS location;

CREATE TABLE location(
	location_id INT,
    location_name VARCHAR(255),
    location_starttime DATETIME, #when the location is available
    location_endtime DATETIME,
    PRIMARY KEY (location_id)
);

CREATE TABLE meeting(
	meeting_id INT,
    meeting_starttime DATETIME,
    meeting_endtime DATETIME,
    meeting_feedback VARCHAR(255),
    location_id INT,
    FOREIGN KEY (location_id) REFERENCES location(location_id),
    PRIMARY KEY (meeting_id)
    
);

CREATE TABLE all_user(
	user_id INT,
    user_phone INT,
    user_email VARCHAR(255),
    user_name VARCHAR(255),
    user_password VARCHAR(255),
    user_type ENUM("SuperAdmin","Admin","DepartAdmin","MeetingCreator","Participant","Candidate"),
    user_cv VARCHAR(255),
    user_coverletter VARCHAR(255),
    user_statement VARCHAR(255),
    PRIMARY KEY (user_id)
);


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

