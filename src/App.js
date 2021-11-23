import styles from './App.module.css';
import StudentList from './components/StudentList/StudentList';

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.Content}>
        <StudentList />
      </div>
    </div>
  );
}

export default App;
