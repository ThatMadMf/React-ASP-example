INSERT INTO Projects ('Name') 
VALUES  ('Project No 1'),
        ('Second project'),
        ('Project after second'),
        ('Project that needs to pick staff');

INSERT INTO Employees ('FirstName', 'LastName') 
VALUES  ('Name', 'NotName'),
        ('Worker', 'NotWorker'),
        ('Just', 'Need'),
        ('Four', 'People'),
        ('Java', 'Developer'),
        ('Java', '2Developer');

INSERT INTO EmployeeProject ('ProjectsId', 'EmployeesId')
VALUES  ('1', '1'),
        ('2', '1');


INSERT INTO Contributions ('Description', 'StartDate', 'FinishDate', 'TechnologyId','EmployeeId', 'ProjectId') 
VALUES  ('Contibution 1', date('now', '-1 day'), date('now'), '4', '1', '1'),
        ('Contibution 1', date('now', '-1 day'), date('now'), '3', '2', '1'),
        ('Contibution 1', date('now', '-1 day'), date('now'), '2', '1', '1'),
        ('Contibution 1', date('now', '-1 day'), date('now'), '1', '4', '2'),
        ('Contibution 2', date('now', '-1 day'), date('now'), '3', '2', '2'),
        ('Contibution 3', date('now', '-1 day'), NULL, '5', '3', '3'),
        ('Contibution 4', date('now', '-1 day'), NULL, '1', '4', '3'),
        ('Contibution 4', date('now', '-1 day'), date('now'), '1', '5', '1'),
        ('Contibution 4', date('now', '-1 day'), date('now'), '1', '6', '1');


INSERT INTO Technologies ('Name') 
VALUES  ('JAVA'),
        ('ASP CORE'),
        ('C++'),
        ('POSTGRES'),
        ('REACTJS');

INSERT INTO ProjectTechnology ('ProjectsId', 'TechnologiesId') 
VALUES  ('4', '1'),
        ('3', '1'),
        ('2', '1'),
        ('1', '2'),
        ('3', '2'),
        ('1', '3'),
        ('5', '3'),
        ('1', '4'),
        ('3', '4');



