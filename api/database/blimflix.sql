-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 29, 2016 at 09:55 PM
-- Server version: 5.7.13-0ubuntu0.16.04.2
-- PHP Version: 7.0.8-0ubuntu0.16.04.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blimflix`
--
CREATE DATABASE IF NOT EXISTS `blimflix` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `blimflix`;

-- --------------------------------------------------------

--
-- Table structure for table `favorite`
--

CREATE TABLE `favorite` (
  `favoriteID` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `movieID` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Truncate table before insert `favorite`
--

TRUNCATE TABLE `favorite`;
-- --------------------------------------------------------

--
-- Table structure for table `movie`
--

CREATE TABLE `movie` (
  `movieID` int(11) NOT NULL,
  `title` varchar(64) NOT NULL,
  `year` int(11) NOT NULL,
  `genre` varchar(32) NOT NULL,
  `director` varchar(255) NOT NULL,
  `writer` varchar(255) NOT NULL,
  `actors` varchar(255) NOT NULL,
  `plot` varchar(255) NOT NULL,
  `language` varchar(255) NOT NULL,
  `country` varchar(32) NOT NULL,
  `poster` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Truncate table before insert `movie`
--

TRUNCATE TABLE `movie`;
--
-- Dumping data for table `movie`
--

INSERT INTO `movie` (`movieID`, `title`, `year`, `genre`, `director`, `writer`, `actors`, `plot`, `language`, `country`, `poster`, `created_at`, `updated_at`) VALUES
(1, 'Almost Famous', 2000, 'Adventure, Comedy, Drama', 'Cameron Crowe', 'Cameron Crowe', 'Billy Crudup, Frances McDormand, Kate Hudson, Jason Lee', 'A high-school boy is given the chance to write a story for Rolling Stone Magazine about an up-and-coming rock band as he accompanies it on their concert tour.', 'English, French', 'USA', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMzY1ZjMwMGEtYTY1ZS00ZDllLTk0ZmUtYzA3ZTA4NmYwNGNkXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'The Green Mile', 1999, 'Crime, Drama, Fantasy', 'Frank Darabont', 'Stephen King (novel), Frank Darabont (screenplay)', 'Tom Hanks, David Morse, Michael Clarke Duncan, Bonnie Hunt', 'The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.', 'English, French', 'USA', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_SX300.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'Rockstar', 2011, 'Music, Musical', 'Imtiaz Ali', 'Imtiaz Ali, Muazzam Beg', 'Ranbir Kapoor, Nargis Fakhri, Shammi Kapoor, Kumud Mishra', 'Janardhan Jakhar chases his dreams of becoming a big Rock star, during which he falls in love with Heer.', 'Hindi', 'India', 'http://ia.media-imdb.com/images/M/MV5BOTc3NzAxMjg4M15BMl5BanBnXkFtZTcwMDc2ODQwNw@@._V1_SX300.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'Friday Night Lights', 2006, 'Drama, Sport', 'N/A', 'Peter Berg', 'Kyle Chandler, Connie Britton, Aimee Teegarden, Brad Leland', 'The trials and tribulations of small town Texas football players, their friends, family, and coaching staff.', 'English', 'USA', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwNjIyMTYwOV5BMl5BanBnXkFtZTcwMTA2MDU1MQ@@._V1_SX300.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'The Blind Side', 2009, 'Biography, Drama, Sport', 'John Lee Hancock', 'John Lee Hancock, Michael Lewis (book)', 'Sandra Bullock, Tim McGraw, Quinton Aaron, Jae Head', 'The story of Michael Oher, a homeless and traumatized boy who became an All American football player and first round NFL draft pick with the help of a caring woman and her family.', 'English', 'USA', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzOTE3ODM3OF5BMl5BanBnXkFtZTcwMzYyODI4Mg@@._V1_SX300.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'The Butterfly Effect', 2004, 'Sci-Fi, Thriller', 'Eric Bress, J. Mackye Gruber', 'J. Mackye Gruber, Eric Bress', 'Ashton Kutcher, Melora Walters, Amy Smart, Elden Henson', 'Evan Treborn suffers blackouts during significant events of his life. As he grows up, he finds a way to remember these lost memories and a supernatural way to alter his life by reading his journal.', 'English', 'USA, Canada', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTI1ODkxNzg2N15BMl5BanBnXkFtZTYwMzQ2MTg2._V1_SX300.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 'The Fast and the Furious', 2001, 'Action, Crime, Thriller', 'Rob Cohen', 'Ken Li (magazine article)', 'Scott Thompson (screen story), Gary Scott Thompson (screenplay), Erik Bergquist (screenplay), David Ayer (screenplay)', 'Paul Walker, Vin Diesel, Michelle Rodriguez, Jordana Brewster', 'English', 'USA, Germany', 'https://images-na.ssl-images-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 'Whiplash', 2014, 'Drama, Music', 'Damien Chazelle', 'Damien Chazelle', 'Miles Teller, J.K. Simmons, Paul Reiser, Melissa Benoist', 'A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student\'s potential.', 'English', 'USA', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU4OTQ3MDUyMV5BMl5BanBnXkFtZTgwOTA2MjU0MjE@._V1_SX300.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 'The Matrix', 1999, 'Action, Sci-Fi', 'Lana Wachowski, Lilly Wachowski', 'Lilly Wachowski, Lana Wachowski', 'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving', 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.', 'English', 'USA', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMDMyMmQ5YzgtYWMxOC00OTU0LWIwZjEtZWUwYTY5MjVkZjhhXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, 'August Rush', 2007, 'Drama, Music', 'Kirsten Sheridan', 'Nick Castle (screenplay), James V. Hart (screenplay), Paul Castro (story), Nick Castle (story)', 'Freddie Highmore, Keri Russell, Jonathan Rhys Meyers, Terrence Howard', 'A drama with fairy tale elements, where an orphaned musical prodigy uses his gift as a clue to finding his birth parents.', 'English', 'USA', 'https://images-na.ssl-images-amazon.com/images/M/MV5BNDIwNjE3NjU2NV5BMl5BanBnXkFtZTcwNTQ2NjQzMw@@._V1_SX300.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(11, 'The Martian', 2015, 'Adventure, Drama, Sci-Fi', 'Ridley Scott', 'Drew Goddard (screenplay), Andy Weir (book)', 'Matt Damon, Jessica Chastain, Kristen Wiig, Jeff Daniels', 'An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive.', 'English, Mandarin', 'USA, UK', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_SX300.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(12, 'The Pursuit of Happyness', 2006, 'Biography, Drama', 'Gabriele Muccino', 'Steve Conrad', 'Will Smith, Jaden Smith, Thandie Newton, Brian Howe', 'A struggling salesman takes custody of his son as he\'s poised to begin a life-changing professional endeavor.', 'English, Cantonese', 'USA', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ5NjQ0NDI3NF5BMl5BanBnXkFtZTcwNDI0MjEzMw@@._V1_SX300.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(13, 'Hachi: A Dog\'s Tale', 2009, 'Drama, Family', 'Lasse Hallstrom', 'Stephen P. Lindsey', 'Richard Gere, Joan Allen, Cary-Hiroyuki Tagawa, Sarah Roemer', 'A college professor\'s bond with the abandoned dog he takes into his home.', 'English, Japanese', 'USA, UK', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTAxMDA2MjM4NDReQTJeQWpwZ15BbWU3MDE0NTgxMTM@._V1_SX300.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(14, 'Fight Club', 1999, 'Drama', 'David Fincher', 'Chuck Palahniuk (novel), Jim Uhls (screenplay)', 'Edward Norton, Brad Pitt, Meat Loaf, Zach Grenier', 'An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soap maker, forming an underground fight club that evolves into something much, much more.', 'English', 'USA, Germany', 'https://images-na.ssl-images-amazon.com/images/M/MV5BNGM2NjQxZTAtMmU5My00YTk5LWFmOWMtYjZlYzk4YzMwNjFlXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(15, 'Bruce Almighty', 2003, 'Comedy, Drama, Fantasy', 'Tom Shadyac', 'Steve Koren (story), Mark O\'Keefe (story), Steve Koren (screenplay), Mark O\'Keefe (screenplay), Steve Oedekerk (screenplay)', 'Jim Carrey, Morgan Freeman, Jennifer Aniston, Philip Baker Hall', 'A guy who complains about God too often is given almighty powers to teach him how difficult it is to run the world.', 'English, Spanish', 'USA', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwMTUyNzAxMF5BMl5BanBnXkFtZTYwMDYwOTY3._V1_SX300.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(16, 'Green Street Hooligans', 2005, 'Crime, Drama, Sport', 'Lexi Alexander', 'Lexi Alexander (story), Dougie Brimson (story), Dougie Brimson (screenplay), Josh Shelov (screenplay), Lexi Alexander (screenplay)', 'Elijah Wood, Charlie Hunnam, Claire Forlani, Marc Warren', 'A wrongfully expelled Harvard undergrad moves to London, where he is introduced to the violent underworld of football hooliganism.', 'English, Italian, German', 'USA, UK', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjExNTg3NzYwMV5BMl5BanBnXkFtZTcwMzcxMTEzMQ@@._V1_SX300.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(17, 'Interstellar', 2014, 'Adventure, Drama, Sci-Fi', 'Christopher Nolan', 'Jonathan Nolan, Christopher Nolan', 'Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow', 'Earth\'s future has been riddled by disasters, famines, and droughts. There is only one way to ensure mankind\'s survival: Interstellar travel.', 'English', 'USA, UK', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(18, 'Pandorum', 2009, 'Action, Horror, Mystery', 'Christian Alvart', 'Travis Milloy (screenplay), Travis Milloy (story), Christian Alvart (story)', 'Dennis Quaid, Ben Foster, Cam Gigandet, Antje Traue', 'Two crew members are stranded on a spacecraft and quickly - and horrifically - realize they are not alone. ', 'English, Vietnamese, German', 'Germany, UK', 'https://images-na.ssl-images-amazon.com/images/M/MV5BNDQxNjc5NTMxNl5BMl5BanBnXkFtZTcwNjg2NDE4Mg@@._V1_SX300.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(19, 'Doomsday', 2008, 'Action, Sci-Fi, Thriller', 'Neil Marshall', 'Neil Marshall', 'Caryn Peterson, Adeola Ariyo, Emma Cleasby, Christine Tomlinson', 'A futuristic action thriller where a team of people work to prevent a disaster threatening the future of the human race.', 'English', 'UK, USA, South Africa, Germany', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwODU2NzE2OF5BMl5BanBnXkFtZTcwMTAwMDA2MQ@@._V1_SX300.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(20, 'Hellboy', 2004, 'Action, Fantasy, Horror', 'Guillermo del Toro', 'Guillermo del Toro (screenplay), Guillermo del Toro (screen story), Peter Briggs (screen story), Mike Mignola (comic books)', 'Ron Perlman, John Hurt, Selma Blair, Rupert Evans', 'In the final days of World War II, the Nazis attempt to use black magic to aid their dying cause.', 'English, Russian', 'USA', 'https://images-na.ssl-images-amazon.com/images/M/MV5BNWM0YmQ5ZjItMGI2Ni00NTYyLTg0YTMtMzE0ZmVlZTgyYTBjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(21, 'Skyline', 2010, 'Action, Sci-Fi, Thriller', 'Colin Strause, Greg Strause', 'Joshua Cordes, Liam O\'Donnell', 'Eric Balfour, Scottie Thompson, Brittany Daniel, Crystal Reed', 'Strange lights descend on the city of Los Angeles, drawing people outside like moths to a flame where an extraterrestrial force threatens to swallow the entire human population off the face of the Earth.', 'English', 'USA', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjAwNDkwOTc5M15BMl5BanBnXkFtZTcwMTE2MTMwNA@@._V1_SX300.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(22, 'Mean Girls', 2004, 'Comedy', 'Mark Waters', 'Rosalind Wiseman (book), Tina Fey (screenplay)', 'Lindsay Lohan, Rachel McAdams, Tina Fey, Tim Meadows', 'Cady Heron, a homeschooled girl, lived in Africa for 15 years. Entering public school for the first time.', 'English, German, Vietnamese, Swahili', 'USA, Canada', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjE1MDQ4MjI1OV5BMl5BanBnXkFtZTcwNzcwODAzMw@@._V1_SX300.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(23, 'The Grand Budapest Hotel', 2014, 'Adventure, Comedy, Drama', 'Wes Anderson', 'Stefan Zweig (inspired by the writings of), Wes Anderson (screenplay), Wes Anderson (story), Hugo Guinness (story)', 'Ralph Fiennes, F. Murray Abraham, Mathieu Amalric, Adrien Brody', 'The adventures of Gustave H, a legendary concierge at a famous hotel from the fictional Republic of Zubrowka between the first and second World Wars', 'English, French', 'USA, Germany, UK', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_SX300.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(25, 'The English Patient', 1996, 'Drama, Romance, War', 'Anthony Minghella', 'Michael Ondaatje (novel), Anthony Minghella (screenplay)', 'Ralph Fiennes, Juliette Binoche, Willem Dafoe, Kristin Scott Thomas', 'October 1944 in war torn Italy. Hana, a French-Canadian nurse working in a mobile army medical unit, feels like everything she loves in life dies on her. ', 'English, German, Italian, Arabic', 'USA, UK', 'https://images-na.ssl-images-amazon.com/images/M/MV5BOTkxZTdkNTQtM2QwOS00NzRlLWEyMGItYTcxOTE4NTgyNGVhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(26, 'Good Will Hunting', 1997, 'Drama', 'Gus Van Sant', 'Matt Damon, Ben Affleck', 'Matt Damon, Robin Williams, Ben Affleck, Stellan Skarsgord', 'A touching tale of a wayward young man who struggles to find his identity, living in a world where he can solve any problem, except the one brewing deep within himself, until one day he meets his soul mate who opens his mind and his heart.', 'English', 'USA', 'https://images-na.ssl-images-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(27, 'Black Swan', 2010, 'Drama, Thriller', 'Darren Aronofsky', 'Mark Heyman (screenplay), Andres Heinz (screenplay), John J. McLaughlin (screenplay), Andres Heinz (story)', 'Natalie Portman, Mila Kunis, Vincent Cassel, Barbara Hershey', 'A committed dancer wins the lead role in a production of Tchaikovsky\'s  to find herself struggling to maintain her sanity.', 'English, French, Italian', 'USA', 'https://images-na.ssl-images-amazon.com/images/M/MV5BNzY2NzI4OTE5MF5BMl5BanBnXkFtZTcwMjMyNDY4Mw@@._V1_SX300.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(28, 'Contact', 1997, 'Drama, Mystery, Sci-Fi', 'Robert Zemeckis', 'James V. Hart (screenplay)', 'Carl Sagan', 'Jena Malone, David Morse, Jodie Foster, Geoffrey Blake', 'English, Spanish, German, Russian', 'USA', 'https://images-na.ssl-images-amazon.com/images/M/MV5BYWNkYmFiZjUtYmI3Ni00NzIwLTkxZjktN2ZkMjdhMzlkMDc3XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(29, 'The Imitation Game', 2014, 'Biography, Drama, Thriller', 'Morten Tyldum', 'Graham Moore, Andrew Hodges (book)', 'Benedict Cumberbatch, Keira Knightley, Matthew Goode, Rory Kinnear', 'Based on the real life story of legendary cryptanalyst Alan Turing, the film portrays the nail-biting race against time by Turing and his brilliant team of code-breakers', 'English, Spanish', 'UK, USA', 'https://images-na.ssl-images-amazon.com/images/M/MV5BNDkwNTEyMzkzNl5BMl5BanBnXkFtZTgwNTAwNzk3MjE@._V1_SX300.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(30, 'Jurassic Park', 1993, 'Adventure, Sci-Fi, Thriller', 'Steven Spielberg', 'Michael Crichton (novel), Michael Crichton (screenplay), David Koepp (screenplay)', 'Sam Neill, Laura Dern, Jeff Goldblum, Richard Attenborough', 'During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.', 'English, Spanish', 'USA', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(31, 'Men in Black 3', 2012, 'Action, Adventure, Comedy', 'Barry Sonnenfeld', 'Etan Cohen, Lowell Cunningham (based on the Malibu comic by)', 'Will Smith, Tommy Lee Jones, Josh Brolin, Jemaine Clement', 'Agent J travels in time to M.I.B.\'s early days in 1969 to stop an alien from assassinating his friend Agent K and changing history.', 'English, Ukrainian', 'USA', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU2NTYxODcwMF5BMl5BanBnXkFtZTcwNDk1NDY0Nw@@._V1_SX300.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `rating`
--

CREATE TABLE `rating` (
  `ratingID` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `movieID` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Truncate table before insert `rating`
--

TRUNCATE TABLE `rating`;
-- --------------------------------------------------------

--
-- Table structure for table `seen`
--

CREATE TABLE `seen` (
  `seenID` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `movieID` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Truncate table before insert `seen`
--

TRUNCATE TABLE `seen`;
-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `userID` int(11) NOT NULL,
  `username` varchar(32) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` int(255) NOT NULL,
  `avatar` int(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Truncate table before insert `user`
--

TRUNCATE TABLE `user`;
-- --------------------------------------------------------

--
-- Table structure for table `watchlist`
--

CREATE TABLE `watchlist` (
  `watchlistID` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `movieID` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Truncate table before insert `watchlist`
--

TRUNCATE TABLE `watchlist`;
--
-- Indexes for dumped tables
--

--
-- Indexes for table `favorite`
--
ALTER TABLE `favorite`
  ADD PRIMARY KEY (`favoriteID`),
  ADD KEY `userID` (`userID`),
  ADD KEY `movieID` (`movieID`);

--
-- Indexes for table `movie`
--
ALTER TABLE `movie`
  ADD PRIMARY KEY (`movieID`);

--
-- Indexes for table `rating`
--
ALTER TABLE `rating`
  ADD PRIMARY KEY (`ratingID`),
  ADD KEY `userID` (`userID`),
  ADD KEY `movieID` (`movieID`);

--
-- Indexes for table `seen`
--
ALTER TABLE `seen`
  ADD PRIMARY KEY (`seenID`),
  ADD KEY `userID` (`userID`),
  ADD KEY `movieID` (`movieID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userID`),
  ADD KEY `username` (`username`),
  ADD KEY `email` (`email`);

--
-- Indexes for table `watchlist`
--
ALTER TABLE `watchlist`
  ADD PRIMARY KEY (`watchlistID`),
  ADD KEY `userID` (`userID`),
  ADD KEY `movieID` (`movieID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `favorite`
--
ALTER TABLE `favorite`
  MODIFY `favoriteID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `movie`
--
ALTER TABLE `movie`
  MODIFY `movieID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
--
-- AUTO_INCREMENT for table `rating`
--
ALTER TABLE `rating`
  MODIFY `ratingID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `seen`
--
ALTER TABLE `seen`
  MODIFY `seenID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `userID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `watchlist`
--
ALTER TABLE `watchlist`
  MODIFY `watchlistID` int(11) NOT NULL AUTO_INCREMENT;COMMIT;

CREATE USER 'blimflix'@'localhost' IDENTIFIED BY 'iT75cRNIOFEVo8KJ';

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
