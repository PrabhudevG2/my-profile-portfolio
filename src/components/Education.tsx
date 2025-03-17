
import React, { useEffect, useRef } from 'react';

const Education = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const section = sectionRef.current;
    
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const cards = section?.querySelectorAll('.education-card');
          cards?.forEach((card, index) => {
            (card as HTMLElement).style.animationDelay = `${0.2 + index * 0.1}s`;
          });
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });
    
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);
  
  const education = [
    {
      year: "2020",
      degree: "Post Graduate Diploma in Business Analytics",
      institution: "IIM Calcutta, ISI Kolkata, IIT Kharagpur",
      grade: "8.32/10"
    },
    {
      year: "2017",
      degree: "Dual Degree (B.Tech +M.Tech) - Naval Architecture",
      institution: "Indian Institute of Technology Kharagpur",
      grade: "7.46/10"
    }
  ];
  
  const certifications = [
    "Azure Data Science Associate",
    "Deep Learning Specialization"
  ];
  
  return (
    <section ref={sectionRef} id="education" className="py-16 md:py-24" style={{ "--section-index": "2" } as React.CSSProperties}>
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-7">
            <h2 className="section-title">Academic Qualifications</h2>
            <p className="section-subtitle">Education and professional certifications</p>
            
            <div className="space-y-6 mt-8">
              {education.map((edu, index) => (
                <div key={index} className="education-card bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex justify-between">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold">{edu.degree}</h3>
                      <p className="text-resume-muted">{edu.institution}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-medium text-resume-accent">{edu.year}</span>
                      <p className="text-sm text-resume-muted">{edu.grade}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-5">
            <div className="education-card h-full bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Certifications</h3>
              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center">
                    <div className="h-9 w-9 flex items-center justify-center rounded-full bg-resume-accent/10 text-resume-accent mr-3">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {["Python", "R", "Matlab", "Pyspark", "SQL", "C", "FastAPI", "Django", "HTML/CSS"].map((lang, index) => (
                    <span key={index} className="bg-resume-light/80 px-3 py-1 rounded-full text-xs">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {["Tableau", "MS Excel", "Power BI", "Databricks", "Kubernetes", "Docker", "Git", "ADO", "JIRA", "PyTorch", "TensorFlow", "GCP", "Azure"].map((tool, index) => (
                    <span key={index} className="bg-resume-light/80 px-3 py-1 rounded-full text-xs">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
