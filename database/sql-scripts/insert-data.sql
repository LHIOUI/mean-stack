INSERT INTO User(name,email) 
    VALUES
    ('Hamza Lhioui', 'hamzalhioui@gmail.com'),
    ('Thomas Shely', 'thomasshelby@peakyb.p');

INSERT INTO Post(title,content,published,authorId) 
    VALUES  
    ('Hello Hamza','This is the content of my post', 1,1), 
    ('Peaky Blinders','This is me Thomas fucking Shelby, this is my first post', 1, 2);

insert into Profile(bio,userId) 
    values 
    ('Software engineer and chess enthusiast, I code like chess grand master',1),
    ('Thomas "Tommy" Shelby MP OBE is a fictional character and the main protagonist \
      in the British period crime drama Peaky Blinders. He is played by Cillian Murphy',2);