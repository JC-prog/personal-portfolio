import Navbar from '@/components/Navbar';

const projects = [
  { id: 'project-1', number: '01', name: 'Auction Platform', description: 'An online auction platform for bidding and selling products in real-time.' },
  { id: 'project-2', number: '02', name: 'Healthcare Dashboard', description: 'A comprehensive dashboard for tracking patient health metrics and history.' },
  { id: 'project-3', number: '03', name: 'Inventory Management', description: 'A streamlined solution for managing product inventory across multiple locations.' },
  { id: 'project-4', number: '04', name: 'Financial Analytics', description: 'A platform to visualize and analyze financial data efficiently.' }
];

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    });
  }
};

const ContentSection = () => {
  return (
    <div className='min-h-screen flex items-center bg-white overflow-hidden relative'>
      <div className='container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start'>
        <div className='space-y-8'>
          <h1 className='text-3xl font-bold mb-6'>Table Of Content</h1>
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => scrollToSection(project.id)}
              className='flex items-start space-x-4 hover:text-orange-500 transition cursor-pointer'
            >
              <span className='text-2xl font-bold text-gray-800'>{project.number}</span>
              <div>
                <h2 className='text-xl font-semibold text-gray-900'>{project.name}</h2>
                <p className='text-gray-600'>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='relative'>
          <img
            src='https://via.placeholder.com/600x600'
            alt='Project Showcase'
            className='w-full h-full object-cover rounded-lg shadow-lg'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg'></div>
        </div>
      </div>
    </div>
  );
};

const ProjectDisplaySection = () => {
  return (
    <div className='container mx-auto px-6 mt-12 space-y-20'>
      {projects.map((project) => (
        <div id={project.id} key={project.id} className='min-h-screen flex flex-col justify-center items-center bg-gray-100 p-10 rounded-lg'>
          <h2 className='text-3xl font-bold mb-4'>{project.name}</h2>
          <p className='text-gray-600 mb-6'>{project.description}</p>
          <img src='https://via.placeholder.com/800x400' alt={project.name} className='w-full h-auto rounded-lg' />
        </div>
      ))}
    </div>
  );
};

const ProjectPage = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <Navbar />
      <ContentSection />
      <ProjectDisplaySection />
    </div>
  );
};

export default ProjectPage;
