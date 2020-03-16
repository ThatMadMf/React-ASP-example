INSERT INTO Projects ('Name') VALUES
    ('Project No 1'),
    ('Second project'),
    ('Project after second'),
    ('Project that needs to pick staff');

INSERT INTO CompanyStaff ('FirstName', 'SecondName') VALUES
    ('Name', 'NotName'),
    ('Worker', 'NotWorker'),
    ('Just', 'Need'),
    ('Four', 'People');

INSERT INTO Contributions ('Description', 'StartDate', 'ExecutorId', 'ProjectId') VALUES
    ('Contibution 1', date('now'), '1', '1'),
    ('Contibution 2', date('now'), '2', '1'),
    ('Contibution 3', date('now'), '3', '2'),
    ('Contibution 4', date('now'), '4', '3');

