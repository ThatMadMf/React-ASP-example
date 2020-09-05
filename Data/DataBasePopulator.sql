INSERT INTO Projects ('Name') VALUES
    ('Project No 1'),
    ('Second project'),
    ('Project after second'),
    ('Project that needs to pick staff');

INSERT INTO CompanyStaff ('FirstName', 'SecondName', 'ActiveProjectId') VALUES
    ('Name', 'NotName', NULL),
    ('Worker', 'NotWorker', NULL),
    ('Just', 'Need', NULL),
    ('Four', 'People', NULL);

INSERT INTO Contributions ('Description', 'StartDate', 'FinishDate', 'TechnologyId','EmployeeId', 'ProjectId') VALUES
    ('Contibution 1', date('now', '-1 day'), date('now'), '4', '1', '1'),
    ('Contibution 2', date('now', '-1 day'), date('now'), '3', '2', '1'),
    ('Contibution 3', date('now', '-1 day'), date('now'), '5', '3', '2'),
    ('Contibution 4', date('now', '-1 day'), date('now'), '1', '4', '3');

INSERT INTO Technologies ('Name') VALUES 
    ('JAVA'),
    ('ASP CORE'),
    ('C++'),
    ('POSTGRES');

INSERT INTO ProjectTechnology ('ProjectId', 'TechnologyId') VALUES 
    ('1', '1');
