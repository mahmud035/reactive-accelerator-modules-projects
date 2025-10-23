import MovieList from '../components/Movie/MovieList';
import Sidebar from '../components/Sidebar';

const HomePage = () => {
  return (
    <main>
      <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        <Sidebar />
        <MovieList />
      </div>
    </main>
  );
};

export default HomePage;
