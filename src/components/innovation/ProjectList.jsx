import React, { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const ProjectList = () => {
  const [industries, setIndustries] = useState([]);
  const [selectedIndustry, setSelectedIndustry] = useState(0);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    // Fetch industries
    const fetchIndustries = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/industries`
        );
        setIndustries(response.data);

        if (response.data.length > 0) {
          const firstIndustryId = response.data[0]._id;
          setSelectedIndustry(firstIndustryId);
          fetchProjects(firstIndustryId);

          // Set initial URL with selected industry
          setSearchParams({ industry: response.data[0].industryName });
        }
      } catch (error) {
        console.error("Error fetching industries:", error);
      }
    };

    fetchIndustries();
  }, []);

  const fetchProjects = async (industryId) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/projects/${industryId}`
      );
      setProjects(response.data);

      // Set the first project as selected by default
      if (response.data.length > 0) {
        setSelectedProject(response.data[0]._id); // Save project ID
        setSearchParams({
          industry: searchParams.get("industry"),
          project: response.data[0].projectName,
        });
      } else {
        setSelectedProject(null); // No project available for this industry
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const handleIndustryChange = (industry) => {
    setSelectedIndustry(industry._id);
    fetchProjects(industry._id);

    // Update URL with selected industry
    setSearchParams({ industry: industry.industryName });
  };

  const handleProjectChange = (projectId) => {
    setSelectedProject(projectId);

    // Update URL with selected project
    const industryName = searchParams.get("industry");
    const projectName = projects.find(
      (project) => project._id === projectId
    )?.projectName;
    setSearchParams({ industry: industryName, project: projectName });
  };

  return (
    <div className="bg-gray-100 ">
      <h3 className="text-3xl font-semibold text-red-500 text-center pt-12">
        Spotlight Projects & Innovations
      </h3>
      <div className="md:w-[75%] mx-auto  flex">
        {/* Sidebar */}
        <div className="md:w-[35%] bg-white p-4 my-8 items-start mt-8">
          <div>
            <button
              className="text-lg font-bold bg-orange-600 px-4 py-2 rounded w-full text-left"
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              Industries
              <span className="float-right">{isCollapsed ? "+" : "-"}</span>
            </button>

            {/* Industry List */}
            {!isCollapsed && (
              <div className="mt-4">
                {industries.map((industry) => (
                  <div
                    key={industry._id}
                    className="flex items-center mb-4 cursor-pointer"
                    onClick={() => handleIndustryChange(industry)}
                  >
                    <div className="w-6 h-6 flex items-center justify-center border-2">
                      {selectedIndustry === industry._id && (
                        <FaCheck className="text-red-500 text-sm" />
                      )}
                    </div>
                    <label className="ml-4 text-lg font-medium">
                      {industry.industryName}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mt-8">
            <h4 className="text-lg font-bold bg-orange-600 px-4 py-2 rounded w-full text-left">
              Projects
            </h4>
            {projects.length > 0 ? (
              <div className="mt-4">
                {projects.map((project) => (
                  <div
                    key={project._id}
                    className="flex items-center mb-4 cursor-pointer"
                    onClick={() => handleProjectChange(project._id)}
                  >
                    <div className="w-6 h-6 flex items-center justify-center border-2">
                      {selectedProject === project._id && (
                        <FaCheck className="text-red-500 text-sm" />
                      )}
                    </div>
                    <label className="ml-4 text-lg font-medium">
                      {project.projectName}
                    </label>
                  </div>
                ))}
              </div>
            ) : (
              <p>No projects available for this industry.</p>
            )}
          </div>
        </div>

        {/* Project Details */}
        <div className="md:w-[65%] bg-white p-4 my-8 ml-4 rounded shadow">
          {selectedProject ? (
            <div>
              <h3 className="text-2xl font-semibold">
                {
                  projects.find((project) => project._id === selectedProject)
                    ?.projectName
                }
              </h3>
              <p className="mt-4">
                {
                  projects.find((project) => project._id === selectedProject)
                    ?.description
                }
              </p>
            </div>
          ) : (
            <p className="text-gray-500">
              Select a project to see the details.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
