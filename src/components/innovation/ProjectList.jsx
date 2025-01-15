import React, { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import ProjectDetailsCard from "./ProjectDetailsCard"; // Import the new component

const ProjectList = () => {
  const [industries, setIndustries] = useState([]);
  const [selectedIndustry, setSelectedIndustry] = useState(0);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [industryLoading, setIndustryLoading] = useState(false); // Industry loading state
  const [projectLoading, setProjectLoading] = useState(false); // Project loading state

  useEffect(() => {
    // Fetch industries
    const fetchIndustries = async () => {
      setIndustryLoading(true); // Start industry loading
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/industries`
        );
        setIndustries(response.data);

        if (response.data.length > 0) {
          const firstIndustryId = response.data[0]._id;
          setSelectedIndustry(firstIndustryId);
          fetchProjects(firstIndustryId);
          setSearchParams({ industry: response.data[0].industryName });
        }
      } catch (error) {
        console.error("Error fetching industries:", error);
      } finally {
        setIndustryLoading(false); 
      }
    };

    fetchIndustries();
  }, []);

  const fetchProjects = async (industryId) => {
    setProjectLoading(true); 
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/projects/${industryId}`
      );
      setProjects(response.data);

      if (response.data.length > 0) {
        setSelectedProject(response.data[0]._id);
        setSearchParams({
          industry: searchParams.get("industry"),
          project: response.data[0].projectName,
        });
      } else {
        setSelectedProject(null);
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setProjectLoading(false); // Stop project loading
    }
  };

  const handleIndustryChange = (industry) => {
    setSelectedIndustry(industry._id);
    fetchProjects(industry._id);
    setSearchParams({ industry: industry.industryName });
  };

  const handleProjectChange = (projectId) => {
    setSelectedProject(projectId);

    const industryName = searchParams.get("industry");
    const projectName = projects.find(
      (project) => project._id === projectId
    )?.projectName;
    setSearchParams({ industry: industryName, project: projectName });
  };

  const selectedProjectData = projects.find(
    (project) => project._id === selectedProject
  );

  return (
    <div className="bg-gray-100 ">
      <h3 className="text-3xl font-semibold text-red-500 text-center pt-12 ml-28">
        Spotlight Projects & Innovations
      </h3>
      <div className="md:w-[75%] mx-auto flex">
        {/* Sidebar */}
        <div className="md:w-[35%] bg-white p-4 my-8 items-start mt-8 h-[30%]">
          <div>
            <button
              className="text-lg font-semibold bg-orange-600 px-4 py-2 rounded w-full text-left text-white"
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              Industries
              <span className="float-right">{isCollapsed ? "+" : "-"}</span>
            </button>

            {!isCollapsed && (
              <div className="mt-4">
                {industryLoading ? (
                  <>
                    <div className="flex justify-center items-center h-full">
                      <div className="w-6 h-6 border-4 border-dashed border-orange-600 rounded-full animate-spin"></div>
                    </div>
                    <p className="text-center text-gray-500 mt-4">
                      Loading industries...
                    </p>
                  </>
                ) : (
                  industries.map((industry) => (
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
                      <label className="ml-4 text-lg ">
                        {industry.industryName}
                      </label>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>

          <div className="mt-8">
            <h4 className="text-lg font-semibold bg-orange-600 px-4 py-2 rounded w-full text-left text-white">
              Projects
            </h4>
            {projectLoading ? (
              <>
                <div className="flex justify-center items-center h-full mt-4">
                  <div className="w-6 h-6 border-4 border-dashed border-orange-600 rounded-full animate-spin"></div>
                </div>
                <p className="text-center text-gray-500 mt-4">
                  Loading projects...
                </p>
              </>
            ) : (
              projects.length > 0 && (
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
                      <label className="ml-4 text-lg ">
                        {project.projectName}
                      </label>
                    </div>
                  ))}
                </div>
              )
            )}
          </div>
        </div>

        
        {!industryLoading && !projectLoading && selectedProject && (
          <ProjectDetailsCard project={selectedProjectData} />
        )}
      </div>
    </div>
  );
};

export default ProjectList;
