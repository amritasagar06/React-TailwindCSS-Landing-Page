import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useEffect, useRef, useState } from "react";


const features = [
    {
        title: "AI Code Completion",
        description: "Intelligent code suggestions by AI helping you code efficiently",
        codeSnippet: `useEffect(() => {
            function handleMouseMove(e) {
              setMousePosition({ x: e.clientX, y: e.clientY });
            }
            window.addEventListener("mousemove", handleMouseMove);
        
            return () => window.removeEventListener("mousemove", handleMouseMove);
          }, []);`,
        imagePosition: "left",
    },
    {
        title: "Automated Testing",
        description: "Automatically generate and run comprehensive tests to ensure your code is reliable and bug-free.",
        codeSnippet: `useEffect(() => {
            function handleMouseMove(e) {
              setMousePosition({ x: e.clientX, y: e.clientY });
            }
            window.addEventListener("mousemove", handleMouseMove);
        
            return () => window.removeEventListener("mousemove", handleMouseMove);
          }, []);`,
        imagePosition: "right",
    },
    {
        title: "Smart Debugging",
        description: "Identify and fix bugs quickly with AI-powered debugging tools that pinpoint issues in your code.",
        codeSnippet: `useEffect(() => {
            function handleMouseMove(e) {
              setMousePosition({ x: e.clientX, y: e.clientY });
            }
            window.addEventListener("mousemove", handleMouseMove);
        
            return () => window.removeEventListener("mousemove", handleMouseMove);
          }, []);`,
        imagePosition: "left",
    },
];

export default function Features() {
    const [visibleFeatures, setVisibleFeatures] = useState([]);
    const sectionRef = useRef(null);
    const featureRefs = useRef([]);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.2,
            rootMargin: "50px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = featureRefs.current.indexOf(entry.target);
                    if (index !== -1 && !visibleFeatures.includes(index)) {
                        setVisibleFeatures(prev => [...prev, index]);
                    }
                }
            });
        }, observerOptions);

        // Observe each feature section
        featureRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        // Cleanup
        return () => {
            featureRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    const setFeatureRef = (index) => (el) => {
        featureRefs.current[index] = el;
    };

    return (
        <section 
            id="features" 
            ref={sectionRef}
            className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        >
            {/* Background elements */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
            
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Animated Header */}
                <div className="text-center mb-12 sm:mb-16 lg:mb-20 transform transition-all duration-1000 delay-300">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                        <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent block">
                            Your Complete Development
                        </span>
                        <span className="bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent block mt-2">
                            Workflow
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-6 opacity-0 animate-fadeInUp animation-delay-500">
                        Experience the future of coding with AI-powered tools that streamline your entire development process.
                    </p>
                </div>
                
                <div className="space-y-16 sm:space-y-20 lg:space-y-32">
                    {features.map((feature, index) => {
                        const isVisible = visibleFeatures.includes(index);
                        
                        return (
                            <div 
                                key={index} 
                                ref={setFeatureRef(index)}
                                className={`transform transition-all duration-1000 ${
                                    isVisible 
                                        ? 'opacity-100 translate-y-0' 
                                        : 'opacity-0 translate-y-20'
                                }`}
                                style={{ transitionDelay: `${index * 200}ms` }}
                            >
                                <div 
                                    className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
                                        feature.imagePosition === "right" ? "lg:flex-row-reverse" : ""
                                    }`}
                                >
                                    {/* Code Box */}
                                    <div className="w-full lg:w-1/2">
                                        <div className={`relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10 
                                            transform transition-all duration-700 hover:scale-[1.02] hover:border-blue-400/30 hover:shadow-blue-500/20
                                            ${isVisible ? 'translate-x-0' : feature.imagePosition === 'left' ? '-translate-x-20' : 'translate-x-20'}`}>
                                            <div className="bg-gradient-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden border border-white/5">
                                                {/* IDE Header */}
                                                <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-white/5 backdrop-blur-sm border-b border-white/10">
                                                    <div className="flex items-center space-x-2">
                                                        <div className="flex items-center space-x-1 sm:space-x-2">
                                                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                                                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                                                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                                                        </div>
                                                        <span className="text-xs sm:text-sm text-gray-300">
                                                            {feature.title}
                                                        </span>
                                                    </div>
                                                    <div className="flex space-x-1">
                                                        <div className="w-1 h-1 rounded-full bg-gray-600"></div>
                                                        <div className="w-1 h-1 rounded-full bg-gray-600"></div>
                                                        <div className="w-1 h-1 rounded-full bg-gray-600"></div>
                                                    </div>
                                                </div>
                                                {/* Code Content */}
                                                <div className="p-0">
                                                    <SyntaxHighlighter
                                                        language="javascript"
                                                        style={nightOwl}
                                                        customStyle={{
                                                            margin: 0,
                                                            padding: "16px",
                                                            fontSize: "12px",
                                                            lineHeight: "1.5",
                                                            backgroundColor: "transparent",
                                                            borderRadius: "0 0 8px 8px",
                                                            height: "auto",
                                                            minHeight: "200px",
                                                            overflow: "auto",
                                                            scrollbarWidth: "none",
                                                            msOverflowStyle: "none",
                                                            "&::-webkit-scrollbar": {
                                                                display: "none",
                                                            },
                                                        }}
                                                        showLineNumbers={true}
                                                        wrapLines={true}
                                                    >
                                                        {feature.codeSnippet}
                                                    </SyntaxHighlighter>
                                                </div>
                                            </div>
                                            
                                            {/* Floating badge */}
                                            <div className={`absolute -top-3 ${feature.imagePosition === 'right' ? '-left-3' : '-right-3'} 
                                                bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-1 rounded-full text-xs font-medium
                                                transform transition-all duration-500 ${isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-90'}`}
                                                style={{ transitionDelay: `${index * 200 + 300}ms` }}>
                                                New
                                            </div>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div className="w-full lg:w-1/2">
                                        <div className={`text-center ${
                                            feature.imagePosition === "right" ? "lg:text-left" : "lg:text-right"
                                        }`}>
                                            <h3 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent
                                                transform transition-all duration-700 ${isVisible ? 'translate-y-0' : 'translate-y-10'}`}>
                                                {feature.title}
                                            </h3>
                                            <p className={`text-gray-400 text-lg mb-6 leading-relaxed transform transition-all duration-700
                                                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                                                style={{ transitionDelay: `${index * 200 + 100}ms` }}>
                                                {feature.description}
                                            </p>
                                            <div className={`flex ${
                                                feature.imagePosition === "right" ? "justify-center lg:justify-start" : "justify-center lg:justify-end"
                                            }`}>
                                                <button className={`px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg font-medium transition-all duration-300 
                                                    hover:scale-105 border border-white/20 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/20
                                                    transform ${isVisible ? 'translate-y-0' : 'translate-y-10'}`}
                                                    style={{ transitionDelay: `${index * 200 + 200}ms` }}>
                                                    Learn More →
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}