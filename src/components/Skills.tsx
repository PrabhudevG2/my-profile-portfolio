
import React, { useEffect, useRef } from 'react';

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const section = sectionRef.current;
    
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const cards = section?.querySelectorAll('.skill-card');
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
  
  const skillCategories = [
    {
      category: "Generative AI",
      skills: ["Large Language Models (LLM)", "Retrieval Augmented Generation (RAG)", "Prompt Engineering", "Fine-tuning", "Vector Databases"]
    },
    {
      category: "Natural Language Processing",
      skills: ["Text Classification", "Named Entity Recognition", "Sentiment Analysis", "Topic Modeling", "Question Answering"]
    },
    {
      category: "Computer Vision",
      skills: ["Object Detection", "Image Classification", "Semantic Segmentation", "Tracking", "Visual SLAM"]
    },
    {
      category: "Deep Learning",
      skills: ["Neural Networks", "Convolutional Networks", "Recurrent Networks", "Transformers", "Autoencoders"]
    },
    {
      category: "Machine Learning",
      skills: ["Classification", "Regression", "Clustering", "Dimensionality Reduction", "Ensemble Methods"]
    },
    {
      category: "Time Series",
      skills: ["Forecasting", "Anomaly Detection", "Sequence Modeling", "Signal Processing"]
    },
    {
      category: "Recommendation Systems",
      skills: ["Collaborative Filtering", "Content-Based Filtering", "Hybrid Methods", "Cold Start Problems"]
    },
    {
      category: "Optimization",
      skills: ["Linear Programming", "Genetic Algorithms", "Reinforcement Learning", "Constraint Satisfaction"]
    }
  ];
  
  const awards = [
    {
      title: "Research Paper",
      description: "Published a research paper titled \"Adaptive RoI with pretrained models for Automated Retail Checkout\" in IEEE."
    },
    {
      title: "Star Performer",
      description: "Recognized as a Star Performer for exceptional contributions and performance in Q2 2021."
    },
    {
      title: "Team Excellence Award",
      description: "Received the Team Excellence Award for collaborative achievements in Q3 2022."
    },
    {
      title: "Hackathon Winner",
      description: "Secured 1st place in the 'Third-party high-risk contracts identification' Hackathon held at Mastercard 2019."
    },
    {
      title: "Top 3 Finisher",
      description: "Ranked within the Top 3 in the chatGPT-based application building hackathon organized by Centific 2023."
    }
  ];
  
  return (
    <section ref={sectionRef} id="skills" className="py-16 md:py-24 bg-white" style={{ "--section-index": "3" } as React.CSSProperties}>
      <div className="container px-4 md:px-6">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">Areas of expertise and competence</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card bg-resume-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-3">{category.category}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center text-sm">
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-resume-accent"></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div id="awards" className="mt-24">
          <h2 className="section-title">Awards & Achievements</h2>
          <p className="section-subtitle">Recognition for excellence</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {awards.map((award, index) => (
              <div key={index} className="skill-card bg-resume-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-resume-accent/10 text-resume-accent mr-3">
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
                      <circle cx="12" cy="8" r="7"></circle>
                      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">{award.title}</h3>
                </div>
                <p className="text-sm text-resume-dark/80">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
