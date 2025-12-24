import React, { useState } from 'react';
import {
  FaCode,
  FaServer,
  FaChartLine,
  FaUserTie,
  FaUniversity,
  FaAws,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaProjectDiagram
} from 'react-icons/fa';

const Certification = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const certifications = [
    {
      id: 1,
      title: "Google IT Automation with Python Professional",
      issuer: "Google",
      category: "devops",
      skills:
        "Git/GitHub, Automation, Programming Principles, Technical Communication, Web Services, Email Automation, Puppet (Configuration Management Tool), Infrastructure As A Service (IaaS), Bash (Scripting Language)",
      date: "September, 2024",
      icon: FaCode,
      iconBg: "devops",
      issuerIcon: FaUserTie,
      certificateUrl:
        "https://coursera.org/share/cabb455b98d491888ccd3d6cb831b1fb"
    },
    {
      id: 2,
      title: "Google Project Management",
      issuer: "Google",
      category: "project-management",
      skills:
        "Interviewing Skills, Risk Management, Requirements Analysis, Stakeholder Analysis, Project Scoping, Agile, Scrum, Tracking Systems, Project Closure.",
      date: "September, 2024",
      icon: FaProjectDiagram,
      iconBg: "project-management",
      issuerIcon: FaUserTie,
      certificateUrl:
        "https://coursera.org/share/73b3735a29d94775ba3e734fca487fa1"
    },
    {
      id: 3,
      title: "Data Science Professional",
      issuer: "NED UET",
      category: "data-science",
      skills:
        "Python, Machine Learning, Data Analysis, Statistics, Data Visualization",
      date: "March, 2025",
      icon: FaChartLine,
      iconBg: "data-science",
      issuerIcon: FaUniversity,
      certificateUrl: "#"
    },
    {
      id: 4,
      title: "Create and manage a project dashboard with Wrike",
      issuer: "Coursera",
      category: "project-management",
      skills: "Creating dashboard",
      date: "November, 2024",
      icon: FaServer,
      iconBg: "project-management",
      issuerIcon: FaAws,
      certificateUrl:
        "https://coursera.org/share/2f320383d2280285cdd9e1c02ef90a06"
    },
    {
      id: 5,
      title: "Automate tasks and processes with Jira",
      issuer: "Coursera",
      category: "project-management",
      skills: "Automating Tasks",
      date: "November, 2024",
      icon: FaServer,
      iconBg: "project-management",
      issuerIcon: FaAws,
      certificateUrl:
        "https://coursera.org/share/421d1a1670b7014ddbe9684f69f06259"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Certifications' },
    { id: 'devops', label: 'DevOps & Development' },
    { id: 'project-management', label: 'Project Management' },
    { id: 'data-science', label: 'Data Science' }
  ];

  const filteredCertifications =
    activeFilter === 'all'
      ? certifications
      : certifications.filter(cert => cert.category === activeFilter);

  const handleViewCertificate = (certificateUrl, title) => {
    if (certificateUrl && certificateUrl !== '#') {
      window.open(certificateUrl, '_blank', 'noopener,noreferrer');
    } else {
      alert(`Certificate URL for "${title}" is not available.`);
    }
  };

  const getIconClass = (type) => {
    const baseClasses =
      "w-14 h-14 rounded-xl flex items-center justify-center mr-4";

    switch (type) {
      case 'devops':
        return `${baseClasses} bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600 dark:from-blue-500 dark:to-blue-700 dark:text-white`;
      case 'project-management':
        return `${baseClasses} bg-gradient-to-br from-purple-100 to-purple-200 text-purple-600 dark:from-purple-500 dark:to-purple-700 dark:text-white`;
      case 'data-science':
        return `${baseClasses} bg-gradient-to-br from-green-100 to-green-200 text-green-600 dark:from-green-500 dark:to-green-700 dark:text-white`;
      default:
        return `${baseClasses} bg-gradient-to-br from-gray-100 to-gray-200 text-gray-600 dark:from-gray-500 dark:to-gray-700 dark:text-white`;
    }
  };

  return (
    <section
      id="certification"
      className="scroll-mt-28 min-h-screen bg-white text-gray-900 dark:text-white dark:bg-darkTheme duration-300 p-4 md:p-8"
    >
      <div className="max-w-7xl mx-auto py-12">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Certifications & Credentials
          </h1>
          <p className="text-lg max-w-3xl mx-auto">
            Professional certifications and credentials that validate my expertise and commitment to continuous learning.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-darkHover text-white border dark:border-white shadow-lg'
                  : 'bg-gray-100 dark:bg-darkHover text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertifications.map(cert => {
            const IconComponent = cert.icon;
            const IssuerIcon = cert.issuerIcon;

            return (
              <div
                key={cert.id}
                className="bg-white dark:bg-darkHover rounded-2xl p-6 border border-gray-200 dark:border-gray-700
                           hover:bg-lightHover hover:shadow-[6px_6px_0_#000]
                           dark:hover:bg-darkHover dark:hover:shadow-[6px_6px_0_#fff]
                           hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
              >
                <div className="flex items-start mb-6">
                  <div className={getIconClass(cert.iconBg)}>
                    <IconComponent className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{cert.title}</h3>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mt-1">
                      <IssuerIcon className="mr-2" />
                      {cert.issuer}
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-6 flex-grow">
                  {cert.skills}
                </p>

                <div className="flex justify-between mb-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="text-sm">
                    <FaCalendarAlt className="inline mr-2" />
                    {cert.date}
                  </div>
                  <span className="text-green-600 font-bold text-sm">VERIFIED</span>
                </div>

                {/* PREMIUM INTERACTIVE BUTTON */}
                <button
                  onClick={() =>
                    handleViewCertificate(cert.certificateUrl, cert.title)
                  }
                  className="group relative w-full py-3 px-4 flex items-center justify-center gap-2 
                             bg-transparent text-black dark:text-white 
                            border border-gray-400 dark:border-gray-600 
                             rounded-xl font-bold overflow-hidden transition-all duration-300
                             hover:bg-darkTheme hover:text-white dark:hover:bg-white dark:hover:text-black
                             active:scale-95 hover:scale-[1.02]"
                >
                  <FaExternalLinkAlt className="text-sm transition-transform group-hover:rotate-12" />
                  <span>View Certificate</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certification;