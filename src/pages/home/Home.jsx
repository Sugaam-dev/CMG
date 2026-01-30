
// import Image from 'next/image';
// export default function Home() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
//       {/* Hero Section */}
//       <section className="px-4 py-16 sm:py-24">
//         <div className="max-w-4xl mx-auto text-center">
//           <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
//             Education does not fail due to <span className="text-[#0066FF]">lack</span> of effort.
//           </h1>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             It fails due to lack of integration, visibility, and decision intelligence.
//           </p>
//         </div>
//       </section>

//       {/* Four Cards Section */}
//       <section className="px-4 py-16">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Schools Card */}
//             <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
//               <div className="relative w-full h-48">
//                 <Image
//                   // src="/images/schools-illustration.jpg"
//                   alt="Schools K-12"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div className="p-6">
//                 <h2 className="text-2xl font-bold text-gray-900 mb-4">
//                   Schools (K-12) <span className="text-orange-500">›</span>
//                 </h2>
//                 <ul className="space-y-2 mb-6">
//                   <li className="text-gray-700">• Outcome ownership</li>
//                   <li className="text-gray-700">• Teacher enablement</li>
//                   <li className="text-gray-700">• Parent trust</li>
//                   <li className="text-gray-700">• Student readiness</li>
//                 </ul>
//                 <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded transition">
//                   Explore Schools ›
//                 </button>
//               </div>
//             </div>

//             {/* Colleges Card */}
//             <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
//               <div className="relative w-full h-48">
//                 <Image
//                   // src="/images/colleges-illustration.jpg"
//                   alt="Colleges & Universities"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div className="p-6">
//                 <h2 className="text-2xl font-bold text-gray-900 mb-4">
//                   Colleges & Universities <span className="text-[#0066FF]">›</span>
//                 </h2>
//                 <ul className="space-y-2 mb-6">
//                   <li className="text-gray-700">• Student intelligence</li>
//                   <li className="text-gray-700">• Accreditation readiness</li>
//                   <li className="text-gray-700">• Governance dashboards</li>
//                   <li className="text-gray-700">• Career outcomes</li>
//                 </ul>
//                 <button className="bg-[#0066FF] hover:bg-blue-700 text-white px-4 py-2 rounded transition">
//                   Explore Universities ›
//                 </button>
//               </div>
//             </div>

//             {/* Students & Parents Card */}
//             <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
//               <div className="relative w-full h-48">
//                 <Image
//                   // src="/images/students-parents-illustration.jpg"
//                   alt="Students & Parents"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div className="p-6">
//                 <h2 className="text-2xl font-bold text-gray-900 mb-4">
//                   Students & Parents <span className="text-teal-500">›</span>
//                 </h2>
//                 <ul className="space-y-2 mb-6">
//                   <li className="text-gray-700">• Clarity & confidence</li>
//                   <li className="text-gray-700">• Psychometric insights</li>
//                   <li className="text-gray-700">• Academic readiness</li>
//                   <li className="text-gray-700">• Visibility without pressure</li>
//                 </ul>
//                 <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded transition">
//                   Explore Schools ›
//                 </button>
//               </div>
//             </div>

//             {/* Teachers & Faculty Card */}
//             <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
//               <div className="relative w-full h-48">
//                 <Image
//                   // src="/images/teachers-faculty-illustration.jpg"
//                   alt="Teachers & Faculty"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div className="p-6">
//                 <h2 className="text-2xl font-bold text-red-700 mb-4">
//                   Teachers & Faculty <span className="text-red-600">›</span>
//                 </h2>
//                 <ul className="space-y-2 mb-6">
//                   <li className="text-gray-700">• Reduced academic load</li>
//                   <li className="text-gray-700">• AI-supported mentoring</li>
//                   <li className="text-gray-700">• Learning gap visibility</li>
//                   <li className="text-gray-700">• Outcome alignment</li>
//                 </ul>
//                 <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition">
//                   Explore Teachers & Faculty ›
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* The Future Section */}
//       <section className="px-4 py-16 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-4xl font-bold text-gray-900 mb-6">THE FUTURE</h2>
//               <p className="text-xl text-gray-700 mb-4 leading-relaxed">
//                 The future of education is systems and decisions, not just coaching.
//               </p>
//               <p className="text-lg text-gray-600 leading-relaxed">
//                 Institutions that own outcomes will lead.
//               </p>
//             </div>
//             <div className="relative w-full h-64 md:h-80">
//               <Image
//                 // src="/images/future-section-illustration.jpg"
//                 alt="The Future of Education"
//                 fill
//                 className="object-cover rounded-lg"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-3xl text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Education does not fail due to{' '}
          <span className="text-accent">lack</span> of effort.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground md:text-xl">
          It fails due to lack of integration, visibility, and decision intelligence.
        </p>
      </div>
    </main>
  )
}
