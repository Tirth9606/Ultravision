import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Courses } from './components/Courses';
import { Methodology } from './components/Methodology';
import { Faculty } from './components/Faculty';
import { Achievements } from './components/Achievements';
import { Results } from './components/Results';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

type Page = 'home' | 'courses' | 'results' | 'faculty' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleOpenAdmissionGeneral = () => {
    setCurrentPage('home');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const offset = 80;
        const elementPosition = contactSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 50);
  };

  const handleOpenAdmissionWithCourse = (_courseKey: string) => {
    handleOpenAdmissionGeneral();
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation Header */}
      <Navbar 
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        onOpenAdmission={handleOpenAdmissionGeneral} 
      />

      {/* Main Page Layout Sections */}
      <main style={{ flexGrow: 1 }}>
        {currentPage === 'home' && (
          <>
            {/* 1. Hero banner & statistics */}
            <Hero onOpenAdmission={handleOpenAdmissionGeneral} />
            
            {/* 2. Institute introduction & core vision */}
            <About />

            {/* 3. Why Choose Us benefits grid */}
            <WhyChooseUs />

            {/* 4. Curriculum Courses grid (Preview mode) */}
            <Courses 
              onOpenAdmission={handleOpenAdmissionWithCourse} 
              isPreview={true}
              onViewAll={() => { setCurrentPage('courses'); window.scrollTo(0, 0); }}
            />

            {/* 5. 7-step Teaching cycle timeline */}
            <Methodology />

            {/* 6. Toppers Hall of Fame results (Preview mode) */}
            <Results 
              isPreview={true}
              onViewAll={() => { setCurrentPage('results'); window.scrollTo(0, 0); }}
            />

            {/* 7. Key track record milestones counter */}
            <Achievements />

            {/* 8. Contact Form, locations and details */}
            <Contact />
          </>
        )}

        {currentPage === 'courses' && (
          <Courses 
            onOpenAdmission={handleOpenAdmissionWithCourse} 
            isPreview={false}
          />
        )}

        {currentPage === 'results' && (
          <Results 
            isPreview={false}
          />
        )}

        {currentPage === 'faculty' && (
          <Faculty />
        )}

        {currentPage === 'contact' && (
          <Contact />
        )}
      </main>

      {/* Footers sitemap */}
      <Footer onPageChange={setCurrentPage} />
    </div>
  );
}

export default App;
