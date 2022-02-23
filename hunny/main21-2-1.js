var app = angular.module("booksApp", ["ngRoute", "ngAnimate"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/harry1', {
            templateUrl: 'index21-2-1.html',
            controller: "book1"
        })
        .when('/harry2', {
            templateUrl: 'index21-2-1.html',
            controller: "book2"
        })
        .when('/harry3', {
            templateUrl: 'index21-2-1.html',
            controller: "book3"
        })
        
        .when('/harry4', {
            templateUrl: 'index21-2-1.html',
            controller: "book4"
        })
        .when('/harry5', {
            templateUrl: 'index21-2-1.html',
            controller: "book5"
        })
})
app.controller("book1", function ($scope, $route) {
    $scope.books = {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J. K. Rowling",
        year: 2001,
        pages: 309,
        descriptions: "The story is about the boy Harry. He lives with his uncle and aunt, who don’t love him. They harassed him every way, but he doesn’t have another variants. His parents died in a car accident and he is an orphan. But on his 11th birthday, he learns that he is the magician and is invited to study at Hogwarts School of Wizardry. Hagrid,(who delivered the letter) explains to the young wizard the cause of the scar on his forehead and the real circumstances of the death of his parents. They were killed by the evil wizard VoldeMort. Harry learns that he was also cursed by the evil wizard, but miraculously survived. After buying (with the help of Hagrid) everything necessary, Potter goes to magic school. There he finds his true friends, learn magic and goes through various adventures. Despite of the fact that the school seems to be all quiet, after arrival of Harry odd things concerned with VoldeMort start to happen. Over time, Harry learns about his devious plan to steal the Philosopher's Stone, which gives immortality. The young wizard is eager to stop him. With the help of his friends, he manages to break the plans of VoldeMort."

    }
})
app.controller("book2", function ($scope, $route) {
    $scope.books = {
        title: "Mind of the Killer",
        author: "Richard Teylor",
        year: 2021,
        pages: 432,
        descriptions: "The main question that forensic psychiatrist Richard Taylor asked throughout his career might be: Why do people kill? In his book, he talks about sexual and passion crimes, financially motivated, psychotic and mass crimes, about infanticides and murders related to terrorism. This is an inside look at one of the rarest professions, as well as an attempt to unravel the motives of people who commit serious crimes. How is it decided what will happen to a person after the accusation? How does a forensic psychiatrist work with a criminal and what happens to those who are declared insane? What can be done to prevent a recurrence of the tragic events? You will learn how the psychiatric evaluation of a criminal is carried out, as well as high-profile cases in which the author was involved as a forensic psychiatrist."
    }
})
app.controller("book3", function ($scope, $route) {
    $scope.books = {
        title: "Hannibal",
        author: "Thomas Harris",
        year: 1999,
        pages: 505,
        descriptions: "The story takes place seven years after the events of The Silence of the Lambs. Clarice Starling is thirty-two years old, she has become a real professional, a special agent of the FBI, but because of the intrigues of a long-time detractor Paul Krandler from the Department of Justice, she is entrusted with a hard thankless job. So this time she must take part in the operation to arrest the head of the drug laboratory, Evelda Drumgo. The criminals have been warned and are not going to give up, the massacre begins. Starling kills Evelda, who is carrying a child, and as a result becomes the target of attacks from the media and her colleagues, including Krandler. She comes to the aid of millionaire Mason Verger (Werger), who became a victim of Lecter. Lecter plunged Mason into a state of drug intoxication and ordered him to cut off his face with a piece of mirror, and then broke his neck with a noose. Disfigured, unable to move, Verger dreams of feeding Lecter alive to pigs. Clarice receives a letter from Lecter, asking him to complete the story of the lambs. Letter scent experts identify the perfume manufacturer."
    }
})
app.controller("book4", function ($scope, $route) {
    $scope.books = {
        title: "Zilber first book",
        author: "Kerstin Gier",
        year: 2014,
        pages: 309,
        descriptions: "Mysterious doors with lizard-head knobs. Talking stone statues. A crazy girl with a hatchet. Yes, Liv's dreams have been pretty weird lately. Especially the one where she's in a graveyard at night, watching four boys conduct dark magic rituals. The strangest part is that Liv recognizes the boys in her dream. They're classmates from her new school in London, the school where she's starting over because her mom has moved them to a new country (again). But what's really scaring Liv is that the dream boys seem to know things about her in real life, things they couldn't possibly know--unless they actually are in her dreams? Luckily, Liv never…"

    }
})
app.controller("book5", function ($scope, $route) {
    $scope.books = {
        title: "Inside the Killer",
        author: "Mike Omer",
        year: 2019,
        pages: 410,
        descriptions: "Profiler... A criminal psychologist, literally in a couple of minor details, able to recreate the appearance and mode of action of the most cunning criminal. These people look like wizards, like superheroes. Especially if the profiler is a woman... On the bridge in Chicago, leaning on the railing, stands a young beautiful woman. Very pale and very sad. She stares motionlessly at the dark water, covering her weeping eyes with her hand. And no one thinks that..."
    }
})