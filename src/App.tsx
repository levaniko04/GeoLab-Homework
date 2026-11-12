import React, { useState } from 'react';
import { Header, Footer, CodeCanvasBackground } from './components';
import {
  HomePage,
  AboutPage,
  SkillsPage,
  ProjectsPage,
  ContactPage,
} from './pages';
import { navItems } from './data';
import type { PageId } from './types';
import { ThemeProvider } from './ThemeContext';

const AppContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage onNavigate={setCurrentPage} />;
      case 'skills':
        return <SkillsPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative text-slate-800 dark:text-slate-200 transition-colors duration-300">
      {/* ფონის დინამიური ქსელი */}
      <CodeCanvasBackground />

      {/* 1. Header (Dark/Light რეჟიმის ღილაკითა და გვერდების გადამრთველით) */}
      <Header
        navItems={navItems}
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />

      {/* 2. აქტიური დამოუკიდებელი გვერდი */}
      <main className="flex-grow">
        {renderCurrentPage()}
      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
