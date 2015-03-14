
var bio = {
	"name" : "Geoffroy Baylaender",
	"role" : "web designer",
	"contacts" : {
		"mobile" : "000777888",
		"email" : "my@email.com",
		"github" : "oeg87",
		"twitter" : "oeg87",
		"location": "Lugano, Switzerland"
	},
	"welcomeMessage" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia vel iste quod soluta iure aspernatur tempora excepturi tempore deleniti quisquam natus hic debitis perspiciatis alias neque, explicabo maxime eligendi repudiandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
	"skills" :  [
		"HTML", "CSS", "UX", "UI"
	],
	"bioPic" : "images/fry.jpg",
	displayBio :function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedRole).prepend(formattedName);

		var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
		var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

		//ADD CONTACTS INFO
		var results = "";
		var contacts = bio.contacts;
		for (var key in contacts) {
			var template = window["HTML"+ key];
			var data = " " + contacts[key];
			results = results + template.replace("%data%", data);
		}
		$("#topContacts").append(results);

		//ADD PIC + WELCOME MSG
		$('#header').append(formattedBioPic, formattedWelcome);

		//ADD SKILLS
		if ( bio.skills.length > 0 ) {
			$('#header').append(HTMLskillsStart);

			for ( var i = 0; i < bio.skills.length; i++) {
				var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
				$("#skills").append(formattedSkill);
			}
		} 
	}
};

var education = {
	"schools" : [
		{
			"name" : "CSIA",
			"location" : "Lugano",
			"degree" : "AFC",
			"majors" : ["CS"],
			"dates" : 2006,
			"url": "http://www.csia.ch"
		}, 
		{
			"name" : "SSSAA",
			"location" : "Lugano",
			"degree" : "SSS",
			"majors" : ["CS"],
			"dates" : 2010,
			"url": "http://sssaa.csia.ch"
		}
	],
	"onlineCourses" : [
		{
			"title": "JS Crash Course",
			"school" : "Udacity",
			"date" : 2014,
			"url" : "http://udacity.com"
		}
	],
	displaySchool : function() {
		for ( school in education.schools ) {
			$("#education").append(HTMLschoolStart);
			
			var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);
			$(".education-entry:last").append(formattedName);

			var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
			$(".education-entry:last").append(formattedDates);

			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedLocation);

			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
			$(".education-entry:last").append(formattedMajor);
		}
	},
	displayOnlineClasses : function() {
		for ( online in education.onlineCourses ) {
			$("#education").append(HTMLonlineClasses);
			$("#education").append(HTMLschoolStart);
			
			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title).replace("#", education.onlineCourses[online].url);
			$(".education-entry:last").append(formattedTitle);

			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
			$(".education-entry:last a").append(formattedSchool);

			var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[online].date);
			$(".education-entry:last").append(formattedDate);

			var formattedURL= HTMLonlineURL.replace("%data%", education.onlineCourses[online].url).replace("#", education.onlineCourses[online].url);
			$(".education-entry:last").append(formattedURL);
		}
	}
};

var work = {
	"jobs": [
		{
			"employer":"Festival",
			"title": "intern",
			"location": "Locarno, Switzerland",
			"dates": [2010,2011],
			"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla vel praesentium quisquam itaque voluptates voluptatem, incidunt libero temporibus doloremque quidem autem non deserunt sunt provident distinctio enim sequi officia corrupti."
		},
		{
			"employer":" Jannuzzi Smith",
			"title": "intern",
			"location": "London, United Kingdom",
			"dates": [2011,2012],
			"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem facilis maxime non laborum debitis est pariatur ex fugiat porro officiis quis, ab voluptates vel saepe quia neque explicabo, nobis ad?"
		},
		{
			"employer":"Pinco Palla",
			"title": "Manager",
			"location": "Zürich, Switzerland",
			"dates": [2009,2010],
			"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat nobis error magni libero ducimus blanditiis minus beatae fugiat sequi reiciendis suscipit eos, qui doloremque doloribus impedit mollitia labore veritatis repellendus."
		}
	],
	"projects": [
		{
			"title" : "managment",
			"dates" : [2010],
			"description" : "pinco pallo parapallo",
			"images" : [
				"images/197x148.gif",
				"images/197x148.gif"
			]
		},
		{
			"title" : "pardo live",
			"dates" : [2011],
			"description" : "facciamo il pardo pardino pardello",
			"images" : [
				"images/197x148.gif"
			]
		}
	],
	displayJob : function() {
		for ( job in work.jobs ) {
			$("#workExperience").append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer).replace('#','#mapDiv');
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;

			$(".work-entry:last").append(formattedEmployerTitle);

			var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);

			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			$(".work-entry:last").append(formattedLocation);

			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
		}
	},
	displayProjects : function() {
		for (project in work.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedTitle = HTMLprojectTitle.replace("%data%", work.projects[project].title);
			$(".project-entry:last").append(formattedTitle);

			var formattedDates = HTMLprojectDates.replace("%data%", work.projects[project].dates);
			$(".project-entry:last").append(formattedDates);

			var formattedDescription = HTMLprojectDescription.replace("%data%", work.projects[project].description);
			$(".project-entry:last").append(formattedDescription);

			if (work.projects[project].images.length > 0) {
				for (image in work.projects[project].images) {
					var formattedImage = HTMLprojectImage.replace("%data%", work.projects[project].images[image]);
					$(".project-entry:last").append(formattedImage);
				}
			}
		}
	}
};



function inName(inName) {
	name =  name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase()
	name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}

function locationizer(work_obj) {
	var locationArray = [];

	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}
	return locationArray;
}



bio.displayBio();

work.displayJob();

work.displayProjects(); 

education.displaySchool();

education.displayOnlineClasses();



$('#main').append(internationalizeButton);


$('#mapDiv').append(googleMap);

