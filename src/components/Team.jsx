import React from "react";

const people = [
  {
    name: "Chieloka Madubugwu",
    role: "Chief Technology Officer",
    // description: "AI & Security Architect with 10+ years in fintech systems",
    imageUrl: "./img/chielokaHeadshot.jpg",
  },
  {
    name: "Kennedy Okpala",
    role: "Software Engineer - C#",
    // description: "Former banking security specialist turned entrepreneur",
    imageUrl: "./img/kenedyHeadshot.JPG",
  },
  {
    name: "Ayoade Oluwasegun",
    role: "Software Engineer - C#",
    // description: "Leads our human-in-the-loop review team",
    imageUrl: "./img/segunHeadshot.jpg",
  },
  {
    name: "Opeyemi Adeyeye",
    role: "Product Designer",
    // description: "Develops our behavioral pattern recognition algorithms",
    imageUrl: "./img/opeyemiHeadshot.jpg",
  },
  {
    name: "Arafat Akata",
    role: "Software Engineer - Frontend",
    // description: "Connects banks with our security solutions",
    imageUrl: "./img/arafatHeadshot.jpg",
  },
];

const Team = () => {
  return (
    <div id="team" className="bg-white py-14 sm:py-32 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Security Experts
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            The minds building Africa's most advanced fraud prevention system
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {people.map((person) => (
            <li key={person.name} className="group">
              <div className="flex flex-col items-center text-center">
                <img
                  className="h-32 w-32 rounded-full object-cover group-hover:ring-4 group-hover:ring-indigo-200 transition-all duration-200"
                  src={person.imageUrl}
                  alt={person.name}
                />
                <h3 className="mt-6 text-lg font-semibold leading-7 tracking-tight text-gray-900">
                  {person.name}
                </h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">
                  {person.role}
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-600 max-w-xs">
                  {person.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Team;
