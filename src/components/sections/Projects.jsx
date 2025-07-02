// import { RevealOnScroll } from "../RevealOnScroll";

// export const Projects = () => {
//   return (
//     <section
//       id="projects"
//       className="min-h-screen flex items-center justify-center py-20"
//     >
//       <RevealOnScroll>
//         <div className="max-w-5xl mx-auto px-4">
//           <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
//             {" "}
//             Featured Projects
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
//               <h3 className="text-xl font-bold mb-2"> Real Estate Website</h3>
//               <p className="text-gray-400 mb-4">
//                Developed a responsive real estate website with interactive property listings, intuitive UI, and seamless user navigation.
//               </p>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {["React", "API Integration", "Tailwind Css", "Emailjs"].map((tech, key) => (
//                   <span
//                     key={key}
//                     className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
//                                     hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
//                     "
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//               <div className="flex justify-between items-center">
//                 <a
//                   href="#"
//                   className="text-blue-400 hover:text-blue-300 transition-colors my-4"
//                 >
//                   View Project →
//                 </a>
//               </div>
//             </div>
//             <div
//               className="
//               glass p-6 rounded-xl border border-white/10 
//               hover:-translate-y-1 hover:border-blue-500/30
//               hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
//               transition-all
//             "
//             >
//               <h3 className="text-xl font-bold mb-2">AI Analytics Dashboard</h3>
//               <p className="text-gray-400 mb-4">
//                 ML-powered data visualization platform with predictive analytics
//                 and interactive reports.
//               </p>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {["Python", "TensorFlow", "D3.js", "Flask", "Machine Learning"].map((tech, key) => (
//                   <span
//                     key={key}
//                     className="
//                       bg-blue-500/10 text-blue-500 py-1 px-3 
//                       rounded-full text-sm
//                       transition
//                       hover:bg-blue-500/20 hover:-translate-y-0.5
//                       hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
//                     "
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//               <div className="flex justify-between items-center">
//                 <a
//                   href="#"
//                   className="text-blue-400 hover:text-blue-300 transition-colors my-4"
//                 >
//                   View Project →
//                 </a>
//               </div>
//             </div>

//             <div
//               className="
//               glass p-6 rounded-xl border border-white/10 
//               hover:-translate-y-1 hover:border-blue-500/30
//               hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
//               transition-all
//             "
//             >
//               <h3 className="text-xl font-bold mb-2">E-Commerce Web App</h3>
//               <p className="text-gray-400 mb-4">
//                 Full-stack e-commerce with modern UI, secure payment
//                 integration, and customizable product inventory.
//               </p>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {["Next.js", "TypeScript", "Stripe", "PostgreSQL"].map(
//                   (tech) => (
//                     <span
//                       key={tech}
//                       className="
//                       bg-blue-500/10 text-blue-500 py-1 px-3 
//                       rounded-full text-sm
//                       transition
//                       hover:bg-blue-500/20 hover:-translate-y-0.5
//                       hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
//                     "
//                     >
//                       {tech}
//                     </span>
//                   )
//                 )}
//               </div>
//               <div className="flex justify-between items-center">
//                 <a
//                   href="#"
//                   className="text-blue-400 hover:text-blue-300 transition-colors my-4"
//                 >
//                   View Project →
//                 </a>
//               </div>
//             </div>

//             <div
//               className="
//               glass p-6 rounded-xl border border-white/10 
//               hover:-translate-y-1 hover:border-blue-500/30
//               hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
//               transition-all
//             "
//             >
//               <h3 className="text-xl font-bold mb-2">Gemini Clone</h3>
//               <p className="text-gray-400 mb-4">
//                 Implemented a responsive Gemini chat clone with real-time interactions and modern UI design.
//               </p>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {["React.js", "Tailwind CSS", "Framer Motion", "Gemini API"].map((tech, key) => (
//                   <span
//                     key={key}
//                     className="
//                       bg-blue-500/10 text-blue-500 py-1 px-3 
//                       rounded-full text-sm
//                       transition
//                       hover:bg-blue-500/20 hover:-translate-y-0.5
//                       hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
//                     "
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//               <div className="flex justify-between items-center ">
//                 <a
//                   href="#"
//                   className="text-blue-400 hover:text-blue-300 transition-colors my-4"
//                 >
//                   View Project →
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </RevealOnScroll>
//     </section>
//   );
// };



import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Real Estate Website */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Real Estate Website</h3>
              <p className="text-gray-400 mb-4">
                Developed a responsive real estate website with interactive property listings, intuitive UI, and seamless user navigation.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "API Integration", "Tailwind CSS", "Emailjs"].map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow transition-all">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href="https://college-website-q0eezx77w-ajaysharma200s-projects.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
                <a
                  href="https://github.com/ajaysharma200/college-website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-200 transition-colors my-4"
                >
                  See Source Code ↗
                </a>
              </div>
            </div>

            {/* AI Analytics Dashboard */}
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow transition-all">
              <h3 className="text-xl font-bold mb-2">AI Analytics Dashboard</h3>
              <p className="text-gray-400 mb-4">
                ML-powered data visualization platform with predictive analytics and interactive reports.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "TensorFlow", "D3.js", "Flask", "Machine Learning"].map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href="https://your-ai-dashboard.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
                <a
                  href="https://github.com/ajaysharma200/ai-dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-200 transition-colors my-4"
                >
                  See Source Code ↗
                </a>
              </div>
            </div>

            {/* E-Commerce Web App */}
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow transition-all">
              <h3 className="text-xl font-bold mb-2">Job Portal Web App</h3>
              <p className="text-gray-400 mb-4">
                A full-stack Job Portal web app with user authentication, job listings, resume uploads, and seamless job application flow.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Next.js", "TypeScript", "React.js", "MongoDB","JWT"].map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href="https://your-ecommerce-app.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
                <a
                  href="https://github.com/ajaysharma200/ecommerce-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-200 transition-colors my-4"
                >
                  See Source Code ↗
                </a>
              </div>
            </div>

            {/* Gemini Clone */}
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow transition-all">
              <h3 className="text-xl font-bold mb-2">Gemini Clone</h3>
              <p className="text-gray-400 mb-4">
                Implemented a responsive Gemini chat clone with real-time interactions and modern UI design.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React.js", "Tailwind CSS", "Framer Motion", "Gemini API"].map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href="https://your-gemini-clone.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
                <a
                  href="https://github.com/ajaysharma200/Gemini-clone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-200 transition-colors my-4"
                >
                  See Source Code ↗
                </a>
              </div>
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
