
import React, { useEffect, useRef } from 'react';

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const section = sectionRef.current;
    
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const cards = section?.querySelectorAll('.experience-card');
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
  
  const experiences = [
    {
      role: "AI Lead",
      company: "Centific Global Tech Pvt Ltd.",
      location: "Hyderabad",
      period: "April'24 - Present",
      projects: [
        {
          title: "LLM Data Quality assessment",
          descriptions: [
            "Developed automated checks tailored to multiple LLM data authoring and annotation project requirements.",
            "Collaborated cross-functionally with AI, Delivery, QM, and WebApp teams to define automation scope and streamline annotation workflows.",
            "Automated weekly script triggered via Devops CI pipelines for timely data annotation processing run on Azure ML.",
            "Validated accuracy using feedback from annotators on test data set to maintain overall delivery quality.",
            "Achieved an 80% reduction in manual QA effort through streamlined automation processes."
          ]
        },
        {
          title: "Small Language Models (SLM) for QA",
          descriptions: [
            "Fine tuned SLMs in multiple languages for various QA checks, ensuring reusability across different projects.",
            "Implemented checks for grammar, localization, response quality, and multimodal alignment to ensure comprehensive QA.",
            "Replaced OpenAI GPT-4 with in-house SLMs (Phi, Gemma, LLaMA) for cost-effective, scalable QA solutions.",
            "Utilized QLoRA for fine-tuning, experimenting with various quantization levels (e.g., 4-bit, 8-bit) and rank selection strategies to balance model performance and memory efficiency.",
            "Tested model accuracy on open-source, human-annotated, and LLM-generated datasets on metrics including Precision, Recall, F1 Score and IAA ensuring robustness across different data types.",
            "Integrated the deployed SLMs with Centific Internal Platforms Loop and Oneforma for various cases."
          ]
        }
      ]
    },
    {
      role: "Senior AI Engineer",
      company: "Centific Global Tech Pvt Ltd.",
      location: "Hyderabad",
      period: "June'23 - April'24",
      projects: [
        {
          title: "Coffee Chain Conversational AI Chat Bot",
          descriptions: [
            "Developed a conversational chatbot to assist baristas with recipe preparation by answering queries from a comprehensive knowledge base deployed in ChromaDB.",
            "Implemented advanced strategies, such as document-level chunking and hybrid retriever methods, for optimal data processing and retrieval.",
            "Integrated LangChain components like LCEL, LangServe, Long-Context Reorder for enhanced conversation flow and improved contextual understanding.",
            "Ensured the chatbot was production ready by evaluating performance on a golden dataset using RAGAS."
          ]
        },
        {
          title: "Shrinkage Detection",
          descriptions: [
            "Developed a video-based shrinkage detection solution to prevent theft for a leading retail chain in the US.",
            "Integrated YOLOv5 for high-precision object detection and OC-SORT for efficient tracking.",
            "Built key components including product detection, cart tracking, human identification, product tracking, and a False Positive (FP) Eliminator to enhance accuracy.",
            "Deployed the solution in one store, resulting in an average identification of $400 worth of theft per week."
          ]
        }
      ]
    },
    {
      role: "ML Engineer",
      company: "Centific Global Tech Pvt Ltd.",
      location: "Hyderabad",
      period: "July'20 - June'23",
      projects: [
        {
          title: "Trade Promotion Optimization",
          descriptions: [
            "Built Trade Promotion solution for a major FMCG company, specifically for the Australia market.",
            "Utilized the Autoregressive Distributed lag model (ADL) to accurately predict sales and optimize promotional strategies, through MLOps CI CD build and deployment pipeline.",
            "Employed Genetic Algorithm to optimize trade promotions, resulting in improved sales performance.",
            "Analyzed and categorized uplift sales into components such as Cannibalization, Competitor Switching, Category Expansion, Retailer Switching, and Category Expansion."
          ]
        },
        {
          title: "Line Haul Optimization",
          descriptions: [
            "Designed a highly complex logistics route optimization solution across 38 hubs using Deep Deterministic Policy Gradient (DDPG), tailored for a leading logistics company in India.",
            "Created action spaces for vehicle addition/removal, transshipments, and touchpoint optimization, factoring in constraints like payload capacity and hub connections.",
            "Reward function is designed to calculate favorability of the new state is in terms of logistics efficiency.",
            "Analyzed outputs such as the Optimal Network State and Residual Load Matrix to validate model performance and ensure practical deployment for the business."
          ]
        }
      ]
    },
    {
      role: "AI Specialist",
      company: "Mastercard AI Garage (Internship)",
      location: "Gurugram",
      period: "Oct'19 - Apr'20",
      projects: [
        {
          title: "Critical Failure Prediction in Unified Computing Systems (UCS)",
          descriptions: [
            "Developed ensemble models to detect early critical failures in Mastercard's Data Servers, Unified Computing Systems (UCS).",
            "Processed raw logs from 1000 servers, extracting key variables from ~200M daily transactions.",
            "Addressed class imbalance (167:1) using SMOTE ENN sampling and class weights tuning.",
            "Improved critical failure recall by 17% with Sequential Prediction models and identified contributing features using Variational Autoencoders.",
            "Implemented an Attention-based LSTM-CNN model to predict time to failure for flagged instances."
          ]
        }
      ]
    }
  ];
  
  return (
    <section ref={sectionRef} id="experience" className="py-16 md:py-24 bg-white" style={{ "--section-index": "1" } as React.CSSProperties}>
      <div className="container px-4 md:px-6">
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">My professional journey</p>
        
        <div className="space-y-12 mt-8">
          {experiences.map((exp, expIndex) => (
            <div key={expIndex} className="experience-card bg-resume-card p-6 md:p-8 rounded-xl shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold">{exp.role}</h3>
                  <p className="text-resume-muted">{exp.company} • {exp.location}</p>
                </div>
                <p className="text-sm font-medium text-resume-accent mt-2 md:mt-0">{exp.period}</p>
              </div>
              
              <div className="space-y-8">
                {exp.projects.map((project, projectIndex) => (
                  <div key={projectIndex} className="space-y-3">
                    <h4 className="text-lg font-medium">{project.title}</h4>
                    <ul className="space-y-2">
                      {project.descriptions.map((desc, descIndex) => (
                        <li key={descIndex} className="flex items-start">
                          <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-resume-accent shrink-0"></span>
                          <span className="text-sm text-resume-dark/90 leading-relaxed">{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
