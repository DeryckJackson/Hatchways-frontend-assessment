import styles from './App.module.css';
import Search from './components/Search/Search';
import StudentList from './components/StudentList/StudentList';

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.Content}>
        <Search />
        <StudentList />
      </div>
    </div>
  );
}

export default App;
