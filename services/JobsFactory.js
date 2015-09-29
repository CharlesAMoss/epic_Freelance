jobBoard.factory('JobsFactory', function JobsFactory(){
        var factory = {};

        factory.jobs = [{
            title: 'Fix my site',
            description: 'I\'m having trouble adding content to my site. Please help!',
            skills: 'WordPress',
            price: 100
        },
        {
            title: 'build my dream app',
            description: 'Facebook + tinder + candycrush for phones',
            skills: 'Javascript',
            price: 1000
        }];
        factory.addJob = function() {
            factory.jobs.push({
                title: factory.jobTitle,
                description: factory.jobDescription,
                skills: factory.jobSkills,
                price: factory.jobPrice
            });
            factory.jobTitle = null;
            factory.jobDescription = null;
            factory.jobSkills = null;
            factory.jobPrice = null;
        };

        return factory;
});
